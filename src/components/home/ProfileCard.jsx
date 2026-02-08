import PrimarySemiRoundedButton from '../shared/PrimarySemiRoundedButton';

export default function ProfileCard() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-11 relative overflow-hidden shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/90 rounded-full backdrop-blur-md z-10"></div>
      <div className="w-[290px] h-[240px] bg-gradient-to-tr from-slate-100 to-slate-300 rounded-3xl mb-8 relative z-20 overflow-hidden p-1">
        <img 
          src="./src/img/PERFIL.jpeg"
          alt="Mi foto" 
          className="w-full h-full object-cover object-top rounded-3xl hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <h1 className="text-2xl font-extrabold text-slate-900 mb-5 flex items-center gap-3 dark:text-white">
        Sergio Vasquez <span>👋</span>
      </h1>
    
      <p className="text-slate-500 text-base leading-7 mb-8 dark:text-slate-300">
        Desarrollador de software <strong className="text-slate-800 font-semibold dark:text-white">apasionado por el aprendizaje continuo</strong>  {" "}
        <strong className="text-slate-800 font-semibold dark:text-white"></strong>y la creación de  <strong className="text-slate-800 font-semibold dark:text-white">experiencias digitales </strong>
        que generen impacto.
      </p>
        <div className="flex flex-wrap gap-2 mb-5">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium dark:bg-indigo-900/50 dark:text-indigo-300">
          Liderazgo
        </span>
        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium dark:bg-green-900/50 dark:text-green-300">
          Trabajo en equipo
        </span>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium dark:bg-blue-900/50 dark:text-blue-300">
          Comunicación efectiva
        </span>
        <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium dark:bg-purple-900/50 dark:text-purple-300">
          Resolución de problemas
        </span>
        <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium dark:bg-orange-900/50 dark:text-orange-300">
          Adaptabilidad
        </span>
      </div>
      <div className="flex gap-4 mb-8 flex-col sm:flex-row">
        <PrimarySemiRoundedButton />
        <button
          className="bg-emerald-600 border border-emerald-600 text-white px-6 py-4 rounded-2xl font-semibold text-sm flex items-center gap-2 justify-center hover:bg-emerald-700 transition flex-1 dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-500 dark:border-transparent dark:hover:from-emerald-600 dark:hover:to-teal-600"
          onClick={async () => {
            await navigator.clipboard.writeText("sergiovasquez01427@gmail.com");
            const button = document.activeElement;
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            setTimeout(() => {
              button.innerHTML = originalText;
            }, 2000);
          }}
        >
          <i className="fas fa-copy"></i> Copiar correo
        </button>
      </div>
      <div className="flex gap-3 justify-center">
        <a 
          href="https://github.com/AndresVz1" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="./src/documents/CV_SERGIO_VASQUEZ.pdf" 
          download 
          className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <i className="fas fa-file-pdf"></i>
        </a>
      </div>
    </div>
  );
}