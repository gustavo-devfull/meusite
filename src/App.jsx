import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Formation from './components/Formation'
import Projects from './components/Projects'
import OtherProjects from './components/OtherProjects'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="text-on-background selection:bg-primary selection:text-white"
      style={{ background: 'linear-gradient(160deg, #6e7074 0%, #797b7f 40%, #85878b 100%)', minHeight: '100vh' }}
    >
      <ScrollProgress />
      <Navbar />
      <main style={{ paddingTop: '63px' }}>
        <Hero />
        <Skills />
        <Formation />
        <Projects />
        <OtherProjects onOpenLightbox={(src, alt) => setLightbox({ open: true, src, alt })} />
      </main>
      <Footer />
      <Lightbox
        open={lightbox.open}
        src={lightbox.src}
        alt={lightbox.alt}
        onClose={() => setLightbox({ open: false, src: '', alt: '' })}
      />
    </div>
  )
}
