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
  Activity 
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

function ServiceMiniVisual({ type }) {
  switch (type) {
    case 'agent-loop':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 font-mono text-[11px] space-y-1 mb-4">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span>agent.reason()</span>
            <span className="text-[#0878FE] dark:text-cyan-400">● active</span>
          </div>
          <div className="text-[#0878FE] dark:text-cyan-300 font-semibold truncate">
            &gt; tool_call: SearchVectorDB()
          </div>
        </div>
      );
    case 'pipeline':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-[#C9DFFF] dark:border-slate-700">Webhook</span>
          <span className="text-[#0878FE] dark:text-cyan-400 font-bold">➔</span>
          <span className="px-1.5 py-0.5 rounded bg-[#EAF3FF] dark:bg-[#0878FE]/20 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-slate-700">AI Node</span>
          <span className="text-[#0878FE] dark:text-cyan-400 font-bold">➔</span>
          <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-[#C9DFFF] dark:border-slate-700">CRM</span>
        </div>
      );
    case 'chat':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 text-[11px] font-sans space-y-1.5 mb-4">
          <div className="bg-white dark:bg-slate-900 px-2 py-1 rounded-lg border border-[#C9DFFF]/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 line-clamp-1">
            "Looking for 3-bed apartment"
          </div>
          <div className="bg-[#0878FE] text-white px-2 py-1 rounded-lg line-clamp-1 ml-3 font-medium">
            AI: Found 4 listings in budget!
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 flex items-center justify-between gap-1 mb-4">
          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">TTS Audio</span>
          <div className="flex items-center gap-1 h-5">
            <span className="w-1 bg-[#0878FE] dark:bg-cyan-400 h-3 rounded-full animate-pulse"></span>
            <span className="w-1 bg-[#0878FE] dark:bg-cyan-400 h-5 rounded-full animate-pulse delay-75"></span>
            <span className="w-1 bg-[#0878FE] dark:bg-cyan-400 h-2 rounded-full animate-pulse delay-150"></span>
            <span className="w-1 bg-[#0878FE] dark:bg-cyan-400 h-4 rounded-full animate-pulse delay-100"></span>
            <span className="w-1 bg-[#0878FE] dark:bg-cyan-400 h-2.5 rounded-full animate-pulse"></span>
          </div>
          <span className="text-[10px] font-mono text-emerald-500 font-bold">120ms Latency</span>
        </div>
      );
    case 'crm':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-600 dark:text-slate-400">Sync: Supabase</span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 text-[10px] font-bold">
            200 Synced
          </span>
        </div>
      );
    case 'scoring':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-600 dark:text-slate-400">Qualification</span>
          <span className="px-2 py-0.5 rounded bg-[#EAF3FF] dark:bg-[#0878FE]/20 text-[#0878FE] dark:text-cyan-400 font-bold">
            Score: 98/100 · Tier A
          </span>
        </div>
      );
    case 'network':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 truncate mb-4">
          <span className="text-emerald-500 font-bold">POST</span> /v1/workflow/trigger <span className="text-slate-400">200</span>
        </div>
      );
    case 'web':
      return (
        <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-2.5 border border-[#C9DFFF]/70 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-600 dark:text-slate-400">Full-Stack React</span>
          <span className="text-[#0878FE] dark:text-cyan-400 font-bold">AI Chatbot + Cal</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-transparent relative">
      {/* Background soft ambient dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities · 3X AI Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            AI Solutions Built Around <span className="text-[#0878FE] dark:text-cyan-400">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Custom engineered AI and automated workflows designed to replace manual bottlenecks and connect your existing software stack.
          </p>
        </div>

        {/* 8 Premium Service Cards Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => {
            const Icon = ICON_MAP[svc.icon] || Bot;
            return (
              <TiltCard key={svc.id} glare={true} maxRotation={5} className="h-full">
                <div className="group relative bg-white dark:bg-[#0B101E] border border-[#C9DFFF] dark:border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:border-[#0878FE] dark:hover:border-cyan-400/80 hover:shadow-card-hover dark:hover:shadow-[0_12px_36px_rgba(8,120,254,0.25)] flex flex-col justify-between h-full">
                  <div>
                    {/* Card Top: Number & Blue Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] dark:bg-[#0878FE]/15 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-[#0878FE]/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#0878FE] group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors">
                        {svc.num}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-2.5 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors leading-snug">
                      {svc.title}
                    </h3>

                    {/* Body Text */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                      {svc.description}
                    </p>

                    {/* Unique Creative Visual Preview for Each Service */}
                    <ServiceMiniVisual type={svc.previewType} />
                  </div>

                  {/* Tags / Sub-pills */}
                  <div className="pt-4 border-t border-[#C9DFFF]/70 dark:border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-[#F8FAFE] dark:bg-slate-900 group-hover:bg-[#EAF3FF] dark:group-hover:bg-[#0878FE]/20 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 px-2 py-0.5 rounded transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Bottom Glow Line on Hover */}
                  <div className="absolute inset-x-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#0878FE] dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
