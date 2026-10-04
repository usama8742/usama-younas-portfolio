import React from 'react';
import { Bot, Sliders, Network, Layers, Sparkles, CheckCircle2, ShieldCheck, Cpu, Code2, Zap } from 'lucide-react';
import TiltCard from './TiltCard';
import CountUp from './CountUp';

const ABOUT_CARDS = [
  {
    title: "AI & Automation",
    subtitle: "Building intelligent workflows",
    description: "Designing autonomous multi-step pipelines that handle repetitive reasoning, decisions, and task routing with precision.",
    icon: Bot,
    badge: "Autonomous"
  },
  {
    title: "Custom Systems",
    subtitle: "Built around business requirements",
    description: "No cookie-cutter templates. Solutions engineered specifically to mirror your company's operational rules and edge-cases.",
    icon: Sliders,
    badge: "Tailored"
  },
  {
    title: "API Integrations",
    subtitle: "Connecting different platforms",
    description: "Seamlessly bridging CRMs, databases, messaging channels, internal ERPs, and cloud LLMs through reliable REST & webhooks.",
    icon: Network,
    badge: "Connected"
  },
  {
    title: "End-to-End Development",
    subtitle: "From idea to working system",
    description: "Handling the entire stack from architectural design, prompt engineering, backend microservices, to intuitive web dashboards.",
    icon: Layers,
    badge: "Full-Cycle"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#070C18] border-y border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Engineering Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Turning Operational Complexity Into <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous Systems.
            </span>
          </h2>
        </div>

        {/* Top Split: Narrative & Visual Profile Console */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Main Narrative Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p>
              I’m <strong className="font-bold text-white">Usama Younas</strong>, Lead AI Automation Engineer and founder of <strong className="text-cyan-300">3X AI Automation</strong>. I specialize in architecting production-grade AI agents, workflow orchestrations, and full-stack automation pipelines for modern enterprises.
            </p>
            <p>
              Our engineering scope spans multi-agent swarms (LangGraph, CrewAI), visual automation engines (n8n, Make), real-time voice agents (Twilio, ElevenLabs), intelligent RAG pipelines, and deep CRM synchronizations.
            </p>
            <p>
              Our core methodology is simple: dissect the manual bottlenecks in your business, eliminate human latency with fault-tolerant automated logic, and scale your operational throughput 3X without increasing payroll overhead.
            </p>

            <div className="pt-3 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Zero Generic Templates
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> 24/7 Production Reliability
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Business-First ROI Architecture
              </span>
            </div>
          </div>

          {/* Profile Card / Technical Specs (5 cols) */}
          <div className="lg:col-span-5">
            <TiltCard glare={true} maxRotation={3}>
              <div className="bg-[#0B1325]/90 rounded-3xl border border-white/10 p-6 sm:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
                {/* Top Accent Strip */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"></div>

                <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                  <div className="relative shrink-0">
                    <img 
                      src="/profile-photo.png" 
                      alt="Usama Younas - AI Engineer" 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-[#0B1325] rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-mono font-bold mb-1 border border-cyan-500/20">
                      <Zap className="w-3 h-3 fill-current" />
                      ACTIVE PRODUCTION ENGINEER
                    </div>
                    <h3 className="text-xl font-bold text-white">Usama Younas</h3>
                    <p className="text-xs font-semibold text-cyan-400">Founder & AI Engineer · 3X AI</p>
                    <p className="text-xs text-slate-400 mt-1 font-mono">contactbyusama@gmail.com</p>
                  </div>
                </div>

                {/* Engineering Blueprint Snippet */}
                <div className="mt-4 bg-[#070C18] rounded-2xl p-4 font-mono text-xs space-y-2 border border-white/10">
                  <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                    <span className="text-slate-400">role</span>
                    <span className="text-cyan-300 font-bold">"Lead AI & Automation Architect"</span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                    <span className="text-slate-400">agency</span>
                    <span className="text-white font-bold">"3X AI Automation"</span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                    <span className="text-slate-400">specialization</span>
                    <span className="text-slate-300">"Autonomous Agents & n8n Systems"</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">verified_stack</span>
                    <span className="text-cyan-400 font-semibold">"Python · n8n · LangGraph · Fastify"</span>
                  </div>
                </div>

                {/* Live Metric Badges with CountUp */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 text-center text-xs font-mono">
                  <div className="bg-white/5 p-2.5 rounded-xl text-cyan-300 border border-white/10">
                    <CountUp end={100} suffix="%" className="block font-bold text-base" />
                    <span className="text-[10px] text-slate-400">Custom Built Architecture</span>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl text-white border border-white/10">
                    <CountUp end={45} prefix="< " suffix="s" className="block font-bold text-base text-cyan-400" />
                    <span className="text-[10px] text-slate-400">Avg Lead Qualification</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* 4 Premium Cards with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <TiltCard key={i} glare={true} maxRotation={4} className="h-full">
                <div className="bg-[#0B1325]/90 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group h-full backdrop-blur-xl hover:border-cyan-400/50 hover:shadow-[0_12px_36px_rgba(6,182,212,0.18)] transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 text-cyan-400 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400/90 mb-3 font-mono">
                      "{card.subtitle}"
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {card.description}
                    </p>
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
