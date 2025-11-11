import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <div className="text-center space-y-8">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-400">
            Always interested in new projects and opportunities
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <a
            href="mailto:hamdanhanafi90@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold transition transform hover:scale-105 flex items-center gap-2 justify-center"
          >
            <Mail size={20} /> Email Me
          </a>
          <a
            href="tel:+6281394574122"
            className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-full text-gray-300 font-semibold transition border border-slate-700"
          >
            WA +62-813-9457-4122
          </a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© 2025 Hamdan Hanafi. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/hamdankun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hamdan-hanafi-316a31117"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
