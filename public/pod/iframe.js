// Canvas-only embed. Design properties come from the URL:
//   iframe.html?model=apex&pod=p13-14&cabinet=p14-4&worktop=p14-8
// Optional: &dimensions=1  &zoom=1  &bg=ffffff (hex, no #) or bg=transparent
// Live updates from the parent page:
//   iframe.contentWindow.postMessage({ type: "bbq-pod:update", state: { model: "core" } }, "*")
import { normalise, details, browserRenderer } from "./photo-render.js";
const $ = (s) => document.querySelector(s);
const q = new URLSearchParams(location.search);
const h = new URLSearchParams(location.hash.slice(1)); // fallback: same format as index.html share links
const read = (k) => q.get(k) ?? h.get(k);
const flag = (k) => ["1", "true", "yes"].includes((read(k) || "").toLowerCase());
const fromParams = () => Object.fromEntries(["model", "pod", "cabinet", "worktop"].map((k) => [k, read(k)]));

let state = normalise(fromParams()),
  options = { dimensions: flag("dimensions"), zoom: flag("zoom") },
  version = 0;

const bg = read("bg");
if (bg && /^[0-9a-f]{3,8}$/i.test(bg)) document.documentElement.style.setProperty("--stage-bg", "#" + bg);

function fix() {
  // Pinnacle has no Rhino Skin render (same rule as index.html)
  if (state.model === "pinnacle" && state.worktop === "p14-10") state.worktop = "p14-11";
}
async function draw() {
  fix();
  const v = ++version,
    current = { ...state };
  $("#render-loading").hidden = false;
  $("#render-error").hidden = true;
  $("#render").setAttribute("aria-busy", "true");
  try {
    const c = document.createElement("canvas");
    await browserRenderer.draw(c, current, { ...options });
    if (v !== version) return;
    const d = details(current);
    c.setAttribute("role", "img");
    c.setAttribute(
      "aria-label",
      `${d.model.name} with ${d.pod.name} shell, ${d.cabinet.name} cabinets and ${d.worktop.name} worktop.`,
    );
    $("#render").replaceChildren(c);
    $("#render").dataset.ready = "true";
    parent !== window &&
      parent.postMessage({ type: "bbq-pod:ready", state: current, options }, "*");
  } catch (e) {
    if (v !== version) return;
    $("#render-error").hidden = false;
    $("#render").dataset.ready = "false";
    console.error(e);
  } finally {
    if (v === version) {
      $("#render-loading").hidden = true;
      $("#render").setAttribute("aria-busy", "false");
    }
  }
}
$("#retry-render").onclick = draw;

// Parent -> iframe live updates (no reload needed)
window.addEventListener("message", (e) => {
  const m = e.data;
  if (!m || m.type !== "bbq-pod:update") return;
  if (m.state) state = normalise({ ...state, ...m.state });
  if (m.options) options = { ...options, ...m.options };
  draw();
});
// URL changed via hash/back-forward
window.addEventListener("hashchange", () => {
  state = normalise(fromParams());
  draw();
});
draw();
