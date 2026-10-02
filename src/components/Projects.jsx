import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { ArrowRight, Layers, Sparkles, ExternalLink, Maximize2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Systems Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            Things I've <span className="text-[#0878FE] dark:text-cyan-400">Built</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Real full-stack platforms, autonomous agent systems, n8n automations, and speech pipelines engineered for businesses.
          </p>
        </div>

        {/* 6 Large Project Cards Grid with 3D Tilt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <TiltCard key={proj.id} glare={true} maxRotation={4} className="h-full">
              <div
                className="group relative bg-white dark:bg-[#0B101E] border border-[#C9DFFF] dark:border-slate-800 rounded-3xl overflow-hidden shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#0878FE] dark:hover:border-cyan-400/80 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Blue Top Accent Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0878FE] via-cyan-400 to-[#0255FD]"></div>

                <div>
                  {/* Large Project Image Area with Hover Zoom */}
                  <div 
                    className="relative h-56 bg-slate-100 dark:bg-slate-900 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <img
                      src={proj.image}
                      alt={`${proj.title} - AI Automation System`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity"></div>

                    {/* Top Bar Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/95 dark:bg-slate-900/90 text-[#0878FE] dark:text-cyan-400 shadow-sm backdrop-blur-sm border border-[#C9DFFF] dark:border-slate-700">
                        PROJECT {proj.num}
                      </span>
                      <span className="text-[11px] font-mono text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        Live Architecture
                      </span>
                    </div>

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-[#0878FE] dark:text-cyan-400 font-bold text-xs shadow-lg backdrop-blur-sm border border-[#C9DFFF] dark:border-slate-700">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Inspect Architecture</span>
                      </span>
                    </div>

                    {/* Bottom Image Label */}
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <p className="text-xs font-mono font-medium text-white/90 drop-shadow-sm truncate">
                        {proj.category}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2.5 group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Technology String Badge */}
                    <div className="bg-[#F8FAFE] dark:bg-slate-950/80 rounded-xl p-3 border border-[#C9DFFF]/70 dark:border-slate-800 mb-2">
                      <p className="text-[11px] font-semibold text-[#0878FE] dark:text-cyan-400 font-mono leading-relaxed">
                        {proj.technology}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(proj)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#0878FE] dark:text-cyan-400 bg-[#EAF3FF] dark:bg-[#0878FE]/15 hover:bg-[#0878FE] hover:text-white dark:hover:bg-[#0878FE] dark:hover:text-white border border-[#C9DFFF] dark:border-[#0878FE]/30 transition-all duration-200"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Modal Drilldown */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
}
