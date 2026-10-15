import { catalog } from "./data.js";
import { scenes } from "./scenes.js";
import { afaLayers } from "./afa-layers.js";
export const defaults = { model: "prime", pod: "p13-1", cabinet: "p13-0", worktop: "p14-6" };
export function normalise(input = {}) {
  const s = { ...defaults };
  if (catalog.models.some((m) => m.id === input.model)) s.model = input.model;
  for (const k of ["pod", "cabinet", "worktop"])
    if (catalog[k + "Ids"].includes(input[k])) s[k] = input[k];
  return s;
}
export function details(state) {
  const s = normalise(state),
    find = (id) => catalog.finishes.find((f) => f.id === id);
  return {
    model: catalog.models.find((m) => m.id === s.model),
    pod: find(s.pod),
    cabinet: find(s.cabinet),
    worktop: find(s.worktop),
  };
}
export function summary(state) {
  const d = details(state);
  return {
    model: d.model.name,
    width_mm: d.model.width,
    pod_colour: d.pod.name,
    cabinet_finish: d.cabinet.name,
    cabinet_process: d.cabinet.group,
    worktop: d.worktop.name,
    worktop_material: d.worktop.group,
    burner_panel: "Stainless steel",
    status:
      "Visual configuration. Confirm finish availability and final specification before ordering.",
    palette_source: "AFA finish samples supplied by BBQ Pod Spain.",
  };
}
const clamp = (v, a = 0, b = 255) => Math.max(a, Math.min(b, v));
const luma = (r, g, b) => r * 0.2126 + g * 0.7152 + b * 0.0722;
// The same production compositor is tested via injected Canvas dependencies.
export function createRenderer({ makeCanvas, loadImage }) {
  const cache = new Map(),
    textures = new Map(),
    nativeImages = new Map();
  const getImage = (src) => {
    let p = nativeImages.get(src);
    if (p) nativeImages.delete(src);
    else {
      p = loadImage(src);
      p.catch(() => nativeImages.delete(src));
    }
    nativeImages.set(src, p);
    while (nativeImages.size > 24) nativeImages.delete(nativeImages.keys().next().value);
    return p;
  };
  const context = (c) => c.getContext("2d", { willReadFrequently: true });
  async function texture(f) {
    if (textures.has(f.id)) return textures.get(f.id);
    const promise = (async () => {
      const im = await loadImage(f.image),
        c = makeCanvas(100, 100),
        ctx = context(c);
      ctx.drawImage(im, 0, 0, 100, 100);
      const pixels = ctx.getImageData(0, 0, 100, 100).data;
      let average = [0, 0, 0],
        n = 0;
      for (let y = 25; y < 75; y++)
        for (let x = 25; x < 75; x++) {
          let i = (y * 100 + x) * 4;
          for (let k = 0; k < 3; k++) average[k] += pixels[i + k];
          n++;
        }
      return { pixels, average: average.map((x) => x / n) };
    })();
    textures.set(f.id, promise);
    return promise;
  }
  function paintPolygon(ctx, points, colour) {
    ctx.fillStyle = colour;
    ctx.beginPath();
    points.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    ctx.closePath();
    ctx.fill();
  }
  async function prepare(model) {
    if (cache.has(model)) return cache.get(model);
    const promise = (async () => {
      const scene = scenes[model],
        width = 1349,
        height = Math.round((width * scene.height) / scene.width),
        scale = width / scene.width;
      const photo = await loadImage(scene.image),
        base = makeCanvas(width, height),
        ctx = context(base);
      ctx.drawImage(photo, 0, 0, width, height);
      const raw = ctx.getImageData(0, 0, width, height);
      const layers = {};
      for (const k of ["pod", "cabinet"])
        if (scene[k + "Layer"]) {
          const im = await loadImage(scene[k + "Layer"]),
            c = makeCanvas(width, height),
            x = context(c);
          x.drawImage(im, 0, 0, width, height);
          layers[k] = x.getImageData(0, 0, width, height).data;
        }
      let smooth = raw.data;
      if (scene.woodBase) {
        const c = makeCanvas(width, height),
          x = context(c);
        x.filter = "blur(3px)";
        x.drawImage(base, 0, 0);
        smooth = x.getImageData(0, 0, width, height).data;
      }
      const regions = {};
      for (const k of ["pod", "cabinet", "worktop", "steel"]) {
        const c = makeCanvas(width, height),
          x = context(c);
        x.scale(scale, scale);
        for (const area of scene[k] || [])
          paintPolygon(x, area.points, `rgb(${area.reference},0,0)`);
        x.globalCompositeOperation = "destination-out";
        for (const points of scene[k + "Exclude"] || []) paintPolygon(x, points, "#000");
        const mask = x.getImageData(0, 0, width, height).data,
          indices = [],
          alphas = [],
          shades = [];
        for (let i = 0; i < mask.length; i += 4) {
          if (!mask[i + 3]) continue;
          let alpha = mask[i + 3] / 255;
          if (layers[k]) alpha *= layers[k][i + 3] / 255;
          if (alpha < 0.02) continue;
          const r0 = raw.data[i],
            g0 = raw.data[i + 1],
            b0 = raw.data[i + 2],
            lum0 = luma(r0, g0, b0),
            chroma = Math.max(r0, g0, b0) - Math.min(r0, g0, b0);
          if (k === "pod" && (chroma > Math.max(50, lum0 * 0.45) || lum0 > mask[i] * 2.65))
            continue;
          if (k === "worktop" && (chroma > Math.max(24, lum0 * 0.22) || lum0 < mask[i] * 0.22))
            continue;
          if (k === "cabinet" && lum0 < mask[i] * 0.22) continue;
          if (k === "steel") {
            const r = raw.data[i],
              g = raw.data[i + 1],
              b = raw.data[i + 2];
            if (r > g * 1.2 && r > b * 1.6) {
              const v = clamp(luma(r, g, b) + 48, 80, 230);
              raw.data[i] = r + (v - r) * alpha;
              raw.data[i + 1] = g + (v + 2 - g) * alpha;
              raw.data[i + 2] = b + (v + 4 - b) * alpha;
            }
            continue;
          }
          let lum = luma(raw.data[i], raw.data[i + 1], raw.data[i + 2]);
          if (scene.woodBase && k === "cabinet")
            lum = luma(smooth[i], smooth[i + 1], smooth[i + 2]) * 0.82 + lum * 0.18;
          const ref = Math.max(mask[i], 20);
          indices.push(i);
          alphas.push(alpha);
          shades.push(clamp(Math.pow(lum / ref, 0.85), 0.06, 1.45));
        }
        regions[k] = {
          indices: Uint32Array.from(indices),
          alphas: Float32Array.from(alphas),
          shades: Float32Array.from(shades),
        };
      }
      return { scene, width, height, scale, raw, regions };
    })();
    cache.set(model, promise);
    promise.catch(() => cache.delete(model));
    return promise;
  }
  async function draw(canvas, state, { zoom = false, dimensions = false } = {}) {
    const valid = normalise(state),
      d = details(valid);
    if (afaLayers[valid.model]) return drawNative(canvas, valid, { zoom, dimensions });
    const p = await prepare(valid.model),
      swatches = await Promise.all(["pod", "cabinet", "worktop"].map((k) => texture(d[k])));
    const target = makeCanvas(p.width, p.height),
      ctx = context(target),
      out = ctx.createImageData(p.width, p.height);
    out.data.set(p.raw.data);
    ["pod", "cabinet", "worktop"].forEach((key, index) => {
      const region = p.regions[key],
        f = d[key],
        t = swatches[index],
        pattern = f.group === "Transfer printing" || key === "worktop";
      for (let n = 0; n < region.indices.length; n++) {
        const i = region.indices[n],
          pixel = i / 4,
          x = pixel % p.width,
          y = Math.floor(pixel / p.width);
        let colour = t.average;
        if (pattern) {
          const repeat = key === "worktop" ? 250 : 145,
            u = Math.floor((((x / p.scale) % repeat) / repeat) * 100),
            v = Math.floor(
              (((y / p.scale) % (key === "worktop" ? 75 : 350)) / (key === "worktop" ? 75 : 350)) *
                100,
            ),
            ti = (v * 100 + u) * 4;
          colour = [t.pixels[ti], t.pixels[ti + 1], t.pixels[ti + 2]];
        }
        let shade = region.shades[n];
        const alpha = region.alphas[n];
        if (p.scene.woodBase && key === "cabinet" && !pattern) shade = 1 + (shade - 1) * 0.12;
        for (let channel = 0; channel < 3; channel++) {
          const diffuse = colour[channel] * Math.min(shade, 1.18),
            highlight = Math.max(0, shade - 1.18) * 85;
          let value = clamp(diffuse + highlight);
          out.data[i + channel] = out.data[i + channel] * (1 - alpha) + value * alpha;
        }
      }
    });
    ctx.putImageData(out, 0, 0);
    canvas.width = p.width;
    canvas.height = p.height;
    const final = context(canvas);
    if (zoom) {
      const [x, y, w, h] = p.scene.crop,
        ratio = p.width / p.height;
      let cw = w,
        ch = h;
      if (cw / ch < ratio) cw = ch * ratio;
      else ch = cw / ratio;
      let cx = clamp(x - (cw - w) / 2, 0, p.scene.width - cw),
        cy = clamp(y - (ch - h) / 2, 0, p.scene.height - ch);
      final.drawImage(
        target,
        cx * p.scale,
        cy * p.scale,
        cw * p.scale,
        ch * p.scale,
        0,
        0,
        p.width,
        p.height,
      );
    } else final.drawImage(target, 0, 0);
    if (dimensions) {
      const text = d.model.width.toLocaleString("en-GB") + " mm overall width";
      final.font = "22px Arial";
      const tw = final.measureText(text).width;
      final.fillStyle = "rgba(20,29,24,.86)";
      final.fillRect((p.width - tw) / 2 - 28, p.height - 66, tw + 56, 46);
      final.fillStyle = "#fff";
      final.textAlign = "center";
      final.fillText(text, p.width / 2, p.height - 36);
    }
    return { width: p.width, height: p.height, model: valid.model };
  }

  async function drawNative(canvas, state, { zoom = false, dimensions = false } = {}) {
    const a = afaLayers[state.model],
      scene = scenes[state.model],
      d = details(state),
      images = await Promise.all(
        [a.base, a.pod[state.pod], a.cabinet[state.cabinet], a.worktop[state.worktop]].map(
          getImage,
        ),
      );
    const temp = makeCanvas(1349, 749),
      ctx = context(temp);
    for (const im of images) ctx.drawImage(im, 0, 0);
    // Restrict the stainless treatment to the photographed grill fascia.
    const mask = makeCanvas(1349, 749),
      mx = context(mask);
    for (const area of scene.steel) paintPolygon(mx, area.points, "#fff");
    const md = mx.getImageData(0, 0, 1349, 749).data,
      im = ctx.getImageData(0, 0, 1349, 749),
      px = im.data;
    for (let i = 0; i < px.length; i += 4) {
      if (!md[i + 3]) continue;
      const r = px[i],
        g = px[i + 1],
        b = px[i + 2];
      const strength =
        (clamp(Math.min((r - g - 10) / 25, (r - b - 20) / 40), 0, 1) * md[i + 3]) / 255;
      if (strength <= 0) continue;
      const v = clamp(luma(r, g, b) + 48, 80, 233);
      px[i] = r + (v - r) * strength;
      px[i + 1] = g + (v + 2 - g) * strength;
      px[i + 2] = b + (v + 4 - b) * strength;
    }
    ctx.putImageData(im, 0, 0);
    canvas.width = 1349;
    canvas.height = 749;
    const c = context(canvas);
    if (zoom) {
      let [x, y, w, h] = scene.crop;
      const ratio = 1349 / 749;
      if (w / h < ratio) {
        x -= (h * ratio - w) / 2;
        w = h * ratio;
      } else {
        y -= (w / ratio - h) / 2;
        h = w / ratio;
      }
      x = clamp(x, 0, 1349 - w);
      y = clamp(y, 0, 749 - h);
      c.drawImage(temp, x, y, w, h, 0, 0, 1349, 749);
    } else c.drawImage(temp, 0, 0);
    if (dimensions) {
      const text = d.model.width.toLocaleString("en-GB") + " mm overall width";
      c.font = "22px Arial";
      const tw = c.measureText(text).width;
      c.fillStyle = "rgba(20,29,24,.86)";
      c.fillRect((1349 - tw) / 2 - 28, 683, tw + 56, 46);
      c.fillStyle = "#fff";
      c.textAlign = "center";
      c.fillText(text, 674.5, 713);
    }
    return { width: 1349, height: 749, model: state.model, source: "AFA render layers" };
  }
  return { draw, prepare };
}
export const browserRenderer =
  typeof document === "undefined"
    ? null
    : createRenderer({
        makeCanvas: (w, h) => {
          const c = document.createElement("canvas");
          c.width = w;
          c.height = h;
          return c;
        },
        loadImage: (src) =>
          new Promise((resolve, reject) => {
            const i = new Image();
            i.onload = () => resolve(i);
            i.onerror = () => reject(new Error("Unable to load " + src));
            i.src = src;
          }),
      });
