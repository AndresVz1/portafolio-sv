export default function CTASection() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-16 text-center relative overflow-hidden shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-tr from-indigo-700/5 to-purple-600/5 rounded-full z-10"></div>
      <div className="relative z-20">
        <div className="inline-flex items-center gap-3 bg-indigo-700/5 px-6 py-3 rounded-full mb-8 text-base font-semibold">
          <span className="text-xl">🚀</span>
          <span className="font-semibold bg-gradient-to-r from-pink-500 to-teal-400 bg-clip-text text-transparent">Creando⚡  Experiencias Digitales🎯</span>
        </div>
        <h2 className="text-5xl font-extrabold text-slate-900 mb-10 dark:text-white">
          AI <span className="text-4xl">👋</span>
          <br />
          Espacio para
        </h2>
        <a href="#" className="bg-indigo-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg inline-flex items-center gap-3 hover:bg-indigo-800 transition">
          Agente de IA <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}