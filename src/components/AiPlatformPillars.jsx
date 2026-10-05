import React, { useState } from 'react';
import { 
  Database, 
  Brain, 
  ShieldCheck, 
  Workflow, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Lightbulb, 
  Layers, 
  Check 
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
    <section id="ai-platform" className="py-20 lg:py-28 bg-[#EFEAE3] border-b border-[#DBD6CF] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="orange-gradient-1 absolute top-1/4 left-1/3 w-[600px] h-[500px] pointer-events-none -z-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Inspired by CloudFactory's core message) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[50px] bg-white border border-[#DBD6CF] text-[#191919] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FE330A]" />
            <span>The Platform Architecture for Trusted AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] tracking-tight leading-tight mb-4">
            Make AI Work in <span className="text-[#FE330A]">Real Production.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Building a demo chatbot is easy. Running AI safely, reliably, and consistently in business operations is where most companies fail. Here is how we make AI trusted, controlled, and scalable in simple words.
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
                className={`p-6 rounded-3xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#FE330A] shadow-card ring-2 ring-[#FE330A]/20 scale-[1.02]'
                    : 'bg-white/80 border-[#DBD6CF] hover:bg-white text-slate-800'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-[#FE330A] text-white shadow-sm' : 'bg-[#EFEAE3] text-[#191919]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-black text-[#191919] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FE330A] mb-2">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DBD6CF] flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? 'text-[#FE330A]' : 'text-slate-500'}>
                    {isSelected ? 'Active View' : 'Explore Details'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FE330A]' : 'text-slate-500'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Detail View */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-[#DBD6CF] shadow-card">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Plain English & Benefits (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#FE330A] bg-[#EFEAE3] px-3 py-1 rounded-[50px] border border-[#DBD6CF] mb-3 inline-block">
                  Pillar Breakdown in Plain English
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#191919] mb-2">
                  {activePillar.title}: <span className="text-[#FE330A]">{activePillar.subtitle}</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {activePillar.plainEnglish}
                </p>
              </div>

              {/* Simple Analogy Box */}
              <div className="p-5 rounded-2xl bg-[#EFEAE3] border border-[#DBD6CF] text-xs sm:text-sm text-slate-800 flex items-start gap-3.5">
                <Lightbulb className="w-5 h-5 text-[#FE330A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#191919] font-bold mb-1">Simple Real-World Analogy:</strong>
                  <span className="leading-relaxed">{activePillar.simpleAnalogy}</span>
                </div>
              </div>

              {/* Concrete Business Benefits */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  What This Gives Your Business:
                </span>
                <div className="space-y-2.5">
                  {activePillar.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Visual Platform Card (5 cols) */}
            <div className="lg:col-span-5 bg-[#EFEAE3] rounded-3xl p-6 sm:p-7 border border-[#DBD6CF] space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#DBD6CF]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE330A] animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-800">Production Standard</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#191919] bg-white px-2.5 py-0.5 rounded-[50px] border border-[#DBD6CF]">
                  3X Engine
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {/* Visual Architecture Schematic Image */}
                <div className="rounded-2xl overflow-hidden border border-[#DBD6CF] relative group shadow-sm bg-slate-900">
                  <img 
                    src="/images/master-architecture.jpg" 
                    alt="Production AI System Architecture Blueprint"
                    className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] font-sans font-bold text-white flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#FE330A]" />
                      <span>Enterprise Multi-Tier Architecture Schematic</span>
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DBD6CF]">
                  <span className="text-[10px] text-slate-500 block uppercase">Objective</span>
                  <p className="text-slate-900 font-bold mt-0.5">Eliminate AI Errors &amp; Model Lock-in</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#DBD6CF]">
                  <span className="text-[10px] text-slate-500 block uppercase">Target Accuracy SLA</span>
                  <p className="text-emerald-700 font-bold mt-0.5">99.4%+ With Human Oversight</p>
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
                  className="btn-azzle-primary w-full"
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
