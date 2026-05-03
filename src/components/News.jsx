import { ArrowUpRight, CalendarDays } from "lucide-react";
import { dict } from "../i18n";

export default function News({ lang }) {
  const t = dict[lang].news;
  const cta = dict[lang].cta;
  return (
    <section id="news" className="relative py-24" aria-labelledby="news-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanblue-500 dark:text-cyanblue-400">
              {t.eyebrow}
            </p>
            <h2
              id="news-heading"
              className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 md:text-5xl"
            >
              {t.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-royal-700/75 dark:text-paper-100/70">
              {t.subtitle}
            </p>
          </div>
          <a
            href="#all-news"
            className="group inline-flex items-center gap-2 rounded-full border border-royal-700/15 bg-paper-100/60 px-5 py-2 text-sm font-semibold text-royal-700 backdrop-blur transition hover:border-royal-500/50 hover:bg-paper-100 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-obsidian-300/70"
          >
            {cta.allNews}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((n, idx) => (
            <li
              key={idx}
              className="glass-card group relative flex flex-col overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-cardLight dark:hover:shadow-cardDark"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent transition group-hover:scale-110 dark:from-cyanblue-400/20" />

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-royal-700/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-royal-700 ring-1 ring-royal-700/10 dark:bg-cyanblue-400/10 dark:text-cyanblue-400 dark:ring-cyanblue-400/20">
                  <CalendarDays className="h-3 w-3" />
                  {n.date}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-500 dark:text-cyanblue-400">
                  · {n.tag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-royal-700 dark:text-paper-100">
                {n.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-royal-700/70 dark:text-paper-100/70">
                {n.excerpt}
              </p>

              <a
                href="#article"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-700 transition group-hover:text-gold-500 dark:text-cyanblue-400 dark:group-hover:text-cyanblue-300"
              >
                {cta.readMore}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
