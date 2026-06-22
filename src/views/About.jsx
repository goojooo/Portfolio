import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CyberSpine from '../components-3d/CyberSpine';
import { useTheme } from '../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const sectionRef = useRef(null);
    const textContainerRef = useRef(null);
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        gsap.fromTo(
            textContainerRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 30%', scrub: 1 },
            }
        );

        gsap.fromTo(
            canvasContainerRef.current,
            { scale: 0.5, opacity: 0 },
            {
                scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 60%', end: 'top 40%', scrub: 1 },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative w-full min-h-screen flex items-center px-8 md:px-24 pointer-events-none z-10 overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#F8FAFC]' : 'bg-transparent'}`}
        >
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-5">

                {/* Left Column */}
                <div ref={textContainerRef} className="max-w-2xl pointer-events-auto">
                    <h2 className={`text-xl tracking-[0.3em] uppercase mb-6 transition-colors duration-500 ${isLight ? 'text-[#0055FF]' : 'text-[#8A0303]'}`}>
                        The Origin
                    </h2>
                    <h3 className={`text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight mb-8 transition-colors duration-500 ${isLight ? 'text-[#1A1A2E]' : 'text-[#E0E0E0]'}`}>
                        Building scalable applications is where logic meets creativity.
                    </h3>
                    <p className={`text-lg leading-relaxed font-sans mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-gray-400'}`}>
                        My journey began with a curiosity for how software works beneath the surface. Today, I specialize in crafting full-stack applications using Java, Spring Boot, React, and modern web technologies, transforming ideas into reliable and intuitive digital experiences.
                    </p>
                    <p className={`text-lg leading-relaxed font-sans mb-10 transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-gray-400'}`}>
                        I enjoy solving complex problems, designing clean architectures, and continuously learning new technologies. Whether it's building REST APIs, integrating AI capabilities, or creating responsive user interfaces, I strive to deliver solutions that are both efficient and impactful.
                    </p>

                    <a
                        href="/resume.pdf"
                        download="Nayan_Resume.pdf"
                        className={`inline-flex items-center gap-3 px-8 py-4 border text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                            isLight
                                ? 'border-zinc-300 text-zinc-500 hover:text-[#1A1A2E] hover:border-[#0055FF] hover:bg-[#0055FF]/10'
                                : 'border-zinc-800 text-zinc-400 hover:text-[#E0E0E0] hover:border-[#8A0303] hover:bg-[#8A0303]/10'
                        }`}
                    >
                        <span>Extract Resume</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>

                {/* Right Column: 3D */}
                <div ref={canvasContainerRef} className="h-[50vh] md:h-[80vh] w-full relative pointer-events-auto">
                    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <pointLight position={[-5, 5, -5]} intensity={1} color={isLight ? '#0055FF' : '#8A0303'} />
                        <CyberSpine />
                    </Canvas>
                </div>
            </div>
        </section>
    );
}