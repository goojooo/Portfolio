import { X, ExternalLink } from 'lucide-react'; // Make sure you still have lucide-react installed
import { FaGithub } from 'react-icons/fa';
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#020202]/80 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* The Main Modal Window */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0A0A0A] border border-zinc-800 rounded-lg overflow-y-auto shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-zinc-500 hover:text-[#8A0303] transition-colors bg-black/50 rounded-full"
        >
          <X size={24} />
        </button>

        {/* Left Side: Media / Demo Video */}
        <div className="w-full md:w-1/2 bg-black border-r border-zinc-800 min-h-[300px] flex items-center justify-center relative">
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
            // Fallback if no video is provided yet
            <div className="text-zinc-700 font-mono text-sm tracking-widest uppercase flex flex-col items-center gap-4">
              <span className="animate-pulse w-12 h-12 border border-zinc-700 rounded-full flex items-center justify-center">?</span>
              Awaiting Visual Data
            </div>
          )}
        </div>

        {/* Right Side: Information Data */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <p className="text-[#8A0303] text-xs tracking-[0.3em] uppercase mb-4">
            {project.category}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-[#E0E0E0] mb-6">
            {project.title}
          </h2>
          
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            {project.longDesc}
          </p>

          {/* Tech Stack Grid */}
          <div className="mb-10">
            <h4 className="text-zinc-500 text-xs font-mono tracking-widest uppercase mb-4 border-b border-zinc-800 pb-2">
              Architecture Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs tracking-wider uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-4 mt-auto">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#8A0303] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#A00303] transition-colors"
            >
              <span>Live Deployment</span>
              <ExternalLink size={16} />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 transition-all"
            >
              <FaGithub size={20} /> {/* <-- Updated this tag! */}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}