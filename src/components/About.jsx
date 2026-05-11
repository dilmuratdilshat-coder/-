import { Gem, Heart, Star } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

const VALUES = [
  {
    icon: Gem,
    title: 'Quality Craftsmanship',
    desc: 'Every piece in our collection is carefully selected for its exceptional quality and enduring beauty.',
  },
  {
    icon: Heart,
    title: 'Personal Service',
    desc: 'We believe jewelry is personal. Our team is here to help you find the piece that tells your story.',
  },
  {
    icon: Star,
    title: 'Timeless Elegance',
    desc: 'From classic designs to modern styles, we offer jewelry that transcends trends and lasts a lifetime.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title mt-2">About Milan Jewelers</h2>
            <div className="gold-divider" />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="font-serif text-xl md:text-2xl text-charcoal-600 leading-relaxed mb-6">
              Nestled at 901 Atlantic Ave inside Saltwater Trading Co., Milan Jewelers
              is a welcoming jewelry destination in Ocean City, Maryland.
            </p>
            <p className="font-sans text-base text-charcoal-400 leading-relaxed">
              We take pride in offering a carefully curated selection of fine jewelry —
              from sparkling diamonds and lustrous gold to unique coastal-inspired pieces.
              Whether you&apos;re celebrating a special occasion, searching for the perfect gift,
              or treating yourself to something beautiful, our friendly team is here to help
              you find exactly what you&apos;re looking for.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12">
          {VALUES.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 150}>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full border border-champagne-dark/20 group-hover:bg-champagne-dark/10 transition-colors duration-300">
                  <item.icon
                    size={24}
                    className="text-champagne-dark"
                    strokeWidth={1.5}
                  />
                </div>
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
