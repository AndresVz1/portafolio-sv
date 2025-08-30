import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header({ dark, setDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573015655047', '_blank');
  };

  const handleEmailClick = async () => {
    await navigator.clipboard.writeText("sergiovasquez01427@gmail.com");
    const button = document.getElementById("emailButton");
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);
  };
  return (
    <header className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 mb-8 flex justify-between items-center shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2 text-2xl font-extrabold text-slate-900 dark:text-white">
        <div className="w-3 h-3 rounded bg-gradient-to-tr from-indigo-700 to-purple-600 relative"></div>
        Portafolio
      </div>
      <nav className="flex gap-10 items-center text-slate-500 dark:text-slate-300">
        <Link to="/" className="flex items-center gap-2 hover:text-indigo-700">
          <i className="fas fa-home"></i> Inicio
        </Link>
        <Link to="/about" className="flex items-center gap-2 hover:text-indigo-700">
          <i className="fas fa-user"></i> Sobre Mi
        </Link>
        <Link to="/services" className="flex items-center gap-2 hover:text-indigo-700">
          <i className="fas fa-briefcase"></i> Servicios
        </Link>
        <Link to="/works" className="flex items-center gap-2 hover:text-indigo-700">
          <i className="fas fa-folder"></i> Trabajos
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <button
          className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-200 transition"
          onClick={() => setDark((d) => !d)}
        >
          <i className={`fas ${dark ? "fa-sun" : "fa-moon"} text-slate-700`}></i>
        </button>
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base flex items-center gap-2 hover:bg-slate-800 transition dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Hablemos <i className={`fas fa-chevron-${isMenuOpen ? 'up' : 'down'}`}></i>
          </button>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg py-2 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-100 flex items-center gap-2 dark:text-slate-300 dark:hover:bg-slate-700/50"
              >
                <i className="fab fa-whatsapp text-emerald-600 dark:text-emerald-500"></i>
                WhatsApp
              </button>
              <button
                id="emailButton"
                onClick={handleEmailClick}
                className="w-full px-4 py-2 text-left text-slate-700 hover:bg-slate-100 flex items-center gap-2 dark:text-slate-300 dark:hover:bg-slate-700/50"
              >
                <i className="fas fa-envelope text-blue-600 dark:text-blue-500"></i>
                Copiar correo
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}