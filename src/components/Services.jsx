import { ShoppingBag, Gift, Sparkles, PartyPopper, Shell } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const SERVICES = [
  {
    icon: ShoppingBag,
    title: 'Jewelry Sales',
    desc: 'Browse our curated collection of fine rings, necklaces, bracelets, earrings, and watches in store.',
  },
  {
    icon: Gift,
    title: 'Gift Selection',
    desc: 'Let us help you find the perfect gift for any occasion — birthdays, anniversaries, holidays, and more.',
  },
  {
    icon: Sparkles,
    title: 'Custom Recommendations',
    desc: 'Our knowledgeable team offers personalized suggestions tailored to your style and budget.',
  },
  {
    icon: PartyPopper,
    title: 'Special Occasion Jewelry',
    desc: 'Celebrate life\u2019s biggest moments with a piece as unforgettable as the occasion itself.',
  },
  {
    icon: Shell,
    title: 'Vacation Keepsakes',
    desc: 'Take home a beautiful reminder of your time by the ocean — a treasure from the shore.',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">How We Help</p>
            <h2 className="section-title mt-2">Our Services</h2>
            <div className="gold-divider" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <div className="relative p-8 bg-beige-50/50 border border-beige-200 hover:border-champagne-dark/30 hover:shadow-lg transition-all duration-300 group">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-champagne-dark/30" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-champagne-dark/30" />

                <item.icon
                  size={28}
                  className="text-champagne-dark mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
