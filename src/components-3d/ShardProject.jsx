import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ShardProject({ position, isHovered }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Smoothly interpolate values frame-by-frame
  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();
    
    // Ominous floating up and down movement
    meshRef.current.position.y = position[1] + Math.sin(t + position[0]) * 0.15;

    // React to being hovered (either directly or via the HTML card trigger)
    const activeHover = isHovered || hovered;
    
    // Target rotation speed and scale based on hover state
    const targetSpeed = activeHover ? 2.5 : 0.4;
    const targetScale = activeHover ? 1.3 : 1.0;

    // Smoothly transition scale and rotation
    meshRef.current.rotation.y += 0.01 * targetSpeed;
    meshRef.current.rotation.x += 0.005 * targetSpeed;
    
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Sharp, low-poly diamond shape representing obsidian */}
      <coneGeometry args={[0.6, 1.6, 4]} />
      
      <meshStandardMaterial
        color={isHovered || hovered ? '#A00303' : '#111115'}
        roughness={0.1}
        metalness={0.9}
        flatShading={true} // Gives it that sharp, crystalline, carved stone edge
        emissive={isHovered || hovered ? '#400000' : '#000000'}
      />
    </mesh>
  );
}