import React from 'react';
import { INDUSTRIES } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { 
  Building2, 
  Stethoscope, 
  Scale, 
  GraduationCap, 
  Megaphone, 
  Factory,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP = {
  Building2: Building2,
  Stethoscope: Stethoscope,
  Scale: Scale,
  GraduationCap: GraduationCap,
  Megaphone: Megaphone,
  Factory: Factory,
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#F8FAFE] dark:bg-[#070B16] border-y border-[#C9DFFF]/70 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Industry Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            AI Automation for <span className="text-[#0878FE] dark:text-cyan-400">Different Industries</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Every vertical has unique compliance, lead qualification rules, and data flows. Here is how I engineer tailored AI automation for each.
          </p>
        </div>

        {/* 6 Rich Industry Cards Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICON_MAP[ind.icon] || Building2;
            return (
              <TiltCard key={idx} glare={true} maxRotation={4} className="h-full">
                <div
                  className="group bg-white dark:bg-[#0B101E] border border-[#C9DFFF] dark:border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#0878FE] dark:hover:border-cyan-400/80 hover:shadow-card-hover dark:hover:shadow-[0_12px_36px_rgba(8,120,254,0.25)] flex flex-col justify-between h-full"
                >
                  <div>
                    {/* High-Resolution Industry Image Header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img 
                        src={ind.image} 
                        alt={`${ind.title} AI Automation Deployment`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      
                      {/* Dark/Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/90 via-[#070A12]/30 to-transparent"></div>

                      {/* Tag Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-mono font-bold text-[#0878FE] dark:text-cyan-400 border border-white/50 dark:border-slate-700 shadow-sm">
                          {ind.tag}
                        </span>
                      </div>

                      {/* Title & Icon on Image Base */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[#0878FE] dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm border border-white/40 dark:border-slate-700">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white drop-shadow-sm">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                        {ind.description}
                      </p>

                      {/* Practical Workflows Checklist */}
                      {ind.features && (
                        <div className="space-y-2 border-t border-[#C9DFFF]/60 dark:border-slate-800 pt-4">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                            Tailored Systems:
                          </span>
                          {ind.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0878FE] dark:text-cyan-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Strip */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#0878FE] dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
