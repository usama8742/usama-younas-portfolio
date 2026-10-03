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
  { id: 1, title: "Lead", sub: "Portal, Web, WhatsApp", icon: Building2 },
  { id: 2, title: "AI Analysis", sub: "Extract budget & intent", icon: Bot },
  { id: 3, title: "Lead Qualification", sub: "Categorize & score tier", icon: CheckCircle2 },
  { id: 4, title: "CRM Update", sub: "Insert record in pipeline", icon: Database },
  { id: 5, title: "Automated Follow-up", sub: "Instant SMS / Email", icon: Mail },
  { id: 6, title: "Sales Team", sub: "Route high-intent leads", icon: Users },
];

export default function CaseStudy() {
  const [activeStep, setActiveStep] = useState(2);
  const [showFullDiagram, setShowFullDiagram] = useState(false);

  return (
    <section id="case-study" className="py-20 lg:py-28 bg-[#EFEAE3] dark:bg-[#070B16] border-y border-[#DBD6CF]/70 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] dark:bg-[#FE330A]/15 border border-[#DBD6CF] dark:border-[#FE330A]/30 text-[#FE330A] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Study</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] dark:text-white tracking-tight leading-tight">
            Real Estate <span className="text-[#FE330A] dark:text-cyan-400">Lead Automation</span>
          </h2>
        </div>

        {/* Problem & Solution Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Problem Card */}
          <TiltCard glare={true} maxRotation={3} className="h-full">
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl p-7 sm:p-8 border border-[#DBD6CF] dark:border-slate-800 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191919] dark:text-white">The Challenge</h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  Real estate teams often receive leads from multiple sources and manually handle qualification, follow-ups, CRM updates, and appointment scheduling.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Manual delays lead to cold buyer prospects</span>
              </div>
            </div>
          </TiltCard>

          {/* Solution Card */}
          <TiltCard glare={true} maxRotation={3} className="h-full">
            <div className="bg-white dark:bg-[#0C1324] rounded-3xl p-7 sm:p-8 border-2 border-[#FE330A] dark:border-cyan-500/80 shadow-glow dark:shadow-[0_0_35px_rgba(8,120,254,0.35)] flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FE330A] via-cyan-400 to-[#D62705]"></div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EFEAE3] dark:bg-[#FE330A]/20 text-[#FE330A] dark:text-cyan-400 border border-[#DBD6CF] dark:border-[#FE330A]/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#191919] dark:text-white">The Engineered Solution</h3>
                </div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  I designed an AI-powered workflow that automatically processes incoming leads, analyzes their requirements, assigns a lead category, updates the CRM, and triggers the appropriate follow-up workflow.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DBD6CF] dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-[#FE330A] dark:text-cyan-400">
                <CheckCircle2 className="w-4 h-4 text-[#FE330A] dark:text-cyan-400" />
                <span>Full automated execution from inquiry to agent calendar</span>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* High-Resolution Pipeline Architecture Diagram Showcase */}
        <div className="bg-white dark:bg-[#0B101E] rounded-3xl p-6 sm:p-8 border border-[#DBD6CF] dark:border-slate-800 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] mb-10 overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DBD6CF] dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FE330A] dark:bg-cyan-400 animate-pulse"></span>
              <h4 className="text-sm sm:text-base font-bold text-[#191919] dark:text-white">
                Architectural Blueprint: Automated Ingestion to Broker Dispatch
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setShowFullDiagram(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#FE330A] dark:text-cyan-400 bg-[#EFEAE3] dark:bg-[#FE330A]/15 hover:bg-[#FE330A] hover:text-white dark:hover:bg-[#FE330A] dark:hover:text-white transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Enlarge Diagram</span>
            </button>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden border border-[#DBD6CF] dark:border-slate-800 cursor-pointer group"
            onClick={() => setShowFullDiagram(true)}
          >
            <img
              src="/images/case-study-pipeline.jpg"
              alt="Real Estate Lead Automation Architecture Diagram"
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 text-[#FE330A] dark:text-cyan-400 font-bold text-xs shadow-md transition-opacity border border-[#DBD6CF] dark:border-slate-700">
                Click to expand full architecture diagram
              </span>
            </div>
          </div>
        </div>

        {/* Blue Workflow Visualization Interactive Nodes */}
        <div className="bg-white dark:bg-[#0B101E] rounded-3xl p-6 sm:p-8 border border-[#DBD6CF] dark:border-slate-800 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DBD6CF] dark:border-slate-800">
            <div>
              <h4 className="text-base font-bold text-[#191919] dark:text-white">
                Interactive Step-by-Step Flow
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any node to inspect the system flow
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#EFEAE3] dark:bg-[#FE330A]/15 text-[#FE330A] dark:text-cyan-400 border border-[#DBD6CF] dark:border-[#FE330A]/30">
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
                      ? 'bg-gradient-to-b from-[#EFEAE3] to-white dark:from-slate-800 dark:to-slate-900 border-[#FE330A] dark:border-cyan-400 shadow-glow-sm dark:shadow-[0_0_20px_rgba(8,120,254,0.3)] -translate-y-1'
                      : 'bg-white dark:bg-slate-900/60 border-[#DBD6CF] dark:border-slate-800 hover:border-[#FE330A] hover:bg-[#EFEAE3] dark:hover:bg-slate-800/80'
                  }`}
                >
                  <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-[#FE330A] text-white shadow-sm'
                      : 'bg-[#EFEAE3] dark:bg-slate-800 text-[#FE330A] dark:text-cyan-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 block mb-0.5">
                    STEP 0{step.id}
                  </span>
                  <h5 className="text-xs font-bold text-[#191919] dark:text-white leading-tight">
                    {step.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {step.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Linear Flow Line String */}
          <div className="mt-8 pt-5 border-t border-[#DBD6CF]/60 dark:border-slate-800 flex items-center justify-center text-xs font-mono font-bold text-[#FE330A] dark:text-cyan-400 overflow-x-auto py-2">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span>Lead</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span>AI Analysis</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span>Lead Qualification</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span>CRM Update</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span>Automated Follow-up</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600" />
              <span className="text-[#191919] dark:text-white bg-[#EFEAE3] dark:bg-[#FE330A]/20 px-2 py-0.5 rounded border border-[#DBD6CF] dark:border-slate-700">Sales Team</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full Diagram Lightbox Modal */}
      {showFullDiagram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowFullDiagram(false)}
        >
          <div className="relative max-w-5xl w-full bg-white dark:bg-[#0C1222] border border-[#DBD6CF] dark:border-slate-800 rounded-3xl p-4 overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center mb-3 px-2">
              <span className="text-sm font-bold text-[#191919] dark:text-white">
                Real Estate Lead Automation Architecture
              </span>
              <button
                type="button"
                onClick={() => setShowFullDiagram(false)}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-bold"
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
