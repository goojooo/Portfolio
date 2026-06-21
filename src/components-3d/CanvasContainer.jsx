import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import Constellation from './Constellation';
import FluidBackground from './FluidBackground';
import ShardProject from './ShardProject';

export default function CanvasContainer({ activeProject }) {
  // THIS is the array that was missing/undefined!
  const shardPositions = [
    [-1.8, 0, 1],  // Project 1 (Left)
    [0, 0.5, 1],   // Project 2 (Center)
    [1.8, -0.2, 1] // Project 3 (Right)
  ];

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor('#050505', 1);
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, 2]} intensity={0.5} color="#8A0303" />
        
        <FluidBackground />
        <Constellation />

        {/* Render 3 interactive crystal shards */}
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