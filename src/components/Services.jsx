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
  ArrowRight
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
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] font-mono text-[11px] space-y-1 mb-4">
          <div className="flex items-center justify-between text-slate-600">
            <span>agent.reason()</span>
            <span className="text-[#FE330A] font-bold">● active</span>
          </div>
          <div className="text-[#191919] font-semibold truncate">
            &gt; tool_call: SearchVectorDB()
          </div>
        </div>
      );
    case 'pipeline':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="px-2 py-0.5 rounded bg-white text-slate-800 border border-[#DBD6CF]">Webhook</span>
          <span className="text-[#FE330A] font-bold">➔</span>
          <span className="px-2 py-0.5 rounded bg-[#FE330A] text-white font-bold">AI Node</span>
          <span className="text-[#FE330A] font-bold">➔</span>
          <span className="px-2 py-0.5 rounded bg-white text-slate-800 border border-[#DBD6CF]">CRM</span>
        </div>
      );
    case 'chat':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] text-[11px] font-sans space-y-1.5 mb-4">
          <div className="bg-white px-2.5 py-1 rounded-lg border border-[#DBD6CF] text-slate-800 line-clamp-1">
            "Looking for 3-bed apartment"
          </div>
          <div className="bg-[#191919] text-white px-2.5 py-1 rounded-lg line-clamp-1 ml-3 font-medium">
            AI: Found 4 listings in budget!
          </div>
        </div>
      );
    case 'voice':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] flex items-center justify-between gap-1 mb-4">
          <span className="text-[10px] font-mono text-slate-600">TTS Audio</span>
          <div className="flex items-center gap-1 h-5">
            <span className="w-1 bg-[#FE330A] h-3 rounded-full animate-pulse"></span>
            <span className="w-1 bg-[#FE330A] h-5 rounded-full animate-pulse delay-75"></span>
            <span className="w-1 bg-[#FE330A] h-2 rounded-full animate-pulse delay-150"></span>
            <span className="w-1 bg-[#FE330A] h-4 rounded-full animate-pulse delay-100"></span>
            <span className="w-1 bg-[#FE330A] h-2.5 rounded-full animate-pulse"></span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 font-bold">120ms Latency</span>
        </div>
      );
    case 'crm':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-700">Sync: Supabase</span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
            200 Synced
          </span>
        </div>
      );
    case 'scoring':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-700">Qualification</span>
          <span className="px-2 py-0.5 rounded bg-white text-[#FE330A] font-bold border border-[#DBD6CF]">
            Score: 98/100 · Tier A
          </span>
        </div>
      );
    case 'network':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] text-[11px] font-mono text-slate-800 truncate mb-4">
          <span className="text-[#FE330A] font-bold">POST</span> /v1/workflow/trigger <span className="text-slate-500">200 OK</span>
        </div>
      );
    case 'web':
      return (
        <div className="bg-[#EFEAE3] rounded-xl p-2.5 border border-[#DBD6CF] flex items-center justify-between text-[11px] font-mono mb-4">
          <span className="text-slate-700">Full-Stack React</span>
          <span className="text-[#FE330A] font-bold">AI Chatbot + Cal</span>
        </div>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header (Azzle Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[50px] bg-[#EFEAE3] border border-[#DBD6CF] text-[#191919] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FE330A]" />
            <span>Core Capabilities · 3X AI Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] tracking-tight leading-tight mb-4">
            AI Solutions Built Around <span className="text-[#FE330A]">Your Business</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Custom engineered AI and automated workflows designed to replace manual bottlenecks and connect your existing software stack.
          </p>
        </div>

        {/* 8 Premium Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => {
            const Icon = ICON_MAP[svc.icon] || Bot;
            return (
              <TiltCard key={svc.id} glare={true} maxRotation={4} className="h-full">
                <div className="group relative bg-white border border-[#DBD6CF] rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-[#FE330A] hover:shadow-card-hover flex flex-col justify-between h-full">
                  <div>
                    {/* Card Top: Number & Azzle Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#EFEAE3] text-[#191919] group-hover:bg-[#FE330A] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#FE330A] transition-colors">
                        {svc.num}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-lg font-black text-[#191919] mb-2.5 group-hover:text-[#FE330A] transition-colors leading-snug">
                      {svc.title}
                    </h3>

                    {/* Body Text */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {svc.description}
                    </p>

                    {/* Visual Preview */}
                    <ServiceMiniVisual type={svc.previewType} />
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-[#DBD6CF]">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-mono font-medium text-slate-600 bg-[#EFEAE3] group-hover:border-[#FE330A] group-hover:text-[#FE330A] px-2.5 py-1 rounded-[50px] transition-colors border border-transparent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Indicator */}
                  <div className="absolute inset-x-6 bottom-0 h-0.5 bg-[#FE330A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
