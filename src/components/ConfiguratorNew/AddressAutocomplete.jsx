// Place next to StepReview.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
// Countries the autocomplete may suggest. Adjust to where you deliver.
const REGIONS = ["es", "pt", "gi", "ad"];

let mapsPromise;

// Resolves once google.maps.importLibrary exists (or rejects after 10s).
function waitForImportLibrary() {
  return new Promise((resolve, reject) => {
    const t0 = Date.now();
    const check = () => {
      if (typeof window.google?.maps?.importLibrary === "function") {
        resolve();
      } else if (Date.now() - t0 > 10000) {
        reject(
          new Error(
            "google.maps.importLibrary is unavailable. Check the API key / another Google Maps <script> on the page.",
          ),
        );
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  });
}

function loadPlacesLibrary() {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (!KEY) {
    return Promise.reject(
      new Error("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing. Add it to .env.local and restart."),
    );
  }
  if (!mapsPromise) {
    mapsPromise = new Promise((resolve, reject) => {
      if (typeof window.google?.maps?.importLibrary === "function") {
        return resolve();
      }
      // Reuse a Maps script that's already on the page instead of adding a second one
      const existing = document.querySelector(
        'script[src*="maps.googleapis.com/maps/api/js"]',
      );
      if (existing) return resolve();

      const s = document.createElement("script");
      s.src = `https://maps.googleapis.com/maps/api/js?key=${KEY}&loading=async&v=weekly`;
      s.async = true;
      s.onload = resolve;
      s.onerror = () => reject(new Error("Google Maps script failed to load"));
      document.head.appendChild(s);
    })
      .then(waitForImportLibrary)
      .then(() => window.google.maps.importLibrary("places"))
      .catch((err) => {
        mapsPromise = null; // allow a retry
        throw err;
      });
  }
  return mapsPromise;
}

const pick = (components, type) =>
  components.find((c) => c.types.includes(type))?.longText || "";

function parsePlace(place) {
  const comps = place.addressComponents || [];
  const route = pick(comps, "route");
  const number = pick(comps, "street_number");
  return {
    placeId: place.id,
    fullAddress: place.formattedAddress,
    lat: place.location.lat(),
    lng: place.location.lng(),
    street: [route, number].filter(Boolean).join(" "),
    city: pick(comps, "locality") || pick(comps, "postal_town"),
    postcode: pick(comps, "postal_code"),
    province:
      pick(comps, "administrative_area_level_2") ||
      pick(comps, "administrative_area_level_1"),
  };
}

const AddressAutocomplete = ({ id, placeholder, onSelect, onEdit, invalid }) => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const lib = useRef(null);
  const token = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    loadPlacesLibrary()
      .then((l) => {
        lib.current = l;
        token.current = new l.AutocompleteSessionToken();
      })
      .catch((e) => console.error("Google Maps failed to load", e));
    return () => clearTimeout(timer.current);
  }, []);

  const handleInput = (e) => {
    const value = e.target.value;
    setText(value);
    onEdit(); // typing invalidates any previous selection/quote
    clearTimeout(timer.current);
    if (value.trim().length < 3 || !lib.current) {
      setItems([]);
      return setOpen(false);
    }
    timer.current = setTimeout(async () => {
      try {
        const { suggestions } =
          await lib.current.AutocompleteSuggestion.fetchAutocompleteSuggestions({
            input: value,
            sessionToken: token.current,
            includedRegionCodes: REGIONS,
          });
        setItems(suggestions.filter((s) => s.placePrediction));
        setOpen(true);
      } catch (err) {
        console.error(err);
      }
    }, 250);
  };

  const choose = async (suggestion) => {
    setOpen(false);
    setItems([]);
    try {
      const place = suggestion.placePrediction.toPlace();
      await place.fetchFields({
        fields: ["id", "formattedAddress", "location", "addressComponents"],
      });
      token.current = new lib.current.AutocompleteSessionToken(); // new session
      const parsed = parsePlace(place);
      setText(parsed.fullAddress);
      onSelect(parsed);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        id={id}
        type="text"
        autoComplete="off"
        className={styles.formInput}
        placeholder={placeholder}
        value={text}
        onChange={handleInput}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onFocus={() => items.length && setOpen(true)}
        aria-invalid={invalid || undefined}
        style={invalid ? { borderColor: "#c0392b" } : undefined}
        required
      />
      {open && items.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 20,
            left: 0,
            right: 0,
            margin: 0,
            padding: 0,
            listStyle: "none",
            background: "#1b1b1d",
            color: "#fff",
            border: "1px solid #3a3a3d",
            borderRadius: 4,
            boxShadow: "0 8px 20px rgba(0,0,0,.6)",
            maxHeight: 260,
            overflowY: "auto",
          }}
        >
          {items.map((s, i) => (
            <li
              key={s.placePrediction.placeId || i}
              role="option"
              onMouseDown={(e) => {
                e.preventDefault();
                choose(s);
              }}
              onMouseEnter={() => setActive(i)}
              style={{
                padding: "10px 12px",
                cursor: "pointer",
                fontSize: 14,
                color: "#fff",
                background: active === i ? "#2c2c30" : "transparent",
              }}
            >
              {s.placePrediction.text.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;