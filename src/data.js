// Mock data for Knowledge Center, ESG metrics, and Partners.
// Replace with API responses when backend is ready.

export const magazineIssues = [
  {
    id: 73,
    year: 2025,
    issueLabel: "№ 03 · 2025",
    title: {
      kk: "Жаңа дәуір: Каспийден Жаһандыққа",
      ru: "Новая эра: От Каспия к Глобальному",
      en: "A New Era: From the Caspian to the Global Stage",
    },
    accent: "from-royal-500 to-cyanblue-500",
    cover: "wind",
    pdfUrl: "#",
  },
  {
    id: 72,
    year: 2025,
    issueLabel: "№ 02 · 2025",
    title: {
      kk: "Энергия трансформациясы және ESG",
      ru: "Энергопереход и ESG",
      en: "Energy Transition & ESG Imperatives",
    },
    accent: "from-cyanblue-500 to-cyanblue-600",
    cover: "panel",
    pdfUrl: "#",
  },
  {
    id: 71,
    year: 2025,
    issueLabel: "№ 01 · 2025",
    title: {
      kk: "Жасыл сутегі болашағы",
      ru: "Будущее зелёного водорода",
      en: "The Future of Green Hydrogen",
    },
    accent: "from-gold-500 to-royal-500",
    cover: "h2",
    pdfUrl: "#",
  },
  {
    id: 70,
    year: 2024,
    issueLabel: "№ 04 · 2024",
    title: {
      kk: "Каспий мұнайы: жаңа маршруттар",
      ru: "Нефть Каспия: новые маршруты",
      en: "Caspian Oil: New Routes",
    },
    accent: "from-royal-700 to-royal-500",
    cover: "rig",
    pdfUrl: "#",
  },
  {
    id: 69,
    year: 2024,
    issueLabel: "№ 03 · 2024",
    title: {
      kk: "Атом энергетикасы — таңдау сәті",
      ru: "Атомная энергетика — момент выбора",
      en: "Nuclear Power: A Moment of Choice",
    },
    accent: "from-cyanblue-600 to-royal-700",
    cover: "atom",
    pdfUrl: "#",
  },
  {
    id: 68,
    year: 2024,
    issueLabel: "№ 02 · 2024",
    title: {
      kk: "Энергетика дипломатиясы",
      ru: "Энергетическая дипломатия",
      en: "Energy Diplomacy",
    },
    accent: "from-gold-500 to-gold-600",
    cover: "diplomacy",
    pdfUrl: "#",
  },
];

export const esgMetrics = [
  {
    key: "oil",
    value: 2089,
    unit: "k bbl/d",
    delta: 3.4,
    trend: [70, 72, 71, 74, 76, 78, 80, 79, 82, 84, 86, 88],
    accent: "cyan",
    icon: "Droplet",
  },
  {
    key: "renewable",
    value: 6.8,
    unit: "%",
    delta: 1.2,
    trend: [22, 28, 32, 36, 40, 46, 52, 58, 62, 66, 70, 74],
    accent: "gold",
    icon: "Wind",
  },
  {
    key: "carbon",
    value: -14.2,
    unit: "%",
    delta: -2.1,
    trend: [88, 84, 80, 78, 76, 74, 70, 66, 62, 58, 54, 50],
    accent: "royal",
    icon: "Leaf",
  },
  {
    key: "gas",
    value: 19.4,
    unit: "bcm",
    delta: 5.7,
    trend: [40, 44, 48, 52, 56, 60, 62, 66, 68, 72, 78, 82],
    accent: "cyan",
    icon: "Flame",
  },
];

// Partner logos rendered as SVG monograms — works in both themes without
// shipping third-party trademarked artwork. Atameken is the only image asset.
export const partners = [
  { id: "un", label: "United Nations", monogram: "UN" },
  { id: "atameken", label: "Atameken NCE", image: "/images/atameken.png" },
  { id: "wec", label: "World Energy Council", monogram: "WEC" },
  { id: "iea", label: "International Energy Agency", monogram: "IEA" },
  { id: "opec", label: "OPEC", monogram: "OPEC" },
  { id: "eu4energy", label: "EU4Energy", monogram: "EU4E" },
  { id: "irena", label: "IRENA", monogram: "IRENA" },
  { id: "wef", label: "World Economic Forum", monogram: "WEF" },
  { id: "kmg", label: "KazMunayGas", monogram: "KMG" },
  { id: "shell", label: "Shell", monogram: "SHELL" },
  { id: "tco", label: "Tengizchevroil", monogram: "TCO" },
  { id: "eni", label: "Eni", monogram: "ENI" },
];
