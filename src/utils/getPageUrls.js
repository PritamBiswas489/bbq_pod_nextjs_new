const DEFAULT_SITE_URL = "https://bbqpodspain.com";
const LOCALES = ["en", "es", "pt"];

// Single source of truth: canonical key -> slug per locale ("" = homepage)
const PAGE_SLUGS = {
  home: { en: "", es: "", pt: "" },
  about: { en: "about", es: "sobre-nosotros", pt: "sobre" },
  products: { en: "products", es: "productos", pt: "produtos" },
  "in-stock": { en: "in-stock", es: "en-stock", pt: "em-stock" },
  configurator: { en: "configurator", es: "configurador", pt: "configurador" },
  privacyPolicy: {
    en: "privacy-policy",
    es: "politica-de-privacidad",
    pt: "politica-de-privacidade",
  },
  legalNotice: { en: "legal-notice", es: "aviso-legal", pt: "aviso-legal" },
  warranty: { en: "warranty", es: "garantia", pt: "garantia" },
  cookiePolicy: {
    en: "cookie-policy",
    es: "politica-de-cookies",
    pt: "politica-de-cookies",
  },
  prime: { en: "prime", es: "prime", pt: "prime" },
  core: { en: "core", es: "core", pt: "core" },
  aero: { en: "aero", es: "aero", pt: "aero" },
  pinnacle: { en: "pinnacle", es: "pinnacle", pt: "pinnacle" },
  apex: { en: "apex", es: "apex", pt: "apex" },
  horizon220: { en: "horizon220", es: "horizon220", pt: "horizon220" },
  horizon270: { en: "horizon270", es: "horizon270", pt: "horizon270" },
};

// Keys present in the localized (ES/PT-keyed) lookup tables — matches original, which omitted horizon models
const LOCALIZED_LOOKUP_KEYS = Object.keys(PAGE_SLUGS).filter(
  (k) => k !== "horizon220" && k !== "horizon270",
);

const buildPath = (locale, slug) => (slug ? `/${locale}/${slug}` : `/${locale}`);

// pageURLS[locale][canonicalKey] = "/locale/slug"
export const pageURLS = Object.fromEntries(
  LOCALES.map((locale) => [
    locale,
    Object.fromEntries(
      Object.keys(PAGE_SLUGS).map((key) => [
        key,
        buildPath(locale, PAGE_SLUGS[key][locale]),
      ]),
    ),
  ]),
);

// Builds a table keyed by `sourceLocale`'s own slugs, mapping each canonical
// page to every target locale's URL (this is what pageURLSES/pageURLSPT are).
const buildLocalizedLookup = (sourceLocale) =>
  Object.fromEntries(
    LOCALES.map((targetLocale) => [
      targetLocale,
      Object.fromEntries(
        LOCALIZED_LOOKUP_KEYS.map((key) => {
          const sourceSlug = PAGE_SLUGS[key][sourceLocale];
          const lookupKey = key === "home" ? "home" : sourceSlug;
          return [lookupKey, buildPath(targetLocale, PAGE_SLUGS[key][targetLocale])];
        }),
      ),
    ]),
  );

export const pageURLSES = buildLocalizedLookup("es");
export const pageURLSPT = buildLocalizedLookup("pt");

// --- Sitemap helpers (unchanged behavior) ---
const ALL_PAGE_PATHS = Object.freeze(
  Object.values(pageURLS).flatMap((localeObj) => Object.values(localeObj)),
);
const sitemapUrlCache = new Map();

const normalizeSiteUrl = (siteUrl = DEFAULT_SITE_URL) =>
  String(siteUrl || DEFAULT_SITE_URL).replace(/\/+$/, "");

export const getAllPageUrls = (siteUrl = DEFAULT_SITE_URL) => {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);

  if (sitemapUrlCache.has(normalizedSiteUrl)) {
    return sitemapUrlCache.get(normalizedSiteUrl);
  }

  const urls = Object.freeze(
    ALL_PAGE_PATHS.map((path) => `${normalizedSiteUrl}${path}`),
  );
  sitemapUrlCache.set(normalizedSiteUrl, urls);

  return urls;
};