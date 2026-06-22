import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function CyberSpine({ theme }) { 
  const spineRef = useRef();
  const segments = 12; 
  
  const bodyColor = theme === 'light' ? '#E2E8F0' : '#0A0A0A'; 
  const stingerColor = theme === 'light' ? '#0055FF' : '#8A0303'; 
  const stingerEmissive = theme === 'light' ? '#00aaff' : '#ff0000'; 

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!spineRef.current) return;

    spineRef.current.children.forEach((node, i) => {
      const offset = i * 0.3; 
      
      const waveX = Math.sin(t * 1.5 - offset) * (0.1 + i * 0.08);
      const waveZ = Math.cos(t * 1.2 - offset) * (0.1 + i * 0.08);

      node.position.set(waveX, 2.2 - i * 0.4, waveZ);
      node.rotation.y = t + offset;
      node.rotation.x = Math.sin(t - offset) * 0.5;

      if (i === segments - 1) {
        node.material.emissiveIntensity = Math.abs(Math.sin(t * 4)) * 2 + 0.5;
      }
    });
  });

  return (
    <group ref={spineRef}>
      {Array.from({ length: segments }).map((_, i) => {
        const scale = 1 - (i * 0.05);
        const isStinger = i === segments - 1; 
        
        return (
          <mesh key={i} scale={[scale, scale, scale]}>
            <coneGeometry args={[0.2, 0.5, 4]} />
            <meshStandardMaterial
              color={isStinger ? stingerColor : bodyColor} 
              emissive={isStinger ? stingerEmissive : "#000000"}
              roughness={0.1}
              metalness={0.9}
              flatShading={true}
              wireframe={i % 3 === 0} 
            />
          </mesh>
        );
      })}
    </group>
  );
}