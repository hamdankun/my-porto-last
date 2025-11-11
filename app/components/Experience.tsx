export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in-up">
        Experience
      </h2>
      <div className="space-y-6">
        {[
          {
            title: "Software Engineer",
            company: "PT ACCELBYTE TEKNOLOGI INDONESIA",
            period: "2021 - 2025 (4 years)",
            desc: (
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>
                  Developed and maintained the Admin Portal web application
                  using React and TypeScript.
                </li>
                <li>
                  Delivered new features, enhanced user experience, and ensured
                  UI consistency across components.
                </li>
                <li>
                  Proactively identified and fixed bugs to improve performance
                  and stability.
                </li>
                <li>
                  Collaborated closely with cross-functional teams to support
                  backend integration and meet product goals.
                </li>
              </ul>
            ),
          },
          {
            title: "Tech Lead & Fullstack Developer",
            company: "PT DISTRIBUTOR INDONESIA UNGGUL",
            period: "2019 - 2021 (2 years)",
            desc: (
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>
                  Led a small team to develop and maintain a B2B e-commerce
                  platform.
                </li>
                <li>
                  Improved mobile app performance and user experience using
                  React Native.
                </li>
                <li>
                  Rebuilt the Supplier Web Portal with React.js for better
                  scalability and maintainability.
                </li>
                <li>
                  Re-engineered the Supplier Mobile App with React Native,
                  aligning with new business needs and design standards.
                </li>
                <li>
                  Contributed to a B2B e-commerce platform in a fast-paced
                  startup environment.
                </li>
              </ul>
            ),
          },
          {
            title: "Fullstack Developer",
            company: "PT BARRANS GLOBAL MANDIRI",
            period: "2018 - 2019 (1 years)",
            desc: (
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>
                  Developed and maintained web apps using React.js and mobile
                  apps using React Native.
                </li>
                <li>
                  Delivered various client-requested applications, including
                  insurance platforms, PPOB systems, and Umrah tour apps using
                  IonicJS, Java.
                </li>
                <li>
                  Worked end-to-end across the stack to ensure functionality,
                  performance, and user experience.
                </li>
                <li>
                  Adapted quickly to diverse project scopes and timelines in a
                  fast-paced agency environment.
                </li>
              </ul>
            ),
          },
          {
            title: "Tech Leadn & Fullstack Developer",
            company: "PT SMOOETS TEKNOLOGI OUTSOURCING",
            period: "2015 - 2018 (4 years)",
            desc: (
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>
                  Led a small development team to deliver client requested web
                  applications from concept to deployment.
                </li>
                <li>
                  Developed custom web applications tailored to client
                  requirements using React Native, PHP and Node.js.
                </li>
                <li>
                  Translated business needs into functional, userfriendly
                  solutions.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver
                  high-quality software in a deadlinedriven environment.
                </li>
              </ul>
            ),
          },
        ].map((exp, idx) => (
          <div
            key={idx}
            className="bg-linear-to-r from-blue-900/30 to-transparent border-l-4 border-blue-500 rounded-lg p-6 hover:bg-blue-900/40 hover:border-blue-400 transition animate-fade-in-up"
            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-100">
                  {exp.title}
                </h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm">{exp.period}</span>
            </div>
            {exp.desc}
          </div>
        ))}
      </div>
    </section>
  );
}
