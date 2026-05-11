import AnimateOnScroll from './AnimateOnScroll'

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1515562141589-67f0d93ffcd6?w=800&h=600&fit=crop&q=80',
    alt: 'Diamond ring display',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop&q=80',
    alt: 'Gold necklace collection',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop&q=80',
    alt: 'Elegant bracelet',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80',
    alt: 'Jewelry on velvet display',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=600&fit=crop&q=80',
    alt: 'Pearl earrings',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&h=600&fit=crop&q=80',
    alt: 'Luxury watch',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section className="section-padding bg-charcoal-900">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-champagne-dark mt-2">
              A Closer Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-wide mt-2">
              Gallery
            </h2>
            <div className="gold-divider" />
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <AnimateOnScroll
              key={img.alt}
              delay={i * 80}
              className={img.span}
            >
              <div className="relative overflow-hidden aspect-square group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-sans text-xs text-white/90 tracking-wider">
                    {img.alt}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
