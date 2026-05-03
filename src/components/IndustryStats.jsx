import {
  Droplets,
  Flame,
  Truck,
  Pipette,
  Zap,
  Battery,
  Cable,
  FlaskConical,
  Mountain,
} from "lucide-react";
import { dict } from "../i18n";

const items = [
  { key: "oil", value: ">90%", icon: Droplets, accent: "from-gold-500/30 to-transparent dark:from-cyanblue-400/30" },
  { key: "gas", value: ">95%", icon: Flame, accent: "from-gold-500/25 to-transparent dark:from-cyanblue-400/25" },
  { key: "oilTransport", value: "25–28%", icon: Truck, accent: "from-royal-500/20 to-transparent dark:from-cyanblue-500/20" },
  { key: "gasTransport", value: "100%", icon: Pipette, accent: "from-gold-500/30 to-transparent dark:from-cyanblue-400/30" },
  { key: "powerGen", value: ">35%", icon: Zap, accent: "from-royal-500/25 to-transparent dark:from-cyanblue-500/25" },
  { key: "gridCapacity", value: ">30%", icon: Battery, accent: "from-royal-500/20 to-transparent dark:from-cyanblue-500/20" },
  { key: "transmission", value: "100%", icon: Cable, accent: "from-gold-500/30 to-transparent dark:from-cyanblue-400/30" },
  { key: "refining", value: ">95%", icon: FlaskConical, accent: "from-gold-500/25 to-transparent dark:from-cyanblue-400/25" },
  { key: "coal", value: ">40%", icon: Mountain, accent: "from-royal-500/20 to-transparent dark:from-cyanblue-500/20" },
];

export default function IndustryStats({ lang }) {
  const t = dict[lang].industry;
  return (
    <section
      id="industry"
      className="relative py-24"
      aria-labelledby="industry-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl dark:bg-cyanblue-400/10" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-royal-500/10 blur-3xl dark:bg-cyanblue-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanblue-500 dark:text-cyanblue-400">
            {t.eyebrow}
          </p>
          <h2
            id="industry-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 md:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-royal-700/75 dark:text-paper-100/70">
            {t.subtitle}
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li
              key={it.key}
              className="glass-card group relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-cardLight dark:hover:shadow-cardDark"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${it.accent} transition group-hover:scale-110`}
              />
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-royal-700/5 text-royal-700 ring-1 ring-royal-700/10 dark:bg-cyanblue-400/10 dark:text-cyanblue-400 dark:ring-cyanblue-400/20">
                  <it.icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                  {t.items[it.key]}
                </span>
              </div>

              <div className="mt-5">
                <span className="font-display text-4xl font-bold tracking-tight text-royal-700 dark:text-paper-100">
                  {it.value}
                </span>
                <span className="ml-2 align-middle text-xs uppercase tracking-[0.2em] text-royal-700/50 dark:text-paper-100/45">
                  {lang === "ru"
                    ? "от страны"
                    : lang === "kk"
                      ? "елден"
                      : "of country"}
                </span>
              </div>

              <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-royal-700/5 dark:bg-paper-100/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-royal-500 to-gold-500 dark:from-cyanblue-500 dark:to-cyanblue-300"
                  style={{ width: parseInt(it.value.replace(/[^0-9]/g, ""), 10) + "%" }}
                />
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-[11px] uppercase tracking-[0.32em] text-royal-700/50 dark:text-paper-100/45">
          {lang === "ru"
            ? "Источник · Министерство энергетики РК · Отраслевая статистика KAZENERGY"
            : lang === "kk"
              ? "Дереккөз · ҚР Энергетика министрлігі · KAZENERGY салалық статистика"
              : "Source · Ministry of Energy RK · KAZENERGY industry statistics"}
        </p>
      </div>
    </section>
  );
}
