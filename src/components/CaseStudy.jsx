import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Bot, 
  Database, 
  Mail, 
  Users, 
  ShieldCheck, 
  Maximize2 
} from 'lucide-react';

const WORKFLOW_STEPS = [
  { id: 1, title: "Lead Ingestion", sub: "Portal, Web, WhatsApp", icon: Building2 },
  { id: 2, title: "AI Analysis", sub: "Extract budget & intent", icon: Bot },
  { id: 3, title: "Qualification", sub: "Score budget & timeline tier", icon: CheckCircle2 },
  { id: 4, title: "CRM Sync", sub: "Instant record in pipeline", icon: Database },
  { id: 5, title: "Automated Outreach", sub: "Instant SMS & Email brief", icon: Mail },
  { id: 6, title: "Broker Dispatch", sub: "Route high-intent leads", icon: Users },
];

export default function CaseStudy() {
  const [activeStep, setActiveStep] = useState(2);
  const [showFullDiagram, setShowFullDiagram] = useState(false);

  return (
    <section id="case-study" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/5 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Featured Production Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Real Estate <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Lead Automation Pipeline
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            A comprehensive breakdown of an autonomous lead-to-appointment architecture engineered for high-volume brokerage operations.
          </p>
        </div>

        {/* Problem & Solution Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Problem Card */}
          <TiltCard glare={true} maxRotation={3} className="h-full">
            <div className="bg-[#0B1325]/90 rounded-3xl p-7 sm:p-8 border border-white/10 shadow-lg flex flex-col justify-between h-full backdrop-blur-xl">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Operational Bottleneck</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  Real estate brokerages receive dozens of buyer and seller inquiries across portals (Zillow, WhatsApp, Web forms) after hours. Manual agent qualification creates hours of lag, causing warm buyers to convert with competing brokerages.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-rose-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Result: Up to 60% lead decay within the first 60 minutes</span>
              </div>
            </div>
          </TiltCard>

          {/* Solution Card */}
          <TiltCard glare={true} maxRotation={3} className="h-full">
            <div className="bg-[#0B1325]/90 rounded-3xl p-7 sm:p-8 border-2 border-cyan-500/50 shadow-[0_0_35px_rgba(6,182,212,0.25)] flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-xl">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"></div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The 3X Autonomous Solution</h3>
                </div>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  We engineered an autonomous n8n + LLM orchestration pipeline that intercepts inquiries instantaneously, analyzes buyer budget and intent, enriches CRM records, and dispatches dynamic calendar booking links within 45 seconds.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Result: 100% immediate response rate, 3.4X appointment bookings</span>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* High-Resolution Pipeline Architecture Diagram Showcase */}
        <div className="bg-[#0B1325]/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.5)] mb-10 overflow-hidden backdrop-blur-xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Architectural Blueprint: Omnichannel Ingestion to Broker Dispatch
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setShowFullDiagram(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enlarge Diagram</span>
            </button>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer group bg-[#030712]"
            onClick={() => setShowFullDiagram(true)}
          >
            <img
              src="/images/case-study-pipeline.jpg"
              alt="Real Estate Lead Automation Architecture Diagram"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-xl bg-[#030712]/90 text-cyan-300 font-bold text-xs shadow-xl transition-opacity border border-cyan-400/50 backdrop-blur-md">
                Click to expand full architecture diagram
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Step-by-Step Flow */}
        <div className="bg-[#0B1325]/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                Interactive Execution Sequence
              </h4>
              <p className="text-xs text-slate-400">
                Click any stage to highlight the system pipeline
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              End-to-End Autonomous Pipeline
            </span>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-4 rounded-2xl border text-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0F1B35] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.35)] -translate-y-1'
                      : 'bg-white/[0.02] border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 text-cyan-400 border border-white/10'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-500 block mb-0.5">
                    STEP 0{step.id}
                  </span>
                  <h5 className="text-xs font-bold text-white leading-tight">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                    {step.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Linear Flow Line String */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 overflow-x-auto py-2">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span>Lead Ingestion</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span>AI Analysis</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span>Qualification</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span>CRM Sync</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span>Automated Outreach</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/40">Broker Dispatch</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full Diagram Lightbox Modal */}
      {showFullDiagram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowFullDiagram(false)}
        >
          <div className="relative max-w-5xl w-full bg-[#0B1325] border border-white/20 rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center mb-3 px-2">
              <span className="text-sm font-bold text-white">
                Real Estate Lead Automation Architecture
              </span>
              <button
                type="button"
                onClick={() => setShowFullDiagram(false)}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-slate-200 rounded-lg text-xs font-bold"
              >
                Close (ESC)
              </button>
            </div>
            <img 
              src="/images/case-study-pipeline.jpg" 
              alt="High-resolution architecture diagram" 
              className="w-full h-auto rounded-2xl object-contain max-h-[82vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
