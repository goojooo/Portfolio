import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CyberSpine() {
  const spineRef = useRef();
  const segments = 12; // The number of vertebrae in the tail

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!spineRef.current) return;

    // Animate each segment of the tail to create a slithering motion
    spineRef.current.children.forEach((node, i) => {
      const offset = i * 0.3; // Delay the wave for each segment down the line
      
      // Calculate a slithering sine wave that gets wider towards the tip
      const waveX = Math.sin(t * 1.5 - offset) * (0.1 + i * 0.08);
      const waveZ = Math.cos(t * 1.2 - offset) * (0.1 + i * 0.08);

      // Position the segments vertically, hanging downwards
      node.position.set(waveX, 2.2 - i * 0.4, waveZ);

      // Rotate the nodes so they look like they are carving through the water
      node.rotation.y = t + offset;
      node.rotation.x = Math.sin(t - offset) * 0.5;

      // Make the very last segment (The Stinger) pulse with a red glow
      if (i === segments - 1) {
        node.material.emissiveIntensity = Math.abs(Math.sin(t * 4)) * 2 + 0.5;
      }
    });
  });

  return (
    <group ref={spineRef}>
      {Array.from({ length: segments }).map((_, i) => {
        // Taper the size of the shards as they get closer to the stinger
        const scale = 1 - (i * 0.05);
        
        return (
          <mesh key={i} scale={[scale, scale, scale]}>
            {/* Sharp, low-poly obsidian crystal shape */}
            <coneGeometry args={[0.2, 0.5, 4]} />
            <meshStandardMaterial
              color={i === segments - 1 ? "#8A0303" : "#0A0A0A"} // Stinger is red, rest is dark
              emissive={i === segments - 1 ? "#ff0000" : "#000000"}
              roughness={0.1}
              metalness={0.9}
              flatShading={true}
              wireframe={i % 3 === 0} // Every 3rd segment is a wireframe to make it look "Cyber"
            />
          </mesh>
        );
      })}
    </group>
  );
}