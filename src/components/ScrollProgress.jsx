import React, { useEffect, useRef } from 'react';
import { animate, scroll } from 'motion';

export default function ScrollProgress() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (!progressBarRef.current) return;

    // Use motion's scroll() and animate() to smoothly bind page scroll to progress bar width
    const controls = scroll(
      animate(progressBarRef.current, { scaleX: [0, 1] }, { ease: "linear" })
    );

    return () => {
      controls();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none origin-left">
      <div 
        ref={progressBarRef}
        className="h-full w-full bg-gradient-to-r from-[#0878FE] via-[#06B6D4] to-[#8B5CF6] shadow-[0_0_10px_rgba(6,182,212,0.8)] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
