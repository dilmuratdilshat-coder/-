import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IndustryStats from "./components/IndustryStats";
import KnowledgeCenter from "./components/KnowledgeCenter";
import Ned from "./components/Ned";
import EsgDashboard from "./components/EsgDashboard";
import News from "./components/News";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("kz-lang");
  if (stored && ["kk", "ru", "en"].includes(stored)) return stored;
  const nav = (window.navigator.language || "en").toLowerCase();
  if (nav.startsWith("kk") || nav.startsWith("kz")) return "kk";
  if (nav.startsWith("ru")) return "ru";
  return "en";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("kz-theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [lang, setLang] = useState(getInitialLang);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem("kz-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === "kk" ? "kk" : lang === "ru" ? "ru" : "en";
    window.localStorage.setItem("kz-lang", lang);
  }, [lang]);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero lang={lang} />
        <IndustryStats lang={lang} />
        <KnowledgeCenter lang={lang} />
        <Ned lang={lang} />
        <EsgDashboard lang={lang} />
        <News lang={lang} />
        <Events lang={lang} />
        <Partners lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
