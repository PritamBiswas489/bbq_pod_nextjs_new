// src/utils/delivery.js
// Shared by the browser (display) and the API routes (source of truth).

export const FREE_MINUTES = 4 * 60; // up to 4h00m is free
export const RATE_PER_HOUR = 100; // € per additional started hour

// Balearic Islands (Mallorca, Menorca, Ibiza, Formentera): fixed charge,
// driving time is NOT used for the price.
export const BALEARIC_CHARGE = 1500;

// Bounding box that contains only the Balearic archipelago.
// (Mainland Spain's coast at these latitudes never reaches east of ~0.4°E.)
export function isBalearic(lat, lng) {
  return lat >= 38.5 && lat <= 40.2 && lng >= 1.0 && lng <= 4.5;
}

// totalMinutes = one-way driving time, rounded to whole minutes
export function calcDeliveryCharge(totalMinutes) {
  const extra = totalMinutes - FREE_MINUTES;
  if (extra <= 0) return 0;
  return Math.ceil(extra / 60) * RATE_PER_HOUR;
}

export function formatDuration(totalMinutes) {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

// Quick sanity checks (run in node if you like):
// 230 -> 0 | 240 -> 0 | 241 -> 100 | 285 -> 100 | 301 -> 200 | 380 -> 300