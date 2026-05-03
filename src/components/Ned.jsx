import { ArrowUpRight, BookOpenCheck, FileBarChart, Globe2 } from "lucide-react";
import { dict } from "../i18n";

export default function Ned({ lang }) {
  const t = dict[lang].ned;
  return (
    <section id="ned" className="relative py-24" aria-labelledby="ned-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-card p-8 shadow-cardLight dark:shadow-cardDark md:p-14">
          {/* Decorative accents */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-royal-500/15 blur-3xl dark:bg-cyanblue-500/15" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl dark:bg-cyanblue-400/15" />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanblue-500 dark:text-cyanblue-400">
                {t.eyebrow}
              </p>
              <h2
                id="ned-heading"
                className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 md:text-5xl"
              >
                {t.title}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-royal-700/75 dark:text-paper-100/70">
                {t.subtitle}
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <FileBarChart className="h-5 w-5 text-gold-500 dark:text-cyanblue-400" />
                  <dt className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                    {t.stat1}
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-royal-700 dark:text-paper-100">
                    180+
                  </dd>
                </div>
                <div>
                  <BookOpenCheck className="h-5 w-5 text-gold-500 dark:text-cyanblue-400" />
                  <dt className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                    {t.stat2}
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-royal-700 dark:text-paper-100">
                    60+
                  </dd>
                </div>
                <div>
                  <Globe2 className="h-5 w-5 text-gold-500 dark:text-cyanblue-400" />
                  <dt className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                    {t.stat3}
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-royal-700 dark:text-paper-100">
                    3
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <button className="btn-primary bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 shadow-cardLight hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 hover:shadow-glowGold dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400 dark:hover:text-royal-700 dark:hover:shadow-glowGold">
                  {t.cta}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a
                  href="#archive"
                  className="btn-primary border border-royal-700/15 bg-paper-100/60 text-royal-700 backdrop-blur transition hover:border-royal-500/50 hover:bg-paper-100 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-obsidian-300/70"
                >
                  {dict[lang].cta.learnMore}
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl ring-1 ring-royal-700/10 shadow-cardLight dark:ring-cyanblue-400/15 dark:shadow-cardDark">
                <NerCover lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NerCover({ lang }) {
  const titleByLang = {
    kk: "Ұлттық\nЭнергетикалық\nЕсеп",
    ru: "Национальный\nЭнергетический\nДоклад",
    en: "National\nEnergy\nReport",
  };
  const lines = (titleByLang[lang] || titleByLang.en).split("\n");
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-royal-700 via-royal-500 to-royal-700 p-6 text-paper-100 dark:from-obsidian-500 dark:via-obsidian-400 dark:to-obsidian-500">
      {/* Subtle grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 200 280"
        aria-hidden
      >
        <defs>
          <pattern id="ner-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-paper-100/40"
            />
          </pattern>
          <linearGradient id="ner-band" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#E5A93A" />
            <stop offset="100%" stopColor="#F5C674" />
          </linearGradient>
        </defs>
        <rect width="200" height="280" fill="url(#ner-grid)" />
        {/* Energy curve */}
        <path
          d="M0,210 C40,180 70,200 100,160 C130,120 160,170 200,90"
          fill="none"
          stroke="url(#ner-band)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Nodes */}
        {[
          [40, 188],
          [100, 162],
          [150, 128],
          [190, 95],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#E5A93A" />
        ))}
      </svg>

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-paper-100/85">
          <span>KAZENERGY</span>
          <span>2025</span>
        </div>

        <div>
          <div className="mb-3 inline-flex rounded-full bg-gold-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-royal-700">
            {lang === "ru" ? "НЭД · Том 12" : lang === "kk" ? "НЭД · 12-том" : "NER · Vol 12"}
          </div>
          <h3 className="font-display text-2xl font-bold leading-tight">
            {lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h3>
        </div>
      </div>
    </div>
  );
}
