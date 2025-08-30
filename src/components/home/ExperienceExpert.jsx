import { useState } from 'react';

const skills = [
  {
    id: 1,
    name: "Figma",
    logo: "/img/skills/figma-logo.png"
  },
  {
    id: 2,
    name: "Notion",
    logo: "/img/skills/notion-logo.png"
  },
  {
    id: 3,
    name: "React",
    logo: "/img/skills/react-logo.png"
  },
  {
    id: 4,
    name: "WordPress",
    logo: "/img/skills/wordpress-logo.png"
  },
  {
    id: 5,
    name: "PHP",
    logo: "/img/skills/php-logo.png"
  },
  {
    id: 6,
    name: "JavaScript",
    logo: "/img/skills/javascript-logo.png"
  },
  {
    id: 7,
    name: "Python",
    logo: "/img/skills/python-logo.png"
  },
  {
    id: 8,
    name: "Flutter",
    logo: "/img/skills/flutter-logo.png"
  },
  {
    id: 9,
    name: "TailwindCSS",
    logo: "/img/skills/tailwind-logo.png"
  },
  {
    id: 10,
    name: "Git",
    logo: "/img/skills/git-logo.png"
  },
  {
    id: 11,
    name: "MySQL",
    logo: "/img/skills/mysql-logo.png"
  },
  {
    id: 12,
    name: "Node.js",
    logo: "/img/skills/nodejs-logo.png"
  }
];
const experiences = [
  {
    id: 1,
    company: "Hoytrabajas.com",
    position: "Desarrollador Jr",
    period: "Feb 2024 - Dic 2024",
    logo: "/img/companies/hoytrabajas-logo.png"
  },
  {
    id: 2,
    company: "Freelance",
    position: "Wordpress Developer",
    period: "Ene 2025 - Abril 2025",
    logo: "/img/companies/freelance-logo1.png"
  },
  {
    id: 3,
    company: "Sense Digital SAS",
    position: "Wordpress Developer",
    period: "Abr 2025 - Jul 2025",
    logo: "/img/companies/sense-digital-logo.png"
  }
];


export default function ExperienceExpert() {
  const [currentPage, setCurrentPage] = useState(1);
  const skillsPerPage = 6; // 6 habilidades por pagina para tener 2 paginas con 12 habilidades
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const getCurrentSkills = () => {
    const start = (currentPage - 1) * skillsPerPage;
    return skills.slice(start, start + skillsPerPage);
  };
  return (
    <div className="flex flex-col gap-6">
      {/* Work Experience */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <h2 className="text-xl font-bold text-slate-900 mb-8 dark:text-white">Experiencia Laboral</h2>
        <div className="overflow-hidden h-[240px]">
          <div className="flex flex-col gap-2 animate-[scroll-experience_8s_linear_infinite]">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex items-center gap-5 py-5 border-b border-slate-100 hover:bg-indigo-50 dark:hover:bg-slate-700/50 hover:rounded-xl transition"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white dark:bg-slate-700 p-2 border border-slate-200 dark:border-slate-600">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-slate-500 text-sm dark:text-slate-300">
                    {exp.position}
                  </p>
                </div>
                <span className="text-slate-400 text-xs font-medium">
                  {exp.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* My Expert Area - Actualizada con logos y paginación */}
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl mt-6 dark:bg-slate-800 dark:text-white">
        <h3 className="text-xl font-bold text-slate-900 mb-8 dark:text-white">Mis Habilidades</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {getCurrentSkills().map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-5 rounded-2xl bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 hover:border-blue-500 dark:hover:border-white hover:shadow-lg dark:hover:shadow-white/25 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                  ${currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-slate-600'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}