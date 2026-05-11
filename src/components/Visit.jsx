import { MapPin, Clock, Navigation } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Visit() {
  return (
    <section id="visit" className="section-padding bg-beige-50">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">Find Us</p>
            <h2 className="section-title mt-2">Visit Us</h2>
            <div className="gold-divider" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <AnimateOnScroll>
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-champagne-dark/20">
                  <MapPin size={20} className="text-champagne-dark" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-2">Milan Jewelers</h3>
                  <p className="font-sans text-sm text-charcoal-500 leading-relaxed">
                    901 Atlantic Ave<br />
                    Ocean City, MD 21842<br />
                    United States
                  </p>
                  <p className="font-sans text-xs text-champagne-dark mt-2 tracking-wide">
                    Located inside Saltwater Trading Co.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-champagne-dark/20">
                  <Clock size={20} className="text-champagne-dark" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-2">Business Hours</h3>
                  <p className="font-sans text-sm text-charcoal-500">
                    Open today &mdash; Closes at 6:00 PM
                  </p>
                  <p className="font-sans text-xs text-charcoal-400 mt-1">
                    Hours may vary seasonally. Please visit us for the most current schedule.
                  </p>
                </div>
              </div>

              {/* Directions */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=901+Atlantic+Ave+Ocean+City+MD+21842"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-primary"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </div>
          </AnimateOnScroll>

          {/* Map placeholder */}
          <AnimateOnScroll delay={200}>
            <div className="relative aspect-[4/3] bg-beige-200 overflow-hidden border border-beige-300">
              <iframe
                title="Milan Jewelers Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.5!2d-75.085!3d38.336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s901+Atlantic+Ave%2C+Ocean+City%2C+MD+21842!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Fallback overlay if map doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-beige-100 pointer-events-none opacity-0 transition-opacity">
                <div className="text-center">
                  <MapPin size={48} className="text-champagne-dark mx-auto mb-3" strokeWidth={1} />
                  <p className="font-serif text-lg text-charcoal-600">901 Atlantic Ave</p>
                  <p className="font-sans text-sm text-charcoal-400">Ocean City, MD 21842</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
