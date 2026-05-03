// Real outbound URLs for the KAZENERGY association.
// Sourced from kazenergy.com (Nov 2025) — see PR description for verification.

export const SITE = {
  ru: "https://www.kazenergy.com/ru/",
  kk: "https://www.kazenergy.com/kk/",
  en: "https://www.kazenergy.com/en/",
};

// Helper that returns a URL on the official site for the given locale,
// falling back to the English path if the locale-specific one isn't known.
export function siteUrl(lang, path) {
  const base = `https://www.kazenergy.com/${lang}`;
  return `${base}${path}`;
}

// Association links (footer + Navbar dropdown items).
export const associationLinks = (lang) => ({
  about: siteUrl(lang, "/association/about-on/"),
  members: siteUrl(lang, "/association/members-and-partners/members/"),
  benefits: siteUrl(lang, "/association/about-on/"),
  conditions: siteUrl(lang, "/association/about-on/"),
  structure: siteUrl(lang, "/association/about-on/"),
  career: siteUrl(lang, "/association/career/"),
  procurement: siteUrl(lang, "/association/procurement/"),
  contacts: siteUrl(lang, "/association/contacts/"),
});

// Activities — strategic-direction landing pages on kazenergy.com.
export const activitiesLinks = (lang) => ({
  oilGas: siteUrl(lang, "/our-activities/oil-and-gas/"),
  power: siteUrl(lang, "/our-activities/electric-power/"),
  finance: siteUrl(lang, "/our-activities/financial-and-economic-activities/"),
  ecology: siteUrl(lang, "/our-activities/ecology-and-environmental-protection/"),
  regulation: siteUrl(lang, "/our-activities/technical-regulation/"),
  legal: siteUrl(lang, "/our-activities/legal-support/"),
  intl: siteUrl(lang, "/our-activities/international-cooperation/"),
  capital: siteUrl(lang, "/our-activities/human-capital-development/"),
  forum: "https://kazenergyforum.com/",
  ner: siteUrl(lang, "/our-activities/national-energy-report/"),
  councils: siteUrl(lang, "/our-activities/coordination-councils-and-committees/"),
  education: siteUrl(lang, "/our-activities/educational-program/"),
  science: siteUrl(lang, "/our-activities/coordination-councils-and-committees/"),
});

// Press centre links.
export const pressLinks = (lang) => ({
  news: siteUrl(lang, "/press-center/news/"),
  magazine: siteUrl(lang, "/press-center/kazenergy-e-bulletin/"),
  releases: siteUrl(lang, "/press-center/news/"),
  photo: siteUrl(lang, "/press-center/video-gallery/"),
  video: siteUrl(lang, "/press-center/video-gallery/"),
  anniversary: siteUrl(lang, "/"),
  victory: siteUrl(lang, "/"),
});

// Contact / utility.
export const contact = {
  phone: "+7 (7172) 79 01 82",
  phoneTel: "+77172790182",
  email: "kense@kazenergy.com",
  press: "Press@kazenergy.com",
  address: {
    ru: "г. Астана, пр. Кабанбай батыра 17, блок Б",
    kk: "Астана қ., Қабанбай батыр д.17, Б блогы",
    en: "17 Kabanbai batyr Avenue, Block B, Astana, Kazakhstan",
  },
};

// Social — only includes channels we have confirmed for KAZENERGY.
// Twitter is intentionally omitted (no confirmed account); we surface
// LinkedIn / Facebook / YouTube / Forum site instead.
export const social = {
  linkedin: "https://kz.linkedin.com/company/kazenergy",
  facebook: "https://www.facebook.com/kazenergyassociation/",
  youtube: "https://www.kazenergy.com/en/press-center/video-gallery/",
  forum: "https://kazenergyforum.com/",
};

// Member area + join CTA.
export const memberLogin = "https://www.kazenergy.com/en/member-area/";
// Local PDF — joining-association handout the user provided.
export const joinPdf = "/docs/joining-association.pdf";
