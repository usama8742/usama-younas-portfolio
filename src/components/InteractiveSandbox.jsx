import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { Play, Sparkles, CheckCircle2, Bot, Database, Send, Calendar, RefreshCw } from 'lucide-react';

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
    }, 1800);
  };

  return (
    <section className="py-20 bg-transparent border-b border-[#C9DFFF]/70 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] dark:text-white tracking-tight mb-4">
            Test the <span className="text-[#0878FE] dark:text-cyan-400">3X Automation Engine</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
            Select a sample business inquiry below and watch how an intelligent system qualifies and routes data in real time.
          </p>
        </div>

        {/* Sandbox Container */}
        <TiltCard glare={true} maxRotation={2} className="max-w-4xl mx-auto">
          <div className="bg-[#F8FAFE] dark:bg-[#0B101E] rounded-3xl border border-[#C9DFFF] dark:border-slate-800 p-6 sm:p-8 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            
            {/* Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 mr-2">
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
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedPreset === idx
                      ? 'bg-[#0878FE] text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-[#C9DFFF] dark:border-slate-800 hover:border-[#0878FE] dark:hover:border-cyan-400'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Inquiry Input Box */}
            <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 border border-[#C9DFFF] dark:border-slate-800 mb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0878FE] dark:text-cyan-400 block mb-1">
                Simulated Inbound Message
              </span>
              <p className="text-sm font-mono text-[#111827] dark:text-slate-200">
                "{current.inquiry}"
              </p>
            </div>

            {/* Trigger Button */}
            <div className="flex justify-end mb-6">
              <button
                type="button"
                onClick={handleRunSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow disabled:opacity-60 transition-all"
              >
                {isRunning ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isRunning ? 'Processing AI Pipeline...' : 'Run Simulation'}</span>
              </button>
            </div>

            {/* Real-Time Processing Matrix */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 1 ? 'bg-white dark:bg-slate-900 border-[#0878FE] dark:border-cyan-400 shadow-sm' : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">1. AI CLASSIFICATION</span>
                  <Bot className="w-4 h-4 text-[#0878FE] dark:text-cyan-400" />
                </div>
                <p className="text-[#111827] dark:text-white font-semibold">{current.analysis.category}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Urgency: {current.analysis.urgency}</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 2 ? 'bg-white dark:bg-slate-900 border-[#0878FE] dark:border-cyan-400 shadow-sm' : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">2. QUALIFICATION SCORE</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">{current.analysis.qualificationScore}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Tier: {current.analysis.budgetTier}</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${activeStep >= 3 ? 'bg-white dark:bg-slate-900 border-[#0878FE] dark:border-cyan-400 shadow-sm' : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 opacity-50'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-400 font-bold">3. CRM & DISPATCH</span>
                  <Database className="w-4 h-4 text-[#0878FE] dark:text-cyan-400" />
                </div>
                <p className="text-[#111827] dark:text-white font-semibold">{current.analysis.assignedAgent}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Action: {current.analysis.nextAction}</p>
              </div>
            </div>

            {/* Success Banner */}
            {completed && (
              <div className="mt-5 p-3.5 rounded-xl bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 flex items-center justify-between text-xs text-[#0878FE] dark:text-cyan-400 font-semibold">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Pipeline executed in 38ms with zero manual data entry.
                </span>
                <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
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
