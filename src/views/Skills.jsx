import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, Database, Layout, Wrench } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
    { title: "Core Languages",        icon: Code2,    skills: ["Core Java", "OOP", "JavaScript", "SQL"] },
    { title: "Backend Architecture",  icon: Server,   skills: ["Spring Boot", "Spring Boot MVC", "REST API"] },
    { title: "Frontend Engineering",  icon: Layout,   skills: ["React.js", "HTML", "CSS", "Bootstrap"] },
    { title: "Database Systems",      icon: Database, skills: ["MySQL", "JDBC", "Hibernate"] },
    { title: "DevOps & Tools",        icon: Wrench,   skills: ["Git / GitHub", "Maven", "Postman", "Shopify"] },
];

export default function Skills() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const sectionRef = useRef(null);
    const gridRef    = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -30 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
            }
        );
        gsap.fromTo(
            gridRef.current.children,
            { opacity: 0, y: 80, scale: 0.95 },
            {
                opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)',
                scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative w-full min-h-screen py-32 px-8 md:px-24 z-10 flex flex-col justify-center pointer-events-none transition-colors duration-500 ${isLight ? 'bg-[#F8FAFC]' : 'bg-transparent'}`}
        >
            {/* Heading */}
            <div ref={headingRef} className="mb-20 pointer-events-auto">
                <p className={`text-sm tracking-[0.3em] uppercase mb-2 transition-colors duration-500 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}>
                    Technical Arsenal
                </p>
                <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tighter transition-colors duration-500 ${isLight ? 'text-[#1A1A2E]' : 'text-[#E0E0E0]'}`}>
                    System Capabilities
                </h2>
            </div>

            {/* Grid */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-auto">
                {SKILL_CATEGORIES.map((category, idx) => {
                    const Icon = category.icon;
                    return (
                        <div
                            key={idx}
                            className={`group relative p-8 backdrop-blur-md border transition-all duration-500 cursor-default overflow-hidden hover:-translate-y-2 ${
                                isLight
                                    ? 'bg-white/80 border-zinc-200 hover:border-[#0055FF] hover:shadow-[0_0_30px_rgba(0,85,255,0.12)]'
                                    : 'bg-[#050505]/60 border-zinc-900 hover:border-[#8A0303] hover:shadow-[0_0_30px_rgba(138,3,3,0.15)]'
                            }`}
                        >
                            {/* Scan line */}
                            <div className={`absolute inset-0 -translate-y-full group-hover:animate-scan bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 ${isLight ? 'via-[#0055FF]/10' : 'via-[#8A0303]/10'}`} />

                            <div className="relative z-10">
                                <Icon
                                    className={`mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}
                                    size={36}
                                />
                                <h3 className={`text-xl font-bold uppercase tracking-widest mb-6 transition-colors duration-300 group-hover:text-white ${isLight ? 'text-zinc-700 group-hover:!text-[#1A1A2E]' : 'text-zinc-300'}`}>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className={`px-4 py-2 text-xs font-mono tracking-widest uppercase border transition-all duration-300 ${
                                                isLight
                                                    ? 'bg-zinc-50 border-zinc-200 text-zinc-500 group-hover:border-[#0055FF]/40 group-hover:bg-[#0055FF]/10 group-hover:text-zinc-700'
                                                    : 'bg-[#020202] border-zinc-800/50 text-zinc-500 group-hover:border-[#8A0303]/40 group-hover:bg-[#8A0303]/10 group-hover:text-zinc-200'
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}