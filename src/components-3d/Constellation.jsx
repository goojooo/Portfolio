import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Constellation() {
  const pointsRef = useRef();
  const { mouse, viewport } = useThree();

  // Generate 3,000 particles in a sweeping, stinger-like curve
  const count = 3000;
  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Math to create a chaotic, swirling galaxy/tail shape
      const radius = Math.random() * 3 + 0.5;
      const theta = Math.random() * 2 * Math.PI;
      const z = (Math.random() - 0.5) * 2;
      
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta) + (radius * 0.3); 
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }
    return [pos, orig];
  }, [count]);

  // Animation Loop: Handles Rotation & Mouse Repulsion Physics
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    // Map normalized mouse coordinates to 3D world space
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const origX = originalPositions[i3];
      const origY = originalPositions[i3 + 1];

      // Calculate distance between particle and mouse
      const dx = positions[i3] - mouseX;
      const dy = positions[i3 + 1] - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Repulsion radius and force
      const maxDistance = 1.5;
      
      if (distance < maxDistance) {
        // Scatter particles away from the mouse
        const force = (maxDistance - distance) / maxDistance;
        positions[i3] += (dx / distance) * force * 0.15;
        positions[i3 + 1] += (dy / distance) * force * 0.15;
      } else {
        // Elastic snap back to original position
        positions[i3] += (origX - positions[i3]) * 0.04;
        positions[i3 + 1] += (origY - positions[i3 + 1]) * 0.04;
      }
    }
    
    // Tell Three.js to update the geometry
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow, ominous rotation
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8A0303" /* Deep Crimson / Blood Red */
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}