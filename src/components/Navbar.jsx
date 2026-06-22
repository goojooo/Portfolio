import { Mail, Sun, Moon } from 'lucide-react'; // <-- Import Sun and Moon
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // <-- Import the custom hook

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // <-- Grab the state and the toggle function

  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:px-24 flex justify-between items-center z-50 bg-[#050505]/70 backdrop-blur-md border-b border-zinc-900/50 transition-all duration-500">
      <div className="text-[#E0E0E0] font-bold tracking-[0.2em] uppercase text-xl md:text-2xl">
        Nayan <span className="text-[#8A0303]">.</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="https://github.com/goojooo" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#8A0303] transition-colors">
          <FaGithub size={22} />
        </a>
        <a href="https://linkedin.com/in/nayan-dahare-108468280" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-[#8A0303] transition-colors">
          <FaLinkedin size={22} />
        </a>
        <a href="mailto:nayandahare02@gmail.com" className="text-zinc-400 hover:text-[#8A0303] transition-colors">
          <Mail size={22} />
        </a>

        {/* Vertical Divider */}
        <div className="w-[1px] h-6 bg-zinc-800 mx-2"></div>

        {/* The Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="text-zinc-400 hover:text-[#8A0303] transition-transform hover:rotate-12 duration-300"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </nav>
  );
}