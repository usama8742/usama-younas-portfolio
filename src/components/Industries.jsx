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
  ArrowUpRight,
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
    <section id="industries" className="py-24 lg:py-32 bg-[#070C18] border-y border-white/5 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Targeted Industry Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            AI Automation Tailored for <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              High-Value Industries
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Every sector has unique compliance, lead qualification criteria, and workflow bottlenecks. 3X AI builds specialized automation systems for each domain.
          </p>
        </div>

        {/* 6 Rich Industry Cards Grid with 3D Tilt & Smooth Highlight Effect */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ICON_MAP[ind.icon] || Building2;
            return (
              <TiltCard key={idx} glare={true} maxRotation={3} className="h-full">
                <div
                  className="group bg-[#0B1325]/90 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,182,212,0.2)] flex flex-col justify-between h-full backdrop-blur-xl relative"
                >
                  <div>
                    {/* Industry Image Header */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                      <img 
                        src={ind.image} 
                        alt={`${ind.title} AI Automation Deployment`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                      />
                      
                      {/* Dark Gradient Scrim Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-[#0B1325]/50 to-transparent" />

                      {/* Tag Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md text-[11px] font-mono font-bold text-cyan-300 border border-cyan-500/30 shadow-sm">
                          {ind.tag}
                        </span>
                      </div>

                      {/* Title & Icon on Image Base */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white drop-shadow-sm group-hover:text-cyan-300 transition-colors">
                          {ind.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                        {ind.description}
                      </p>

                      {/* Practical Workflows Checklist */}
                      {ind.features && (
                        <div className="space-y-2 border-t border-white/10 pt-4">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Tailored Automation Stack:
                          </span>
                          {ind.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Strip with subtle animated glow */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <span className="font-mono text-[11px]">Ready to Deploy</span>
                      <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity mt-3" />
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
