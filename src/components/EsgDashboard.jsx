import { useEffect, useState } from "react";
import { Droplet, Wind, Leaf, Flame, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { dict } from "../i18n";
import { esgMetrics } from "../data";
import Sparkline from "./Sparkline";

const iconMap = { Droplet, Wind, Leaf, Flame };

export default function EsgDashboard({ lang }) {
  const t = dict[lang].esg;

  // Live tick — animates each value subtly so the dashboard feels real-time.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="reports" className="relative py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-paper-200/40 to-transparent dark:via-obsidian-300/30" />
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {esgMetrics.map((m) => {
            const Icon = iconMap[m.icon];
            const label = t.cards[m.key];
            const positive = m.delta >= 0;
            // jitter the latest value slightly so it looks live
            const jitter = ((tick * 7 + (m.key.length % 5)) % 13) / 100;
            const sign = (tick + m.key.length) % 2 === 0 ? 1 : -1;
            const live = Number((m.value + sign * jitter).toFixed(2));
            const isCarbon = m.key === "carbon";
            const accentClasses = {
              cyan: "from-cyanblue-500 to-cyanblue-600 text-cyanblue-500",
              gold: "from-gold-500 to-gold-600 text-gold-500",
              royal: "from-royal-500 to-royal-700 text-royal-500",
            }[m.accent];
            const sparkColor = {
              cyan: "#06B6D4",
              gold: "#E5A93A",
              royal: "#1E3A8A",
            }[m.accent];
            return (
              <div
                key={m.key}
                className="glass-card group relative overflow-hidden p-5 shadow-cardLight transition hover:-translate-y-1 hover:shadow-cardLight dark:shadow-cardDark dark:hover:shadow-cardDark"
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accentClasses} opacity-20 blur-2xl transition group-hover:opacity-40`} />
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accentClasses} text-paper-100 shadow-md`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      positive
                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                        : isCarbon
                        ? "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                        : "bg-rose-500/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400"
                    }`}
                  >
                    {positive ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {Math.abs(m.delta)}%
                  </div>
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.22em] text-royal-700/55 dark:text-paper-100/55">
                  {label}
                </div>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <div className="font-display text-3xl font-bold tabular-nums text-royal-700 dark:text-paper-100">
                    {live}
                  </div>
                  <div className="text-xs font-medium text-royal-700/60 dark:text-paper-100/60">
                    {m.unit}
                  </div>
                  <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden />
                </div>
                <div className={`mt-3 ${{
                  cyan: "text-cyanblue-500",
                  gold: "text-gold-500",
                  royal: "text-royal-500 dark:text-cyanblue-400",
                }[m.accent]}`}>
                  <Sparkline data={m.trend} stroke={sparkColor} fill={sparkColor} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.28em] text-royal-700/45 dark:text-paper-100/45">
          {lang === "kk"
            ? "Дереккөздер: ҚР Энергетика министрлігі · IEA · KAZENERGY есептері"
            : lang === "ru"
            ? "Источники: Министерство энергетики РК · МЭА · отчёты KAZENERGY"
            : "Sources: Ministry of Energy RK · IEA · KAZENERGY reports"}
        </p>
      </div>
    </section>
  );
}
