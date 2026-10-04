import React from 'react';
import TiltCard from './TiltCard';
import { 
  Sparkles, 
  Search, 
  Cpu, 
  Bot, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Activity 
} from 'lucide-react';

const PROCESS_STEPS_4 = [
  {
    step: "01",
    name: "Discover",
    tagline: "System Audit & Workflow Mapping",
    description: "We analyze your existing workflows, identify bottlenecks, locate high-value manual drain, and map out the exact ROI blueprint for automation.",
    icon: Search,
    deliverables: ["Process bottleneck analysis", "Architecture blueprint", "ROI projection"]
  },
  {
    step: "02",
    name: "Build",
    tagline: "Custom Architecture & Agent Development",
    description: "We configure specialized AI agents, prompt architectures, API integrations, and secure data webhooks connecting your core software stack.",
    icon: Cpu,
    deliverables: ["Custom AI model tuning", "API integrations & webhooks", "Prompt engineering & RAG"]
  },
  {
    step: "03",
    name: "Automate",
    tagline: "End-to-End Pipeline Deployment",
    description: "We launch autonomous production pipelines (n8n, Make, custom backend) with rigorous testing, fallbacks, and human-in-the-loop oversight.",
    icon: Bot,
    deliverables: ["Live pipeline activation", "Multi-channel lead ingestion", "Error fallback protocols"]
  },
  {
    step: "04",
    name: "Scale",
    tagline: "Continuous Optimization & Expansion",
    description: "We monitor telemetry, fine-tune accuracy, expand capability into new channels, and scale your automated throughput as your revenue multiplies.",
    icon: TrendingUp,
    deliverables: ["24/7 telemetry monitoring", "Conversion rate optimization", "Multi-department scaling"]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current" />
            <span>Structured Implementation Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A Proven 4-Step Process to <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Complete Autopilot
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            From initial operational audit to scalable AI deployment — structured, reliable, and delivered with precision.
          </p>
        </div>

        {/* Desktop Connected Timeline (4 Steps) */}
        <div className="hidden lg:block relative mb-12">
          {/* Continuous Glowing Cyan/Electric Blue Connecting Line */}
          <div className="absolute top-[42px] left-[10%] right-[10%] h-[2px] bg-slate-800 -z-0">
            <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 w-full shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-pulse" />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {PROCESS_STEPS_4.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center group">
                  
                  {/* Glowing Numbered Node */}
                  <div className="w-20 h-20 rounded-2xl bg-[#0B1325] border-2 border-cyan-500/40 text-cyan-400 font-mono font-bold text-lg flex flex-col items-center justify-center mb-8 shadow-[0_0_25px_rgba(6,182,212,0.25)] group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 relative">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Phase</span>
                    <span className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {item.step}
                    </span>
                    <div className="absolute -bottom-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  </div>

                  {/* Step Info Card with TiltCard */}
                  <TiltCard glare={true} maxRotation={3} className="w-full h-full">
                    <div className="bg-[#0B1325]/90 border border-white/10 rounded-3xl p-6 w-full shadow-lg group-hover:border-cyan-400/50 group-hover:shadow-[0_12px_36px_rgba(6,182,212,0.18)] transition-all flex flex-col justify-between h-full backdrop-blur-xl relative overflow-hidden text-left">
                      {/* Top ambient highlight */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">
                              Step {item.step}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.name}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs font-mono text-slate-400 mb-3">
                          {item.tagline}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                          {item.description}
                        </p>
                      </div>

                      {/* Deliverables checklist */}
                      <div className="pt-4 border-t border-white/10 space-y-1.5">
                        {item.deliverables.map((d, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-6">
          <div className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-500 -translate-x-1/2" />

          {PROCESS_STEPS_4.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1325] border-2 border-cyan-400 text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)] relative z-10">
                  {item.step}
                </div>

                <div className="bg-[#0B1325]/90 border border-white/10 rounded-2xl p-5 sm:p-6 flex-1 shadow-lg backdrop-blur-xl">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                      Step {item.step} • {item.name}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {item.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-3">
                    {item.description}
                  </p>
                  <div className="space-y-1 pt-2 border-t border-white/10">
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
