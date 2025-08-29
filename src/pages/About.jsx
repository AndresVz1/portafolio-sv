import ProfileCard from '../components/home/ProfileCard';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6">
      <ProfileCard />
      <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[28px] p-10 shadow-xl dark:bg-slate-800 dark:text-white">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          About Me
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map((skill) => (
                <span key={skill} className="bg-indigo-700/10 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}