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
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Azzle High-Contrast CTA Container */}
        <TiltCard glare={true} maxRotation={2} scale={1.01}>
          <div className="relative rounded-[30px] lg:rounded-[50px] overflow-hidden bg-[#191919] p-8 sm:p-14 lg:p-20 text-center text-white border-2 border-black shadow-2xl">
            
            {/* Azzle Ambient Rotating Orange Glows */}
            <div className="orange-gradient-1 absolute -right-[100px] -top-[100px] w-96 h-96 rounded-full pointer-events-none opacity-50"></div>
            <div className="orange-gradient-2 absolute -left-[100px] -bottom-[100px] w-96 h-96 rounded-full pointer-events-none opacity-40"></div>

            {/* Inner Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[50px] bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#FE330A]" />
                <span>Let's Build Your System</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                Have a Process You Want to <span className="text-[#FE330A]">Automate?</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                Tell me what you're currently doing manually. I'll help you identify where AI and automation can make the process faster, more accurate, and 10x more efficient.
              </p>

              {/* Action Buttons (Azzle Pill Style) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* Primary Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      scrollTo('contact');
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[50px] font-bold text-sm sm:text-base text-white bg-[#FE330A] hover:bg-white hover:text-black border-2 border-[#FE330A] hover:border-white transition-all duration-300 shadow-glow"
                >
                  <span>Let's Talk About Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[50px] font-bold text-sm sm:text-base text-white bg-transparent hover:bg-white hover:text-black border-2 border-white/30 hover:border-white transition-all duration-300"
                >
                  <span>View Live Work</span>
                </button>

              </div>

              {/* Response Time Guarantee */}
              <p className="mt-8 text-xs font-semibold text-slate-400">
                Direct response within 24 hours · Free architectural assessment &amp; ROI projection
              </p>

            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
