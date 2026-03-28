import { useEffect, useRef } from 'react'
import heroImg from '../../assets/hero-guto.jpg'

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    function updateParallax() {
      if (!imgRef.current || window.innerWidth < 768) return
      imgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`
    }
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => window.removeEventListener('scroll', updateParallax)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" id="hero">

      {/* Foto de fundo */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          alt="Gustavo Santos"
          src={heroImg}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%' }}
          fetchpriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Gradiente mobile: foto visível até ~60%, fade rápido depois */}
        <div
          className="md:hidden absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(121,123,127,0.05) 0%, rgba(121,123,127,0.15) 50%, rgba(121,123,127,0.75) 70%, #797b7f 85%)' }}
        />
        {/* Gradiente desktop: lateral + base */}
        <div
          className="hidden md:block absolute inset-0"
          style={{ background: 'linear-gradient(to right, #797b7f 0%, rgba(121,123,127,0.85) 35%, transparent 65%)' }}
        />
        <div
          className="hidden md:block absolute inset-0"
          style={{ background: 'linear-gradient(to top, #797b7f 0%, transparent 45%)' }}
        />
      </div>

      {/* Conteúdo */}
      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-end md:justify-center pb-16 md:pb-0">
        <div className="max-w-lg md:max-w-4xl">

          {/* Badge — desktop only */}
          <div
            className="hidden md:inline-flex items-center gap-2 text-sm text-white/50 mb-8 hero-animate"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            console.log("hello world!")
          </div>

          {/* Nome */}
          <h1 className="font-bold tracking-tight text-white leading-[1.05] mb-3 md:mb-6 hero-animate"
            style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}>
            Gustavo Santos
          </h1>

          {/* Cargo */}
          <p className="text-gray-200 font-normal mb-3 md:mb-6 hero-animate"
            style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', opacity: 0.85 }}>
            Front-End Developer <span style={{ opacity: 0.6 }}>&amp; Designer</span>
          </p>

          {/* Descrição */}
          <p className="text-gray-300 max-w-md mb-7 md:mb-10 hero-animate leading-relaxed"
            style={{ fontSize: 'clamp(0.8rem, 2vw, 1.1rem)' }}>
            Apaixonado por design e tecnologia, criando soluções inovadoras e eficientes.
          </p>

          {/* Botões */}
          <div className="flex flex-row gap-3 hero-animate">
            <a
              href="#projetos"
              className="btn-primary bg-white text-[#4a4c50] px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="btn-secondary bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-xs md:text-sm tracking-wide"
            >
              Contato
            </a>
          </div>

        </div>
      </div>

    </section>
  )
}
