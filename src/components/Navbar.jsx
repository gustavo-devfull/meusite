import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#797b7f]/80 backdrop-blur-xl shadow-[0px_20px_40px_rgba(0,0,0,0.15)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <a className="text-xl font-bold tracking-tighter text-white" href="#">GS</a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-gray-300 font-medium text-sm tracking-tight hover:text-white transition-colors duration-300" href="#formacao">Formação</a>
          <a className="text-gray-300 font-medium text-sm tracking-tight hover:text-white transition-colors duration-300" href="#projetos">Projetos</a>
          <a className="text-gray-300 font-medium text-sm tracking-tight hover:text-white transition-colors duration-300" href="https://gustavosantos.xyz/" target="_blank" rel="noreferrer">Site Antigo</a>
          <a className="text-gray-300 font-medium text-sm tracking-tight hover:text-white transition-colors duration-300" href="#contato">Contato</a>
          <div className="flex items-center ml-4">
            <a href="mailto:dev@gustavosantos.xyz" aria-label="Email">
              <span className="material-symbols-outlined text-white hover:opacity-70 transition-opacity">mail</span>
            </a>
          </div>
        </div>
        <button className="md:hidden cursor-pointer bg-transparent border-0" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="material-symbols-outlined text-white">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#6b6d71] shadow-lg border-t border-white/10">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <a className="text-gray-300 hover:text-white transition-colors" href="#formacao" onClick={() => setMenuOpen(false)}>Formação</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  )
}
