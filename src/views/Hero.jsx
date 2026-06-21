import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const textRef = useRef(null);

  // Simple entrance animation for the text
  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

 // ... keep imports and animation logic exactly the same ...

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-start px-8 md:px-24 pointer-events-none">
      <div ref={textRef} className="z-10 mix-blend-difference">
        <h2 className="text-[#8A0303] text-xl tracking-[0.3em] uppercase mb-4">
          Software Engineer & Full Stack Developer
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold uppercase leading-none tracking-tighter text-[#E0E0E0]">
          Engineer Logic.<br />
          <span className="text-transparent border-text-white" style={{ WebkitTextStroke: '1px #E0E0E0' }}>
              Create Impact.
          </span>
        </h1>
        <p className="mt-8 max-w-md text-gray-400 text-lg leading-relaxed font-sans">
        Java Full-Stack Developer building scalable backend systems with Spring Boot and modern, high-performance React applications.
        </p>
      </div>
      
      {/* ... keep scroll indicator the same ... */}
    </section>
  );
}