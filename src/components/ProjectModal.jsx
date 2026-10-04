import React from 'react';
import { X, ExternalLink, Code2, Database, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#0B1325] rounded-3xl border border-white/20 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#070C18]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.num}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-xs text-cyan-400 font-medium font-mono">{project.category}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Featured System Image */}
          {project.image && (
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-sm max-h-72 bg-slate-950">
              <img 
                src={project.image} 
                alt={`${project.title} system interface`} 
                className="w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-[11px] font-mono text-cyan-300 border border-white/10">
                Live System Architecture
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              System Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline Breakdown */}
          {project.architecture && (
            <div className="bg-[#070C18] rounded-2xl p-5 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4" />
                Pipeline Architecture &amp; Data Flow
              </h4>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/10">
                  <span className="text-slate-400 font-bold block mb-1">1. INBOUND TRIGGER</span>
                  <span className="text-white">{project.architecture.inbound}</span>
                </div>

                <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/10">
                  <span className="text-cyan-400 font-bold block mb-1">2. PROCESSING ENGINE</span>
                  <span className="text-white">{project.architecture.processing}</span>
                </div>

                <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/10">
                  <span className="text-emerald-400 font-bold block mb-1">3. SYSTEM OUTPUT</span>
                  <span className="text-white">{project.architecture.output}</span>
                </div>
              </div>
            </div>
          )}

          {/* Core Technical Highlights */}
          {project.architecture?.features && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                Key System Capabilities
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.architecture.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Badges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((t, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 text-cyan-300 border border-white/10 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/10 bg-[#070C18] flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Designed &amp; Engineered by 3X AI Automation
          </span>
          <a
            href={project.liveUrl || "https://github.com/usama8742"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-sm transition-all"
          >
            <span>View Source / Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
