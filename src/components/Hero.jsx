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

      {/* ── MOBILE ── */}
      <div className="md:hidden">
        {/* Foto */}
        <div className="w-full overflow-hidden" style={{ height: '62vw', maxHeight: '360px' }}>
          <img
            alt="Gustavo Santos"
            src={heroImg}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 8%' }}
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Texto imediatamente abaixo da foto */}
        <div className="px-5 pt-5 pb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white leading-tight mb-1 hero-animate">
            Gustavo Santos
          </h1>
          <p className="text-sm text-gray-300 mb-3 hero-animate">
            Front-End Developer <span className="opacity-60">&amp; Designer</span>
          </p>
          <p className="text-xs text-white leading-relaxed mb-6 max-w-xs hero-animate">
            Apaixonado por design e tecnologia, criando soluções inovadoras e eficientes.
          </p>
          <div className="flex flex-row gap-3 hero-animate">
            <a href="#projetos" className="btn-primary bg-white text-[#4a4c50] py-2.5 rounded-full font-bold text-xs tracking-wide flex-1 text-center">
              Ver Projetos
            </a>
            <a href="#contato" className="btn-secondary bg-white/10 backdrop-blur-md border border-white/30 text-white py-2.5 rounded-full font-bold text-xs tracking-wide flex-1 text-center">
              Contato
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        {/* Foto de fundo */}
        <div className="absolute inset-0">
          <img
            ref={imgRef}
            alt="Gustavo Santos"
            src={heroImg}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 15%', height: '100%' }}
            fetchpriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #797b7f 0%, rgba(121,123,127,0.85) 35%, transparent 65%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #797b7f 0%, transparent 45%)' }} />
        </div>

        {/* Conteúdo centralizado */}
        <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
          <div className="max-w-4xl pt-20 pb-0">
            <div
              className="inline-flex items-center gap-2 text-sm text-white/50 mb-8 hero-animate"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              console.log("hello world!")
            </div>
            <h1 className="text-8xl font-bold tracking-tight text-white leading-[1.05] mb-6 hero-animate">
              Gustavo Santos
              <span className="text-5xl opacity-90 block mt-4 font-normal text-gray-200">
                Front-End Developer <span className="opacity-70">&amp; Designer</span>
              </span>
            </h1>
            <p className="text-xl text-gray-200 font-medium max-w-2xl mb-10 hero-animate">
              Apaixonado por design e tecnologia, criando soluções inovadoras e eficientes.
            </p>
            <div className="flex flex-row gap-4 hero-animate">
              <a href="#projetos" className="btn-primary bg-white text-[#4a4c50] px-8 py-4 rounded-full font-bold text-sm tracking-wide">
                Ver Projetos
              </a>
              <a href="#contato" className="btn-secondary bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
