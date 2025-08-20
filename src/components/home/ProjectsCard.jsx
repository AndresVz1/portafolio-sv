const projects = [
  {
    id: 1,
    image: "/img/project1.png", 
    title: "Landing Page",
    tag: "Wordpress",
  },
  {
    id: 2,
    image: "/img/project2.png",
    title: "E-commerce Dashboard",
    tag: "React",
  },
];

export default function ProjectsCard() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Proyectos Recientes</h2>
        <a href="#" className="text-indigo-700 font-medium text-sm flex items-center gap-2 hover:gap-3 transition">
           Proyectos <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      {projects.map(project => (
        <div key={project.id} className="bg-indigo-700/5 rounded-2xl p-5 mb-5 hover:bg-indigo-700/10 transition">
          <div className="w-full h-36 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-slate-100">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-indigo-700/10 text-indigo-700 px-4 py-1 rounded-full text-xs font-semibold inline-block mb-2">
              {project.tag}
            </span>
            <span className="text-base font-semibold text-slate-800 dark:text-white">
              {project.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
