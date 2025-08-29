import PrimarySemiRoundedButton from '../shared/PrimarySemiRoundedButton';

export default function ProfileCard() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-11 relative overflow-hidden shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/90 rounded-full backdrop-blur-md z-10"></div>
      <div className="w-[290px] h-[240px] bg-gradient-to-tr from-slate-100 to-slate-300 rounded-3xl mb-8 relative z-20 overflow-hidden p-1">
        <img src="./src/img/sergio.png" alt="Mi foto" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <h1 className="text-2xl font-extrabold text-slate-900 mb-5 flex items-center gap-3 dark:text-white">
        Sergio Vasquez <span>👋</span>
      </h1>
      <p className="text-slate-500 text-base leading-7 mb-8 dark:text-slate-300">
        Desarrollador de software <strong className="text-slate-800 font-semibold dark:text-white">apasionado por el aprendizaje continuo</strong>  {" "}
        <strong className="text-slate-800 font-semibold dark:text-white"></strong>y la creación de  <strong className="text-slate-800 font-semibold dark:text-white">experiencias digitales </strong>
        que generen impacto.
      </p>
      <div className="flex gap-4 mb-8 flex-col sm:flex-row">
        <PrimarySemiRoundedButton />
        <button
          className="bg-slate-100 text-slate-600 px-6 py-4 rounded-2xl font-semibold text-sm flex items-center gap-2 justify-center hover:bg-slate-200 transition flex-1"
          onClick={() => {
            navigator.clipboard.writeText("sergiovasquez01427@gmail.com");
          }}
        >
          <i className="fas fa-copy"></i> Copy Email
        </button>
      </div>
      <div className="flex gap-3">
        <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-lg hover:bg-indigo-700 hover:text-white transition"><i className="fab fa-facebook"></i></a>
        <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-lg hover:bg-indigo-700 hover:text-white transition"><i className="fab fa-pinterest"></i></a>
        <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-lg hover:bg-indigo-700 hover:text-white transition"><i className="fab fa-github"></i></a>
        <a href="#" className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 text-lg hover:bg-indigo-700 hover:text-white transition"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  );
}