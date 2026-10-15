import { catalog } from "./data.js";
import { normalise, defaults, details, summary, browserRenderer } from "./photo-render.js";
const $ = (s) => document.querySelector(s);
let state = normalise(Object.fromEntries(new URLSearchParams(location.hash.slice(1)))),
  showDimensions = false,
  zoom = false,
  cabGroup = details(state).cabinet.group,
  renderVersion = 0,
  latestCanvas = null;
function announce(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  clearTimeout(announce.timer);
  announce.timer = setTimeout(() => $("#toast").classList.remove("show"), 3200);
}
function saveURL() {
  try {
    history.replaceState(null, "", "#" + new URLSearchParams(state));
  } catch {}
}
function unavailable(key, id) {
  return state.model === "pinnacle" && key === "worktop" && id === "p14-10";
}
function swatches(target, key, ids) {
  const el = $(target);
  el.replaceChildren();
  for (const id of ids) {
    const f = catalog.finishes.find((x) => x.id === id),
      b = document.createElement("button");
    b.className = "swatch";
    b.style.backgroundImage = `url("${f.image}")`;
    b.setAttribute("aria-label", f.name + " · " + f.group);
    b.setAttribute("aria-pressed", state[key] === id);
    b.dataset.name = f.name;
    b.title = f.name + " · " + f.group;
    if (unavailable(key, id)) {
      b.disabled = true;
      b.title = "Rhino Skin: correct Pinnacle render not supplied by AFA";
    }
    b.onclick = () => {
      state[key] = id;
      update();
    };
    el.append(b);
  }
}
async function refreshImage() {
  const version = ++renderVersion,
    current = { ...state };
  $("#render-loading").hidden = false;
  $("#render").setAttribute("aria-busy", "true");
  $("#render-error").hidden = true;
  try {
    const c = document.createElement("canvas");
    await browserRenderer.draw(c, current, { zoom, dimensions: showDimensions });
    if (version !== renderVersion) return;
    const d = details(current);
    c.setAttribute("role", "img");
    c.setAttribute(
      "aria-label",
      `${d.model.name} with ${d.pod.name} shell, ${d.cabinet.name} cabinets and ${d.worktop.name} worktop. Stainless steel burner panel.`,
    );
    $("#render").replaceChildren(c);
    latestCanvas = c;
    $("#render").dataset.model = current.model;
    $("#render").dataset.ready = "true";
  } catch (e) {
    if (version !== renderVersion) return;
    $("#render-error").hidden = false;
    $("#render").dataset.ready = "false";
    console.error(e);
  } finally {
    if (version === renderVersion) {
      $("#render-loading").hidden = true;
      $("#render").setAttribute("aria-busy", "false");
    }
  }
}
function update() {
  if (unavailable("worktop", state.worktop)) {
    state.worktop = "p14-11";
    announce("Rhino Skin render unavailable for Pinnacle. Tree Bark selected.");
  }
  const d = details(state);
  $("#model-name").textContent = d.model.name;
  $("#model-caption").textContent = d.model.description;
  $("#preview-kind").textContent = d.model.horizon
    ? "HORIZON · FINISH SIMULATION"
    : "LIVE PHOTOREAL PREVIEW";
  $("#preview-note").textContent = d.model.horizon
    ? "Horizon uses your product photograph with simulated finishes. Final colour and texture placement require confirmation."
    : "Original AFA material renders · Stainless-steel burner panel · Screen colours are indicative.";
  for (const k of ["pod", "cabinet", "worktop"]) $("#" + k + "-value").textContent = d[k].name;
  document
    .querySelectorAll(".model")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.model === state.model));
  swatches("#pod-swatches", "pod", catalog.podIds);
  swatches(
    "#cabinet-swatches",
    "cabinet",
    catalog.cabinetIds.filter((id) => catalog.finishes.find((f) => f.id === id).group === cabGroup),
  );
  swatches("#worktop-swatches", "worktop", catalog.worktopIds);
  $("#worktop-note").hidden = state.model !== "pinnacle";
  document
    .querySelectorAll("[data-group]")
    .forEach((b) => b.setAttribute("aria-pressed", b.dataset.group === cabGroup));
  $("#stamps").replaceChildren();
  for (const k of ["pod", "cabinet", "worktop"]) {
    const e = document.createElement("div");
    e.className = "stamp";
    e.style.backgroundImage = `url("${d[k].image}")`;
    e.title = d[k].name;
    $("#stamps").append(e);
  }
  saveURL();
  refreshImage();
}
for (const m of catalog.models) {
  const b = document.createElement("button");
  b.className = "model";
  b.dataset.model = m.id;
  b.innerHTML = `<strong>${m.name}</strong><small>${(m.width / 1000).toFixed(2)} m wide</small>`;
  b.onclick = () => {
    state.model = m.id;
    update();
  };
  $("#models").append(b);
}
// Switching material tabs does not silently change the chosen finish.
document.querySelectorAll("[data-group]").forEach(
  (b) =>
    (b.onclick = () => {
      cabGroup = b.dataset.group;
      update();
    }),
);
$("#dimension-toggle").onclick = () => {
  showDimensions = !showDimensions;
  $("#dimension-toggle").setAttribute("aria-pressed", showDimensions);
  refreshImage();
};
$("#zoom-toggle").onclick = () => {
  zoom = !zoom;
  $("#zoom-toggle").setAttribute("aria-pressed", zoom);
  refreshImage();
};
$("#reset").onclick = () => {
  state = { ...defaults };
  cabGroup = details(state).cabinet.group;
  showDimensions = false;
  zoom = false;
  $("#dimension-toggle").setAttribute("aria-pressed", "false");
  $("#zoom-toggle").setAttribute("aria-pressed", "false");
  update();
  announce("Design reset");
};
$("#retry-render").onclick = () => refreshImage();
$("#copy-link").onclick = async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    announce("Design link copied");
  } catch {
    announce("Copy the address from your browser to share this design.");
  }
};
$("#copy-embed").onclick = async () => {
  const u = new URL("iframe.html", location.href);
  u.hash = "";
  u.search = new URLSearchParams(state).toString();
  const code = `<iframe src="${u.href}" style="width:100%;aspect-ratio:1349/749;border:0" loading="lazy" title="BBQ Pod design"></iframe>`;
  try {
    await navigator.clipboard.writeText(code);
    announce("Iframe code copied");
  } catch {
    announce("Copy failed. Iframe URL: " + u.href);
  }
};
$("#review").onclick = async () => {
  const chosen = { ...state },
    d = details(chosen);
  const lines = [
    ["Model", d.model.name],
    ["Overall width", d.model.width.toLocaleString("en-GB") + " mm"],
    ["Pod colour", d.pod.name],
    ["Cabinets", d.cabinet.name + " · " + d.cabinet.group],
    ["Worktop", d.worktop.name],
    ["Burner panel", "Stainless steel"],
  ];
  $("#summary-lines").replaceChildren();
  for (const [label, value] of lines) {
    const row = document.createElement("div"),
      dt = document.createElement("dt"),
      dd = document.createElement("dd");
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    $("#summary-lines").append(row);
  }
  $("#summary-render").textContent = "Preparing your design…";
  $("#summary").showModal();
  try {
    const c = document.createElement("canvas");
    await browserRenderer.draw(c, chosen);
    if ($("#summary").open) $("#summary-render").replaceChildren(c);
  } catch {
    $("#summary-render").textContent = "Preview unavailable. Your choices are listed below.";
  }
};
for (const id of ["close-summary", "continue"]) $("#" + id).onclick = () => $("#summary").close();
$("#summary").addEventListener("click", (e) => {
  if (e.target === $("#summary")) {
    const r = e.target.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      e.target.close();
  }
});
function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
$("#download").onclick = () => {
  const s = summary(state),
    text = [
      "BBQ POD SPAIN — YOUR CONFIGURATION",
      "",
      ...Object.entries(s).map(
        ([k, v]) => k.replaceAll("_", " ").replace(/^./, (c) => c.toUpperCase()) + ": " + v,
      ),
      "",
      "Reopen this design: " + location.href,
    ].join("\n");
  downloadBlob(
    new Blob([text], { type: "text/plain;charset=utf-8" }),
    "BBQ-Pod-" + state.model + "-configuration.txt",
  );
  announce("Configuration downloaded");
};
$("#save-image").onclick = async () => {
  try {
    const c = document.createElement("canvas"),
      chosen = { ...state };
    await browserRenderer.draw(c, chosen);
    c.toBlob((blob) => {
      if (blob) {
        downloadBlob(blob, "BBQ-Pod-" + chosen.model + ".png");
        announce("Design image saved");
      }
    });
  } catch {
    announce("Image could not be saved. Please retry.");
  }
};
window.addEventListener("hashchange", () => {
  state = normalise(Object.fromEntries(new URLSearchParams(location.hash.slice(1))));
  cabGroup = details(state).cabinet.group;
  update();
});
update();
