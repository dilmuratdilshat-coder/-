import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Globe,
  Search,
  Sun,
  Moon,
  Menu,
  X,
  LogIn,
  Building2,
  Users,
  Heart,
  ClipboardList,
  Layers,
  Briefcase,
  ShoppingBag,
  Phone,
  Newspaper,
  BookOpen,
  Radio,
  Image as ImageIcon,
  Video,
  Sparkles,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { dict, langLabel } from "../i18n";
import {
  associationLinks,
  pressLinks,
  activitiesLinks,
  memberLogin,
  joinPdf,
  siteUrl,
} from "../links";

const langs = ["kk", "ru", "en"];

export default function Navbar({ lang, setLang, theme, setTheme }) {
  const t = dict[lang];
  const [openDropdown, setOpenDropdown] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpenDropdown(null);
        setLangOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, []);

  const a = associationLinks(lang);
  const p = pressLinks(lang);
  const act = activitiesLinks(lang);

  const dropdowns = {
    association: [
      { label: t.association.about, icon: Building2, href: a.about, external: true },
      { label: t.association.members, icon: Users, href: a.members, external: true },
      { label: t.association.benefits, icon: Heart, href: a.benefits, external: true },
      { label: t.association.conditions, icon: ClipboardList, href: joinPdf, download: true },
      { label: t.association.structure, icon: Layers, href: a.structure, external: true },
      { label: t.association.career, icon: Briefcase, href: a.career, external: true },
      { label: t.association.procurement, icon: ShoppingBag, href: a.procurement, external: true },
      { label: t.association.contacts, icon: Phone, href: a.contacts, external: true },
    ],
    press: [
      { label: t.press.news, icon: Newspaper, href: p.news, external: true },
      { label: t.press.magazine, icon: BookOpen, href: p.magazine, external: true },
      { label: t.press.releases, icon: Radio, href: p.releases, external: true },
      { label: t.press.photo, icon: ImageIcon, href: p.photo, external: true },
      { label: t.press.video, icon: Video, href: p.video, external: true },
      { label: t.press.anniversary, icon: Sparkles, href: siteUrl(lang, "/"), external: true },
      { label: t.press.victory, icon: Award, href: "#victory" },
    ],
  };

  return (
    <header
      ref={ref}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-royal-700/10 bg-paper-100/80 backdrop-blur-xl dark:border-cyanblue-400/10 dark:bg-obsidian-500/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-8">
        {/* Brand */}
        <a href="#top" className="group flex items-center gap-3 ring-focus rounded-lg">
          <div className="relative">
            <img
              src="/images/anniversary-logo.png"
              alt="KAZENERGY 20 Years"
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute -inset-1 rounded-full opacity-0 blur-xl transition group-hover:opacity-50 dark:bg-cyanblue-400/40 bg-gold-400/40" />
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-lg font-bold tracking-[0.22em] text-royal-700 dark:text-paper-100">
              KAZENERGY
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-royal-500/70 dark:text-cyanblue-400/80">
              Association · Est. 2005
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Dropdown
            label={t.nav.association}
            items={dropdowns.association}
            open={openDropdown === "association"}
            onToggle={() => setOpenDropdown(openDropdown === "association" ? null : "association")}
          />
          <NavItem label={t.nav.activities} href="#activities" />
          <Dropdown
            label={t.nav.pressCenter}
            items={dropdowns.press}
            open={openDropdown === "press"}
            onToggle={() => setOpenDropdown(openDropdown === "press" ? null : "press")}
          />
          <NavItem label={t.nav.ner} href={act.ner} external />
          <ExiaPill label={t.nav.exia} href="https://kazenergyforum.com/" />
        </nav>

        {/* Right tools */}
        <div className="ml-auto flex items-center gap-1 lg:ml-2">
          {/* Search */}
          <div className="relative">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="ring-focus rounded-full p-2 text-royal-700 transition hover:bg-royal-700/5 dark:text-paper-100 dark:hover:bg-cyanblue-400/10"
            >
              <Search className="h-4 w-4" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-2xl glass-card p-2 shadow-cardLight dark:shadow-cardDark">
                <div className="flex items-center gap-2 rounded-full border border-royal-700/10 bg-white/50 px-3 py-2 dark:border-cyanblue-400/15 dark:bg-obsidian-200/40">
                  <Search className="h-4 w-4 text-royal-500 dark:text-cyanblue-400" />
                  <input
                    autoFocus
                    placeholder={t.cta.search}
                    className="w-full bg-transparent text-sm placeholder:text-royal-700/40 focus:outline-none dark:placeholder:text-paper-100/40"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Theme */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ring-focus relative rounded-full p-2 text-royal-700 transition hover:bg-royal-700/5 dark:text-paper-100 dark:hover:bg-cyanblue-400/10"
          >
            <div className="relative h-4 w-4">
              <Sun
                className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
                  theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <Moon
                className={`absolute inset-0 h-4 w-4 transition-all duration-500 ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
            </div>
          </button>

          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="ring-focus inline-flex items-center gap-1.5 rounded-full border border-royal-700/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-royal-700 transition hover:border-royal-500/40 hover:bg-royal-700/5 dark:border-cyanblue-400/20 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-cyanblue-400/10"
            >
              <Globe className="h-3.5 w-3.5" />
              {langLabel[lang]}
              <ChevronDown className={`h-3.5 w-3.5 transition ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-11 w-32 overflow-hidden rounded-xl glass-card shadow-cardLight dark:shadow-cardDark">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                      l === lang
                        ? "bg-royal-700/5 text-royal-700 dark:bg-cyanblue-400/10 dark:text-cyanblue-400"
                        : "text-royal-700/80 hover:bg-royal-700/5 dark:text-paper-100/80 dark:hover:bg-cyanblue-400/10"
                    }`}
                  >
                    <span>{langLabel[l]}</span>
                    {l === lang && <span className="h-1.5 w-1.5 rounded-full bg-cyanblue-500 dark:bg-gold-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Member log-in (icon-only on smaller screens, label on xl) */}
          <a
            href={memberLogin}
            target="_blank"
            rel="noreferrer"
            aria-label={t.nav.memberLogin}
            title={t.nav.memberLogin}
            className="ring-focus ml-1 hidden items-center gap-1.5 rounded-full border border-royal-700/15 px-3 py-1.5 text-xs font-semibold text-royal-700 transition hover:border-royal-500/40 hover:bg-royal-700/5 lg:inline-flex dark:border-cyanblue-400/20 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:bg-cyanblue-400/10"
          >
            <LogIn className="h-3.5 w-3.5" />
            <span className="hidden xl:inline">{t.nav.memberLogin}</span>
          </a>

          {/* Join CTA */}
          <a
            href={joinPdf}
            download
            className="ring-focus ml-1 hidden items-center gap-1.5 rounded-full bg-gradient-to-br from-royal-700 to-royal-500 px-4 py-1.5 text-xs font-semibold text-paper-100 shadow-cardLight transition hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 hover:shadow-glowGold lg:inline-flex dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400 dark:hover:text-royal-700"
          >
            {t.nav.join}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile menu */}
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="ring-focus rounded-full p-2 text-royal-700 transition hover:bg-royal-700/5 lg:hidden dark:text-paper-100 dark:hover:bg-cyanblue-400/10"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-royal-700/10 bg-paper-100/95 px-4 py-4 backdrop-blur-xl lg:hidden dark:border-cyanblue-400/10 dark:bg-obsidian-500/95">
          <ul className="grid gap-1 text-sm font-medium">
            {[
              { label: t.nav.association, href: a.about, external: true },
              { label: t.nav.activities, href: "#activities" },
              { label: t.nav.pressCenter, href: p.news, external: true },
              { label: t.nav.ner, href: act.ner, external: true },
              { label: t.nav.exia, href: "https://kazenergyforum.com/", external: true },
              { label: t.nav.partners, href: "#partners" },
              { label: t.nav.events, href: "#events" },
              { label: t.nav.contact, href: a.contacts, external: true },
            ].map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  target={i.external ? "_blank" : undefined}
                  rel={i.external ? "noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2 text-royal-700 transition hover:bg-royal-700/5 dark:text-paper-100 dark:hover:bg-cyanblue-400/10"
                >
                  {i.label}
                  <ChevronDown className="h-3.5 w-3.5 -rotate-90 opacity-50" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={memberLogin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-royal-700/15 px-3 py-2 text-xs font-semibold text-royal-700 dark:border-cyanblue-400/20 dark:text-paper-100"
            >
              <LogIn className="h-3.5 w-3.5" />
              {t.nav.memberLogin}
            </a>
            <a
              href={joinPdf}
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-royal-700 to-royal-500 px-3 py-2 text-xs font-semibold text-paper-100 dark:from-cyanblue-500 dark:to-cyanblue-600"
            >
              {t.nav.join}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ label, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="ring-focus relative rounded-full px-3 py-2 text-sm font-medium text-royal-700/85 transition hover:text-royal-700 dark:text-paper-100/80 dark:hover:text-paper-100"
    >
      <span>{label}</span>
      <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-royal-500 transition-transform duration-300 group-hover:scale-x-100 dark:from-cyanblue-400 dark:to-cyanblue-500" />
    </a>
  );
}

function ExiaPill({ label, href = "#exia" }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="ring-focus group ml-1 inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-500 transition hover:bg-gold-500 hover:text-royal-700 dark:border-cyanblue-400/40 dark:bg-cyanblue-400/10 dark:text-cyanblue-400 dark:hover:bg-cyanblue-400 dark:hover:text-obsidian-500"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-500/70 dark:bg-cyanblue-400/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-500 dark:bg-cyanblue-400" />
      </span>
      {label}
    </a>
  );
}

function Dropdown({ label, items, open, onToggle }) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`ring-focus inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition ${
          open
            ? "bg-royal-700/5 text-royal-700 dark:bg-cyanblue-400/10 dark:text-paper-100"
            : "text-royal-700/85 hover:text-royal-700 dark:text-paper-100/80 dark:hover:text-paper-100"
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-11 w-72 overflow-hidden rounded-2xl glass-card shadow-cardLight dark:shadow-cardDark">
          <ul className="p-2">
            {items.map((it, i) => (
              <li key={i}>
                <a
                  href={it.href || "#"}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noreferrer" : undefined}
                  download={it.download ? "" : undefined}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-royal-700 transition hover:bg-royal-700/5 dark:text-paper-100 dark:hover:bg-cyanblue-400/10"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 shadow-sm transition group-hover:from-gold-500 group-hover:to-gold-400 dark:from-cyanblue-500 dark:to-cyanblue-600 dark:group-hover:from-gold-500 dark:group-hover:to-gold-400">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="font-medium">{it.label}</div>
                    <div className="text-[11px] text-royal-700/55 dark:text-paper-100/45">
                      KAZENERGY · 2005–2025
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
