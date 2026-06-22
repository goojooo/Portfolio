import { useState } from 'react';
import { useTheme } from './context/ThemeContext'; 
import CanvasContainer from './components-3d/CanvasContainer';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar'; 
import Hero from './views/Hero';
import About from './views/About';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Skills from './views/Skills';
import Footer from './components/Footer';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  
  // Grab the theme from our global state
  const { theme } = useTheme(); 

  return (
    <main className="relative min-h-screen bg-transparent transition-colors duration-500">
      <CustomCursor />
      <Navbar /> 
      
      {/* Passing the theme into the 3D Canvas Container */}
      <CanvasContainer activeProject={activeProject} theme={theme} />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects setActiveProject={setActiveProject} />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}