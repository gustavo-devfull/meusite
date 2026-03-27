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
      {/* Mobile: foto com nome sobreposto */}
      <div className="md:hidden w-full hero-animate relative" style={{ height: '72vw', maxHeight: '420px' }}>
        <img
          alt="Gustavo Santos"
          src={heroImg}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%', height: '100%' }}
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(121,123,127,0.85) 75%, #797b7f 100%)' }} />
        {/* Nome sobre a foto no mobile */}
        <div className="absolute bottom-0 left-0 px-5 pb-5">
          <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
            Gustavo Santos
          </h1>
        </div>
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
        <div className="max-w-4xl pt-5 pb-8 md:pt-20 md:pb-0">
          <div className="text-base text-stone-500 mb-6 opacity-50 hero-animate hidden md:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            console.log("hello world!")
          </div>
          {/* Nome visível só no desktop */}
          <h1 className="hidden md:block text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 hero-animate">
            Gustavo Santos <br />
            <span className="text-5xl opacity-90 block mt-4 font-normal text-gray-200">
              Front-End Developer <span className="opacity-70">& Designer</span>
            </span>
          </h1>
          {/* Subtítulo e descrição mobile */}
          <p className="md:hidden text-base font-semibold text-gray-200 mb-1 hero-animate">
            Front-End Developer <span className="opacity-70">& Designer</span>
          </p>
          <p className="text-sm md:text-xl text-gray-300 md:text-gray-200 md:font-medium max-w-2xl mb-6 md:mb-12 hero-animate">
            Desenvolvedor Front-End apaixonado por design e tecnologia, dedicado a criar soluções inovadoras e eficientes.
          </p>
          <div className="flex flex-row gap-3 justify-start hero-animate">
            <a href="#projetos" className="btn-primary bg-white text-[#4a4c50] px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide">Ver Projetos</a>
            <a href="#contato" className="btn-secondary bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide">Contato</a>
          </div>
        </div>
      </div>
    </section>
  )
}
