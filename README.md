# KAZENERGY · 20 Years Portal

High-fidelity, trilingual (KK / RU / EN), dark/light, glass-morphism web portal
celebrating the 20-year anniversary of the **KAZENERGY Association**.

Built with **Vite + React + Tailwind CSS** and **Lucide** icons.

## Highlights

- **Triple-language architecture** — Қазақша · Русский · English, with
  language preference persisted in `localStorage`.
- **Dual mode** — seamless dark / light theme toggle (Deep Obsidian + Cyan-Blue
  for dark; Paper-white + Royal Blue + Gold for light), persisted and
  flash-free on first paint.
- **Glassmorphism** components throughout (cards, dropdowns, search panel).
- **Sticky navigation** with functional dropdowns for **Members**, **Analytic
  Reports**, and **Media**, plus a search palette and language picker.
- **Hero — 20 Years Legacy** featuring the anniversary emblem, animated
  outer ring, glowing accents, and a diplomatic-flags hero background.
- **Knowledge Center** — interactive magazine carousel with autoplay,
  pagination, "Download PDF" and "Read Online" CTAs.
- **ESG & Energy Metrics** dashboard — live placeholders for oil production,
  renewable share, carbon-footprint reduction, and gas exports, with sparkline
  trend charts.
- **Wall of Trust** partners grid (UN, Atameken, IEA, OPEC, IRENA, WEC, KMG,
  Shell, TCO, Eni, EU4Energy, WEF).
- **Footer** with newsletter sign-up, contacts, and social links.

## Quick start

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  App.jsx                 # Theme & language state
  i18n.js                 # KK / RU / EN dictionaries
  data.js                 # Magazine issues, ESG metrics, partners
  index.css               # Tailwind layers + glass utilities
  components/
    Navbar.jsx            # Sticky nav, dropdowns, search, language, theme
    Hero.jsx              # 20-year emblem + diplomatic flags background
    KnowledgeCenter.jsx   # Magazine carousel
    MagazineCover.jsx     # Stylized SVG covers
    EsgDashboard.jsx      # Live metric cards + sparklines
    Sparkline.jsx         # Tiny inline trend chart
    Partners.jsx          # Wall of partner logos
    PartnerLogo.jsx       # Image / monogram renderer
    Footer.jsx            # Newsletter + contacts
public/images/             # Anniversary logo, hero, magazine, Atameken
```

## Theming & customisation

Colours, gradients, glow shadows, and animations are defined in
`tailwind.config.js`. Theme tokens:

- `obsidian.500` `#050A10` — Deep Obsidian background (dark)
- `cyanblue.400` `#22D3EE` — Cyan-Blue energy accent (dark)
- `paper.100` `#F8FAFC` — Clean Paper background (light)
- `royal.500` `#1E3A8A` — Royal Blue accent (light)
- `gold.500` `#E5A93A` — Gold accent (matches anniversary logo)

## Notes

- ESG values are live-jittered placeholders; wire them to your data API in
  `EsgDashboard.jsx`.
- Magazine PDFs link to `#` placeholders; replace with CDN URLs in `data.js`.
- The diplomatic-flags hero photo and the anniversary logo are bundled in
  `public/images/`.

---

© KAZENERGY Association · 2005–2025
