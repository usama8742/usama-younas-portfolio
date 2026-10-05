import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { 
  ArrowDown, 
  ArrowRight, 
  Clock, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  Bot,
  UserCheck,
  CalendarCheck,
  Building,
  RefreshCw
} from 'lucide-react';

const BEFORE_STEPS = [
  { step: "01", title: "Customer inquiry", detail: "Arrives unorganized via email, form or DM" },
  { step: "02", title: "Employee checks message", detail: "Hours of delay waiting for business hours" },
  { step: "03", title: "Employee replies", detail: "Manual generic response or phone call" },
  { step: "04", title: "Lead entered manually", detail: "Manual copy-paste into CRM with frequent typos" },
  { step: "05", title: "Follow-up manually managed", detail: "Dependent on employee memory and calendar" },
  { step: "06", title: "Appointment handled manually", detail: "Endless email back-and-forth for dates" },
];

const AFTER_STEPS = [
  { step: "01", title: "Customer Inquiry", detail: "Instantly captured via Web, WhatsApp, or API" },
  { step: "02", title: "AI Assistant", detail: "Instantly activates 24/7 without latency" },
  { step: "03", title: "Understands Request", detail: "Analyzes context, intent & requirements" },
  { step: "04", title: "Qualifies Lead", detail: "Scores budget, urgency & fit automatically" },
  { step: "05", title: "Updates CRM", detail: "Enriched contact inserted directly into pipeline" },
  { step: "06", title: "Automated Follow-up", detail: "Multi-channel personalized confirmation dispatched" },
  { step: "07", title: "Appointment Booked", detail: "Direct calendar sync & meeting notifications" },
];

export default function AutomationCompare() {
  const [activeTab, setActiveTab] = useState('after');

  return (
    <section id="automation" className="py-20 lg:py-28 bg-[#EFEAE3] dark:bg-[#070B16] border-y border-[#DBD6CF]/70 dark:border-slate-800 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] dark:bg-[#FE330A]/15 border border-[#DBD6CF] dark:border-[#FE330A]/30 text-[#FE330A] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Workflow Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] dark:text-white tracking-tight leading-tight mb-4">
            From Manual Work to <span className="text-[#FE330A] dark:text-cyan-400">Intelligent Automation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            See how custom AI pipelines eliminate repetitive drag, eliminate human error, and accelerate turnaround from hours to seconds.
          </p>
        </div>

        {/* View Toggle on Mobile/Tablet */}
        <div className="flex justify-center mb-10 lg:hidden">
          <div className="inline-flex p-1 bg-white dark:bg-slate-900 border border-[#DBD6CF] dark:border-slate-800 rounded-xl shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'before'
                  ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#191919] dark:hover:text-white'
              }`}
            >
              Manual Process
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'after'
                  ? 'bg-[#FE330A] text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-[#FE330A] dark:hover:text-cyan-400'
              }`}
            >
              3X Intelligent AI
            </button>
          </div>
        </div>

        {/* Before & After Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* BEFORE: The Manual Flow */}
          <TiltCard glare={true} maxRotation={3} className={`h-full ${activeTab === 'after' ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-white dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#191919] dark:text-white">BEFORE: Manual Operations</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Fragmented, high latency & human bottleneck</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900">
                    Latency: 4 - 24 hrs
                  </span>
                </div>

                {/* Vertical Steps Chain */}
                <div className="space-y-3 relative">
                  {BEFORE_STEPS.map((s, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                        <span className="w-6 h-6 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                          {s.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200">{s.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.detail}</p>
                        </div>
                      </div>
                      {idx < BEFORE_STEPS.length - 1 && (
                        <div className="flex justify-center my-1">
                          <ArrowDown className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Result: Missed leads, delayed conversions, employee fatigue.</span>
              </div>
            </div>
          </TiltCard>

          {/* AFTER: The Brand Blue Intelligent Flow */}
          <TiltCard glare={true} maxRotation={3} className={`h-full ${activeTab === 'before' ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-white dark:bg-[#0C1324] rounded-3xl p-6 sm:p-8 border-2 border-[#FE330A] dark:border-cyan-500/80 shadow-glow dark:shadow-[0_0_35px_rgba(8,120,254,0.35)] flex flex-col justify-between relative overflow-hidden h-full">
              {/* Top Blue Accent Glow Banner */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#FE330A] via-cyan-400 to-[#D62705]"></div>

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#DBD6CF] dark:border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FE330A] to-[#D62705] text-white flex items-center justify-center shadow-sm">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#191919] dark:text-white">AFTER: 3X Intelligent Automation</h3>
                      <p className="text-xs text-[#FE330A] dark:text-cyan-400 font-medium">Autonomous, instant & error-free</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#EFEAE3] dark:bg-[#FE330A]/20 text-[#FE330A] dark:text-cyan-400 border border-[#DBD6CF] dark:border-[#FE330A]/40">
                    Speed: &lt; 45 sec
                  </span>
                </div>

                {/* Vertical Steps Chain with Brand Blue */}
                <div className="space-y-3 relative">
                  {AFTER_STEPS.map((s, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-start gap-4 p-3.5 rounded-xl bg-gradient-to-r from-white to-[#EFEAE3] dark:from-slate-900 dark:to-slate-950 border border-[#DBD6CF] dark:border-slate-800 hover:border-[#FE330A] dark:hover:border-cyan-400/80 hover:shadow-sm transition-all">
                        <span className="w-6 h-6 rounded-md bg-[#FE330A] dark:bg-cyan-500 text-white font-mono text-xs flex items-center justify-center shrink-0 font-bold shadow-sm">
                          {s.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#191919] dark:text-white flex items-center gap-2">
                            {s.title}
                            {idx === 6 && (
                              <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#EFEAE3] dark:bg-[#FE330A]/30 text-[#FE330A] dark:text-cyan-300 rounded">
                                Complete
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{s.detail}</p>
                        </div>
                      </div>
                      {idx < AFTER_STEPS.length - 1 && (
                        <div className="flex justify-center my-1">
                          <ArrowDown className="w-3.5 h-3.5 text-[#FE330A] dark:text-cyan-400 animate-bounce" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DBD6CF] dark:border-slate-800 text-xs font-semibold text-[#FE330A] dark:text-cyan-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FE330A] dark:text-cyan-400 shrink-0" />
                <span>Result: Instant lead capture, higher close rate, zero manual data entry.</span>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* Highlight Callout Box as Requested */}
        <TiltCard glare={true} maxRotation={2}>
          <div className="bg-white dark:bg-[#0D1424] rounded-3xl p-8 sm:p-10 border border-[#DBD6CF] dark:border-slate-800 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EFEAE3] dark:bg-[#FE330A]/15 text-[#FE330A] dark:text-cyan-400 mb-4 border border-[#DBD6CF] dark:border-[#FE330A]/30">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#191919] dark:text-white tracking-tight mb-3">
              One Workflow Can Replace Hours of Repetitive Work.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I connect AI with the tools your business already uses to create automated workflows that work in the background.
            </p>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
