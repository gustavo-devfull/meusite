import { useState } from 'react'
import ProjectModal from './ProjectModal'
import raviImg from '../../assets/ravi.jpg'
import spaceInvadersImg from '../../assets/space-invaders.jpg'

const projects = [
  {
    href: null,
    img: raviImg,
    imgAlt: 'Base de Produtos',
    title: 'Base de Produtos',
    tag: 'Front-End • Sistema Interno',
    heading: 'Sistema interno de catálogo de produtos',
    description: 'Sistema interno de catálogo de produtos voltado aparentemente para uma empresa que importa produtos, com foco em facilitar a gestão e consulta da base de itens. Bem estruturado e com uma stack moderna.',
    gradient: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
    animate: 'left',
    delay: '0.1s',
    modal: {
      title: '🗂️ Base Ravi 2025 — Sistema de Gestão de Produtos',
      intro: 'É uma aplicação web completa para gerenciar um catálogo/base de produtos, desenvolvida em React + TypeScript, com banco de dados no Firebase Firestore e deploy na Vercel.',
      features: [
        {
          name: 'Cadastro e gestão de produtos (CRUD completo)',
          desc: 'Permite criar, visualizar, editar e excluir produtos com mais de 30 campos cada — incluindo referência, marca, descrição, preços em RMB e USD, dimensões, peso, códigos EAN/DUN/NCM/CEST, nomes para invoice, entre outros.',
        },
        {
          name: 'Dashboard visual com cards',
          desc: 'Exibe os produtos em um grid responsivo (3 por linha no desktop, 2 no tablet, 1 no mobile), com imagem de cada produto carregada diretamente do DigitalOcean Spaces com base na referência do produto.',
        },
        {
          name: 'Importação via planilha Excel',
          desc: 'O usuário pode baixar um template .xlsx, preencher os dados e fazer upload. O sistema valida os dados automaticamente, exibe um preview, permite edição em lote antes de salvar tudo no banco.',
        },
        {
          name: 'Busca e filtros avançados',
          desc: 'Filtragem em tempo real sobre os produtos cadastrados.',
        },
        {
          name: 'Visualização detalhada',
          desc: 'Modal com todos os campos do produto + imagem ampliada com zoom.',
        },
      ],
      stack: [
        'React 18 + TypeScript',
        'Vite',
        'Tailwind CSS',
        'Firebase Firestore',
        'DigitalOcean Spaces',
        'XLSX',
        'Vercel',
      ],
    },
  },
  {
    href: 'https://gustavosantos.xyz/spaceinvaders/',
    img: spaceInvadersImg,
    imgAlt: 'Space Invaders',
    title: 'Space Invaders',
    tag: 'Game Dev • JS',
    heading: 'Game: Space Invaders',
    description: 'Desenvolvimento da mecânica clássica de Space Invaders utilizando HTML Canvas e JavaScript vanilla para lógica e movimentação.',
    gradient: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
    extraGradient: 'linear-gradient(135deg, rgba(30,58,138,0.7) 0%, rgba(0,0,0,0.5) 100%)',
    animate: 'right',
    delay: '0.25s',
    modal: null,
  },
]

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section id="projetos" style={{ paddingTop: '30px', paddingBottom: '48px', background: 'linear-gradient(180deg, #6e7074 0%, #797b7f 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8" data-animate="left">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight gradient-title">Projetos em Destaque</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.imgAlt} data-animate={p.animate} className="group cursor-pointer" style={{ transitionDelay: p.delay }}>
              <div className="block">
                <div className="project-card aspect-video bg-surface-container-lowest rounded-xl overflow-hidden mb-4 shadow-[0px_20px_40px_rgba(0,0,0,0.3)] relative flex flex-col items-center justify-end outline outline-2 outline-white/20">
                  <img className="absolute inset-0 w-full h-full object-cover" style={{ height: '100%' }} src={p.img} alt={p.imgAlt} loading="lazy" decoding="async" />
                  {p.extraGradient && <div className="absolute inset-0" style={{ background: p.extraGradient }} />}
                  <div className="absolute inset-0" style={{ background: p.gradient }} />
                  <h3 className="relative text-white text-2xl md:text-3xl font-bold opacity-90 mb-4">{p.title}</h3>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">{p.tag}</span>
                <h2 className="text-base font-bold mb-2">{p.heading}</h2>
                <p className="text-xs text-on-surface-variant mb-3">{p.description}</p>
                {p.modal ? (
                  <button
                    onClick={() => setActiveModal(p)}
                    className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform text-primary bg-transparent border-0 cursor-pointer p-0"
                  >
                    Ver Projeto <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                ) : (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform text-primary"
                  >
                    Ver Projeto <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeModal && (
        <ProjectModal project={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </section>
  )
}
