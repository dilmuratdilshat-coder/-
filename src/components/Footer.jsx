import { Diamond } from 'lucide-react'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-beige-400">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Diamond size={18} className="text-champagne-dark" />
              <span className="font-serif text-xl tracking-wider text-white">
                Milan Jewelers
              </span>
            </div>
            <p className="font-sans text-xs text-beige-500 leading-relaxed">
              Fine jewelry in the heart of Ocean City, Maryland.
              Beautiful pieces, timeless style, and personal service.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-dark mb-5">
              Quick Links
            </h4>
            <div className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-xs text-beige-500 hover:text-champagne-dark transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-champagne-dark mb-5">
              Visit Us
            </h4>
            <div className="font-sans text-xs text-beige-500 leading-relaxed space-y-1">
              <p>Milan Jewelers</p>
              <p>901 Atlantic Ave</p>
              <p>Ocean City, MD 21842</p>
              <p>United States</p>
              <p className="text-champagne-dark/70 mt-2">
                Inside Saltwater Trading Co.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Milan Jewelers. All rights reserved.
          </p>
          <p className="font-sans text-xs text-charcoal-600">
            Crafted with care in Ocean City, MD
          </p>
        </div>
      </div>
    </footer>
  )
}
