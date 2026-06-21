import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, Database, Layout, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
    {
        title: "Core Languages",
        icon: <Code2 className="text-[#8A0303] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2" size={36} />,
        skills: ["Core Java", "OOP", "JavaScript", "SQL"]
    },
    {
        title: "Backend Architecture",
        icon: <Server className="text-[#8A0303] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2" size={36} />,
        skills: ["Spring Boot", "Spring Boot MVC", "REST API"]
    },
    {
        title: "Frontend Engineering",
        icon: <Layout className="text-[#8A0303] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2" size={36} />,
        skills: ["React.js", "HTML", "CSS", "Bootstrap"]
    },
    {
        title: "Database Systems",
        icon: <Database className="text-[#8A0303] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2" size={36} />,
        skills: ["MySQL", "JDBC", "Hibernate"]
    },
    {
        title: "DevOps & Tools",
        icon: <Wrench className="text-[#8A0303] mb-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-2" size={36} />,
        skills: ["Git / GitHub", "Maven", "Postman", "Shopify"]
    }
];

export default function Skills() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        // 1. Heading slides down and fades in
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -30 },
            {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
            }
        );

        // 2. The Matrix Boot-up: Cards cascade upwards
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
        <section ref={sectionRef} className="relative w-full min-h-screen py-32 px-8 md:px-24 z-10 flex flex-col justify-center pointer-events-none">

            {/* Section Heading */}
            <div ref={headingRef} className="mb-20 pointer-events-auto">
                <p className="text-[#8A0303] text-sm tracking-[0.3em] uppercase mb-2">Technical Arsenal</p>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#E0E0E0]">
                    System Capabilities
                </h2>
            </div>

            {/* The Animated Cyber-Grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-auto"
            >
                {SKILL_CATEGORIES.map((category, idx) => (
                    <div
                        key={idx}
                        // The main card interactions: border glow, subtle lift, and background shift
                        className="group relative p-8 bg-[#050505]/60 backdrop-blur-md border border-zinc-900 hover:border-[#8A0303] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(138,3,3,0.15)] transition-all duration-500 cursor-default overflow-hidden"
                    >
                        {/* The sweeping scanning line on hover */}
                        {/* The sweeping scanning line on hover */}
                        <div className="absolute inset-0 -translate-y-full group-hover:animate-scan bg-gradient-to-b from-transparent via-[#8A0303]/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />

                        <div className="relative z-10">
                            {category.icon}

                            <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors duration-300 mb-6">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        // Tag interactions: fill with red tint and brighten text
                                        className="px-4 py-2 bg-[#020202] border border-zinc-800/50 text-zinc-500 text-xs font-mono tracking-widest uppercase transition-all duration-300 group-hover:border-[#8A0303]/40 group-hover:bg-[#8A0303]/10 group-hover:text-zinc-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}