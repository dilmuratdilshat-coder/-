import {
  Droplets,
  Zap,
  Coins,
  Leaf,
  ShieldCheck,
  Scale,
  Globe2,
  GraduationCap,
  Mic2,
  FileBarChart,
  Network,
  BookOpenCheck,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";
import { dict } from "../i18n";

const tiles = [
  { key: "oilGas", icon: Droplets },
  { key: "power", icon: Zap },
  { key: "finance", icon: Coins },
  { key: "ecology", icon: Leaf },
  { key: "regulation", icon: ShieldCheck },
  { key: "legal", icon: Scale },
  { key: "intl", icon: Globe2 },
  { key: "capital", icon: GraduationCap },
  { key: "forum", icon: Mic2 },
  { key: "ner", icon: FileBarChart },
  { key: "councils", icon: Network },
  { key: "education", icon: BookOpenCheck },
  { key: "science", icon: FlaskConical },
];

export default function Activities({ lang }) {
  const t = dict[lang].activities;
  return (
    <section
      id="activities"
      className="relative py-24"
      aria-labelledby="activities-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl dark:bg-cyanblue-400/10" />
        <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-royal-500/10 blur-3xl dark:bg-cyanblue-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyanblue-500 dark:text-cyanblue-400">
            {t.eyebrow}
          </p>
          <h2
            id="activities-heading"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-royal-700 dark:text-paper-100 md:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-royal-700/75 dark:text-paper-100/70">
            {t.subtitle}
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <li key={tile.key}>
              <a
                href={`#activity-${tile.key}`}
                className="glass-card group relative flex h-full items-start gap-4 overflow-hidden p-5 transition hover:-translate-y-1 hover:shadow-cardLight dark:hover:shadow-cardDark"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-gold-500/15 to-transparent transition group-hover:scale-110 dark:from-cyanblue-400/15" />

                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 shadow-cardLight transition group-hover:from-gold-500 group-hover:to-gold-400 dark:from-cyanblue-500 dark:to-cyanblue-600 dark:group-hover:from-gold-500 dark:group-hover:to-gold-400">
                  <tile.icon className="h-5 w-5" />
                </span>

                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold leading-snug text-royal-700 dark:text-paper-100">
                    {t.items[tile.key]}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-royal-700/60 transition group-hover:text-gold-500 dark:text-paper-100/60 dark:group-hover:text-cyanblue-400">
                    {dict[lang].cta.learnMore}
                    <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
