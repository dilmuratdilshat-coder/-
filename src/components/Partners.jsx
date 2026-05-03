import { dict } from "../i18n";
import { partners } from "../data";
import PartnerLogo from "./PartnerLogo";

export default function Partners({ lang }) {
  const t = dict[lang].partners;
  return (
    <section id="partners" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.4em] text-gold-600 dark:text-cyanblue-400">
            {t.eyebrow}
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-royal-700 dark:text-paper-100 sm:text-5xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-royal-700/70 dark:text-paper-100/70">
            {t.subtitle}
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl glass-card p-2 shadow-cardLight dark:shadow-cardDark">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper-100 to-transparent dark:from-obsidian-500" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper-100 to-transparent dark:from-obsidian-500" />

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-royal-700/5 sm:grid-cols-3 lg:grid-cols-6 dark:bg-cyanblue-400/10">
            {partners.map((p) => (
              <div
                key={p.id}
                className="group relative bg-paper-100/80 transition hover:bg-paper-50 dark:bg-obsidian-400/60 dark:hover:bg-obsidian-300/80"
                title={p.label}
              >
                <PartnerLogo partner={p} />
                <span className="pointer-events-none absolute inset-x-3 bottom-1 truncate text-center text-[10px] uppercase tracking-[0.18em] text-royal-700/40 opacity-0 transition group-hover:opacity-100 dark:text-paper-100/50">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
