import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #D4A843 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, #D4A843 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Soft gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-dark/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="w-12 h-px bg-champagne-dark/40" />
          <span className="font-sans text-xs tracking-[0.4em] uppercase text-champagne-dark/70">
            Est. Ocean City, Maryland
          </span>
          <span className="w-12 h-px bg-champagne-dark/40" />
        </div>

        {/* Main title */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-wider mb-6 animate-fade-in-up">
          Milan
          <span className="block text-champagne-dark">Jewelers</span>
        </h1>

        {/* Tagline */}
        <p className="font-serif text-xl md:text-2xl font-light text-beige-300 italic mb-4 animate-fade-in-up"
           style={{ animationDelay: '0.2s' }}>
          Fine Jewelry in the Heart of Ocean City
        </p>

        {/* Description */}
        <p
          className="font-sans text-sm md:text-base text-beige-400/80 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Discover beautiful pieces, timeless style, and personal service
          at our boutique jewelry destination by the shore.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <a href="#visit" className="btn-primary">
            Visit Us
          </a>
          <a href="#collections" className="btn-outline">
            Explore Jewelry
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-champagne-dark/50 hover:text-champagne-dark transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
