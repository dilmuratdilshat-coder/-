import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download, BookOpen } from "lucide-react";
import { dict } from "../i18n";
import { magazineIssues } from "../data";
import { pressLinks } from "../links";
import MagazineCover from "./MagazineCover";

export default function KnowledgeCenter({ lang }) {
  const t = dict[lang].knowledge;
  const cta = dict[lang].cta;
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const total = magazineIssues.length;
  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  // Autoplay
  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // Visible 3 covers (prev / active / next) on desktop
  const visible = [
    magazineIssues[(active - 1 + total) % total],
    magazineIssues[active],
    magazineIssues[(active + 1) % total],
  ];

  const current = magazineIssues[active];

  return (
    <section id="media" className="relative py-24">
      {/* Background ribbon */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-72 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent dark:via-cyanblue-500/10" />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Header eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

        <div className="mt-16 grid items-center gap-10 md:grid-cols-12">
          {/* Carousel */}
          <div className="md:col-span-7">
            <div
              ref={trackRef}
              className="relative mx-auto flex h-[28rem] items-center justify-center sm:h-[32rem]"
            >
              {/* prev */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-6 opacity-50 transition hover:opacity-80 sm:left-4">
                <div className="w-40 sm:w-44">
                  <MagazineCover issue={visible[0]} lang={lang} />
                </div>
              </div>
              {/* center */}
              <div className="z-10 w-56 transition-transform sm:w-64 md:w-72">
                <div className="animate-floaty">
                  <MagazineCover issue={visible[1]} lang={lang} />
                </div>
              </div>
              {/* next */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-6 opacity-50 transition hover:opacity-80 sm:right-4">
                <div className="w-40 sm:w-44">
                  <MagazineCover issue={visible[2]} lang={lang} />
                </div>
              </div>

              {/* controls */}
              <button
                aria-label="Previous"
                onClick={prev}
                className="ring-focus absolute -left-2 top-1/2 z-20 -translate-y-1/2 rounded-full glass-card p-3 shadow-cardLight transition hover:scale-110 dark:shadow-cardDark"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next"
                onClick={next}
                className="ring-focus absolute -right-2 top-1/2 z-20 -translate-y-1/2 rounded-full glass-card p-3 shadow-cardLight transition hover:scale-110 dark:shadow-cardDark"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Pagination dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {magazineIssues.map((iss, i) => (
                <button
                  key={iss.id}
                  aria-label={`Go to issue ${iss.issueLabel}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-gradient-to-r from-gold-500 to-royal-500 dark:from-cyanblue-400 dark:to-cyanblue-500"
                      : "w-1.5 bg-royal-700/20 dark:bg-paper-100/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="md:col-span-5">
            <div className="glass-card relative overflow-hidden p-7 shadow-cardLight dark:shadow-cardDark">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent dark:from-cyanblue-400/20" />
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-royal-700/60 dark:text-paper-100/60">
                {current.issueLabel}
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-royal-700 dark:text-paper-100">
                {current.title[lang]}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-royal-700/75 dark:text-paper-100/70">
                {lang === "kk" &&
                  "Бұл шығарылымда саланың көшбасшыларымен сұхбаттар, ESG жаңартулары және Каспий аймағындағы стратегиялық жобалардың талдамасы бар."}
                {lang === "ru" &&
                  "В номере: интервью с лидерами отрасли, обновления ESG и аналитика стратегических проектов в Каспийском регионе."}
                {lang === "en" &&
                  "This issue features interviews with industry leaders, ESG updates, and analysis of strategic projects in the Caspian region."}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={current.pdfUrl}
                  download
                  className="btn-primary justify-center bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400 dark:hover:text-royal-700"
                >
                  <Download className="h-4 w-4" />
                  {cta.downloadPDF}
                </a>
                <a
                  href={pressLinks(lang).magazine}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary justify-center border border-royal-700/15 bg-paper-100/60 text-royal-700 hover:border-royal-500/40 hover:bg-paper-100 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-obsidian-300/70"
                >
                  <BookOpen className="h-4 w-4" />
                  {cta.readOnline}
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-royal-700/10 pt-6 dark:border-cyanblue-400/10">
                {[
                  ["75+", lang === "kk" ? "Авторлар" : lang === "ru" ? "Авторов" : "Authors"],
                  ["3", lang === "kk" ? "Тіл" : lang === "ru" ? "Языка" : "Languages"],
                  ["20Y", lang === "kk" ? "Архив" : lang === "ru" ? "Архив" : "Archive"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-2xl font-bold text-royal-700 dark:text-paper-100">
                      {n}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-royal-700/55 dark:text-paper-100/55">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-600 dark:text-cyanblue-400">
        {eyebrow}
      </div>
      <h2 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-royal-700/70 dark:text-paper-100/70">
        {subtitle}
      </p>
    </div>
  );
}
