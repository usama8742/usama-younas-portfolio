import React from 'react';
import TiltCard from './TiltCard';
import { ArrowRight, Sparkles, MessageSquare, Bot } from 'lucide-react';

export default function FinalCTA({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Premium Blue-Gradient Section with 3D Tilt */}
        <TiltCard glare={true} maxRotation={2} scale={1.01}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0878FE] via-[#0466FD] to-[#0255FD] p-8 sm:p-12 lg:p-16 text-center text-white shadow-glow-lg dark:shadow-[0_0_50px_rgba(8,120,254,0.4)]">
            
            {/* Subtle White/Blue Particle Pattern inspired by 3X Logo */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-particles" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
                    <path d="M10 10L30 30M30 10L10 30" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-particles)" />
              </svg>
            </div>

            {/* Decorative Glowing Orbs */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#0255FD]/40 blur-3xl pointer-events-none"></div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#EAF3FF]" />
                <span>Let's Build Your System</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Have a Process You Want to Automate?
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                Tell me what you're currently doing manually. I'll help you identify where AI and automation can make the process faster and more efficient.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* White CTA Button on Blue Section */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      scrollTo('contact');
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-[#0255FD] bg-white hover:bg-[#F8FAFE] hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Let's Talk About Your Project</span>
                  <ArrowRight className="w-4 h-4 text-[#0255FD]" />
                </button>

                {/* Secondary Transparent Button */}
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>View My Projects</span>
                </button>

              </div>

              {/* Response Time Guarantee */}
              <p className="mt-8 text-xs font-medium text-white/70">
                Direct response within 24 hours · Free architectural assessment
              </p>

            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
