import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import TiltCard from './TiltCard';
import { ArrowRight, Layers, Sparkles, ExternalLink, Maximize2, Cpu } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#070C18] border-y border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 fill-current" />
            <span>Production Systems Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Proven AI & Automation <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Systems in Production
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Real enterprise automation engines, autonomous multi-agent pipelines, n8n orchestrations, and voice AI systems engineered for operational efficiency.
          </p>
        </div>

        {/* 6 Large Project Showcase Cards Grid with 3D Tilt */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <TiltCard key={proj.id} glare={true} maxRotation={3} className="h-full">
              <div
                className="group relative bg-[#0B1325]/90 border border-white/10 rounded-3xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.5)] hover:border-cyan-400/60 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_rgba(6,182,212,0.22)] transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl"
              >
                {/* Cyan Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600"></div>

                <div>
                  {/* Browser/Device Frame Mockup Header */}
                  <div className="bg-[#070C18] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 truncate max-w-[160px]">
                      sys://prod-{proj.id}.3xai.net
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                      LIVE
                    </span>
                  </div>

                  {/* Large Project Image Area with Hover Zoom & Reveal */}
                  <div 
                    className="relative h-56 bg-slate-950 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(proj)}
                  >
                    <img
                      src={proj.image}
                      alt={`${proj.title} - AI Automation System`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-[#0B1325]/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Top Bar Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#030712]/90 text-cyan-300 shadow-sm backdrop-blur-md border border-cyan-500/30">
                        PROJECT {proj.num}
                      </span>
                      <span className="text-[11px] font-mono text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                        {proj.category}
                      </span>
                    </div>

                    {/* Hover Inspect Prompt */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#030712]/90 text-cyan-300 font-bold text-xs shadow-xl backdrop-blur-md border border-cyan-400/50">
                        <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Inspect Architecture</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Technology Stack Pill Badge */}
                    <div className="bg-[#030712]/80 rounded-xl p-3 border border-white/10 mb-2 font-mono">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1 font-bold">Integrated Stack</div>
                      <p className="text-xs text-cyan-300 leading-relaxed truncate">
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-cyan-300 bg-white/5 hover:bg-cyan-500/20 hover:text-white border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
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
