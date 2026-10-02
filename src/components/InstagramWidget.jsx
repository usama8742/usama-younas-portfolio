import React from 'react';
import TiltCard from './TiltCard';
import { InstagramIcon } from './SocialIcons';
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InstagramWidget() {
  const instaUrl = "https://www.instagram.com/3xaiautomation/";

  return (
    <TiltCard glare={true} maxRotation={2}>
      <div className="bg-gradient-to-br from-white to-[#F8FAFE] dark:from-[#0C1222] dark:to-[#080D1A] rounded-3xl p-6 sm:p-7 border border-[#C9DFFF] dark:border-slate-800 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#0878FE] dark:hover:border-cyan-400/80 transition-all duration-300 relative overflow-hidden group">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-10 dark:opacity-20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative z-10">
          
          {/* Profile Info */}
          <div className="flex items-center gap-4">
            
            {/* Instagram Gradient Ring Avatar */}
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-[2.5px] rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm hover:scale-105 transition-transform shrink-0"
              title="Visit @3xaiautomation on Instagram"
            >
              <div className="w-14 h-14 rounded-[14px] bg-white dark:bg-[#080D1A] p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0878FE] to-[#0255FD] flex items-center justify-center text-white font-mono font-black text-sm">
                  3X
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                <InstagramIcon className="w-3.5 h-3.5 text-[#dc2743]" />
              </span>
            </a>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2">
                <a 
                  href={instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-black text-[#111827] dark:text-white hover:text-[#0878FE] dark:hover:text-cyan-400 transition-colors"
                >
                  @3xaiautomation
                </a>
                <span className="inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/20 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-[#0878FE]/30">
                  Official
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                AI Automations · n8n Pipelines · Business Systems
              </p>

              <p className="text-[11px] text-slate-400 dark:text-slate-400 font-mono mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active daily updates & system breakdowns
              </p>
            </div>

          </div>

          {/* Action Button */}
          <div className="w-full sm:w-auto">
            <a
              href={instaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] shadow-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Mini Feature Pills */}
        <div className="mt-5 pt-4 border-t border-[#C9DFFF]/60 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
          <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500 font-semibold mr-1">TOP TOPICS:</span>
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[11px] font-medium">
            #n8nAutomation
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[11px] font-medium">
            #AIAgents
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[11px] font-medium">
            #CRMAutomation
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 text-[11px] font-medium">
            #VoiceAI
          </span>
        </div>

      </div>
    </TiltCard>
  );
}
