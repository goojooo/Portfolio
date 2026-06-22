import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-900 bg-[#020202] py-8 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between z-20 relative pointer-events-auto">
      
      <div className="text-zinc-500 text-xs md:text-sm font-mono tracking-widest uppercase mb-4 md:mb-0 text-center md:text-left">
        © {new Date().getFullYear()} Nayan. All Systems Operational.
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <span className="text-zinc-600 text-[10px] md:text-xs tracking-[0.2em] uppercase text-center">
          Engineered with logic & creativity
        </span>
        
        {/* Back to Top Trigger */}
        <button 
          onClick={scrollToTop}
          className="p-3 bg-[#0A0A0A] border border-zinc-800 text-zinc-400 hover:text-[#8A0303] hover:border-[#8A0303] hover:bg-[#8A0303]/10 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

    </footer>
  );
}

