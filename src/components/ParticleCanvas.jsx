import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Generate responsive particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.2,
        isCyan: Math.random() > 0.65,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap or bounce edges
        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        // Smooth mouse gravitation / gentle repulsion
        const dx = mouse.x - p1.x;
        const dy = mouse.y - p1.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          p1.x -= (dx / dist) * force * 1.8;
          p1.y -= (dy / dist) * force * 1.8;
        }

        // Draw particle node with optional glow halo in dark mode
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle = p1.isCyan 
            ? `rgba(6, 182, 212, ${p1.baseAlpha * 1.2})` 
            : `rgba(8, 120, 254, ${p1.baseAlpha * 1.4})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p1.isCyan ? 'rgba(6, 182, 212, 0.6)' : 'rgba(8, 120, 254, 0.8)';
        } else {
          ctx.fillStyle = `rgba(8, 120, 254, ${p1.baseAlpha * 0.9})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distBetween < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - distBetween / 140) * (isDark ? 0.28 : 0.16);
            ctx.strokeStyle = isDark 
              ? `rgba(8, 120, 254, ${lineAlpha})` 
              : `rgba(8, 120, 254, ${lineAlpha})`;
            ctx.lineWidth = isDark ? 1.2 : 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 opacity-70 dark:opacity-85"
    />
  );
}
