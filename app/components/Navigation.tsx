"use client";

import { useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400">HH</div>
        <div className="flex gap-6 items-center">
          <button
            onClick={() => handleNavClick("about")}
            className={`text-gray-400 hover:text-blue-400 transition ${
              activeSection === "about"
                ? "text-blue-400 border-b-2 border-blue-400"
                : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("skills")}
            className={`text-gray-400 hover:text-blue-400 transition ${
              activeSection === "skills"
                ? "text-blue-400 border-b-2 border-blue-400"
                : ""
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick("experience")}
            className={`text-gray-400 hover:text-blue-400 transition ${
              activeSection === "experience"
                ? "text-blue-400 border-b-2 border-blue-400"
                : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick("projects")}
            className={`text-gray-400 hover:text-blue-400 transition ${
              activeSection === "projects"
                ? "text-blue-400 border-b-2 border-blue-400"
                : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
