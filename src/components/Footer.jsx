export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-high w-full px-6" style={{ paddingTop: '30px', paddingBottom: '30px' }} id="contato" data-animate="blur">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-7xl mx-auto">
        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant">
          © {year} Gustavo Santos
        </p>
        <div className="flex flex-wrap gap-6">
          <a href="mailto:dev@gustavosantos.xyz" className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface relative group">
            Email
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="https://wa.me/5516997520110" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface relative group">
            WhatsApp
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="https://github.com/gustavo-devfull" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface relative group">
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
          <a href="https://www.linkedin.com/in/gutosantos/" target="_blank" rel="noreferrer" className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface relative group">
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  )
}
