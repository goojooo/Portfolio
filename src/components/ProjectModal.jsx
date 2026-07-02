import { X, ExternalLink } from 'lucide-react'; 
import { FaGithub } from 'react-icons/fa';
import { createPortal } from 'react-dom'; // 1. Import React Portal

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // 2. Wrap the entire component in createPortal
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 dark:bg-[#020202]/80 bg-zinc-200/80 backdrop-blur-xl animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-6xl max-h-[90vh] dark:bg-[#0A0A0A] bg-white dark:border-zinc-800 border-zinc-200 border rounded-lg overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-zinc-500 dark:hover:text-[#8A0303] hover:text-[#0055FF] transition-colors dark:bg-black/50 bg-zinc-100/80 rounded-full"
        >
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 dark:bg-black bg-zinc-50 dark:border-zinc-800 border-zinc-200 border-r min-h-[300px] flex items-center justify-center relative">
          {project.video ? (
            <video 
              src={project.video} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="dark:text-zinc-700 text-zinc-400 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-4">
              <span className="animate-pulse w-12 h-12 border dark:border-zinc-700 border-zinc-400 rounded-full flex items-center justify-center">?</span>
              Awaiting Visual Data
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          
          <p className="dark:text-[#8A0303] text-[#0055FF] text-xs tracking-[0.3em] uppercase mb-4 transition-colors">
            {project.category}
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter dark:text-[#E0E0E0] text-zinc-900 mb-6 transition-colors">
            {project.title}
          </h2>
          
          <p className="dark:text-gray-400 text-zinc-600 text-base leading-relaxed mb-8 transition-colors">
            {project.longDesc}
          </p>

          <div className="mb-10">
            <h4 className="dark:text-zinc-500 text-zinc-400 text-xs font-mono tracking-widest uppercase mb-4 border-b dark:border-zinc-800 border-zinc-200 pb-2 transition-colors">
              Architecture Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 dark:bg-zinc-900 bg-zinc-100 border dark:border-zinc-800 border-zinc-300 dark:text-zinc-300 text-zinc-700 text-xs tracking-wider uppercase transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-auto">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 dark:bg-[#8A0303] bg-[#0055FF] text-white text-sm font-bold tracking-widest uppercase dark:hover:bg-[#A00303] hover:bg-[#0044CC] transition-colors"
            >
              <span>Live Deployment</span>
              <ExternalLink size={16} />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 border dark:border-zinc-800 border-zinc-300 dark:text-zinc-400 text-zinc-500 hover:text-zinc-900 dark:hover:text-white dark:hover:border-zinc-500 hover:border-zinc-400 transition-all"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body // 3. The destination for the portal (the root of the page)
  );
}