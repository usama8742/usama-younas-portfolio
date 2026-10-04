import React from 'react';
import { SERVICES } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { 
  Bot, 
  Workflow, 
  MessageSquareCode, 
  Mic, 
  Database, 
  CheckCheck, 
  Network, 
  Globe, 
  Sparkles, 
  Zap, 
  Activity,
  ArrowRight,
  Code2,
  Terminal,
  Layers
} from 'lucide-react';

const ICON_MAP = {
  Bot: Bot,
  Workflow: Workflow,
  MessageSquareCode: MessageSquareCode,
  Mic: Mic,
  Database: Database,
  FilterCheck: CheckCheck,
  Network: Network,
  Globe: Globe,
};

function ServiceMiniGraphic({ type }) {
  switch (type) {
    case 'agent-loop':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 font-mono text-[11px] space-y-1.5 mb-4 group-hover:border-cyan-400/40 transition-colors">
          <div className="flex items-center justify-between text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              agent.plan()
            </span>
            <span className="text-[10px] text-slate-500">Autonomous</span>
          </div>
          <div className="text-slate-200 font-semibold truncate flex items-center gap-1">
            <span className="text-cyan-400">&gt;</span> Tool: VectorSearch("Contracts")
          </div>
        </div>
      );
    case 'pipeline':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 flex items-center justify-between text-[11px] font-mono mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Webhook</span>
          <span className="text-cyan-400 animate-pulse font-bold">➔</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold">n8n AI</span>
          <span className="text-cyan-400 animate-pulse font-bold">➔</span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">CRM</span>
        </div>
      );
    case 'chat':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 text-[11px] space-y-2 mb-4 group-hover:border-cyan-400/40 transition-colors">
          <div className="bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 text-slate-300 line-clamp-1">
            "Looking for 3-bedroom property"
          </div>
          <div className="bg-gradient-to-r from-blue-600/80 to-cyan-600/80 text-white px-2.5 py-1 rounded-lg line-clamp-1 ml-4 font-medium flex items-center gap-1">
            <Bot className="w-3 h-3 text-cyan-200 shrink-0" />
            AI: Found 4 listings in budget!
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 flex items-center justify-between gap-1 mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="text-[10px] font-mono text-slate-400">Neural TTS</span>
          <div className="flex items-center gap-1 h-5">
            <span className="w-1 bg-cyan-400 h-3 rounded-full animate-pulse"></span>
            <span className="w-1 bg-blue-500 h-5 rounded-full animate-pulse delay-75"></span>
            <span className="w-1 bg-cyan-300 h-2 rounded-full animate-pulse delay-150"></span>
            <span className="w-1 bg-blue-400 h-4 rounded-full animate-pulse delay-100"></span>
            <span className="w-1 bg-cyan-400 h-2.5 rounded-full animate-pulse"></span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-500/30">120ms Latency</span>
        </div>
      );
    case 'crm':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 flex items-center justify-between text-[11px] font-mono mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="text-slate-300 flex items-center gap-1">
            <Database className="w-3 h-3 text-cyan-400" />
            Supabase / HubSpot
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
            Auto-Sync 100%
          </span>
        </div>
      );
    case 'scoring':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 flex items-center justify-between text-[11px] font-mono mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="text-slate-300">Lead Qualification</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40">
            Score: 98/100 · Tier A
          </span>
        </div>
      );
    case 'network':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 text-[11px] font-mono text-slate-300 truncate mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="text-cyan-400 font-bold">POST</span> /v1/workflow/trigger <span className="text-emerald-400">200 OK</span>
        </div>
      );
    case 'web':
      return (
        <div className="bg-[#030712]/90 rounded-xl p-3 border border-cyan-500/20 flex items-center justify-between text-[11px] font-mono mb-4 group-hover:border-cyan-400/40 transition-colors">
          <span className="text-slate-300">Full-Stack Next.js</span>
          <span className="text-cyan-400 font-bold">AI Chat + Cal Sync</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#030712] relative overflow-hidden">
      {/* Background Subtle Lab Dots & Ambient Glows */}
      <div className="absolute inset-0 bg-lab-dots opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="lab-badge mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Automation Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Intelligent Systems Built Around <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            Custom engineered AI agents, n8n workflows, and unified data pipelines designed to eliminate manual bottlenecks and scale client acquisition.
          </p>
        </div>

        {/* 8 Premium Interactive Service Cards Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => {
            const Icon = ICON_MAP[svc.icon] || Bot;
            return (
              <TiltCard key={svc.id} glare={true} maxRotation={4} className="h-full">
                <div className="group relative bg-[#070C18]/90 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_16px_40px_-8px_rgba(6,182,212,0.25)] flex flex-col justify-between h-full hover:bg-gradient-to-b hover:from-[#0B1428] hover:to-[#070C18]">
                  <div>
                    {/* Card Top: Number & Minimal Modern Icon with subtle glow */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-400 group-hover:text-white group-hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center">
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                        {svc.num}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                      {svc.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-5">
                      {svc.description}
                    </p>

                    {/* Small Animated Graphic */}
                    <ServiceMiniGraphic type={svc.previewType} />
                  </div>

                  {/* Sub-tags */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.slice(0, 3).map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono text-slate-400 bg-white/[0.03] group-hover:text-cyan-300 group-hover:border-cyan-500/30 px-2 py-0.5 rounded-full transition-colors border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Bottom Accent Glow on Hover */}
                  <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
