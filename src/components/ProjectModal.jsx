import React from 'react';
import { X, ExternalLink, Code2, Database, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#0C1222] rounded-3xl border border-[#C9DFFF] dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#C9DFFF] dark:border-slate-800 bg-[#F8FAFE] dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#0878FE] text-white">
              {project.num}
            </span>
            <div>
              <h3 className="text-xl font-bold text-[#111827] dark:text-white">{project.title}</h3>
              <p className="text-xs text-[#0878FE] dark:text-cyan-400 font-medium">{project.category}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-[#111827] dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-[#C9DFFF] dark:hover:border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Featured System Image */}
          {project.image && (
            <div className="relative rounded-2xl overflow-hidden border border-[#C9DFFF] dark:border-slate-800 shadow-sm max-h-72">
              <img 
                src={project.image} 
                alt={`${project.title} system interface`} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[11px] font-mono text-white">
                Live System Preview
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              System Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline Breakdown */}
          {project.architecture && (
            <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-2xl p-5 border border-[#C9DFFF] dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0878FE] dark:text-cyan-400 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Pipeline Architecture & Data Flow
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-[#C9DFFF]/70 dark:border-slate-800">
                  <span className="text-slate-400 font-bold block mb-1">1. INBOUND TRIGGER</span>
                  <span className="text-[#111827] dark:text-slate-200">{project.architecture.inbound}</span>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-[#C9DFFF]/70 dark:border-slate-800">
                  <span className="text-[#0878FE] dark:text-cyan-400 font-bold block mb-1">2. PROCESSING ENGINE</span>
                  <span className="text-[#111827] dark:text-slate-200">{project.architecture.processing}</span>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-[#C9DFFF]/70 dark:border-slate-800">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">3. SYSTEM OUTPUT</span>
                  <span className="text-[#111827] dark:text-slate-200">{project.architecture.output}</span>
                </div>
              </div>
            </div>
          )}

          {/* Core Technical Highlights */}
          {project.architecture?.features && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Key System Capabilities
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.architecture.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#0878FE] dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#EAF3FF] dark:bg-[#0878FE]/15 text-[#0878FE] dark:text-cyan-400 border border-[#C9DFFF] dark:border-[#0878FE]/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#C9DFFF] dark:border-slate-800 bg-[#F8FAFE] dark:bg-slate-900/90 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            Designed & Engineered by Usama Younas
          </span>
          <a
            href={project.liveUrl || "https://github.com/usama8742"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow transition-all"
          >
            <span>View Source / Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
