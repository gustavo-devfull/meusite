const skills = ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Git/Github']

export default function Skills() {
  return (
    <section className="py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #6b6d71 0%, #797b7f 50%, #727478 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8" data-animate="fade">
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant">
            Principais Habilidades & Tecnologias
          </span>
        </div>
        <div
          data-animate
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {skills.map(skill => (
            <span key={skill} className="text-2xl font-black skill-item">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
