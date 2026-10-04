import React from 'react';
import TiltCard from './TiltCard';
import { ArrowRight, Sparkles, Bot, Zap, Calendar } from 'lucide-react';

export default function FinalCTA({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Subtle Futuristic Light Waves Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <svg 
          className="absolute w-[200%] h-full -left-1/2 top-0 animate-pulse duration-1000" 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-200 300 C 200 150, 400 450, 800 280 C 1200 110, 1400 420, 1800 260" 
            stroke="url(#cta_wave_1)" 
            strokeWidth="2.5" 
            strokeDasharray="6 8"
          />
          <path 
            d="M-200 360 C 250 200, 500 500, 900 320 C 1300 140, 1500 460, 1900 310" 
            stroke="url(#cta_wave_2)" 
            strokeWidth="1.5" 
          />
          <path 
            d="M-200 240 C 150 400, 600 180, 1000 380 C 1400 220, 1600 380, 2000 230" 
            stroke="url(#cta_wave_3)" 
            strokeWidth="1.2" 
            strokeDasharray="3 5"
          />
          <defs>
            <linearGradient id="cta_wave_1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0878FE" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="cta_wave_2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0878FE" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cta_wave_3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0878FE" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating radial glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glass Card Container */}
        <TiltCard glare={true} maxRotation={2} scale={1.01}>
          <div className="relative rounded-3xl lg:rounded-[40px] overflow-hidden bg-[#0B1325]/90 border border-white/10 p-8 sm:p-14 lg:p-20 text-center text-white shadow-[0_20px_70px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            
            {/* Top Cyan Accent Strip */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

            {/* Inner Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>Next-Gen Business Automation</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Ready to Put Your Business <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  on Autopilot?
                </span>
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
                Let's build an AI-powered system that saves time, captures leads, and helps your business grow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* Primary CTA */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      scrollTo('contact');
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-300"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Start Your Automation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary Button */}
                <button
                  type="button"
                  onClick={() => scrollTo('services')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>Explore Our Services</span>
                </button>

              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Zero Disruption to Existing Tools
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  Custom-Engineered Architecture
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Direct WhatsApp & Email Delivery
                </span>
              </div>

            </div>

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
