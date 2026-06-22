import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Constellation from './Constellation';
import FluidBackground from './FluidBackground';
import ShardProject from './ShardProject';

export default function CanvasContainer({ activeProject, theme }) {
  const shardPositions = [
    [-1.8, 0, 1],
    [0, 0.5, 1], 
    [1.8, -0.2, 1] 
  ];

  const bgColor = theme === 'light' ? '#F8FAFC' : '#050505'; 
  const pointLightColor = theme === 'light' ? '#0055FF' : '#8A0303'; 

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={[bgColor]} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, 2]} intensity={0.5} color={pointLightColor} />
        
        {/* ✅ Pass theme down — matches your existing pattern */}
        <FluidBackground theme={theme} />
        <Constellation theme={theme} />

        {shardPositions.map((pos, idx) => (
          <ShardProject 
            key={idx} 
            position={pos} 
            isHovered={activeProject === idx} 
          />
        ))}
        
        <Preload all />
      </Canvas>
    </div>
  );
}