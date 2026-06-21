import { useState } from 'react';
import ProjectModal from '../components/ProjectModal'; // <-- Ensure this file exists from the previous step!

const PROJECT_DATA = [
  {
    title: "Fixora",
    category: "Java Spring Boot & React",
    shortDesc: "A smart local service platform with role-based access, partner approval, booking workflows, payments, and admin dashboard.",
    longDesc: "Fixora bridges the gap between local service providers and consumers. Built with a robust Java Spring Boot backend and a high-performance React frontend, it handles complex role-based authentication, secure payment gateways, and dynamic booking workflows in real-time.",
    tech: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
    liveLink: "#", // Update with your actual URL
    githubLink: "#", // Update with your actual repo
    video: "" // e.g., "/fixora-demo.mp4"
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
//   {
//     title: "AI Resume Analyzer",
//     category: "React & Node.js",
//     shortDesc: "An AI-powered application that analyzes resumes, provides feedback, and helps users optimize their profiles for ATS systems.",
//     longDesc: "Engineered to help professionals bypass strict Applicant Tracking Systems. The application parses PDF data, cross-references it with job descriptions using AI, and outputs actionable, real-time UI feedback to increase hiring conversion rates.",
//     tech: ["React", "Node.js", "Express", "AI APIs"],
//     liveLink: "#",
//     githubLink: "#",
//     video: ""
//   },
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
  // State to control the Modal
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <>
      <section className="w-full min-h-screen py-24 px-8 md:px-24 z-10 relative pointer-events-none">
        <div className="mb-16 pointer-events-auto">
          <p className="text-[#8A0303] text-sm tracking-[0.3em] uppercase mb-2">Selected Works</p>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#E0E0E0]">Transformative Artifacts</h2>
        </div>

        <div className="flex flex-col border-t border-zinc-800 pointer-events-auto">
          {PROJECT_DATA.map((project, idx) => (
            <div
              key={idx}
              className="group relative border-b border-zinc-800 py-10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-zinc-950/40 px-4"
              onMouseEnter={() => setActiveProject(idx)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => setExpandedProject(project)} // <-- Triggers the Modal!
            >
              <div className="max-w-md">
                <span className="text-xs text-zinc-500 font-mono block mb-1">0{idx + 1} / {project.category}</span>
                <h3 className="text-3xl font-bold text-[#E0E0E0] group-hover:text-[#8A0303] transition-colors duration-300 uppercase">
                  {project.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                <p className="text-zinc-400 max-w-sm text-sm font-sans leading-relaxed text-left md:text-right">
                  {project.shortDesc}
                </p>
                {/* Visual cue that the row is clickable */}
                <span className="mt-3 text-xs text-[#8A0303] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Initialize Modal ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Glassmorphic Modal Overlay */}
      <ProjectModal 
        project={expandedProject} 
        onClose={() => setExpandedProject(null)} 
      />
    </>
  );
}       