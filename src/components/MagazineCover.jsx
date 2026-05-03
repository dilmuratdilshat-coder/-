// Stylized magazine-cover artwork built from CSS gradients + SVG so each cover
// looks bespoke without bundling licensed imagery. The `variant` prop selects
// the artwork; the `accent` prop drives the gradient.
export default function MagazineCover({ issue, lang }) {
  const titleByLang = issue.title[lang] || issue.title.en;
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-[18px] shadow-2xl ring-1 ring-black/10 dark:ring-white/10`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${issue.accent}`} />
      <Artwork variant={issue.cover} />
      {/* Top brand */}
      <div className="absolute inset-x-0 top-0 px-4 pt-4 text-white">
        <div className="font-display text-[clamp(1.2rem,2.4vw,1.9rem)] font-bold leading-none tracking-[0.18em] drop-shadow">
          KAZENERGY
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/80">
          {issue.issueLabel}
        </div>
      </div>
      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/70">
          {issue.year}
        </div>
        <h4 className="mt-1 line-clamp-3 font-display text-[clamp(0.95rem,1.5vw,1.25rem)] font-semibold leading-tight drop-shadow">
          {titleByLang}
        </h4>
      </div>
      {/* Frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] ring-1 ring-inset ring-white/15" />
    </div>
  );
}

function Artwork({ variant }) {
  switch (variant) {
    case "wind":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,0.0)" />
              <stop offset="1" stopColor="rgba(0,0,0,0.35)" />
            </linearGradient>
          </defs>
          <rect width="200" height="240" fill="url(#sky)" />
          {/* Turbines */}
          {[
            { x: 50, y: 120, s: 0.9 },
            { x: 110, y: 100, s: 1.1 },
            { x: 160, y: 130, s: 0.75 },
          ].map((t, i) => (
            <g key={i} transform={`translate(${t.x} ${t.y}) scale(${t.s})`} stroke="white" fill="white">
              <rect x="-1" y="0" width="2" height="80" opacity="0.85" />
              <g transform="translate(0 0)" opacity="0.95">
                <ellipse cx="0" cy="-22" rx="22" ry="3" />
                <ellipse cx="0" cy="-22" rx="3" ry="22" transform="rotate(60 0 -22)" />
                <ellipse cx="0" cy="-22" rx="3" ry="22" transform="rotate(-60 0 -22)" />
                <circle cx="0" cy="-22" r="3" />
              </g>
            </g>
          ))}
          {/* horizon */}
          <path d="M0 200 L200 200 L200 240 L0 240 Z" fill="rgba(255,255,255,0.08)" />
        </svg>
      );
    case "panel":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g opacity="0.85" stroke="white" fill="rgba(255,255,255,0.08)">
            {[0, 1, 2, 3].map((r) =>
              [0, 1, 2].map((c) => (
                <rect
                  key={`${r}${c}`}
                  x={20 + c * 55}
                  y={70 + r * 38}
                  width="50"
                  height="32"
                  rx="2"
                />
              ))
            )}
          </g>
          <circle cx="160" cy="40" r="22" fill="rgba(255,255,255,0.55)" />
        </svg>
      );
    case "h2":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g fill="white" opacity="0.9">
            <text
              x="100"
              y="150"
              textAnchor="middle"
              fontFamily="Cormorant Garamond, serif"
              fontWeight="700"
              fontSize="120"
            >
              H₂
            </text>
          </g>
          <g stroke="white" opacity="0.45" fill="none">
            <circle cx="100" cy="120" r="80" />
            <circle cx="100" cy="120" r="60" />
          </g>
        </svg>
      );
    case "rig":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g stroke="white" fill="none" opacity="0.9">
            <path d="M70 200 L100 70 L130 200 Z" />
            <path d="M80 170 L120 170 M85 140 L115 140 M90 110 L110 110" />
            <circle cx="100" cy="64" r="6" fill="white" />
          </g>
          <path d="M0 200 L200 200 L200 240 L0 240 Z" fill="rgba(0,0,0,0.25)" />
        </svg>
      );
    case "atom":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g stroke="white" strokeWidth="1.5" fill="none" opacity="0.9">
            <ellipse cx="100" cy="120" rx="70" ry="26" />
            <ellipse cx="100" cy="120" rx="70" ry="26" transform="rotate(60 100 120)" />
            <ellipse cx="100" cy="120" rx="70" ry="26" transform="rotate(-60 100 120)" />
          </g>
          <circle cx="100" cy="120" r="8" fill="white" />
        </svg>
      );
    case "diplomacy":
      return (
        <svg viewBox="0 0 200 240" className="absolute inset-0 h-full w-full" aria-hidden>
          <g opacity="0.95" stroke="white" fill="white">
            {[40, 80, 120, 160].map((x, i) => (
              <g key={i}>
                <rect x={x - 1} y="60" width="2" height="100" />
                <path
                  d={`M${x} 60 L${x + 24} 70 L${x} 80 Z`}
                  fill="rgba(255,255,255,0.85)"
                />
              </g>
            ))}
          </g>
        </svg>
      );
    default:
      return null;
  }
}
