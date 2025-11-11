interface AboutMeProps {
  visibleSections: Set<string>;
}

export default function AboutMe({ visibleSections }: AboutMeProps) {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Full-Stack Dev",
            desc: "React, React Native Next.js, Node.js, Laravel, Go and etc expertise with focus on scalable solutions",
          },
          {
            title: "Performance First",
            desc: "Building fast, efficient apps with optimal UX and SEO practices",
          },
          {
            title: "Team Lead",
            desc: "Experienced in leading teams, mentoring developers, and quality delivery",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ease-out animate-fade-in-up hover:-translate-y-1 animate-on-scroll ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
