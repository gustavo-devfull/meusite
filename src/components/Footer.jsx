export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-high w-full py-20 px-6" id="contato" data-animate="blur">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          © {year} Gustavo Santos. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap gap-8">
          <a href="mailto:dev@gustavosantos.xyz" className="text-xs font-bold uppercase tracking-widest text-on-surface relative group">
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="https://wa.me/5516997520110" target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest text-on-surface relative group">
            WhatsApp
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface relative group opacity-50 cursor-not-allowed" title="Link não fornecido">
            GitHub
          </a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-on-surface relative group opacity-50 cursor-not-allowed" title="Link não fornecido">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
