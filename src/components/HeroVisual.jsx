import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Bot, 
  CheckCircle2, 
  Database, 
  Send, 
  Calendar, 
  Play, 
  Pause, 
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';

const NODES = [
  {
    id: 1,
    label: "Website Lead",
    sub: "Inbound webhook triggered",
    icon: Globe,
    metric: "Source: Form / WhatsApp",
    detail: "Incoming inquiry: Commercial Real Estate Agency looking for automated tenant matching and agent CRM routing."
  },
  {
    id: 2,
    label: "AI Agent",
    sub: "Understands & extracts intent",
    icon: Bot,
    metric: "Model: Ollama / LLaMA-3",
    detail: "Extracted: Budget $15k, 18 agents, timeline immediate. Tool selected: RealEstateScoringEngine."
  },
  {
    id: 3,
    label: "Qualification",
    sub: "Lead scored & categorized",
    icon: CheckCircle2,
    metric: "Score: 98/100 · Tier A",
    detail: "Passed qualification criteria. Assigned high-priority tier. Fast-track routing triggered."
  },
  {
    id: 4,
    label: "CRM Sync",
    sub: "Pipeline record created",
    icon: Database,
    metric: "Supabase / CRM Synced",
    detail: "Contact #UY-8924 inserted with enriched enrichment fields, deal value and assigned broker tag."
  },
  {
    id: 5,
    label: "Follow-up",
    sub: "Smart multichannel dispatch",
    icon: Send,
    metric: "SMS & Personalized Email",
    detail: "Sent custom introduction email with verified case study PDF + SMS direct booking link."
  },
  {
    id: 6,
    label: "Appointment",
    sub: "Calendar slot confirmed",
    icon: Calendar,
    metric: "Meeting Booked: Google Cal",
    detail: "Client booked 30-min strategy session for Tuesday 2:30 PM. Calendar invitations synced."
  }
];

export default function HeroVisual() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % NODES.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeNode = NODES[activeStep];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Background Soft Radial Glow */}
      <div className="absolute -inset-6 bg-[radial-gradient(circle_at_center,rgba(8,120,254,0.12)_0%,rgba(2,85,253,0.02)_60%,transparent_80%)] rounded-3xl blur-2xl pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="relative bg-white/95 dark:bg-[#0C1222]/95 backdrop-blur-md border border-[#C9DFFF] dark:border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
        
        {/* Terminal / Live Flow Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#C9DFFF] dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0878FE] animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></span>
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111827] dark:text-slate-200">
              Live 3X Automation Pipeline
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#EAF3FF] dark:bg-[#0878FE]/15 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-[#0878FE]/30">
              <Zap className="w-3 h-3 fill-current" />
              Active System
            </span>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#0878FE] dark:hover:text-cyan-400 hover:bg-[#F8FAFE] dark:hover:bg-slate-800 border border-transparent hover:border-[#C9DFFF] dark:hover:border-slate-700 transition-colors"
              title={isPlaying ? "Pause simulation" : "Play simulation"}
              aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* 6 Step Nodes Grid */}
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
                className={`group relative cursor-pointer p-3.5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-b from-white to-[#EAF3FF] dark:from-slate-800 dark:to-slate-900 border-[#0878FE] shadow-glow-sm dark:shadow-[0_0_20px_rgba(8,120,254,0.35)] -translate-y-1'
                    : isCompleted
                    ? 'bg-[#F8FAFE] dark:bg-slate-800/40 border-[#C9DFFF] dark:border-slate-800 text-[#111827] dark:text-slate-200'
                    : 'bg-white dark:bg-slate-900/60 border-[#C9DFFF]/70 dark:border-slate-800/60 opacity-75 hover:opacity-100 hover:border-[#0878FE]'
                }`}
              >
                {/* Node Status Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-[#0878FE] text-white shadow-sm' 
                      : isCompleted
                      ? 'bg-[#EAF3FF] dark:bg-[#0878FE]/20 text-[#0878FE] dark:text-cyan-400'
                      : 'bg-[#F8FAFE] dark:bg-slate-800 text-slate-500 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive 
                      ? 'bg-[#0878FE] text-white font-bold' 
                      : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    0{node.id}
                  </span>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-[#111827] dark:text-slate-200 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors leading-tight">
                  {node.label}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-1">
                  {node.sub}
                </p>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#0878FE] via-cyan-400 to-[#0255FD] rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Payload Stream Inspector */}
        <div className="mt-5 p-4 rounded-xl bg-[#F8FAFE] dark:bg-slate-900/80 border border-[#C9DFFF] dark:border-slate-800 transition-all">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0878FE] animate-ping"></span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0878FE] dark:text-cyan-400">
                Step 0{activeNode.id} Telemetry · {activeNode.label}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-[#C9DFFF] dark:border-slate-700">
              {activeNode.metric}
            </span>
          </div>
          <p className="text-xs text-[#111827] dark:text-slate-300 leading-relaxed font-mono">
            {activeNode.detail}
          </p>
        </div>

        {/* Flow Footer Status */}
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 pt-2">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Pipeline Flow:</span>
            <span className="font-medium text-[#111827] dark:text-slate-300 flex items-center gap-1">
              Lead <ArrowRight className="w-3 h-3 text-[#0878FE]" /> AI Agent <ArrowRight className="w-3 h-3 text-[#0878FE]" /> CRM <ArrowRight className="w-3 h-3 text-[#0878FE]" /> Booking
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveStep(0);
              setIsPlaying(true);
            }}
            className="text-[11px] font-semibold text-[#0878FE] dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3" />
            Restart Pipeline
          </button>
        </div>

      </div>
    </div>
  );
}
