import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Bot, 
  Database, 
  Send, 
  Calendar, 
  UserCheck, 
  Play, 
  Pause, 
  Sparkles,
  Zap,
  ArrowRight,
  Activity,
  Cpu
} from 'lucide-react';

const NODES = [
  {
    id: 1,
    title: "Lead",
    subtitle: "Inbound Capture",
    icon: Globe,
    tech: "Website · WhatsApp · Ads",
    metric: "Lat: 18ms",
    status: "Triggered",
    detail: "High-intent inquiry received via webhook. Payload validated & dispatched to AI Orchestrator."
  },
  {
    id: 2,
    title: "AI Agent",
    subtitle: "Intent & Reasoning",
    icon: Bot,
    tech: "GPT-4o / Claude 3.5",
    metric: "Conf: 99.4%",
    status: "Reasoning",
    detail: "Extracted: Budget $20k+, 25 team members, urgent timeline. Qualified as Tier-A VIP prospect."
  },
  {
    id: 3,
    title: "CRM",
    subtitle: "Real-time Sync",
    icon: Database,
    tech: "HubSpot / Supabase",
    metric: "200 Synced",
    status: "Persisted",
    detail: "Contact #UY-9042 created with enriched firmographics, deal stage updated to 'Qualified Opportunity'."
  },
  {
    id: 4,
    title: "Follow-up",
    subtitle: "Multichannel Dispatch",
    icon: Send,
    tech: "Twilio SMS & Email",
    metric: "Sub-Second",
    status: "Dispatched",
    detail: "Personalized SMS with dynamic VIP booking link and custom PDF proposal sent within 45 seconds."
  },
  {
    id: 5,
    title: "Appointment",
    subtitle: "Calendar Confirmed",
    icon: Calendar,
    tech: "Google Calendar API",
    metric: "Slot Locked",
    status: "Confirmed",
    detail: "Strategy call confirmed for Thursday 10:30 AM EST. Calendar invite & prep brief auto-emailed."
  },
  {
    id: 6,
    title: "Customer",
    subtitle: "Revenue Multiply",
    icon: UserCheck,
    tech: "Stripe & Slack Alert",
    metric: "ROI 3.8x",
    status: "Onboarded",
    detail: "Onboarding automation initialized. Slack alert broadcasted to sales team. 0 human minutes spent."
  }
];

export default function HeroVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % NODES.length);
    }, 2400);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeNode = NODES[activeStep];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Background Soft Glowing Ambient Halos */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Glassmorphic Lab Console Card */}
      <div className="relative bg-[#070C18]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(6,182,212,0.15)] transition-all">
        
        {/* Console Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00F0FF]"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="w-2 h-2 rounded-full bg-slate-700"></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                3X Autonomous System Pipeline
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Zap className="w-3 h-3 fill-current text-cyan-400" />
              Live Stream
            </span>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
              title={isPlaying ? "Pause automated flow" : "Resume automated flow"}
              aria-label={isPlaying ? "Pause automated flow" : "Resume automated flow"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-cyan-400" />}
            </button>
          </div>
        </div>

        {/* Interconnected 6-Node Circuit Grid: Lead → AI Agent → CRM → Follow-up → Appointment → Customer */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
          {NODES.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <div
                key={node.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`group relative cursor-pointer p-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-cyan-950/40 to-blue-950/60 border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.35)] -translate-y-1'
                    : isCompleted
                    ? 'bg-[#0B1325]/80 border-cyan-500/30 text-slate-200'
                    : 'bg-[#0B1325]/40 border-white/5 opacity-75 hover:opacity-100 hover:border-white/20'
                }`}
              >
                {/* Node Status Badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isActive 
                      ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-glow-cyan scale-105' 
                      : isCompleted
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'bg-white/5 text-slate-400 group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive 
                      ? 'bg-cyan-400 text-slate-950 font-bold' 
                      : isCompleted
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-500 bg-white/5'
                  }`}>
                    0{node.id}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <h4 className={`text-sm font-bold transition-colors leading-tight ${
                    isActive ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'
                  }`}>
                    {node.title}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug line-clamp-1">
                  {node.subtitle}
                </p>

                {/* Sub-label */}
                <div className="mt-2 text-[10px] font-mono text-cyan-400/80 truncate">
                  {node.tech}
                </div>

                {/* Active Underline Glow */}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full shadow-[0_0_8px_#00F0FF]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Payload Stream Inspector */}
        <div className="mt-5 p-4 rounded-2xl bg-[#030712]/80 border border-cyan-500/20 transition-all relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
                Active Node: {activeNode.title} · {activeNode.status}
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
              {activeNode.metric}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-mono">
            &gt; {activeNode.detail}
          </p>
        </div>

        {/* Pipeline Sequence Ribbon (Lead → AI Agent → CRM → Follow-up → Appointment → Customer) */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 font-mono text-[11px]">
            <span className="text-slate-500">Flow:</span>
            <span className="text-slate-300 flex items-center gap-1 whitespace-nowrap">
              Lead <ArrowRight className="w-3 h-3 text-cyan-400" /> AI Agent <ArrowRight className="w-3 h-3 text-cyan-400" /> CRM <ArrowRight className="w-3 h-3 text-cyan-400" /> Follow-up <ArrowRight className="w-3 h-3 text-cyan-400" /> Appointment <ArrowRight className="w-3 h-3 text-cyan-400" /> Customer
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveStep(0);
              setIsPlaying(true);
            }}
            className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 shrink-0 ml-auto"
          >
            <Sparkles className="w-3 h-3" />
            Restart Sequence
          </button>
        </div>

      </div>
    </div>
  );
}
