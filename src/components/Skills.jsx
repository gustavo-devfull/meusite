const skills = ['React', 'Node.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Git/Github']

export default function Skills() {
  return (
    <section className="py-16 overflow-hidden border-t border-gray-100" style={{ background: '#f8f8f8' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8" data-animate="fade">
          <span className="text-[0.75rem] font-bold uppercase tracking-widest text-gray-400">
            Principais Habilidades & Tecnologias
          </span>
        </div>
        <div
          data-animate
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-80 transition-all duration-500"
        >
          {skills.map(skill => (
            <span key={skill} className="text-2xl font-black skill-item text-gray-700">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
