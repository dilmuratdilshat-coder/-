import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import { dict } from "../i18n";

export default function Footer({ lang }) {
  const t = dict[lang].footer;
  const nav = dict[lang].nav;
  const cta = dict[lang].cta;
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="relative mt-24 border-t border-royal-700/10 dark:border-cyanblue-400/10">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent dark:via-cyanblue-400/60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src="/images/anniversary-logo.png" alt="KAZENERGY" className="h-12 w-auto" />
            <div>
              <div className="font-display text-lg font-bold tracking-[0.22em] text-royal-700 dark:text-paper-100">
                KAZENERGY
              </div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-royal-700/60 dark:text-paper-100/60">
                Association · 2005–{year}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-royal-700/75 dark:text-paper-100/70">
            {t.tagline}
          </p>
          {/* Newsletter */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-royal-700/15 bg-paper-100/60 p-1 pl-4 dark:border-cyanblue-400/15 dark:bg-obsidian-300/50"
          >
            <Mail className="h-4 w-4 text-royal-500 dark:text-cyanblue-400" />
            <input
              placeholder={lang === "kk" ? "Электрондық пошта" : lang === "ru" ? "Электронная почта" : "Email address"}
              className="w-full bg-transparent py-2 text-sm placeholder:text-royal-700/40 focus:outline-none dark:placeholder:text-paper-100/40"
              type="email"
            />
            <button className="btn-primary bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400">
              <Send className="h-3.5 w-3.5" /> {cta.learnMore}
            </button>
          </form>
        </div>

        <FooterCol
          title={nav.about}
          items={[nav.about, nav.events, nav.partners, nav.contact]}
        />
        <FooterCol
          title={nav.media}
          items={[
            dict[lang].media.magazine,
            dict[lang].media.news,
            dict[lang].media.press,
            dict[lang].media.gallery,
          ]}
        />
        <div className="md:col-span-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-royal-700/60 dark:text-paper-100/60">
            {nav.contact}
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2 text-royal-700/80 dark:text-paper-100/75">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-500 dark:text-cyanblue-400" />
              {t.address}
            </li>
            <li className="flex items-center gap-2 text-royal-700/80 dark:text-paper-100/75">
              <Phone className="h-4 w-4 text-gold-500 dark:text-cyanblue-400" /> +7 7172 79 04 04
            </li>
            <li className="flex items-center gap-2 text-royal-700/80 dark:text-paper-100/75">
              <Mail className="h-4 w-4 text-gold-500 dark:text-cyanblue-400" /> office@kazenergy.com
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2">
            {[Linkedin, Twitter, Youtube].map((Ic, i) => (
              <a
                key={i}
                href="#"
                className="ring-focus rounded-full border border-royal-700/15 p-2 text-royal-700/80 transition hover:border-royal-500/40 hover:text-royal-700 dark:border-cyanblue-400/20 dark:text-paper-100/70 dark:hover:border-cyanblue-400/60 dark:hover:text-paper-100"
              >
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-royal-700/10 dark:border-cyanblue-400/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-[11px] uppercase tracking-[0.22em] text-royal-700/55 md:flex-row md:px-8 dark:text-paper-100/55">
          <span>
            © {year} KAZENERGY Association. {t.rights}
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-royal-700 dark:hover:text-paper-100">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-royal-700 dark:hover:text-paper-100">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div className="md:col-span-2">
      <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-royal-700/60 dark:text-paper-100/60">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-royal-700/80 dark:text-paper-100/75">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="transition hover:text-royal-700 dark:hover:text-paper-100">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
