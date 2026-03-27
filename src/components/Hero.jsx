import { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero-guto.jpg'

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    function updateParallax() {
      if (!imgRef.current) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`
    }
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => window.removeEventListener('scroll', updateParallax)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" id="hero">
      {/* Mobile */}
      <div className="md:hidden w-full hero-animate relative" style={{ height: '60vw', maxHeight: '400px' }}>
        <img
          alt="Gustavo Santos"
          src={heroImg}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%', height: '100%' }}
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, #797b7f 100%)' }} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block absolute inset-0">
        <img
          ref={imgRef}
          alt="Gustavo Santos"
          className="w-full h-full object-cover"
          src={heroImg}
          style={{ height: '100%' }}
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #797b7f 0%, #797b7fcc 30%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #797b7f 0%, transparent 40%)' }} />
      </div>

      {/* Content */}
      <div className="hero-content relative max-w-7xl mx-auto px-6 w-full z-10 text-left flex flex-col items-start md:justify-center">
        <div className="max-w-4xl py-12 md:pt-20 md:pb-0">
          <div className="inline-block text-base text-stone-500 mb-8 opacity-50 hero-animate" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            console.log("hello world!")
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 hero-animate">
            Gustavo Santos <br />
            <span className="text-4xl md:text-5xl opacity-90 block mt-4 font-normal text-gray-200">
              Front-End Developer <span className="opacity-70">& Designer</span>
            </span>
          </h1>
          <p className="text-xl text-gray-200 font-medium max-w-2xl mb-12 hero-animate">
            Desenvolvedor Front-End apaixonado por design e tecnologia, dedicado a criar soluções inovadoras e eficientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start hero-animate">
            <a href="#projetos" className="btn-primary bg-white text-[#4a4c50] px-8 py-4 rounded-full font-bold text-sm tracking-wide">Ver Projetos</a>
            <a href="#contato" className="btn-secondary bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide">Contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}
