import { useState } from 'react'
import { Send, MapPin, Store } from 'lucide-react'
import AnimateOnScroll from './AnimateOnScroll'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="section-subtitle">Get in Touch</p>
            <h2 className="section-title mt-2">Contact Us</h2>
            <div className="gold-divider" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info */}
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-charcoal-800 mb-4">
                  We&apos;d Love to See You
                </h3>
                <p className="font-sans text-sm text-charcoal-400 leading-relaxed">
                  The best way to experience our jewelry collection is to visit us in person.
                  Our friendly team is ready to help you find the perfect piece.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <Store size={20} className="text-champagne-dark mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal-700">Visit Us In Store</p>
                  <p className="font-sans text-sm text-charcoal-400 mt-1">
                    Stop by anytime during business hours — no appointment needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-champagne-dark mt-1" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal-700">Our Address</p>
                  <p className="font-sans text-sm text-charcoal-400 mt-1">
                    Milan Jewelers<br />
                    901 Atlantic Ave<br />
                    Ocean City, MD 21842<br />
                    Inside Saltwater Trading Co.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right — form */}
          <AnimateOnScroll delay={200}>
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-10">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-champagne-dark/10">
                    <Send size={24} className="text-champagne-dark" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-2">Thank You!</h3>
                  <p className="font-sans text-sm text-charcoal-400">
                    Your message has been received. We look forward to seeing you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-beige-50 border border-beige-200 font-sans text-sm text-charcoal-700 placeholder:text-charcoal-300 focus:outline-none focus:border-champagne-dark transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-beige-50 border border-beige-200 font-sans text-sm text-charcoal-700 placeholder:text-charcoal-300 focus:outline-none focus:border-champagne-dark transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-beige-50 border border-beige-200 font-sans text-sm text-charcoal-700 placeholder:text-charcoal-300 focus:outline-none focus:border-champagne-dark transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn-primary flex items-center gap-3">
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
