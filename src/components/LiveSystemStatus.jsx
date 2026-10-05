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
          className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-[#DBD6CF] dark:border-slate-800 text-[#191919] dark:text-white shadow-lg hover:shadow-glow-sm dark:hover:shadow-[0_0_20px_rgba(8,120,254,0.3)] hover:border-[#FE330A] dark:hover:border-cyan-400 transition-all duration-200"
          title="System Status & Reliability"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold">
            3X Engine: <span className="text-[#FE330A] dark:text-cyan-400">Operational</span>
          </span>
          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 border-l border-slate-200 dark:border-slate-800 pl-2 hidden sm:inline">
            38ms
          </span>
        </button>
      </div>

      {/* Diagnostic Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-[#0C1222] rounded-3xl border border-[#DBD6CF] dark:border-slate-800 shadow-2xl p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#DBD6CF] dark:border-slate-800 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EFEAE3] dark:bg-[#FE330A]/15 text-[#FE330A] dark:text-cyan-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#191919] dark:text-white">
                    3X Automation System Telemetry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Production Infrastructure Health
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-[#191919] dark:hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 font-mono text-xs">
              <div className="p-3.5 bg-[#EFEAE3] dark:bg-slate-950/80 rounded-2xl border border-[#DBD6CF] dark:border-slate-800">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                  <span>Pipeline Uptime</span>
                  <Server className="w-3.5 h-3.5 text-[#FE330A] dark:text-cyan-400" />
                </div>
                <span className="text-lg font-bold text-emerald-500">99.98%</span>
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">SLA Guaranteed</span>
              </div>

              <div className="p-3.5 bg-[#EFEAE3] dark:bg-slate-950/80 rounded-2xl border border-[#DBD6CF] dark:border-slate-800">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                  <span>Webhook Latency</span>
                  <Clock className="w-3.5 h-3.5 text-[#FE330A] dark:text-cyan-400" />
                </div>
                <span className="text-lg font-bold text-[#FE330A] dark:text-cyan-400">38 ms</span>
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Global Edge Avg</span>
              </div>

              <div className="p-3.5 bg-[#EFEAE3] dark:bg-slate-950/80 rounded-2xl border border-[#DBD6CF] dark:border-slate-800">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                  <span>Security Layer</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <span className="text-sm font-bold text-[#191919] dark:text-white">Encrypted</span>
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">OAuth 2.0 + HMAC</span>
              </div>

              <div className="p-3.5 bg-[#EFEAE3] dark:bg-slate-950/80 rounded-2xl border border-[#DBD6CF] dark:border-slate-800">
                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-1">
                  <span>Data Integrity</span>
                  <Database className="w-3.5 h-3.5 text-[#FE330A] dark:text-cyan-400" />
                </div>
                <span className="text-sm font-bold text-[#191919] dark:text-white">Postgres ACID</span>
                <span className="block text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Zero Data Loss</span>
              </div>
            </div>

            {/* SLA Statement */}
            <div className="p-4 rounded-2xl bg-[#EFEAE3] dark:bg-[#FE330A]/15 border border-[#DBD6CF] dark:border-[#FE330A]/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FE330A] dark:text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs">
                <h4 className="font-bold text-[#191919] dark:text-white mb-0.5">
                  100% Production Reliability Guarantee
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
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
