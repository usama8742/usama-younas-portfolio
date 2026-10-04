import React, { useState } from 'react';
import { 
  Database, 
  Brain, 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Layers, 
  Activity 
} from 'lucide-react';
import TiltCard from './TiltCard';
import { AI_PLATFORM_PILLARS } from '../data/aiCourseData';

const ICON_MAP = {
  Database: Database,
  Brain: Brain,
  ShieldCheck: ShieldCheck,
  Workflow: Workflow
};

export default function AiPlatformPillars({ onOpenContact }) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = AI_PLATFORM_PILLARS[activePillarIndex];

  return (
    <section id="ai-platform" className="py-24 lg:py-32 bg-[#070C18] border-b border-white/5 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current" />
            <span>The Platform Architecture for Trusted AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Making AI Work in <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Real Enterprise Production.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Building a toy demo chatbot is easy. Running AI safely, deterministically, and reliably at scale is where most businesses struggle. Here is how 3X AI engineers trusted production platforms.
          </p>
        </div>

        {/* 4 Pillar Switcher Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {AI_PLATFORM_PILLARS.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.icon] || Database;
            const isSelected = activePillarIndex === idx;

            return (
              <button
                key={pillar.id}
                type="button"
                onClick={() => setActivePillarIndex(idx)}
                className={`p-6 rounded-3xl border text-left transition-all duration-300 relative flex flex-col justify-between backdrop-blur-xl ${
                  isSelected
                    ? 'bg-[#0B1325] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-[1.02]'
                    : 'bg-[#0B1325]/50 border-white/10 hover:border-cyan-500/40 text-slate-300 hover:bg-[#0B1325]/80'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-white/5 text-cyan-400 border border-white/10'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-2 font-mono">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono font-bold">
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-500'}>
                    {isSelected ? 'Active Spec' : 'Inspect Pillar'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Detail View */}
        <div className="bg-[#0B1325]/90 rounded-3xl p-7 sm:p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Plain English & Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-3 inline-block">
                  Production Architecture Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {activePillar.title}: <span className="text-cyan-400">{activePillar.subtitle}</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {activePillar.plainEnglish}
                </p>
              </div>

              {/* Simple Analogy Box */}
              <div className="p-5 rounded-2xl bg-[#070C18] border border-white/10 text-xs sm:text-sm text-slate-300 flex items-start gap-3.5">
                <Lightbulb className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold mb-1">Simple Real-World Analogy:</strong>
                  <span className="leading-relaxed text-slate-300">{activePillar.simpleAnalogy}</span>
                </div>
              </div>

              {/* Concrete Business Benefits */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3 font-mono">
                  Enterprise Value Delivered:
                </span>
                <div className="space-y-2.5">
                  {activePillar.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Platform Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#070C18] rounded-3xl p-6 sm:p-7 border border-white/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white">Production Benchmark</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-300 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                  3X Engine Core
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Visual Architecture Schematic Image */}
                <div className="rounded-2xl overflow-hidden border border-white/10 relative group shadow-sm bg-slate-950">
                  <img 
                    src="/images/master-architecture.jpg" 
                    alt="Production AI System Architecture Blueprint"
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] font-mono font-bold text-white flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-cyan-400" />
                      <span>Multi-Tier Architecture Blueprint</span>
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] text-slate-400 block uppercase">Objective</span>
                  <p className="text-white font-bold mt-0.5">Deterministic Automation & Zero Model Lock-in</p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] text-slate-400 block uppercase">Target Accuracy SLA</span>
                  <p className="text-emerald-400 font-bold mt-0.5">99.6%+ With Human-in-the-Loop Safeguards</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all uppercase tracking-wider"
                >
                  <span>Build This Into Your Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
