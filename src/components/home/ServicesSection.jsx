export default function ServicesSection() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-12 mb-8 shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Servicios </h2>
        <a href="#" className="text-indigo-700 font-medium text-sm flex items-center gap-2 hover:gap-3 transition">
          Ver todos los servicios <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      {/* ...servicios... */}
    </div>
  );
}