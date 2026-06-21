
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full p-6 md:px-24 flex justify-between items-center z-50 bg-[#050505]/70 backdrop-blur-md border-b border-zinc-900/50 transition-all">
            <div className="text-[#E0E0E0] font-bold tracking-[0.2em] uppercase text-xl md:text-2xl">
                Nayan <span className="text-[#8A0303]">.</span>
            </div>

            <div className="flex gap-6">
                <a
                    href="https://github.com/goojooo"

                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-[#8A0303] transition-colors"
                >
                    <FaGithub size={22} />
                </a>
                <a
                    href="https://linkedin.com/in/nayan-dahare-108468280"

                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-[#8A0303] transition-colors"
                >
                    <FaLinkedin size={22} />
                </a>
                <a
                    href="mailto:nayandahare02@gmail.com.com"

                    className="text-zinc-400 hover:text-[#8A0303] transition-colors"
                >
                    <Mail size={22} />
                </a>
            </div>
        </nav>
    );
}