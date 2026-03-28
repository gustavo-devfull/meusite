import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl shadow-[0px_1px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <a className="text-xl font-bold tracking-tighter text-gray-900" href="#">GS</a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-gray-500 font-medium text-sm tracking-tight hover:text-gray-900 transition-colors duration-300" href="#formacao">Formação</a>
          <a className="text-gray-500 font-medium text-sm tracking-tight hover:text-gray-900 transition-colors duration-300" href="#projetos">Projetos</a>
          <a className="text-gray-500 font-medium text-sm tracking-tight hover:text-gray-900 transition-colors duration-300" href="https://gustavosantos.xyz/" target="_blank" rel="noreferrer">Site Antigo</a>
          <a className="text-gray-500 font-medium text-sm tracking-tight hover:text-gray-900 transition-colors duration-300" href="#contato">Contato</a>
          <div className="flex items-center ml-4">
            <a href="mailto:dev@gustavosantos.xyz" aria-label="Email">
              <span className="material-symbols-outlined text-gray-600 hover:text-gray-900 transition-colors">mail</span>
            </a>
          </div>
        </div>
        <button className="md:hidden cursor-pointer bg-transparent border-0" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className="material-symbols-outlined text-gray-700">menu</span>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <a className="text-gray-600 hover:text-gray-900 transition-colors" href="#formacao" onClick={() => setMenuOpen(false)}>Formação</a>
            <a className="text-gray-600 hover:text-gray-900 transition-colors" href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
            <a className="text-gray-600 hover:text-gray-900 transition-colors" href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  )
}
