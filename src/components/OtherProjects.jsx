import { useState } from 'react'
import ProjectModal from './ProjectModal'
import proj1 from '../../assets/gpreto.jpg'
import img99 from '../../assets/99.jpg'
import proj2 from '../../assets/ingles.jpg'
import proj3 from '../../assets/quiz.jpg'
import proj4 from '../../assets/qr.jpg'
import proj5 from '../../assets/iabr.jpg'
import proj6 from '../../assets/nutri.jpg'

const projects = [
  {
    img: proj1,
    alt: 'Portfólio GPRETO',
    tag: 'Front-End • React',
    title: 'Portfólio GPRETO',
    desc: 'Site de portfólio desenvolvido com foco em experiência visual, combinando animações com Framer Motion e renderização 3D via WebGL (OGL). Conta com formulário de contato funcional integrado ao EmailJS e design system construído sobre Tailwind CSS.',
    lightboxImg: img99,
    delay: '0.1s',
    modal: {
      title: '🧑‍💻 Portfólio GPRETO',
      intro: 'Site de portfólio desenvolvido com foco em experiência visual, combinando animações com Framer Motion e renderização 3D via WebGL (OGL). Conta com componentes acessíveis via Radix UI, formulário de contato funcional integrado ao EmailJS e design system construído sobre Tailwind CSS.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'React · Framer Motion · OGL (WebGL) · Radix UI · EmailJS · Tailwind CSS · Vite' },
        { name: 'Deploy', desc: 'Vercel — portfolio-gustavosantos.vercel.app' },
      ],
    },
  },
  {
    img: proj2,
    alt: 'Meninas Atividades',
    tag: 'Front-End • React · PWA',
    title: 'Meninas Atividades',
    desc: 'Aplicação web progressiva (PWA) para gerenciamento de atividades, com dados sincronizados em tempo real via Firebase Firestore. Por ser uma PWA, pode ser instalada como app no dispositivo sem necessidade de loja.',
    delay: '0.25s',
    modal: {
      title: '📅 Meninas Atividades',
      intro: 'Aplicação web progressiva (PWA) para gerenciamento de atividades, com dados sincronizados em tempo real via Firebase Firestore. Conta com navegação por rotas, manipulação de datas e interface construída com Material UI. Por ser uma PWA, pode ser instalada como app no dispositivo sem necessidade de loja.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'React · Firebase · Material UI · React Router · date-fns · Tailwind CSS · Vite' },
        { name: 'Deploy', desc: 'Vercel' },
      ],
    },
  },
  {
    img: proj3,
    alt: 'Quiz & Reveal — Descoberta de Personalidade',
    tag: 'Front-End • React',
    title: 'Quiz & Reveal — Descoberta de Personalidade',
    desc: 'Aplicação web interativa de quiz com 5 perguntas de múltipla escolha, onde cada alternativa carrega uma pontuação ponderada.',
    delay: '0.4s',
    modal: {
      title: '🧠 Quiz & Reveal — Descoberta de Personalidade',
      intro: 'Aplicação web interativa de quiz com 5 perguntas de múltipla escolha, onde cada alternativa carrega uma pontuação ponderada. Ao final, a soma total mapeia o usuário para um dos 5 perfis de personalidade, revelando o resultado de forma dinâmica.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'React · TypeScript · Tailwind CSS · shadcn/ui · Vite' },
        { name: 'Deploy', desc: 'Vercel' },
      ],
    },
  },
  {
    img: proj4,
    alt: 'Site gustavosantos.xyz',
    tag: 'Front-End • Vue.js',
    title: 'Gerador de QRCode',
    desc: 'Aplicação web para geração de QR Codes a partir de links ou texto livre, com opções de customização de tamanho, cor do código e cor de fundo. O QR Code é gerado em tempo real e pode ser copiado para a área de transferência ou baixado como PNG.',
    delay: '0.1s',
    modal: {
      title: '📷 Gerador de QRCode',
      intro: 'Aplicação web para geração de QR Codes a partir de links ou texto livre, com opções de customização de tamanho, cor do código e cor de fundo. O QR Code é gerado em tempo real e pode ser copiado para a área de transferência ou baixado como PNG.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'Vue.js · QRious · HTML/CSS vanilla' },
        { name: 'Deploy', desc: 'FTP' },
      ],
    },
  },
  {
    img: proj5,
    alt: 'IA.br Checker',
    tag: 'Front-End • Vue.js',
    title: 'IA.br Checker',
    desc: 'Ferramenta web para verificação de disponibilidade de domínios .ia.br via protocolo RDAP. O usuário insere palavras terminadas em -ia e a aplicação extrai automaticamente o prefixo no formato correto (ex.: utopia → utop.ia.br), consulta a disponibilidade em tempo real e permite exportar os resultados em CSV.',
    delay: '0.25s',
    modal: {
      title: '🌐 IA.br Checker',
      intro: 'Ferramenta web para verificação de disponibilidade de domínios .ia.br via protocolo RDAP. O usuário insere palavras terminadas em -ia e a aplicação extrai automaticamente o prefixo no formato correto (ex.: utopia → utop.ia.br), consulta a disponibilidade em tempo real e permite exportar os resultados em CSV.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'Vue.js · RDAP API · HTML/CSS vanilla' },
        { name: 'Deploy', desc: 'Vercel' },
      ],
    },
  },
  {
    img: proj6,
    alt: 'NutriG — Plano Alimentar',
    tag: 'Front-End • React',
    title: 'NutriG — Plano Alimentar',
    desc: 'Aplicação web de acompanhamento nutricional com armazenamento em nuvem via Firebase. Permite visualizar e gerenciar um plano alimentar personalizado, com suporte a exportação dos dados em formato Excel.',
    delay: '0.4s',
    modal: {
      title: '🥗 NutriG — Plano Alimentar',
      intro: 'Aplicação web de acompanhamento nutricional com armazenamento em nuvem via Firebase. Permite visualizar e gerenciar um plano alimentar personalizado, com suporte a exportação dos dados em formato Excel. O projeto passou por uma refatoração de vanilla JS para React, evidenciando evolução na arquitetura do código.',
      stackDetails: [
        { name: 'Tecnologias', desc: 'React · Firebase · ExcelJS · Vite · JavaScript' },
        { name: 'Deploy', desc: 'Vercel' },
      ],
    },
  },
]

