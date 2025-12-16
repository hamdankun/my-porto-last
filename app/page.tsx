import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ScrollObserver from "./components/ScrollObserver";
import Experience from "./components/Experience";
import ProjectsWithCarousel from "./components/ProjectsWithCarousel";
import Contact from "./components/Contact";
import ChatWidget from "./components/ChatWidget";

const projects = [
  {
    title: "Carcirus - Online Rental Car Platform",
    company: "Caricurs",
    description:
      "Developed and maintained a comprehensive online rental car platform using React & TypeScript. Enhanced UI/UX and delivered multiple features with smooth performance.",
    tech: ["Go", "React.js", "Next.js", "MySQL", "Flutter"],
    year: "2025",
  },
  {
    title: "Next Doc - Online Doctor Consultation Platform",
    company: "Autonomous Intelligence Development",
    description:
      "Developed and maintained a comprehensive online doctor consultation platform with AI using React & TypeScript. Enhanced UI/UX and delivered multiple features with smooth performance.",
    tech: ["React.js", "Next.js", "MongoDB", "Express.js", "AI Integration"],
    year: "2024-2025",
  },
  {
    title: "Trillion Dollar Challenge - Crowdfunding Platform",
    company: "Autonomous Intelligence Development",
    description:
      "Developed and maintained a comprehensive crowdfunding platform using crypto wallet.",
    tech: ["React.js", "Next.js", "PostgreSQL", "Supabase", "Crypto Wallet"],
    year: "2024-2025",
  },
  {
    title: "Game Admin Portal Website",
    company: "PT ACCELBYTE TEKNOLOGI INDONESIA",
    description:
      "Developed comprehensive Admin Portal with React & TypeScript. Enhanced UI/UX and delivered multiple features with smooth performance.",
    tech: ["React", "TypeScript", "And Design", "Node.js"],
    year: "2022-2025",
  },
  {
    title: "Tokodistributor - B2B E-commerce Platform",
    company: "PT DISTRIBUTOR INDONESIA UNGGUL",
    description:
      "Developed and maintained a B2B e-commerce for supplier portal and resellers app, improving performance and rebuilding the supplier portal with a modern tech stack.",
    tech: ["React", "React Native", "PostgreSQL", "Docker"],
    year: "2019-2022",
  },
  {
    title: "Sohib App - Digital Payment Platform",
    company: "PT BARRANS GLOBAL MANDIRI",
    description:
      "Developed and maintained web and mobile applications for digital product payments",
    tech: ["React Native", "React.js", "Lumen/Laravel"],
    year: "2018-2019",
  },
  {
    title: "Pulsabi App - Digital Payment Platform",
    company: "PT PULSABI TEKNOLOGI UTAMA",
    description:
      "Developed and maintained web and mobile applications for digital product payments.",
    tech: ["React Native", "React.js", "Laravel"],
    year: "2023-2025",
  },
  {
    title: "Zuna Yoga - Landing Page",
    company: "PT Ramat Loka Teknologi",
    description: "Developed and maintained a landing page for Zuna Yoga.",
    tech: ["React.js", "Next.js"],
    year: "2018-2019",
  },
  {
    title: "Timah E-Approval System",
    company: "PT SMOOETS TEKNOLOGI OUTSOURCING",
    description: "Developed and maintained an e-approval system for Timah.",
    tech: ["React Native"],
    year: "2018-2019",
  },
  {
    title: "Tanjung Lesung - Landing Page",
    company: "PERSONAL PROJECT",
    description: "Developed and maintained a landing page for Travel website.",
    tech: ["Codeigniter", "PHP", "MySQL"],
    year: "2018-2019",
  },
  {
    title: "My Persona App By Admedika App",
    company: "PERSONAL PROJECT",
    description:
      "Developed a mobile insurance application for policy management and customer services",
    tech: ["ionic", "HTML", "Angular.js"],
    year: "2017",
  },
  {
    title: "BPSPAM Simpadu Website",
    company: "PT SMOOETS TEKNOLOGI OUTSOURCING",
    description:
      "Developed and maintained a website for BPSPAM Simpadu to manage water resources.",
    tech: ["Codeigniter", "PHP", "MySQL"],
    year: "2017",
  },
  {
    title: "Tunas Tour & Travel App",
    company: "PT BARRANS GLOBAL MANDIRI",
    description:
      "Developed and maintained a mobile application for booking Umrah and Hajj packages.",
    tech: ["React Native"],
    year: "2018-2019",
  },
  {
    title: "Ezmedical - Online Healthcare Platform",
    company: "PT SMOOETS TEKNOLOGI OUTSOURCING",
    description:
      "Developed and maintained a website for online healthcare services.",
    tech: ["Angular.js", "Laravel", "MySQL"],
    year: "2017-2019",
  },
  {
    title: "Rajawaliaeromodeling - Landing Page",
    company: "PERSONAL PROJECT",
    description:
      "Developed and maintained a landing page for aeromodeling community.",
    tech: ["Codeigniter", "PHP", "MySQL"],
    year: "2017-2019",
  },
  {
    title: "Kondo Ecommerce Website",
    company: "PERSONAL PROJECT",
    description:
      "Developed and maintained an e-commerce website for selling products.",
    tech: ["React", "GraphQL", "MySQL"],
    year: "2018-2019",
  },
  {
    title: "Mavic OIL - Admin Portal Website",
    company: "PERSONAL PROJECT",
    description:
      "Developed and maintained an admin portal website for managing oil products.",
    tech: ["Laravel", "MySQL"],
    year: "2016-2017",
  },
  {
    title: "Air Signal - Online Signal Trading Platform",
    company: "PERSONAL PROJECT",
    description: "Developed and maintained an online signal trading platform.",
    tech: ["React Native", "Codeigniter", "MySQL"],
    year: "2019-2021",
  },
  {
    title: "MyRep - Internet Service Provider Portal",
    company: "PERSONAL PROJECT",
    description:
      "Developed and maintained an internet service provider portal.",
    tech: ["React Native", "Java"],
    year: "2019-2022",
  },
  {
    title: "Edubox - Learning Management System",
    company: "PERSONAL PROJECT",
    description: "Developed and maintained a learning management system.",
    tech: ["Feathers.js", "MongoDB"],
    year: "2018-2019",
  },
  {
    title: "Edubox - Learning Management System",
    company: "PERSONAL PROJECT",
    description: "Developed and maintained a learning management system.",
    tech: ["Feathers.js", "MongoDB"],
    year: "2018-2019",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Navigation />
      <Hero />
      <ScrollObserver />
      <Experience />
      <ProjectsWithCarousel projects={projects} />
      <Contact />
      <ChatWidget />
    </div>
  );
}
