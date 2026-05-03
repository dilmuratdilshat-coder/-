/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: "#0E1828",
          100: "#0B1320",
          200: "#080F1A",
          300: "#070C15",
          400: "#060A11",
          500: "#050A10",
          600: "#04080D",
          700: "#03060A",
        },
        cyanblue: {
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        royal: {
          400: "#3B5FBE",
          500: "#1E3A8A",
          600: "#152C66",
          700: "#0F1F47",
        },
        gold: {
          400: "#F5C674",
          500: "#E5A93A",
          600: "#C28720",
        },
        paper: {
          50: "#FFFFFF",
          100: "#F8FAFC",
          200: "#EEF2F7",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "'Playfair Display'", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.25)",
        glowGold: "0 0 30px rgba(229,169,58,0.35)",
        cardLight: "0 10px 30px -10px rgba(15,31,71,0.18)",
        cardDark: "0 10px 30px -10px rgba(0,0,0,0.6)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(34,211,238,0.6)" },
          "50%": { boxShadow: "0 0 0 12px rgba(34,211,238,0)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-out infinite",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(15,31,71,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,31,71,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
