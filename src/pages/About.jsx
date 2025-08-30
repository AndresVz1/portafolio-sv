import ProfileCard from '../components/home/ProfileCard';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      <div className="lg:sticky lg:top-6 h-fit">
        <ProfileCard />
      </div>
      
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Sobre <span className="text-blue-500">Mi</span>
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-300 mt-4">
            <p>
              Soy una persona apasionada por la tecnología y el desarrollo de software, con interés en crear 
              soluciones innovadoras que aporten valor real a las personas y a las empresas. 
              Me gusta aprender constantemente, asumir nuevos retos y transformar ideas en proyectos funcionales.
            </p>
            <p>
              Mi enfoque combina la creatividad con la lógica, buscando 
              siempre ofrecer resultados de calidad y mantener una comunicación clara y 
              cercana con quienes confían en mi trabajo.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Estudios
            </h3>
            <div className="space-y-6 mb-12">
              <div className="bg-white dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Tecnólogo ADSO - Análisis y desarrollo de software
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">SENA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium dark:bg-amber-900/50 dark:text-amber-300">
                      EN CURSO
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-700/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      Técnico en Programación de Software
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">SENA</p>
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <i className="fas fa-award"></i>
                      <span className="text-sm">Graduado con excelencia académica 2024</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium dark:bg-emerald-900/50 dark:text-emerald-300">
                      GRADUADO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Habilidades y Tecnologías
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Figma", logo: "/img/skills/figma-logo.png" },
                { name: "Notion", logo: "/img/skills/notion-logo.png" },
                { name: "React", logo: "/img/skills/react-logo.png" },
                { name: "WordPress", logo: "/img/skills/wordpress-logo.png" },
                { name: "PHP", logo: "/img/skills/php-logo.png" },
                { name: "JavaScript", logo: "/img/skills/javascript-logo.png" },
                { name: "Python", logo: "/img/skills/python-logo.png" },
                { name: "Flutter", logo: "/img/skills/flutter-logo.png" },
                { name: "TailwindCSS", logo: "/img/skills/tailwind-logo.png" },
                { name: "Git", logo: "/img/skills/git-logo.png" },
                { name: "MySQL", logo: "/img/skills/mysql-logo.png" },
                { name: "Node.js", logo: "/img/skills/nodejs-logo.png" }
              ].map((skill) => (
                <div
                  key={skill.name}
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
          </div>
        </div>
      </div>
    </div>
  );
}