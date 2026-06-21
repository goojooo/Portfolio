import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      // The inner dot moves instantly
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      
      // The outer ring trails smoothly behind
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
 {/* Sharp Inner Dot */}
      <div 
        ref={cursorRef} 
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-[#8A0303] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Smooth Trailing Ring */}
      <div 
        ref={followerRef} 
        className="hidden md:block fixed top-0 left-0 w-8 h-8 border border-[#8A0303] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50"
      />
    </>
  );
}