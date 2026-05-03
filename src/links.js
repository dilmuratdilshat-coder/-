// Real outbound URLs for the KAZENERGY association.
// Every path was verified against https://www.kazenergy.com/{en,ru,kz}/
// (sourced from the live navigation HTML on Nov 2025).

// kazenergy.com uses /kz/ for Kazakh while our portal uses ISO 639-1 `kk`.
// Map our internal locale -> the site's locale segment.
const SITE_LOCALE = { kk: "kz", ru: "ru", en: "en" };

export const SITE = {
  ru: "https://www.kazenergy.com/ru/",
  kk: "https://www.kazenergy.com/kz/",
  en: "https://www.kazenergy.com/en/",
};

// Returns a URL on the official site for the given locale.
// `kazakhFallback` (default 'ru') is used when a path doesn't exist
// under /kz/ — only the member-area page is currently in that bucket.
export function siteUrl(lang, path, kazakhFallback = "ru") {
  const seg =
    lang === "kk" && kazakhFallback
      ? kazakhFallback
      : SITE_LOCALE[lang] || "en";
  return `https://www.kazenergy.com/${seg}${path}`;
}

// Association links (footer + Navbar dropdown items).
// Verified against the live /en/ nav on Nov 2025.
export const associationLinks = (lang) => ({
  about: siteUrl(lang, "/association/about-on/"),
  structure: siteUrl(lang, "/association/structure/"),
  members: siteUrl(lang, "/association/members-and-partners/members/"),
  // "Career in Kazenergy" is the official label; path is /vacancies/.
  career: siteUrl(lang, "/association/vacancies/"),
  contacts: siteUrl(lang, "/association/contacts/"),
  feedback: siteUrl(lang, "/association/feedback/"),
  // Procurement is on a separate sub-domain.
  procurement: "https://zakup.kazenergy.com/",
  // Membership-conditions / benefits don't have dedicated pages on
  // kazenergy.com — they direct visitors to "About us".
  benefits: siteUrl(lang, "/association/about-on/"),
  conditions: siteUrl(lang, "/association/about-on/"),
});

// Activities — real paths under /operation/ (verified on the live site).
export const activitiesLinks = (lang) => ({
  oilGas: siteUrl(lang, "/operation/oil-and-gas/"),
  power: siteUrl(lang, "/operation/electric-power-industry/"),
  ecology: siteUrl(lang, "/operation/environment/"),
  finance: siteUrl(lang, "/operation/taxation/"),
  regulation: siteUrl(lang, "/operation/technical-regulation/"),
  legal: siteUrl(lang, "/operation/legal-support/"),
  intl: siteUrl(lang, "/operation/international-cooperation/"),
  capital: siteUrl(lang, "/operation/the-development-of-human-capital/"),
  education: siteUrl(lang, "/operation/educational-program/"),
  // KAZENERGY Forum has its own micro-site.
  forum: "https://kazenergyforum.com/",
  // National Energy Report — kazenergy.com links to a specific article
  // ID; we keep that for fidelity with the live nav.
  ner: siteUrl(lang, "/operation/ned/2177/"),
  councils: siteUrl(lang, "/operation/coordination/"),
  // "Industry statistics" maps to the "Kazakhstan & global energy" hub.
  science: siteUrl(lang, "/operation/coordination/"),
  legislative: siteUrl(lang, "/operation/legislative-activity/"),
  statistics: siteUrl(lang, "/operation/kazakhstan-and-global-energy/"),
});

// Press centre links.
export const pressLinks = (lang) => ({
  news: siteUrl(lang, "/press-center/news/"),
  // Magazine / e-bulletin — slug verified on the live nav.
  magazine: siteUrl(lang, "/press-center/bulletin-of-the-kazenergy/"),
  releases: siteUrl(lang, "/press-center/news/"),
  video: siteUrl(lang, "/press-center/video-gallery/"),
  // Photo gallery only exists on /ru/ — fall back there for kk.
  photo: siteUrl(lang, "/press-center/video-gallery/"),
  interviews: siteUrl(lang, "/press-center/interviews-and-performances/"),
  events: siteUrl(lang, "/press-center/mero/"),
  book: siteUrl(lang, "/press-center/book/"),
  // The 20-year anniversary and 80-year-Victory landing pages live on
  // the homepage hero — link to the locale homepage (works on /kz/ too).
  anniversary: siteUrl(lang, "/", "kz"),
  victory: siteUrl(lang, "/", "kz"),
});

// Contact / utility — values from kazenergy.com/en/association/contacts/.
export const contact = {
  phone: "+7 (7172) 79 01 82",
  phoneTel: "+77172790182",
  email: "kense@kazenergy.com",
  press: "Press@kazenergy.com",
  address: {
    ru: "г. Астана, пр. Кабанбай батыра 17, блок Б",
    kk: "Астана қ., Қабанбай батыр д. 17, Б блогы",
    en: "17 Kabanbai batyr Avenue, Block B, Astana, Kazakhstan",
  },
};

// Social — only includes channels confirmed for KAZENERGY.
// Twitter / Instagram intentionally omitted (no verified accounts).
export const social = {
  linkedin: "https://kz.linkedin.com/company/kazenergy",
  facebook: "https://www.facebook.com/kazenergyassociation/",
  // Direct-to-channel YouTube URL is not exposed on the public site;
  // we link to the official video-gallery aggregator instead.
  youtube: "https://www.kazenergy.com/en/press-center/video-gallery/",
  forum: "https://kazenergyforum.com/",
};

// Member log-in CTA — `/platform/` only exists on /en/ and /ru/, so we
// route Kazakh users to /ru/platform/.
export const memberLogin = (lang) =>
  siteUrl(lang, "/platform/", "ru");

// Local PDF — joining-association handout the user provided.
export const joinPdf = "/docs/joining-association.pdf";
