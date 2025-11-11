"use client";

interface AboutMeProps {
  visibleSections: Set<string>;
}

export default function AboutMeWithAnimation({
  visibleSections,
}: AboutMeProps) {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Full-Stack Developer",
            description:
              "Experienced in building end-to-end solutions with modern technologies. Skilled in frontend, mobile and backend development.",
            icon: "🚀",
          },
          {
            title: "Performance First",
            description:
              "Dedicated to writing optimized code and creating lightning-fast applications. SEO-optimized and user-focused.",
            icon: "⚡",
          },
          {
            title: "Team Lead",
            description:
              "Strong communication and mentoring skills. Passionate about building high-performing teams and fostering collaboration.",
            icon: "👥",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 animate-on-scroll hover:-translate-y-1 ${
              visibleSections.has("about")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-100 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
