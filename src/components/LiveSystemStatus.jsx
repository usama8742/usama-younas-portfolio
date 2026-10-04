import React, { useState } from 'react';
import { Activity, ShieldCheck, Zap, X, CheckCircle2, Server, Clock, Database } from 'lucide-react';

export default function LiveSystemStatus() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Modern Pill on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#0B1325]/90 backdrop-blur-md border border-white/10 text-white shadow-2xl hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300"
          title="System Status & Reliability Telemetry"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-mono font-bold">
            3X Engine: <span className="text-cyan-400">Operational</span>
          </span>
          <span className="text-[11px] font-mono text-slate-400 border-l border-white/10 pl-2 hidden sm:inline">
            38ms
          </span>
        </button>
      </div>

      {/* Diagnostic Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-[#0B1325] rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-7 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    3X Automation System Telemetry
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Production Infrastructure Health
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              <div className="p-3.5 bg-[#070C18] rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Pipeline Uptime</span>
                  <Server className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-lg font-bold text-emerald-400">99.98%</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">SLA Guaranteed</span>
              </div>

              <div className="p-3.5 bg-[#070C18] rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Webhook Latency</span>
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-lg font-bold text-cyan-300">38 ms</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">Global Edge Avg</span>
              </div>

              <div className="p-3.5 bg-[#070C18] rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Security Layer</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-bold text-white">Encrypted</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">OAuth 2.0 + HMAC</span>
              </div>

              <div className="p-3.5 bg-[#070C18] rounded-2xl border border-white/10">
                <div className="flex items-center justify-between text-slate-400 mb-1">
                  <span>Data Integrity</span>
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className="text-sm font-bold text-white">Postgres ACID</span>
                <span className="block text-[10px] text-slate-500 mt-0.5">Zero Data Loss</span>
              </div>
            </div>

            {/* SLA Statement */}
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <h4 className="font-bold text-white mb-0.5">
                  100% Production Reliability Guarantee
                </h4>
                <p className="text-slate-300">
                  Every automated system includes built-in retry mechanisms, dead-letter webhook queues, and Discord/Telegram alert webhooks.
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
