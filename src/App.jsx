import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collections from './components/Collections'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Collections />
      <Services />
      <Gallery />
      <Visit />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
