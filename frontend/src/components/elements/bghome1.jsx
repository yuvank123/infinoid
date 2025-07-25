import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticleCanvas from './ParticleCanvas.jsx';

const Bghome1 = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div ref={bgRef} className="absolute inset-0 z-0">
      {/* Background canvas */}
      <ParticleCanvas />

      {/* Black overlay with slight transparency */}
      <div className="absolute inset-0 bg-black opacity-0 pointer-events-none" />
    </div>
  );
};

export default Bghome1;
