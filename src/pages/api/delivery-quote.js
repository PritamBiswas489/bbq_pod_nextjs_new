// src/pages/api/delivery-quote.js
import {
  calcDeliveryCharge,
  formatDuration,
  isBalearic,
  BALEARIC_CHARGE,
} from "@/utils/delivery";

const ORIGIN = "C. Doña Carmen, 15, 29130 Alhaurín de la Torre, Málaga, Spain";

// Reusable so /api/send-order-email can re-verify the charge before sending.
export async function getDeliveryQuote(lat, lng) {
  // Balearic Islands: fixed price, skip the driving-time calculation
  if (isBalearic(lat, lng)) {
    return {
      zone: "balearic",
      drivingMinutes: null,
      drivingTimeText: null,
      distanceKm: null,
      deliveryCharge: BALEARIC_CHARGE,
    };
  }

  const r = await fetch(
    "https://routes.googleapis.com/directions/v2:computeRoutes",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_MAPS_SERVER_KEY,
        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters",
      },
      body: JSON.stringify({
        origin: { address: ORIGIN },
        destination: { location: { latLng: { latitude: lat, longitude: lng } } },
        travelMode: "DRIVE",
        // "normal" driving time: no live/predicted traffic
        routingPreference: "TRAFFIC_UNAWARE",
        units: "METRIC",
      }),
    },
  );
  const data = await r.json();

  // Google returned an error (bad/missing key, API not enabled, restriction...)
  if (!r.ok) {
    console.error(
      "Routes API error:",
      r.status,
      JSON.stringify(data.error || data),
    );
    throw new Error(data.error?.message || `Routes API HTTP ${r.status}`);
  }

  const route = data.routes?.[0];
  if (!route) {
    console.error("Routes API returned no route for", lat, lng, JSON.stringify(data));
    return null; // genuinely no drivable route
  }

  const seconds = parseInt(route.duration, 10); // e.g. "14523s"
  const minutes = Math.round(seconds / 60);
  return {
    zone: "mainland",
    drivingMinutes: minutes,
    drivingTimeText: formatDuration(minutes),
    distanceKm: Math.round((route.distanceMeters || 0) / 1000),
    deliveryCharge: calcDeliveryCharge(minutes),
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { lat, lng } = req.body || {};
  if (typeof lat !== "number" || typeof lng !== "number") {
    return res.status(400).json({ error: "invalid_location" });
  }
  try {
    const quote = await getDeliveryQuote(lat, lng);
    if (!quote) return res.status(422).json({ error: "no_route" });
    return res.status(200).json(quote);
  } catch (e) {
    console.error("delivery-quote failed:", e);
    return res.status(500).json({ error: "server_error" });
  }
}