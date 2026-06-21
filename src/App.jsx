import { useState } from 'react';
import CanvasContainer from './components-3d/CanvasContainer';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar'; // <-- Import the new Navbar
import Hero from './views/Hero';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Skills from './views/Skills';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#e0e0e0]">
      <CustomCursor />
      <Navbar /> {/* <-- Add Navbar right here at the top */}
      <CanvasContainer activeProject={activeProject} />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects setActiveProject={setActiveProject} />
        <Contact />
      </div>
    </main>
  );
}