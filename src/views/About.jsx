import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CyberSpine from '../components-3d/CyberSpine';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const textContainerRef = useRef(null);
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        // Animate the text rising
        gsap.fromTo(
            textContainerRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 30%', scrub: 1 },
            }
        );

        // Fade and scale in the 3D canvas on the right
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
        <section ref={sectionRef} className="relative w-full min-h-screen flex items-center px-8 md:px-24 pointer-events-none z-10 overflow-hidden">
            
            {/* 2-Column Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-5">
                
                {/* Left Column: Text AND Resume Button */}
                <div ref={textContainerRef} className="max-w-2xl pointer-events-auto">
                    <h2 className="text-[#8A0303] text-xl tracking-[0.3em] uppercase mb-6">
                        The Origin
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-[#E0E0E0] mb-8 leading-tight">
                        Building scalable applications is where logic meets creativity.
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-sans mb-6">
                        My journey began with a curiosity for how software works beneath the surface. Today, I specialize in crafting full-stack applications using Java, Spring Boot, React, and modern web technologies, transforming ideas into reliable and intuitive digital experiences.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed font-sans mb-10">
                        I enjoy solving complex problems, designing clean architectures, and continuously learning new technologies. Whether it's building REST APIs, integrating AI capabilities, or creating responsive user interfaces, I strive to deliver solutions that are both efficient and impactful.
                    </p>

                    {/* THE NEW RESUME BUTTON */}
                    <a 
                        href="/resume.pdf" 
                        download="Nayan_Resume.pdf"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-800 text-sm tracking-widest uppercase text-zinc-400 hover:text-[#E0E0E0] hover:border-[#8A0303] hover:bg-[#8A0303]/10 transition-all duration-300 cursor-pointer"
                    >
                        <span>Extract Resume</span>
                        {/* Download Icon */}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </div>

                {/* Right Column: 3D Tech Scorpio Tail */}
                <div ref={canvasContainerRef} className="h-[50vh] md:h-[80vh] w-full relative pointer-events-auto">
                    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={2} />
                        <pointLight position={[-5, 5, -5]} intensity={1} color="#8A0303" />

                        {/* Render the minimalist slithering tail */}
                        <CyberSpine />

                    </Canvas>
                </div>

            </div>
        </section>
    );
}