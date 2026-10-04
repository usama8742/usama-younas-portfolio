import React from 'react';

export default function AuroraGlow({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      {/* Primary Top Left Glow */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-[#0878FE]/12 via-[#06B6D4]/08 to-transparent blur-[120px] animate-float-slow" />

      {/* Secondary Bottom Right Glow */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-[#8B5CF6]/10 via-[#0878FE]/06 to-transparent blur-[130px] animate-float-reverse" />
    </div>
  );
}
