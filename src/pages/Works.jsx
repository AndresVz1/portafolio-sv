import ProfileCard from '../components/home/ProfileCard';
import { useState } from 'react';


const projects = [
  {
    id: 1,
    title: "Portafolio - Pagina Informativa",
    category: "React App | UI UX Design",
    description: "Página web informativa tipo portafolio, diseñada para presentar proyectos, habilidades y experiencia de forma clara y profesional. Incluye secciones de presentación personal, trabajos destacados, servicios ofrecidos y un espacio de contacto, con el objetivo de mostrar una imagen completa y organizada.",
    image: "src/img/portafolio.png",
    logos: [
      "React", "JavaScript", "TailwindCSS"
    ],
    link: "https://flowsaas.example.com"
  },
  {
    id: 2,
    title: "Pixelee - Landing Page",
    category: "Pagina web | Landing page",
    description: "Landing page moderna y responsive desarrollada para mostrar servicios de manera efectiva y atractiva.",
    image: "src/img/project1.png",
    logos: [
      "WordPress", "Elementor", "JavaScript"
    ],
    link: "https://dashflow.example.com"
  },
  {
    id: 3,
    title: "EcoStore - E-commerce Platform",
    category: "E-commerce | Full Stack",
    description: "Modern e-commerce platform with advanced features and seamless user experience.",
    image: "/img/projects/ecostore.png",
    logos: [
      "Shopify", "Next.js", "Stripe", "MongoDB"
    ],
    link: "https://ecostore.example.com"
  },
  {
    id: 4,
    title: "HealthTrack - Fitness App",
    category: "Mobile App | UI Design",
    description: "Health and fitness tracking application with personalized workout plans and nutrition guidance.",
    image: "/img/projects/healthtrack.png",
    logos: [
      "React Native", "Node.js", "PostgreSQL", "Docker"
    ],
    link: "https://healthtrack.example.com"
  }
];

export default function Works() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  const getCurrentProjects = () => {
    const start = (currentPage - 1) * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      <div className="lg:sticky lg:top-6 h-fit">
        <ProfileCard />
      </div>
      
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Estos son mis ultimos <span className="text-blue-500">Proyectos</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
           A continuación encontrarás una selección de mis proyectos más recientes, 
           desarrollados con dedicación y enfocados en combinar diseño, funcionalidad y buenas prácticas de programación. 
           Cada uno refleja mi experiencia y el compromiso de ofrecer soluciones digitales de calidad.
          </p>
        </div>

        <div className="space-y-6">
          {getCurrentProjects().map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-white hover:shadow-lg dark:hover:shadow-white/25 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-500 font-medium">
                      {project.category}
                    </p>
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Visit Site →
                  </a>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.logos.map((logo, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs text-slate-600 dark:text-slate-400"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación 
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                ${currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-slate-600'
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>*/}
      </div>
    </div>
  );
}