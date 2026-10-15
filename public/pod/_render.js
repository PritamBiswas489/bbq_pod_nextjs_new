import { catalog } from "./data.js";
export const defaults = { model: "prime", pod: "p13-14", cabinet: "p14-1", worktop: "p14-11" };
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
    status: "Exploratory prototype. Availability and production layout require confirmation.",
    palette_source: "Saved BBQ Pod Spain catalogue; current AFA configurator not verified.",
  };
}
export function renderPod(state, { dimensions = false, prefix = "pod" } = {}) {
  const d = details(state),
    m = d.model,
    W = m.width / 5.6,
    L = 500 - W / 2,
    R = 500 + W / 2,
    Y = 190,
    H = 365,
    B = Y + H,
    front = 430;
  const id = (n) => prefix + "-" + n,
    url = (n) => "url(#" + id(n) + ")";
  const rect = (x, y, w, h, fill, extra = "") =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" ${extra}/>`;
  const path = (points, fill, extra = "") => `<path d="${points}" fill="${fill}" ${extra}/>`;
  const line = (x, y, x2, y2, stroke, width = 1) =>
    `<path d="M${x} ${y}L${x2} ${y2}" fill="none" stroke="${stroke}" stroke-width="${width}"/>`;
  const textured = d.cabinet.group === "Transfer printing";
  const cab = textured ? url("cabinet") : d.cabinet.hex;
  const panel = (x, y, w, h) =>
    rect(x, y, w, h, cab) +
    rect(x, y, w, h, url("shade")) +
    line(x + 1, y + 1, x + w - 1, y + 1, "#ffffff35") +
    line(x, y + h, x + w, y + h, "#00000060");
  const grillW = m.grill === 46 ? 188 : m.grill === 36 ? 160 : 132;
  const gx = L + W * 0.27,
    gy = front - 54;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 60 1000 565" aria-label="${m.name} in ${d.pod.name} with ${d.cabinet.name} cabinets and ${d.worktop.name} worktop"><defs>
 <linearGradient id="${id("metal")}" x1="0" y1="0" x2=".15" y2="1"><stop stop-color="#9da4a7"/><stop offset=".22" stop-color="#e9eeee"/><stop offset=".45" stop-color="#bcc4c6"/><stop offset=".7" stop-color="#e0e5e4"/><stop offset="1" stop-color="#969ea1"/></linearGradient>
 <linearGradient id="${id("shade")}" x2="1" y2=".8"><stop stop-color="#ffffff20"/><stop offset=".45" stop-color="#ffffff00"/><stop offset="1" stop-color="#00000030"/></linearGradient>
 <linearGradient id="${id("back")}" x2="0" y2="1"><stop stop-color="#00000065"/><stop offset="1" stop-color="#00000008"/></linearGradient>
 <linearGradient id="${id("glass")}" x2="1" y2="1"><stop stop-color="#151e21"/><stop offset=".5" stop-color="#344046"/><stop offset="1" stop-color="#111719"/></linearGradient>
 <radialGradient id="${id("shadow")}"><stop stop-color="#3a4035" stop-opacity=".24"/><stop offset="1" stop-color="#3a4035" stop-opacity="0"/></radialGradient>
 <pattern id="${id("cabinet")}" width="80" height="160" patternUnits="userSpaceOnUse"><svg width="80" height="160" viewBox="115 80 155 225" preserveAspectRatio="none"><image width="387" height="387" href="${d.cabinet.image}"/></svg></pattern>
 <pattern id="${id("worktop")}" width="220" height="110" patternUnits="userSpaceOnUse"><svg width="220" height="110" viewBox="130 130 170 170" preserveAspectRatio="none"><image width="${d.worktop.group === "Stainless steel" ? 411 : 488}" height="${d.worktop.group === "Stainless steel" ? 411 : 488}" href="${d.worktop.image}"/></svg></pattern></defs>
 <ellipse cx="500" cy="571" rx="${W * 0.7}" ry="36" fill="${url("shadow")}"/>`;
  // Shell and the slim return on the right give the illustration depth.
  svg +=
    path(`M${R} ${Y - 3}l24 -16V${B - 9}l-24 18Z`, d.pod.hex) +
    path(`M${R} ${Y - 3}l24 -16V${B - 9}l-24 18Z`, "#00000035");
  svg += rect(L, Y, W, H, d.pod.hex) + rect(L + 16, Y + 14, W - 32, H - 28, url("back"));
  if (m.horizon) {
    svg +=
      rect(L + 16, Y + 14, W - 32, 193, d.pod.hex) + rect(L + 16, Y + 14, W - 32, 193, url("back"));
    svg += line(L + 16, 398, R - 16, 398, "#151a1760", 6);
  }
  // Stainless countertop and independent cabinet zones.
  svg +=
    path(`M${L + 18} ${front}l18 -23H${R - 4}l-14 23Z`, url("worktop")) +
    rect(L + 18, front, W - 36, 8, url("worktop")) +
    rect(L + 18, front + 8, W - 36, 3, "#0006");
  const fridgeW = 65,
    fx = R - 21 - fridgeW,
    baseY = front + 13,
    baseH = B - baseY - 18;
  const leftW = gx - L - 23;
  svg += panel(L + 21, baseY, leftW, 27) + panel(L + 21, baseY + 32, leftW, baseH - 32);
  svg += panel(gx, baseY + 30, grillW, 35) + panel(gx, baseY + 70, grillW, baseH - 70);
  const rightX = gx + grillW + 5,
    rightW = fx - rightX - 5;
  if (rightW > 10) {
    svg += panel(rightX, baseY, rightW, baseH);
    if (m.id === "apex" || m.id === "pinnacle") {
      const cx = rightX + rightW / 2;
      svg +=
        rect(rightX, baseY, rightW, 4, url("worktop")) +
        `<ellipse cx="${cx}" cy="${front - 22}" rx="${Math.min(33, rightW / 2 - 2)}" ry="38" fill="#28352a" stroke="#15221a" stroke-width="2"/>` +
        line(cx - 22, front - 23, cx + 22, front - 23, "#0e1b13", 3) +
        rect(cx - 6, front - 62, 12, 6, "#262d26") +
        rect(cx - 19, front - 26, 38, 4, url("metal"));
    }
  }
  svg +=
    rect(fx, baseY, fridgeW, baseH, url("metal")) +
    rect(fx + 5, baseY + 5, fridgeW - 10, baseH - 21, url("glass"));
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let x = fx + 10 + col * 12,
        y = baseY + 10 + row * 19;
      svg +=
        rect(x, y, 7, 14, ["#b7bfa9", "#a48b70", "#8b9697", "#bdb9a9"][row], 'rx="2"') +
        rect(x, y + 5, 7, 6, "#e1dfd4aa");
    }
    svg += line(
      fx + 5,
      baseY + 26 + row * 19,
      fx + fridgeW - 5,
      baseY + 26 + row * 19,
      "#8a9698",
      1,
    );
  }
  svg += line(fx + 4, baseY + 13, fx + 4, baseY + 60, "#eff3f0", 2);
  for (let i = 0; i < 3; i++)
    svg += line(fx + 12, B - 25 + i * 3, fx + fridgeW - 10, B - 25 + i * 3, "#525e63", 1);
  // Grill fascia is deliberately independent of all customer finish choices.
  svg += path(
    `M${gx + 4} ${gy + 44}l8 -47h${grillW - 24}l8 47Z`,
    url("metal"),
    'stroke="#899497" stroke-width="1"',
  );
  svg +=
    rect(gx + 24, gy + 6, grillW - 48, 18, url("glass"), 'rx="2"') +
    `<circle cx="${gx + grillW / 2}" cy="${gy + 15}" r="5" fill="#c1c7c5" stroke="#4f5b60"/>` +
    line(gx + 15, gy + 33, gx + grillW - 15, gy + 33, "#747f83", 5) +
    line(gx + 15, gy + 32, gx + grillW - 15, gy + 32, "#e9ece9", 3);
  svg +=
    rect(gx, front + 9, grillW, 30, url("metal"), 'data-material="stainless-steel"') +
    line(gx, front + 40, gx + grillW, front + 40, "#434e52", 2);
  const knobs = m.grill === 46 ? 6 : m.grill === 36 ? 5 : 4;
  for (let i = 0; i < knobs; i++) {
    const x = gx + 15 + (i * (grillW - 30)) / (knobs - 1);
    svg += `<circle cx="${x}" cy="${front + 23}" r="6" fill="${url("metal")}" stroke="#829096"/><path d="M${x} ${front + 18}v3" stroke="#626d70"/>`;
  }
  const sx = L + 25;
  svg +=
    path(`M${sx} ${front - 4}l8 -10h${Math.max(20, leftW - 20)}l-6 10Z`, "#525e5f") +
    path(`M${sx + 7} ${front - 6}l5 -5h${Math.max(14, leftW - 29)}l-3 5Z`, "#151f22");
  svg +=
    path(
      `M${sx + 18} ${front - 9}v-34q0 -12 8 -12t8 12v6`,
      "none",
      'stroke="#858f91" stroke-width="5"',
    ) +
    path(
      `M${sx + 17} ${front - 9}v-34q0 -12 8 -12t8 12v6`,
      "none",
      'stroke="#ecf0eb" stroke-width="2"',
    );
  if (!m.horizon) {
    const cx = gx + grillW / 2;
    svg +=
      rect(cx - 13, Y + 12, 26, 78, url("metal")) +
      path(`M${cx - 13} ${Y + 85}l-38 29h102l-38 -29Z`, url("metal")) +
      rect(cx - 51, Y + 114, 102, 4, "#8d9899");
    if (m.id !== "core") {
      svg += panel(L + 27, Y + 30, Math.max(50, leftW - 5), 59);
      svg += line(
        L + 27 + Math.max(50, leftW - 5) / 2,
        Y + 30,
        L + 27 + Math.max(50, leftW - 5) / 2,
        Y + 89,
        "#0006",
      );
    }
  }
  if (m.id !== "core" && m.id !== "horizon220") {
    svg +=
      rect(R - 111, Y + 32, 83, 50, "#676e67") +
      rect(R - 109, Y + 34, 79, 46, "#263b36") +
      path(`M${R - 109} ${Y + 70}q25 -39 45 -17t34 -5v32h-79Z`, "#8a9b7b") +
      path(`M${R - 109} ${Y + 75}q24 -22 46 -7t33 -3v15h-79Z`, "#c0bb97");
  }
  if (m.id === "core") {
    svg += rect(L + 32, Y + 74, 54, 4, "#111b1766") + rect(L + 32, Y + 117, 54, 4, "#111b1766");
    for (let j = 0; j < 3; j++) svg += rect(L + 37 + j * 13, Y + 101, 7, 16, "#a39f81");
  }
  // Lift-up canopy; Horizon uses a broader hinged lid behind the kitchen.
  const canopyFront = m.horizon ? Y - 50 : Y - 75;
  svg +=
    path(`M${L - 55} ${canopyFront}H${R + 62}L${R - 6} ${Y + 9}H${L + 6}Z`, d.pod.hex) +
    path(`M${L - 55} ${canopyFront}H${R + 62}L${R - 6} ${Y + 9}H${L + 6}Z`, url("back"));
  svg +=
    path(`M${L - 55} ${canopyFront - 7}H${R + 62}v9H${L - 55}Z`, d.pod.hex) +
    line(L - 55, canopyFront - 7, R + 62, canopyFront - 7, "#ffffff60", 1.5);
  svg += path(
    `M${L - 36} ${canopyFront + 13}H${R + 42}L${R - 13} ${Y - 1}H${L + 13}Z`,
    "none",
    'stroke="#e8e1c5" stroke-width="2" opacity=".75"',
  );
  svg +=
    rect(L, Y + 8, 13, H - 1, d.pod.hex) +
    rect(R - 13, Y + 8, 13, H - 1, d.pod.hex) +
    rect(L, Y + 8, 13, H - 1, url("shade")) +
    rect(R - 13, Y + 8, 13, H - 1, url("shade"));
  svg +=
    line(L + 17, Y + 14, L + 23, Y + 100, "#79807c", 3) +
    line(R - 17, Y + 14, R - 23, Y + 100, "#79807c", 3) +
    line(L + 17, Y + 58, L + 23, Y + 105, "#222a25", 5) +
    line(R - 17, Y + 58, R - 23, Y + 105, "#222a25", 5);
  svg +=
    rect(L + 15, B - 14, W - 30, 7, d.pod.hex) +
    line(L + 21, B - 16, R - 21, B - 16, "#fff5cf", 2) +
    rect(L + 5, B + 7, 22, 4, "#3b4139") +
    rect(R - 27, B + 7, 22, 4, "#3b4139");
  if (dimensions)
    svg +=
      line(L, B + 32, R, B + 32, "#6a7761") +
      line(L, B + 26, L, B + 38, "#6a7761") +
      line(R, B + 26, R, B + 38, "#6a7761") +
      `<text x="500" y="${B + 51}" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="#57634f">${m.width.toLocaleString("en-GB")} mm · overall width</text>`;
  return svg + "</svg>";
}
