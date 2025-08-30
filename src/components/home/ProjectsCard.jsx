const projects = [
  {
    id: 1,
    image: "src/img/project1.png",
    title: "Landing Page",
    tag: "Wordpress",
    description: "Landing page moderna y responsive desarrollada para mostrar servicios de manera efectiva y atractiva.",
    tools: ["WordPress", "Elementor", "CSS3", "JavaScript"],
    demoLink: "https://pixelee.co/",
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    image: "src/img/portafolio.png",
    title: "Pagina Informativa",
    tag: "React",
    description: "Página web informativa tipo portafolio, diseñada para presentar proyectos, habilidades y experiencia de forma clara y profesional. Incluye secciones de presentación personal, trabajos destacados, servicios ofrecidos y un espacio de contacto, con el objetivo de mostrar una imagen completa y organizada.",
    tools: ["React", "TailwindCSS", "JavaScript",],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/yourusername/project2"
  },
];

import { useState } from 'react';

export default function ProjectsCard() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Proyectos Recientes</h2>

        </div>
        <div className="flex flex-col gap-5">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-indigo-700/5 rounded-2xl p-5 hover:bg-indigo-700/10 transition cursor-pointer group dark:bg-slate-700/50 max-w-2xl mx-auto w-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="bg-indigo-700/10 text-indigo-700 px-4 py-1 rounded-full text-xs font-semibold inline-block mb-2 dark:bg-indigo-500/20 dark:text-indigo-300">
                  {project.tag}
                </span>
                <span className="text-base font-semibold text-slate-800 dark:text-white">
                  {project.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-white dark:bg-slate-800 rounded-3xl max-w-3xl w-full p-6 relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition dark:bg-slate-700 dark:text-slate-300"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 dark:text-white">{selectedProject.title}</h3>
                <span className="bg-indigo-700/10 text-indigo-700 px-4 py-1 rounded-full text-xs font-semibold inline-block mb-4 w-fit dark:bg-indigo-500/20 dark:text-indigo-300">
                  {selectedProject.tag}
                </span>
                <p className="text-slate-600 mb-6 dark:text-slate-300">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2 dark:text-white">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm dark:bg-slate-700 dark:text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition flex items-center gap-2 justify-center flex-1"
                  >
                    <i className="fas fa-external-link-alt"></i> Web
                  </a>
                  {/* <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 text-slate-600 px-6 py-2 rounded-xl font-semibold text-sm hover:bg-slate-200 transition flex items-center gap-2 justify-center flex-1 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                  >
                    <i className="fab fa-github"></i> Código Modal 
                  </a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
