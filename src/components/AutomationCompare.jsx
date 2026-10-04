import React, { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import { 
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
  RefreshCw,
  Globe,
  MessageSquare,
  Share2,
  Database,
  Send,
  Calendar,
  BadgeDollarSign,
  Play,
  Pause,
  Layers,
  Activity
} from 'lucide-react';

const WORKFLOW_NODES = [
  {
    id: 'channels',
    step: '01',
    title: 'Website / WhatsApp / Social',
    subtitle: 'Omnichannel Ingestion',
    icon: Globe,
    badge: 'Inbound Stream',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-cyan-500/40',
    description: 'Incoming customer inquiries captured instantly across Web forms, WhatsApp Business API, and social DMs without delay.',
    metrics: '0.2s Ingestion',
    payload: { source: 'WhatsApp / Web', event: 'New Inquiry Received', priority: 'High' }
  },
  {
    id: 'agent',
    step: '02',
    title: 'AI Agent',
    subtitle: 'Neural Intent Engine',
    icon: Bot,
    badge: 'LLM Orchestrator',
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-blue-500/50',
    description: 'Autonomous reasoning engine analyzes query tone, extracts requirements, checks historical records, and formulates context.',
    metrics: '0.8s Inference',
    payload: { model: 'Claude 3.5 / GPT-4o', intent: 'Service Expansion', sentiment: 'Positive' }
  },
  {
    id: 'qualification',
    step: '03',
    title: 'Lead Qualification',
    subtitle: 'Automated Scoring',
    icon: UserCheck,
    badge: 'Fit Analysis',
    color: 'from-blue-600 to-indigo-600',
    borderColor: 'border-indigo-500/40',
    description: 'Dynamic scoring matrix evaluates budget, timeline, authority, and need (BANT) to prioritize high-value prospects.',
    metrics: 'Score: 94/100',
    payload: { budget: '$10k-$25k', urgency: 'Immediate', verified: true }
  },
  {
    id: 'crm',
    step: '04',
    title: 'CRM',
    subtitle: 'Two-Way Sync',
    icon: Database,
    badge: 'Data Pipeline',
    color: 'from-indigo-600 to-purple-600',
    borderColor: 'border-purple-500/40',
    description: 'Clean structured profile written to CRM (HubSpot, GoHighLevel, Salesforce) with enrichment and automated tags.',
    metrics: 'Instant Webhook',
    payload: { crm_id: 'CRM_98432', status: 'Enriched', assignee: 'Account Executive' }
  },
  {
    id: 'followup',
    step: '05',
    title: 'Automated Follow-up',
    subtitle: 'Adaptive Multi-Channel',
    icon: Send,
    badge: 'Hyper-Personalized',
    color: 'from-purple-600 to-cyan-500',
    borderColor: 'border-cyan-500/40',
    description: 'Dispatches personalized WhatsApp or email messages referencing specific customer pain points within seconds.',
    metrics: '< 15s Delivery',
    payload: { channel: 'Email + SMS', response_rate: '68%', custom_brief: 'Generated' }
  },
  {
    id: 'appointment',
    step: '06',
    title: 'Appointment',
    subtitle: 'Calendar Booking',
    icon: Calendar,
    badge: 'Direct Booking',
    color: 'from-cyan-500 to-teal-500',
    borderColor: 'border-teal-500/40',
    description: 'Shares interactive live booking link or books directly on Google Calendar / Cal.com with instant reminder triggers.',
    metrics: 'Zero Back-and-Forth',
    payload: { slot: 'Tomorrow, 2:00 PM', calendar: 'Google Cal Synced', reminders: 'Active' }
  },
  {
    id: 'sales',
    step: '07',
    title: 'Sales',
    subtitle: 'Closed Deal & Revenue',
    icon: BadgeDollarSign,
    badge: 'Conversion Complete',
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'border-emerald-500/50',
    description: 'Sales team receives pre-briefed, qualified leads ready to close, boosting conversion rates and team productivity 3X.',
    metrics: '3X Close Velocity',
    payload: { deal_status: 'Qualified Pipeline', roi_factor: '3.4x', manual_effort: '0 hrs' }
  }
];

const BEFORE_STEPS = [
  { step: "01", title: "Customer inquiry", detail: "Arrives unorganized via fragmented email, forms, or social DMs" },
  { step: "02", title: "Employee checks message", detail: "Hours of delay waiting for staff availability or business hours" },
  { step: "03", title: "Employee replies manually", detail: "Generic response typed out; inconsistent tone and missed details" },
  { step: "04", title: "Lead entered manually", detail: "Manual copy-paste into CRM with frequent data errors and omissions" },
  { step: "05", title: "Follow-up forgotten", detail: "Leads slip through cracks due to human memory and busy schedules" },
  { step: "06", title: "Scheduling friction", detail: "Endless email back-and-forth for open dates; lead goes cold" },
];

const AFTER_STEPS = [
  { step: "01", title: "Omnichannel Ingestion", detail: "Instantly captured via Website, WhatsApp Business, or API" },
  { step: "02", title: "Autonomous AI Agent", detail: "Activates in < 1 second 24/7 with zero waiting time" },
  { step: "03", title: "Deep Intent & Context", detail: "Parses complex requirements and cross-references business knowledge" },
  { step: "04", title: "Instant Qualification", detail: "Scores budget, urgency, and project fit automatically" },
  { step: "05", title: "Instant CRM Update", detail: "Enriched contact inserted directly into pipeline with full tags" },
  { step: "06", title: "Adaptive Follow-up", detail: "Multi-channel personalized brief and confirmation dispatched" },
  { step: "07", title: "Appointment & Sales", detail: "Direct calendar sync with reminders; sales team closes pre-sold lead" },
];

export default function AutomationCompare() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('after');

  // Auto-advance workflow demonstration
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % WORKFLOW_NODES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeNode = WORKFLOW_NODES[activeNodeIndex];
  const ActiveIcon = activeNode.icon;

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#070C18] border-y border-white/5 relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current animate-pulse text-cyan-400" />
            <span>Interactive Automation Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            How 3X AI Connects <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Every Business System</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            From the initial customer touchpoint to closed revenue — see how autonomous AI agents and integrated pipelines execute end-to-end business operations in seconds.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DEDICATED INTERACTIVE AUTOMATION WORKFLOW VISUALIZATION                   */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="bg-[#0B1325]/90 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest font-bold">
                  LIVE WORKFLOW PIPELINE SIMULATOR
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
                  Latency &lt; 2.5s Total
                </span>
              </div>

              {/* Play / Pause Toggle */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Pause Pulse</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Resume Pulse</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Workflow Step Nodes (Horizontal on Desktop, Grid on Mobile) */}
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-slate-800 pointer-events-none z-0">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-700 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                  style={{ width: `${(activeNodeIndex / (WORKFLOW_NODES.length - 1)) * 100}%` }}
                />
              </div>

              {/* Node Buttons Container */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-2 relative z-10">
                {WORKFLOW_NODES.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = activeNodeIndex === index;
                  const isPassed = activeNodeIndex > index;

                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => {
                        setActiveNodeIndex(index);
                        setIsPlaying(false);
                      }}
                      className={`group relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 flex flex-col items-center lg:items-center text-center ${
                        isActive 
                          ? 'bg-[#0F1B35] border-2 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] scale-105' 
                          : isPassed
                          ? 'bg-white/[0.04] border border-cyan-500/30 text-slate-200 hover:border-cyan-400/50'
                          : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {/* Step Indicator Pill */}
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full mb-2.5 ${
                        isActive 
                          ? 'bg-cyan-400 text-[#030712]' 
                          : isPassed
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-white/5 text-slate-500'
                      }`}>
                        {node.step}
                      </span>

                      {/* Icon Circle */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform ${
                        isActive 
                          ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-110' 
                          : isPassed
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                          : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Title */}
                      <h4 className={`text-xs font-bold leading-tight mb-1 ${
                        isActive ? 'text-white' : 'text-slate-300'
                      }`}>
                        {node.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 line-clamp-1">
                        {node.subtitle}
                      </p>

                      {/* Glowing dot when active */}
                      {isActive && (
                        <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Node Detail Card Display */}
            <div className="mt-8 pt-8 border-t border-white/10 grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    STAGE {activeNode.step} OF 07
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeNode.badge}
                  </span>
                  <span className="ml-auto text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {activeNode.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <ActiveIcon className="w-6 h-6 text-cyan-400" />
                  {activeNode.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  {activeNode.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    Auto-trigger: Instant
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    Validation: Strict
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    Audit: Logged
                  </span>
                </div>
              </div>

              {/* Realtime JSON / Payload Inspector Window */}
              <div className="lg:col-span-5 bg-[#030712] border border-white/10 rounded-2xl p-4 sm:p-5 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-slate-400 text-[11px] mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    node_payload_stream.json
                  </span>
                  <span className="text-cyan-400 text-[10px]">200 OK</span>
                </div>
                <pre className="text-cyan-300/90 overflow-x-auto text-[11px] leading-relaxed">
                  {JSON.stringify({
                    stage: activeNode.id,
                    execution_time: activeNode.metrics,
                    data_packet: activeNode.payload,
                    status: 'HEALTHY_AUTONOMOUS',
                    next_node: activeNodeIndex < WORKFLOW_NODES.length - 1 ? WORKFLOW_NODES[activeNodeIndex + 1].id : 'CYCLE_COMPLETE'
                  }, null, 2)}
                </pre>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* BEFORE & AFTER COMPARISON (MANUAL VS 3X AUTOMATION)                       */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Manual Friction vs. <span className="text-cyan-400">3X Autopilot</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-400">
            Compare how traditional manual operations stack up against modern autonomous AI pipelines.
          </p>
        </div>

        {/* View Toggle on Mobile */}
        <div className="flex justify-center mb-8 lg:hidden">
          <div className="inline-flex p-1 bg-[#0B1325] border border-white/10 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'before'
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Manual Process
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'after'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3X Intelligent AI
            </button>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
          
          {/* BEFORE: The Manual Flow */}
          <TiltCard glare={true} maxRotation={3} className={`h-full ${activeTab === 'after' ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-[#0B1325]/70 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg flex flex-col justify-between h-full backdrop-blur-xl">
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 text-slate-400 flex items-center justify-center border border-white/10">
                      <Clock className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">BEFORE: Manual Operations</h3>
                      <p className="text-xs text-slate-400">Fragmented, high latency & human bottleneck</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-rose-950/60 text-rose-400 border border-rose-900">
                    Latency: 4 - 24 hrs
                  </span>
                </div>

                {/* Vertical Steps Chain */}
                <div className="space-y-3 relative">
                  {BEFORE_STEPS.map((s, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                        <span className="w-6 h-6 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono text-xs flex items-center justify-center shrink-0 font-bold">
                          {s.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300">{s.title}</h4>
                          <p className="text-xs text-slate-400 mt-0.5">{s.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Result: Missed leads, delayed conversions, employee fatigue.</span>
              </div>
            </div>
          </TiltCard>

          {/* AFTER: 3X AI Automation Flow */}
          <TiltCard glare={true} maxRotation={3} className={`h-full ${activeTab === 'before' ? 'hidden lg:block' : 'block'}`}>
            <div className="bg-[#0B1325]/90 rounded-3xl p-6 sm:p-8 border-2 border-cyan-500/50 shadow-[0_0_35px_rgba(6,182,212,0.25)] flex flex-col justify-between relative overflow-hidden h-full backdrop-blur-xl">
              {/* Top Cyan Accent Glow Banner */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"></div>

              <div>
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">AFTER: 3X AI Automation</h3>
                      <p className="text-xs text-cyan-400 font-medium">Autonomous, instant & error-free</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    Speed: &lt; 45 sec
                  </span>
                </div>

                {/* Vertical Steps Chain with Brand Blue */}
                <div className="space-y-3 relative">
                  {AFTER_STEPS.map((s, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-white/[0.06] transition-all">
                        <span className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-mono text-xs flex items-center justify-center shrink-0 font-bold shadow-sm">
                          {s.step}
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-white flex items-center gap-2">
                            {s.title}
                            {idx === 6 && (
                              <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
                                Complete
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-slate-300 mt-0.5">{s.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-cyan-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Result: Instant lead capture, higher close rate, zero manual data entry.</span>
              </div>
            </div>
          </TiltCard>

        </div>

        {/* Highlight Callout Box */}
        <TiltCard glare={true} maxRotation={2}>
          <div className="bg-[#0B1325]/90 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] text-center max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-indigo-600/10 pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20 shadow-sm">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                One Workflow Can Replace Hours of Repetitive Work.
              </h3>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                3X AI Automation connects cutting-edge LLMs with the tools your business already runs on to create frictionless workflows running 24/7 in the background.
              </p>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
