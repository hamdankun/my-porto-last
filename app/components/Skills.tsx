interface SkillsProps {
  visibleSections: Set<string>;
}

export default function Skills({ visibleSections }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            category: "Programming",
            skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
          },
          {
            category: "Framework",
            skills: [
              "React",
              "Next.js",
              "React Native",
              "Redux",
              "TailwindCSS",
            ],
          },
          {
            category: "Database",
            skills: ["PostgreSQL", "MongoDB", "Firebase", "MySQL", "Redis"],
          },
          {
            category: "Operating System",
            skills: ["Linux", "macOS", "Windows", "Ubuntu", "CentOS"],
          },
          {
            category: "Deployment",
            skills: ["Docker", "Kubernetes", "AWS", "Vercel", "GitHub Actions"],
          },
        ].map((skillGroup, idx) => (
          <div
            key={idx}
            className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ease-out animate-fade-in-up hover:-translate-y-1 animate-on-scroll ${
              visibleSections.has("skills")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              {skillGroup.category}
            </h3>
            <ul className="space-y-2">
              {skillGroup.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-gray-300 flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
