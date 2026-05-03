import { Award, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { dict } from "../i18n";

function getInitialDismissed() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("kz-victory-dismissed") === "1";
}

export default function VictoryRibbon({ lang }) {
  const t = dict[lang].victoryBanner;
  const [dismissed, setDismissed] = useState(getInitialDismissed);

  if (dismissed) return null;

  const onDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("kz-victory-dismissed", "1");
    }
  };

  return (
    <div
      role="banner"
      aria-label={t.title}
      className="relative z-40 overflow-hidden border-b border-royal-700/15 bg-gradient-to-r from-royal-700 via-royal-500 to-royal-700 text-paper-100 dark:border-cyanblue-400/15 dark:from-obsidian-500 dark:via-obsidian-400 dark:to-obsidian-500"
    >
      {/* Animated diagonal stripes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(229,169,58,0.6) 0 12px, transparent 12px 24px)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 md:px-8">
        {/* St. George ribbon icon */}
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-500/20 ring-1 ring-gold-500/40">
          <Award className="h-4 w-4 text-gold-500 dark:text-cyanblue-400" />
        </span>

        <div className="flex flex-1 items-center gap-3 overflow-hidden">
          <span className="font-display text-sm font-bold tracking-wide text-paper-100 sm:text-base">
            {t.title}
          </span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-paper-100/70 md:inline">
            · {t.subtitle}
          </span>
        </div>

        <a
          href="#victory"
          className="ring-focus inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper-100 transition hover:bg-gold-500 hover:text-royal-700 dark:border-cyanblue-400/40 dark:bg-cyanblue-400/15 dark:hover:bg-cyanblue-400 dark:hover:text-obsidian-500"
        >
          {t.cta}
          <ArrowUpRight className="h-3 w-3" />
        </a>

        <button
          type="button"
          aria-label="Dismiss banner"
          onClick={onDismiss}
          className="ring-focus rounded-full p-1 text-paper-100/70 transition hover:bg-paper-100/10 hover:text-paper-100"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
