export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full px-6 border-t border-gray-100" style={{ paddingTop: '30px', paddingBottom: '30px', background: '#f8f8f8' }} id="contato" data-animate="blur">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-7xl mx-auto">
        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-400">
          © {year} Gustavo Santos
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="mailto:dev@gustavosantos.xyz" className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 relative group hover:text-gray-900 transition-colors">
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all group-hover:w-full" />
          </a>
          <a href="https://wa.me/5516997520110" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 relative group hover:text-gray-900 transition-colors">
            WhatsApp
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all group-hover:w-full" />
          </a>
          <a href="https://github.com/gustavo-devfull" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 relative group hover:text-gray-900 transition-colors">
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all group-hover:w-full" />
          </a>
          <a href="https://www.linkedin.com/in/gutosantos/" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 relative group hover:text-gray-900 transition-colors">
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  )
}
