"use client";

import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useCallback } from "react";

export default function Hero() {
  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-block bg-blue-900 text-blue-300 rounded-full px-4 py-2 text-sm font-medium">
              Welcome 👋
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-blue-400">Hamdan</span>
            </h1>
          </div>

          <p
            className="text-lg text-gray-400 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            A software engineer with 10+ years of experience building impactful
            solutions. I thrive in dynamic teams, embrace challenges, and adapt
            quickly to new technologies. Passionate about collaboration and
            problem-solving, I stay ahead in the ever-evolving tech landscape.
            Let's connect and build something great together!
          </p>

          <div
            className="flex flex-wrap gap-2 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {["React", "Laravel", "Go", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 text-gray-300 rounded-full px-4 py-2 text-sm border border-slate-700 hover:bg-slate-700 hover:border-blue-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold flex items-center gap-2 transition transform hover:scale-105 justify-center"
            >
              Get In Touch <ArrowRight size={20} />
            </button>
            <a
              href="https://github.com/hamdankun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-full text-gray-300 font-semibold transition transform hover:scale-105 flex gap-2 justify-center border border-slate-700"
            >
              <Github size={20} /> GitHub
            </a>
          </div>

          <div
            className="flex gap-3 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://www.linkedin.com/in/hamdan-hanafi-316a31117"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full text-gray-400 hover:text-blue-400 transition border border-slate-700"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hamdanhanafi90@gmail.com"
              className="bg-slate-800 hover:bg-slate-700 p-3 rounded-full text-gray-400 hover:text-blue-400 transition border border-slate-700"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div
          className="hidden lg:flex items-center justify-center animate-fade-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-40 -z-10 animate-pulse-glow"></div>
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/20 animate-float">
              <Image
                src="/me.jpeg"
                alt="Hamdan Hanafi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
