import { Canvas } from '@react-three/fiber';
import CyberSpine from '../components-3d/CyberSpine';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`relative w-full min-h-screen flex flex-col justify-center px-8 md:px-24 pt-20 transition-colors duration-500 ${isLight ? 'bg-[#F8FAFC]' : 'bg-transparent'}`}>
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Canvas>
      </div>

      {/* Foreground Text */}
      <div className="relative z-10 pointer-events-none max-w-4xl">
        <p className={`text-sm tracking-[0.3em] uppercase mb-6 transition-colors duration-500 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
          Software Engineer & Full Stack Developer
        </p>
        <h1 className={`text-5xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-6 transition-colors duration-500 ${isLight ? 'text-[#1A1A2E]' : 'text-[#E0E0E0]'}`}>
          Engineer Logic.<br/>
          <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${isLight ? 'from-[#0055FF] to-zinc-400' : 'from-[#8A0303] to-zinc-600'}`}>
            Create Impact.
          </span>
        </h1>
        <p className={`text-lg md:text-xl max-w-xl font-sans leading-relaxed transition-colors duration-500 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
          Java Full-Stack Developer building scalable backend systems with Spring Boot and modern, high-performance React applications.
        </p>
      </div>
    </section>
  );
}