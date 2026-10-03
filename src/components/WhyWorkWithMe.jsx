import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { Briefcase, Sliders, Network, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Briefcase: Briefcase,
  Sliders: Sliders,
  Network: Network,
  TrendingUp: TrendingUp,
};

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] dark:bg-[#FE330A]/15 border border-[#DBD6CF] dark:border-[#FE330A]/30 text-[#FE330A] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] dark:text-white tracking-tight leading-tight mb-4">
            More Than <span className="text-[#FE330A] dark:text-cyan-400">Just AI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Why companies partner with 3X AI Automation over generic agencies or disconnected SaaS tools.
          </p>
        </div>

        {/* 4 Cards Grid with TiltCard */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = ICON_MAP[item.icon] || Briefcase;
            return (
              <TiltCard key={idx} glare={true} maxRotation={5} className="h-full">
                <div
                  className="group bg-white dark:bg-[#0B101E] border border-[#DBD6CF] dark:border-slate-800 rounded-2xl p-7 transition-all duration-300 hover:border-[#FE330A] dark:hover:border-cyan-400/80 hover:shadow-card-hover dark:hover:shadow-[0_12px_36px_rgba(8,120,254,0.25)] flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EFEAE3] dark:bg-[#FE330A]/15 text-[#FE330A] dark:text-cyan-400 border border-[#DBD6CF] dark:border-[#FE330A]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FE330A] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-[#191919] dark:text-white mb-3 group-hover:text-[#FE330A] dark:group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#DBD6CF]/60 dark:border-slate-800 flex items-center gap-1.5 text-xs font-semibold text-[#FE330A] dark:text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 text-current" />
                    <span>Guaranteed Principle</span>
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
