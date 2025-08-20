export default function ExperienceExpert() {
  return (
    <div className="flex flex-col gap-6">
      {/* Work Experience */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <h2 className="text-xl font-bold text-slate-900 mb-8 dark:text-white">Experiencia Laboral</h2>
        <div className="overflow-hidden h-[240px]">
          <div className="flex flex-col gap-2 animate-[scroll-experience_8s_linear_infinite]">
            <div className="flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-indigo-50 hover:rounded-xl transition">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-tr from-red-600 to-red-800">Ai</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Hoytrabajas.com</h3>
                <p className="text-slate-500 text-sm dark:text-slate-300">Desarrollador Jr</p>
              </div>
              <span className="text-slate-400 text-xs font-medium"> Feb 2024 - Dic 2024</span>
            </div>
            <div className="flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-indigo-50 hover:rounded-xl transition">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-tr from-blue-500 to-blue-700">G</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Freelance</h3>
                <p className="text-slate-500 text-sm dark:text-slate-300">Wordpress Developer</p>
              </div>
              <span className="text-slate-400 text-xs font-medium">Ene - 2025 - Abril 2025</span>
            </div>
            <div className="flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-indigo-50 hover:rounded-xl transition">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-tr from-blue-500 to-blue-700">G</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Sense Digital SAS</h3>
                <p className="text-slate-500 text-sm dark:text-slate-300">Wordpress Developer</p>
              </div>
              <span className="text-slate-400 text-xs font-medium"> Abr 2025 - Jul 2025</span>
            </div>
            <div className="flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-indigo-50 hover:rounded-xl transition">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-tr from-blue-500 to-blue-700">G</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Sense Digital SAS</h3>
                <p className="text-slate-500 text-sm dark:text-slate-300">Wordpress Developer</p>
              </div>
              <span className="text-slate-400 text-xs font-medium"> Abr 2025 - Jul 2025</span>
            </div>
          </div>
        </div>
      </div>
      {/* My Expert Area */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl mt-6 dark:bg-slate-800 dark:text-white">
        <h3 className="text-xl font-bold text-slate-900 mb-8 dark:text-white">Mis Habilidades</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-orange-600 to-orange-400 mb-3">Fi</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Figma</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-black to-gray-700 mb-3">N</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Notion</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-yellow-400 to-orange-500 mb-3">M</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Mico</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-blue-400 to-blue-700 mb-3">Fr</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">React</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-indigo-700 to-indigo-400 mb-3">W</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Wordpress</span>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-indigo-700/5 border border-indigo-700/10 hover:bg-indigo-700/10 hover:shadow-lg transition">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-gradient-to-tr from-yellow-500 to-yellow-700 mb-3">Z</div>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">Php</span>
          </div>
        </div>
      </div>
    </div>
  );
}