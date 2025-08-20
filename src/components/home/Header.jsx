import { useState } from "react";

export default function Header({ dark, setDark }) {
  return (
    <header className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 mb-8 flex justify-between items-center shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        <div className="w-3 h-3 rounded bg-gradient-to-tr from-indigo-700 to-purple-600 relative"></div>
        Portafolio
      </div>
      <nav className="flex gap-10 items-center text-slate-500 dark:text-slate-300">
        <a href="#"><i className="fas fa-home"></i> Inicio</a>
        <a href="#"><i className="fas fa-user"></i>Sobre Mi</a>
        <a href="#"><i className="fas fa-briefcase"></i> Servicios</a>
        <a href="#"><i className="fas fa-folder"></i>Trabajos</a>
        <a href="#"><i className="fas fa-blog"></i> Blog</a>
        <a href="#"><i className="fas fa-envelope"></i> Contacto</a>
      </nav>
      <div className="flex items-center gap-3">
        <button
          className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition"
          onClick={() => setDark((d) => !d)}
        >
          <i className={`fas ${dark ? "fa-sun" : "fa-moon"} text-slate-700`}></i>
        </button>
        <a href="#" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base flex items-center gap-2 hover:bg-slate-800 transition">
         Hablemos <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </header>
  );
}