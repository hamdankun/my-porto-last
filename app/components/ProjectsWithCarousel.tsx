"use client";

import { useState } from "react";

interface ProjectsWithCarouselProps {
  projects: Array<{
    title: string;
    company: string;
    description: string;
    tech: string[];
    year: string;
  }>;
}

export default function ProjectsWithCarousel({
  projects,
}: ProjectsWithCarouselProps) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const itemsPerView = 6; // 3 columns x 2 rows

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + itemsPerView) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - itemsPerView + projects.length) % projects.length
    );
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
        Projects
      </h2>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: itemsPerView }).map((_, offset) => {
            const projectIdx = (currentProjectIndex + offset) % projects.length;
            const project = projects[projectIdx];
            return (
              <div
                key={offset}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition animate-scale-in flex flex-col"
                style={{ animationDelay: `${0.05 * offset}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium text-sm mb-2">
                    {project.company}
                  </p>
                  <span className="text-gray-500 text-xs bg-slate-700 px-2 py-1 rounded-full inline-block">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 grow">
                  {project.description}
                </p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-900/40 text-blue-300 rounded-full px-2 py-1 text-xs border border-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition text-sm">
                    View Project →
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-8 mt-8">
          <button
            onClick={prevProject}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition transform hover:scale-110 active:scale-95"
          >
            ←
          </button>
          <div className="text-gray-400 text-sm font-medium">
            {Math.floor(currentProjectIndex / itemsPerView) + 1} /{" "}
            {Math.ceil(projects.length / itemsPerView)}
          </div>
          <button
            onClick={nextProject}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full text-white transition transform hover:scale-110 active:scale-95"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
