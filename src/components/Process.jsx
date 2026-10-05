import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#EFEAE3] dark:bg-[#070B16] border-y border-[#DBD6CF]/70 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] dark:bg-[#FE330A]/15 border border-[#DBD6CF] dark:border-[#FE330A]/30 text-[#FE330A] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Execution Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] dark:text-white tracking-tight leading-tight mb-4">
            From Idea to <span className="text-[#FE330A] dark:text-cyan-400">Automation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            A disciplined, 6-step engineering roadmap turning operational chaos into predictable automated systems.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Continuous Thin Blue Connecting Line */}
          <div className="absolute top-7 left-12 right-12 h-0.5 bg-[#DBD6CF] dark:bg-slate-800 -z-0">
            <div className="h-full bg-gradient-to-r from-[#FE330A] via-cyan-400 to-[#D62705] w-full"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Blue Numbered Circle */}
                <div className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 border-2 border-[#FE330A] dark:border-cyan-400 text-[#FE330A] dark:text-cyan-400 font-mono font-bold text-base flex items-center justify-center mb-6 shadow-glow-sm dark:shadow-[0_0_15px_rgba(8,120,254,0.3)] group-hover:scale-110 group-hover:bg-[#FE330A] group-hover:text-white dark:group-hover:bg-[#FE330A] dark:group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>

                {/* Step Info Card with TiltCard */}
                <TiltCard glare={true} maxRotation={5} className="w-full h-full">
                  <div className="bg-white dark:bg-[#0B101E] border border-[#DBD6CF] dark:border-slate-800 rounded-2xl p-5 w-full shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] group-hover:border-[#FE330A] dark:group-hover:border-cyan-400/80 transition-all flex flex-col justify-between min-h-[160px] h-full text-left">
                    <div>
                      <h3 className="text-base font-bold text-[#191919] dark:text-white mb-2 group-hover:text-[#FE330A] dark:group-hover:text-cyan-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      Phase {item.step}
                    </span>
                  </div>
                </TiltCard>

              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-6">
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-[#FE330A] -translate-x-1/2"></div>

          {PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
              <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-900 border-2 border-[#FE330A] text-[#FE330A] dark:text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm relative z-10">
                {item.step}
              </div>

              <div className="bg-white dark:bg-[#0B101E] border border-[#DBD6CF] dark:border-slate-800 rounded-2xl p-5 flex-1 shadow-card">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FE330A] dark:text-cyan-400 block mb-1">
                  Phase {item.step}
                </span>
                <h3 className="text-base font-bold text-[#191919] dark:text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