export default function OtherProjects({ onOpenLightbox }) {
  const [activeModal, setActiveModal] = useState(null)

  function handleClick(p) {
    if (p.modal) {
      setActiveModal(p)
    } else {
      onOpenLightbox(p.img, p.alt)
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6" style={{ paddingTop: '30px', paddingBottom: '48px', position: 'relative' }}>
      <div className="flex justify-between items-end mb-8" data-animate="left">
        <h2 className="text-2xl md:text-3xl font-bold gradient-title">Outros Projetos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            data-animate
            className="project-card bg-surface-container-high rounded-xl overflow-hidden flex flex-col border border-white/10 shadow-md cursor-pointer lightbox-trigger"
            style={{ transitionDelay: p.delay }}
            onClick={() => handleClick(p)}
          >
            <div className="img-wrap overflow-hidden relative" style={{ height: '140px' }}>
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ height: '140px' }}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-4 flex flex-col gap-1.5 flex-1">
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant">{p.tag}</span>
              <h3 className="text-sm font-bold text-on-surface leading-tight flex items-center gap-2">
                {p.title}
                {p.lightboxImg && (
                  <span
                    className="w-7 h-7 flex items-center justify-center bg-green-500 text-white text-xs font-black rounded-full shadow-md cursor-pointer shrink-0"
                    onClick={(e) => { e.stopPropagation(); onOpenLightbox(p.lightboxImg, p.alt) }}
                  >
                    99
                  </span>
                )}
              </h3>
              <p className="text-xs text-on-surface-variant flex-1">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  )
}
