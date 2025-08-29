import ProfileCard from '../components/home/ProfileCard';

const services = [
    {
        id: 1,
        title: "UI UX Design",
        description: "Transforming ideas into user-friendly interfaces with modern design principles",
        iconClass: "far fa-object-group",
        technologies: [
            "Figma & Adobe XD",
            "HTML, CSS & JavaScript",
            "React & Next.js",
            "Tailwind CSS & Material UI"
        ]
    },
    {
        id: 2,
        title: "Web Development",
        description: "Building responsive and dynamic web applications",
        iconClass: "fas fa-code",
        technologies: [
            "React & Vue.js",
            "Node.js & Express",
            "MongoDB & PostgreSQL",
            "AWS & Firebase"
        ]
    },
    {
        id: 3,
        title: "Custom Development",
        description: "Tailored solutions for your specific business needs",
        iconClass: "fas fa-laptop-code",
        technologies: [
            "Python & Django",
            "Java & Spring Boot",
            "REST APIs",
            "Microservices Architecture"
        ]
    },
    {
        id: 4,
        title: "QA Testing",
        description: "Ensuring quality and reliability in software delivery",
        iconClass: "fas fa-bug",
        technologies: [
            "Selenium & Cypress",
            "Jest & React Testing Library",
            "Manual Testing",
            "Performance Testing"
        ]
    }
];

export default function Services() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
            <ProfileCard />

            <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Services I <span className="text-blue-500">Offered</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mt-2">
                        Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert Services!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-white hover:shadow-lg dark:hover:shadow-white/25 transition-all duration-300 bg-white/50 dark:bg-slate-800/50"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <i className={`${service.iconClass} text-2xl text-blue-500`}></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Lista de tecnologías */}
                            <div className="ml-16">
                                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Technologies & Tools:
                                </h4>
                                <ul className="space-y-1">
                                    {service.technologies.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center text-sm text-slate-600 dark:text-slate-400"
                                        >
                                            <span className="text-blue-500 mr-2">+</span>
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}