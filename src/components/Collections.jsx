import AnimateOnScroll from './AnimateOnScroll'

const COLLECTIONS = [
  {
    title: 'Rings',
    desc: 'From elegant engagement rings to timeless bands, discover pieces that mark life\u2019s most meaningful moments.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=700&fit=crop&q=80',
  },
  {
    title: 'Necklaces',
    desc: 'Delicate chains, statement pendants, and layered designs to frame your look with effortless grace.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=700&fit=crop&q=80',
  },
  {
    title: 'Bracelets',
    desc: 'Tennis bracelets, bangles, and charm pieces that add a touch of sparkle to every gesture.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=700&fit=crop&q=80',
  },
  {
    title: 'Earrings',
    desc: 'Studs, hoops, and drops crafted to complement your unique style — from everyday to extraordinary.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=700&fit=crop&q=80',
  },
  {
    title: 'Watches',
    desc: 'Classic timepieces that blend precision with elegance — the perfect accessory for any occasion.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=700&fit=crop&q=80',
  },
  {
    title: 'Gifts & Keepsakes',
    desc: 'Thoughtfully chosen treasures for every milestone — vacation memories, anniversaries, and cherished celebrations.',
    image: 'https://images.unsplash.com/photo-1513884923967-4b182ef167ab?w=600&h=700&fit=crop&q=80',
  },
]

export default function Collections() {
  return (
    <section id="collections" className="section-padding bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title mt-2">Our Collections</h2>
            <div className="gold-divider" />
            <p className="font-sans text-sm text-charcoal-400 mt-4 max-w-lg mx-auto">
              Explore our carefully curated selection of fine jewelry, each piece chosen
              for its beauty, quality, and timeless appeal.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 100}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal-800 mb-2 group-hover:text-champagne-dark transition-colors duration-300">
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
