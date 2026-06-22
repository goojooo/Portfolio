import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';
import { useTheme } from '../context/ThemeContext';

const PROJECT_DATA = [
  {
    title: "Fixora",
    category: "Java Spring Boot & React",
    shortDesc: "A smart local service platform with role-based access, partner approval, booking workflows, payments, and admin dashboard.",
    longDesc: "Fixora bridges the gap between local service providers and consumers. Built with a robust Java Spring Boot backend and a high-performance React frontend, it handles complex role-based authentication, secure payment gateways, and dynamic booking workflows in real-time.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    video: ""
  },
  {
    title: "AI Email Writer",
    category: "Spring Boot & Gemini API",
    shortDesc: "Chrome extension integrated with Gmail that generates context-aware email replies using Google's Gemini API.",
    longDesc: "This tool streamlines professional communication by reading thread context and generating highly accurate, tone-matched replies. The architecture relies on a lightweight Chrome Extension frontend communicating securely with a Spring Boot backend that processes the Gemini LLM payloads.",
    tech: ["Spring Boot", "Gemini API", "JavaScript", "Chrome Extensions"],
    liveLink: "#",
    githubLink: "https://github.com/goojooo/EmailWriter.git",
    video: "/email-writer.mp4"
  },
  {
    title: "Inventory Management System",
    category: "Java Servlet & JDBC",
    shortDesc: "A layered architecture application for managing stock, products, and transactions using Servlets, JDBC, DAO, and MySQL.",
    longDesc: "A deep-dive into low-level Java server architectures. This system bypasses modern ORMs to handle direct database connections via JDBC, implementing a strict Data Access Object (DAO) pattern to ensure absolute data integrity during complex transaction cycles.",
    tech: ["Core Java", "Servlets", "JDBC", "MySQL"],
    liveLink: "#",
    githubLink: "#",
    video: ""
  }
];

export default function Projects({ setActiveProject }) {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <>
      <section className={`w-full min-h-screen py-24 px-8 md:px-24 z-10 relative pointer-events-none transition-colors duration-500 ${isLight ? 'bg-[#F8FAFC]' : 'bg-transparent'}`}>
        
        {/* Heading */}
        <div className="mb-16 pointer-events-auto">
          <p className={`text-sm tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}>
            Selected Works
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold uppercase tracking-tight transition-colors duration-500 ${isLight ? 'text-[#1A1A2E]' : 'text-[#E0E0E0]'}`}>
            Transformative Artifacts
          </h2>
        </div>

        {/* Project list */}
        <div className={`flex flex-col border-t pointer-events-auto transition-colors duration-500 ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
          {PROJECT_DATA.map((project, idx) => (
            <div
              key={idx}
              className={`group relative border-b py-10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300 px-4 ${
                isLight
                  ? 'border-zinc-200 hover:bg-zinc-100/60'
                  : 'border-zinc-800 hover:bg-zinc-950/40'
              }`}
              onMouseEnter={() => setActiveProject(idx)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => setExpandedProject(project)}
            >
              <div className="max-w-md">
                <span className={`text-xs font-mono block mb-1 transition-colors duration-500 ${isLight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  0{idx + 1} / {project.category}
                </span>
                <h3 className={`text-3xl font-bold uppercase transition-colors duration-300 ${
                  isLight
                    ? 'text-[#1A1A2E] group-hover:text-[#0055FF]'
                    : 'text-[#E0E0E0] group-hover:text-[#8A0303]'
                }`}>
                  {project.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <p className={`max-w-sm text-sm font-sans leading-relaxed text-left md:text-right transition-colors duration-500 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {project.shortDesc}
                </p>
                <span className={`mt-3 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}>
                  Initialize Modal ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectModal
        project={expandedProject}
        onClose={() => setExpandedProject(null)}
      />
    </>
  );
}