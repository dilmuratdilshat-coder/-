import { CalendarDays, MapPin, Plus } from "lucide-react";
import { dict } from "../i18n";

export default function Events({ lang }) {
  const t = dict[lang].events;
  const cta = dict[lang].cta;
  return (
    <section
      id="events"
      className="relative py-24"
      aria-labelledby="events-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-500/10 blur-3xl dark:bg-cyanblue-500/10" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanblue-500 dark:text-cyanblue-400">
            {t.eyebrow}
          </p>
          <h2
            id="events-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 md:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-royal-700/75 dark:text-paper-100/70">
            {t.subtitle}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl glass-card px-5 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-500/15 text-gold-500 ring-1 ring-gold-500/30 dark:bg-cyanblue-400/15 dark:text-cyanblue-400 dark:ring-cyanblue-400/30">
              <CalendarDays className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                2026
              </p>
              <p className="font-display text-lg font-semibold text-royal-700 dark:text-paper-100">
                {t.items.length}
                <span className="ml-2 text-xs font-normal text-royal-700/55 dark:text-paper-100/55">
                  {lang === "ru"
                    ? "ключевых событий"
                    : lang === "kk"
                      ? "негізгі іс-шара"
                      : "flagship events"}
                </span>
              </p>
            </div>
          </div>
        </div>

        <ol className="md:col-span-8">
          {t.items.map((ev, idx) => (
            <li
              key={idx}
              className="group relative flex flex-col gap-3 border-b border-royal-700/10 py-6 transition first:pt-0 last:border-b-0 hover:bg-royal-700/[0.02] dark:border-paper-100/10 dark:hover:bg-paper-100/[0.03] sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="flex w-full shrink-0 flex-col gap-1 sm:w-44">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-500 dark:text-cyanblue-400">
                  {ev.tag}
                </span>
                <span className="font-display text-base font-semibold text-royal-700 dark:text-paper-100">
                  {ev.date}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="font-display text-xl font-semibold leading-snug text-royal-700 dark:text-paper-100">
                  {ev.title}
                </h3>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-royal-700/70 dark:text-paper-100/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {ev.city}
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-royal-700/15 bg-paper-100/60 px-4 py-1.5 text-xs font-semibold text-royal-700 backdrop-blur transition hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-gold-500 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/50 dark:hover:bg-cyanblue-400/10 dark:hover:text-cyanblue-400"
              >
                <Plus className="h-3.5 w-3.5" />
                {cta.addToCalendar}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
