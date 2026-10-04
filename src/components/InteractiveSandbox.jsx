import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { Play, Sparkles, CheckCircle2, Bot, Database, Send, Calendar, RefreshCw, Activity } from 'lucide-react';

const PRESETS = [
  {
    name: "Real Estate Buyer Lead",
    inquiry: "Looking for a 3-bedroom luxury apartment in Downtown under $1.2M. Need to schedule viewing this weekend.",
    analysis: {
      category: "High Intent Buyer",
      urgency: "Immediate (48h)",
      budgetTier: "Luxury Tier A",
      qualificationScore: "96/100",
      assignedAgent: "Senior Broker Team",
      nextAction: "VIP Calendar Link + Auto-SMS Confirmation"
    }
  },
  {
    name: "Dental Clinic Appointment",
    inquiry: "Experiencing tooth ache on upper left molar. Need root canal consult for tomorrow afternoon.",
    analysis: {
      category: "Emergency Dental Consult",
      urgency: "Critical (<24h)",
      budgetTier: "Standard Insured",
      qualificationScore: "99/100",
      assignedAgent: "Emergency Dentist On-Call",
      nextAction: "Direct Slot Lock (14:30) & Clinic WhatsApp Ping"
    }
  },
  {
    name: "B2B SaaS Automation Inquiry",
    inquiry: "We have 25 sales reps spending 3 hours daily on manual HubSpot data entry. Need an n8n pipeline.",
    analysis: {
      category: "Enterprise Workflow Ops",
      urgency: "Medium (This Quarter)",
      budgetTier: "Mid-Market Enterprise",
      qualificationScore: "94/100",
      assignedAgent: "Usama Younas (AI Engineer)",
      nextAction: "Automated Architectural Proposal + Calendly Link"
    }
  }
];

export default function InteractiveSandbox() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [activeStep, setActiveStep] = useState(4);

  const current = PRESETS[selectedPreset];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setCompleted(false);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 500);
    setTimeout(() => setActiveStep(3), 1100);
    setTimeout(() => {
      setActiveStep(4);
      setIsRunning(false);
      setCompleted(true);
    }, 1700);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#070C18] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Live Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test the <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">3X Automation Engine</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Select a sample business inquiry below and watch how an intelligent system qualifies and routes data in real time.
          </p>
        </div>

        {/* Sandbox Container */}
        <TiltCard glare={true} maxRotation={2} className="max-w-4xl mx-auto">
          <div className="bg-[#0B1325]/90 rounded-3xl border border-white/10 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            {/* Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold text-slate-400 mr-2">
                SAMPLE SCENARIOS:
              </span>
              {PRESETS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedPreset(idx);
                    handleRunSimulation();
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all font-mono ${
                    selectedPreset === idx
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-400/50 hover:text-white'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Inquiry Input Box */}
            <div className="bg-[#070C18] rounded-2xl p-4 border border-white/10 mb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Simulated Inbound Message
              </span>
              <p className="text-sm font-mono text-slate-200">
                "{current.inquiry}"
              </p>
            </div>

            {/* Trigger Button */}
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] disabled:opacity-60 transition-all uppercase tracking-wider"
              >
                {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isRunning ? 'Processing AI Pipeline...' : 'Run Simulation'}</span>
              </button>
            </div>

            {/* Real-Time Processing Matrix */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 1 ? 'bg-[#070C18] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-white/[0.02] border-white/5 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">1. AI CLASSIFICATION</span>
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-white font-semibold">{current.analysis.category}</p>
                <p className="text-[11px] text-slate-400 mt-1">Urgency: {current.analysis.urgency}</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 2 ? 'bg-[#070C18] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-white/[0.02] border-white/5 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">2. QUALIFICATION SCORE</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-emerald-400 font-bold text-sm">{current.analysis.qualificationScore}</p>
                <p className="text-[11px] text-slate-400 mt-1">Tier: {current.analysis.budgetTier}</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 3 ? 'bg-[#070C18] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-white/[0.02] border-white/5 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">3. CRM &amp; DISPATCH</span>
                  <Database className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-white font-semibold">{current.analysis.assignedAgent}</p>
                <p className="text-[11px] text-slate-400 mt-1">Action: {current.analysis.nextAction}</p>
              </div>
            </div>

            {/* Success Banner */}
            {completed && (
              <div className="mt-5 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between text-xs text-cyan-300 font-semibold font-mono">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Pipeline executed in 38ms with zero manual data entry.
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Status: 200 OK
                </span>
              </div>
            )}

          </div>
        </TiltCard>

      </div>
    </section>
  );
}
