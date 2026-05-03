import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Facebook,
  Youtube,
  Send,
  ShieldCheck,
} from "lucide-react";
import { dict } from "../i18n";
import {
  associationLinks,
  activitiesLinks,
  pressLinks,
  social,
  contact,
} from "../links";

export default function Footer({ lang }) {
  const t = dict[lang].footer;
  const cols = dict[lang].footerCols;
  const a = dict[lang].association;
  const act = dict[lang].activities.items;
  const press = dict[lang].press;
  const cta = dict[lang].cta;
  const year = new Date().getFullYear();

  const aUrls = associationLinks(lang);
  const actUrls = activitiesLinks(lang);
  const pUrls = pressLinks(lang);

  const associationCol = [
    { label: a.members, href: aUrls.members, external: true },
    { label: a.benefits, href: aUrls.benefits, external: true },
    { label: a.conditions, href: "/docs/joining-association.pdf", download: true },
    { label: a.about, href: aUrls.about, external: true },
    { label: a.structure, href: aUrls.structure, external: true },
    { label: a.contacts, href: aUrls.contacts, external: true },
    { label: a.career, href: aUrls.career, external: true },
    { label: a.procurement, href: aUrls.procurement, external: true },
  ];
  const activitiesCol = [
    { label: act.legal, href: actUrls.legal, external: true },
    { label: act.ecology, href: actUrls.ecology, external: true },
    { label: act.oilGas, href: actUrls.oilGas, external: true },
    { label: act.power, href: actUrls.power, external: true },
    { label: act.regulation, href: actUrls.regulation, external: true },
    { label: act.intl, href: actUrls.intl, external: true },
    { label: act.capital, href: actUrls.capital, external: true },
    { label: act.forum, href: actUrls.forum, external: true },
    { label: act.councils, href: actUrls.councils, external: true },
    { label: act.science, href: actUrls.science, external: true },
  ];
  const pressCol = [
    { label: press.news, href: pUrls.news, external: true },
    { label: press.victory, href: "#victory" },
    { label: press.anniversary, href: "#anniversary" },
    { label: press.photo, href: pUrls.photo, external: true },
    { label: press.video, href: pUrls.video, external: true },
  ];

  return (
    <footer
      id="contact"
      className="relative mt-24 border-t border-royal-700/10 dark:border-cyanblue-400/10"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent dark:via-cyanblue-400/60" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-12 md:px-8">
        {/* Brand + newsletter */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/anniversary-logo.png"
              alt="KAZENERGY"
              className="h-12 w-auto"
            />
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
              placeholder={
                lang === "kk"
                  ? "Электрондық пошта"
                  : lang === "ru"
                    ? "Электронная почта"
                    : "Email address"
              }
              className="w-full bg-transparent py-2 text-sm placeholder:text-royal-700/40 focus:outline-none dark:placeholder:text-paper-100/40"
              type="email"
            />
            <button className="btn-primary bg-gradient-to-br from-royal-700 to-royal-500 text-paper-100 hover:from-gold-500 hover:to-gold-400 hover:text-royal-700 dark:from-cyanblue-500 dark:to-cyanblue-600 dark:hover:from-gold-500 dark:hover:to-gold-400">
              <Send className="h-3.5 w-3.5" /> {cta.learnMore}
            </button>
          </form>

          {/* Accreditation badge */}
          <a
            href="#accreditation"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-royal-700/15 bg-paper-100/60 px-4 py-2 text-xs font-semibold text-royal-700 transition hover:border-gold-500/40 hover:text-gold-500 dark:border-cyanblue-400/20 dark:bg-obsidian-300/40 dark:text-paper-100 dark:hover:border-cyanblue-400/60 dark:hover:text-cyanblue-400"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {t.accreditation}
          </a>
        </div>

        <FooterCol title={cols.association} items={associationCol} />
        <FooterCol title={cols.activities} items={activitiesCol} />
        <FooterCol title={cols.press} items={pressCol} />

        <div className="md:col-span-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-royal-700/60 dark:text-paper-100/60">
            {cols.contact}
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2 text-royal-700/80 dark:text-paper-100/75">
              <MapPin className="mt-0.5 h-4 w-4 text-gold-500 dark:text-cyanblue-400" />
              <span>{t.address}</span>
            </li>
            <li className="flex items-center gap-2 text-royal-700/80 dark:text-paper-100/75">
              <Phone className="h-4 w-4 text-gold-500 dark:text-cyanblue-400" />
              <a
                href={`tel:${contact.phoneTel}`}
                className="hover:text-royal-700 dark:hover:text-paper-100"
              >
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-royal-700/80 dark:text-paper-100/75">
              <Mail className="h-4 w-4 text-gold-500 dark:text-cyanblue-400" />
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-royal-700 dark:hover:text-paper-100"
              >
                {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2">
            {[
              { Ic: Linkedin, href: social.linkedin, label: "LinkedIn" },
              { Ic: Facebook, href: social.facebook, label: "Facebook" },
              { Ic: Youtube, href: social.youtube, label: "YouTube" },
            ].map(({ Ic, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
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
            {t.sitemap} · KAZENERGY 2005–{year} © {t.rights}
          </span>
          <div className="flex items-center gap-5">
            <a href="#sitemap" className="hover:text-royal-700 dark:hover:text-paper-100">
              {t.sitemap}
            </a>
            <a href="#privacy" className="hover:text-royal-700 dark:hover:text-paper-100">
              {t.privacy}
            </a>
            <a href="#terms" className="hover:text-royal-700 dark:hover:text-paper-100">
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
          <li key={i.label}>
            <a
              href={i.href}
              target={i.external ? "_blank" : undefined}
              rel={i.external ? "noreferrer" : undefined}
              download={i.download ? "" : undefined}
              className="transition hover:text-royal-700 dark:hover:text-paper-100"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
