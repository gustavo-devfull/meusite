const formations = [
  {
    type: 'Graduação',
    icon: 'school',
    title: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário Senac — EAD, São Paulo',
    description: 'Graduação tecnológica (2,5 anos) em desenvolvimento de sistemas front-end e back-end, arquitetura de software e programação para desktop e mobile. Nota 5 pelo MEC em 2024.',
    delay: '0.1s',
  },
  {
    type: 'Bootcamp',
    icon: 'rocket_launch',
    title: 'Inter Frontend Developer',
    institution: 'DIO | Digital Innovation One',
    description: 'Bootcamp de desenvolvimento front-end com foco em lógica de programação, Git/GitHub, React e práticas modernas de desenvolvimento de software.',
    delay: '0.25s',
  },
  {
    type: 'Curso Completo',
    icon: 'menu_book',
    title: 'Desenvolvimento Web Completo — 20 cursos + 20 projetos',
    institution: 'Udemy',
    description: 'Formação prática em desenvolvimento web front-end e back-end com HTML5, CSS3, Bootstrap, JavaScript (ES6+), PHP, MySQL, APIs REST e IONIC. 20 projetos reais desenvolvidos ao longo da trilha.',
    delay: '0.4s',
  },
]

export default function Formation() {
  return (
    <section className="max-w-7xl mx-auto px-6 border-t border-outline-variant/10" style={{ paddingTop: '30px', paddingBottom: '48px' }} id="formacao">
      <div className="mb-8" data-animate="left">
        <span className="text-[0.65rem] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">Formação</span>
        <h2 className="text-4xl md:text-[42px] tracking-tight gradient-title lowercase" style={{ fontWeight: 300 }}>Educação & Cursos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formations.map(f => (
          <div
            key={f.type}
            data-animate="scale"
            className="formation-card bg-surface-container-lowest rounded-2xl p-5 flex flex-col gap-4 border border-outline-variant/10"
            style={{ transitionDelay: f.delay }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>{f.icon}</span>
              </div>
              <span className="text-[0.6rem] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">{f.type}</span>
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-on-surface mb-1">{f.title}</h3>
              <p className="text-xs md:text-sm font-semibold text-primary mb-3">{f.institution}</p>
              {f.description ? (
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{f.description}</p>
              ) : (
                <ul className="text-sm text-on-surface-variant space-y-2">
                  {f.items.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
