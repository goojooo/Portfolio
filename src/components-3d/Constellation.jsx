import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ✅ Defined outside component — no GC pressure inside useFrame
const DARK_COLOR  = new THREE.Color('#8A0303');
const LIGHT_COLOR = new THREE.Color('#0055FF');

export default function Constellation({ theme }) {
  const pointsRef = useRef();
  const { mouse, viewport } = useThree();

  const count = 3000;
  const [positions, originalPositions] = useMemo(() => {
    const pos  = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 0.5;
      const theta  = Math.random() * 2 * Math.PI;
      const z      = (Math.random() - 0.5) * 2;
      const x      = radius * Math.cos(theta);
      const y      = radius * Math.sin(theta) + (radius * 0.3); 
      
      pos[i * 3]     = x;   orig[i * 3]     = x;
      pos[i * 3 + 1] = y;   orig[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;   orig[i * 3 + 2] = z;
    }
    return [pos, orig];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array;
    const mouseX = (mouse.x * viewport.width)  / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < count; i++) {
      const i3    = i * 3;
      const origX = originalPositions[i3];
      const origY = originalPositions[i3 + 1];
      const dx    = positions[i3]     - mouseX;
      const dy    = positions[i3 + 1] - mouseY;
      const distance  = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 1.5;
      
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        positions[i3]     += (dx / distance) * force * 0.15;
        positions[i3 + 1] += (dy / distance) * force * 0.15;
      } else {
        positions[i3]     += (origX - positions[i3])     * 0.04;
        positions[i3 + 1] += (origY - positions[i3 + 1]) * 0.04;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    pointsRef.current.rotation.z = state.clock.elapsedTime * 0.02;

    // ✅ Lerp particle color toward theme target — two lines, no disruption
    const target = theme === 'light' ? LIGHT_COLOR : DARK_COLOR;
    pointsRef.current.material.color.lerp(target, 0.05);
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
        color="#8A0303"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}