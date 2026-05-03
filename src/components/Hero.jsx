import { ArrowRight, Compass, Award, Users, Globe2 } from "lucide-react";
import { dict } from "../i18n";

export default function Hero({ lang }) {
  const t = dict[lang].hero;
  const stats = [
    { value: "120+", label: t.stat1, icon: Users },
    { value: "40+", label: t.stat2, icon: Globe2 },
    { value: "350+", label: t.stat3, icon: Compass },
    { value: "75+", label: t.stat4, icon: Award },
  ];
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/diplomatic-flags.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center scale-105"
        />
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-paper-100/85 via-paper-100/70 to-paper-100/95 dark:hidden" />
        {/* Dark mode overlay */}
        <div className="absolute inset-0 hidden bg-gradient-to-br from-obsidian-500/95 via-obsidian-400/85 to-obsidian-500 dark:block" />
        {/* Grid texture */}
        <div className="absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-50 dark:bg-grid-dark dark:opacity-60" />
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold-500/30 blur-3xl dark:bg-cyanblue-500/30" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-royal-500/25 blur-3xl dark:bg-cyanblue-400/20" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-12 md:grid-cols-12 md:px-8 md:pb-28 md:pt-16">
        {/* Left content */}
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-royal-700/15 bg-paper-100/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-royal-700 backdrop-blur dark:border-cyanblue-400/25 dark:bg-obsidian-300/50 dark:text-cyanblue-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500/70 dark:bg-cyanblue-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500 dark:bg-cyanblue-400" />
            </span>
            {t.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-royal-700 dark:text-paper-100">
            {t.title1}
            <br />
            <span className="gold-text dark:cyan-text">{t.title2}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-royal-700/80 dark:text-paper-100/75">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="btn-primary bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 shadow-cardLight hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 hover:shadow-glowGold dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400 dark:hover:text-royal-700 dark:hover:shadow-glowGold">
              {dict[lang].cta.becomeMember}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button className="btn-primary border border-royal-700/15 bg-paper-100/60 text-royal-700 backdrop-blur transition hover:border-royal-500/50 hover:bg-paper-100 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-obsidian-300/70">
              {dict[lang].cta.learnMore}
            </button>
          </div>

          {/* Stats */}
          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card group relative overflow-hidden p-4 transition hover:-translate-y-0.5 hover:shadow-cardLight dark:hover:shadow-cardDark"
              >
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-gold-500/20 to-transparent transition group-hover:from-gold-500/40 dark:from-cyanblue-400/15 dark:group-hover:from-cyanblue-400/35" />
                <s.icon className="mb-2 h-4 w-4 text-royal-500 dark:text-cyanblue-400" />
                <dt className="text-[11px] uppercase tracking-[0.2em] text-royal-700/60 dark:text-paper-100/55">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-royal-700 dark:text-paper-100">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: 20-year emblem */}
        <div className="md:col-span-5">
          <div className="relative mx-auto max-w-md">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-gold-500/20 via-transparent to-cyanblue-400/20 blur-2xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl glass-card p-8 shadow-cardLight dark:shadow-cardDark">
              <div className="absolute inset-0 bg-grid-light bg-[size:24px_24px] opacity-40 dark:bg-grid-dark" />
              <SvgRing />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/anniversary-logo.png"
                  alt="20 Years KAZENERGY"
                  className="h-44 w-auto animate-floaty drop-shadow-[0_10px_30px_rgba(229,169,58,0.35)] dark:drop-shadow-[0_10px_30px_rgba(34,211,238,0.35)]"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-royal-700/10 bg-paper-100/70 px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-royal-700 backdrop-blur dark:border-cyanblue-400/15 dark:bg-obsidian-300/60 dark:text-paper-100">
                <span>2005</span>
                <span className="gold-text dark:cyan-text font-bold">→</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SvgRing() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] animate-[spin_40s_linear_infinite]"
      aria-hidden
    >
      <defs>
        <path
          id="ring-text"
          d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
        />
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeOpacity="0.12" />
      <text fontSize="9" letterSpacing="6" className="fill-royal-700 dark:fill-cyanblue-400">
        <textPath href="#ring-text">
          KAZENERGY ASSOCIATION · 20 YEARS OF ENERGY LEADERSHIP · ҚАЗАҚСТАН ·
          KAZENERGY ASSOCIATION · 20 YEARS OF ENERGY LEADERSHIP · ҚАЗАҚСТАН ·
        </textPath>
      </text>
    </svg>
  );
}
