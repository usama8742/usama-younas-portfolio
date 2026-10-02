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
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFE] dark:bg-[#080D1A]/60 border-y border-[#C9DFFF]/60 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Usama Younas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight">
            I Turn Business Problems Into <span className="text-[#0878FE] dark:text-cyan-400">Intelligent Systems.</span>
          </h2>
        </div>

        {/* Top Split: Narrative & Visual Profile Console */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Main Narrative Text (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            <p>
              I’m <strong className="font-semibold text-[#111827] dark:text-white">Usama Younas</strong>, an AI Engineer focused on building practical AI and automation solutions for modern businesses.
            </p>
            <p>
              I work across AI agents, workflow automation, backend development, APIs, CRM systems, chatbots, voice agents, and AI-powered applications.
            </p>
            <p>
              My approach is simple: understand the business process, identify what can be automated, and build a reliable system that connects the right tools together.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Whether it’s qualifying leads, responding to customers, managing appointments, updating a CRM, or connecting multiple platforms, I build systems designed around real business needs.
            </p>

            <div className="pt-3 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[#111827] dark:text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0878FE] dark:text-cyan-400" /> No Generic Templates
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[#111827] dark:text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0878FE] dark:text-cyan-400" /> Production-Grade Reliability
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[#111827] dark:text-slate-200 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0878FE] dark:text-cyan-400" /> Business-First Engineering
              </span>
            </div>
          </div>

          {/* Profile Card / Technical Specs (5 cols) */}
          <div className="lg:col-span-5">
            <TiltCard glare={true} maxRotation={5}>
              <div className="bg-white dark:bg-[#0D1424] rounded-3xl border border-[#C9DFFF] dark:border-slate-800 p-6 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden">
                {/* Top Accent Strip */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0878FE] via-cyan-400 to-[#0255FD]"></div>

                <div className="flex items-center gap-4 pb-5 border-b border-[#C9DFFF] dark:border-slate-800">
                  <div className="relative shrink-0">
                    <img 
                      src="/profile-photo.png" 
                      alt="Usama Younas - AI Engineer" 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#0878FE] shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></span>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#EAF3FF] dark:bg-[#0878FE]/20 text-[#0878FE] dark:text-cyan-400 text-[10px] font-mono font-bold mb-1">
                      <Zap className="w-3 h-3 fill-current" />
                      ACTIVE ENGINEER
                    </div>
                    <h3 className="text-xl font-bold text-[#111827] dark:text-white">Usama Younas</h3>
                    <p className="text-xs font-semibold text-[#0878FE] dark:text-cyan-400">AI Engineer · 3X AI Automation</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Available for Remote & Contract Systems</p>
                  </div>
                </div>

                {/* Engineering Blueprint Snippet */}
                <div className="mt-4 bg-[#F8FAFE] dark:bg-slate-950/80 rounded-2xl p-4 font-mono text-xs space-y-2.5 border border-[#C9DFFF]/70 dark:border-slate-800/80">
                  <div className="flex justify-between items-center pb-1.5 border-b border-[#C9DFFF]/40 dark:border-slate-800">
                    <span className="text-slate-400">role</span>
                    <span className="text-[#0878FE] dark:text-cyan-400 font-bold">"AI Engineer"</span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-[#C9DFFF]/40 dark:border-slate-800">
                    <span className="text-slate-400">brand</span>
                    <span className="text-[#111827] dark:text-slate-200 font-bold">"3X AI Automation"</span>
                  </div>
                  <div className="flex justify-between items-center pb-1.5 border-b border-[#C9DFFF]/40 dark:border-slate-800">
                    <span className="text-slate-400">specialization</span>
                    <span className="text-slate-700 dark:text-slate-300">"AI Agents & Automation"</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">core_stack</span>
                    <span className="text-[#0878FE] dark:text-cyan-400 font-semibold">"n8n · Python · React"</span>
                  </div>
                </div>

                {/* Live Metric Badges with CountUp */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="bg-[#EAF3FF] dark:bg-[#0878FE]/15 p-2 rounded-xl text-[#0878FE] dark:text-cyan-400 border border-transparent dark:border-[#0878FE]/20">
                    <CountUp end={100} suffix="%" className="block font-bold text-sm" />
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">Custom Built</span>
                  </div>
                  <div className="bg-[#F8FAFE] dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 p-2 rounded-xl text-[#111827] dark:text-slate-200">
                    <CountUp end={45} prefix="< " suffix="s" className="block font-bold text-sm" />
                    <span className="text-[10px] text-slate-600 dark:text-slate-400">Avg Lead Processing</span>
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
              <TiltCard key={i} glare={true} maxRotation={6} className="h-full">
                <div className="premium-card p-6 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] dark:bg-[#0878FE]/15 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-[#0878FE]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0878FE] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-[#C9DFFF] dark:border-slate-700 group-hover:border-[#0878FE] group-hover:text-[#0878FE] dark:group-hover:text-cyan-400">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-1 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0878FE] dark:text-cyan-400 mb-3">
                      "{card.subtitle}"
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
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
