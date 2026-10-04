import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  CheckCircle2, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronRight, 
  Lightbulb, 
  Play, 
  FileText, 
  Compass, 
  Award,
  Layers,
  Zap,
  Activity
} from 'lucide-react';
import { FULL_COURSE_MODULES } from '../data/aiCourseData';
import VisualDiagramRenderer from './VisualDiagramRenderer';

export default function AiCourseAcademy({ onOpenContact }) {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [completedLessons, setCompletedLessons] = useState({});

  const activeModule = FULL_COURSE_MODULES[activeModuleIndex];
  const activeLesson = activeModule.lessons[activeLessonIndex] || activeModule.lessons[0];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLessonComplete = (modIdx, lesIdx) => {
    const key = `${modIdx}-${lesIdx}`;
    setCompletedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalLessons = FULL_COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedCount = Object.values(completedLessons).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <section id="ai-academy" className="py-24 lg:py-32 bg-[#030712] border-b border-white/5 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 fill-current" />
              <span>Full AI Engineering &amp; Automation Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Complete AI Course: <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Zero Jargon to Production.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Everything explained clearly in simple words. Learn how Machine Learning, LLMs, RAG knowledge bases, and multi-agent workflows work from the ground up, with runnable production code.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-[#0B1325]/90 p-5 rounded-3xl border border-white/10 shrink-0 min-w-[260px] shadow-lg backdrop-blur-xl">
            <div className="flex justify-between items-center text-xs font-bold text-white mb-2">
              <span className="flex items-center gap-1.5 font-mono">
                <Award className="w-4 h-4 text-cyan-400" />
                Course Progress
              </span>
              <span className="font-mono text-cyan-400">{completedCount} of {totalLessons} done</span>
            </div>
            <div className="w-full bg-[#070C18] h-2.5 rounded-full overflow-hidden border border-white/10 mb-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                style={{ width: `${Math.max(progressPercent, 5)}%` }}
              ></div>
            </div>
            <div className="text-[11px] text-slate-400 font-mono flex justify-between">
              <span>{progressPercent}% Complete</span>
              <span className="font-bold text-cyan-300">100% Free Access</span>
            </div>
          </div>
        </div>

        {/* Course Interactive Explorer Grid (12 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Module Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2 font-mono">
              Curriculum Modules:
            </span>

            {FULL_COURSE_MODULES.map((module, idx) => {
              const isSelected = activeModuleIndex === idx;

              return (
                <div
                  key={module.id}
                  onClick={() => {
                    setActiveModuleIndex(idx);
                    setActiveLessonIndex(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-200 text-left ${
                    isSelected
                      ? 'bg-[#0B1325] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                      : 'bg-[#0B1325]/50 border-white/10 hover:border-cyan-500/40 hover:bg-[#0B1325]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      isSelected ? 'bg-cyan-400 text-[#030712] border-cyan-400' : 'bg-white/5 text-slate-300 border-white/10'
                    }`}>
                      Module {module.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {module.duration}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-white mb-1">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {module.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Lesson Reader & Code Playground (8 cols) */}
          <div className="lg:col-span-8 bg-[#0B1325]/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-6">
            
            {/* Module Banner */}
            <div className="pb-5 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-cyan-400 tracking-wider block">
                  Module {activeModule.num} · {activeModule.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {activeModule.summary}
                </p>
              </div>

              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10 shrink-0 self-start sm:self-center">
                {activeModule.lessons.length} Lessons Available
              </span>
            </div>

            {/* Lesson Navigation Buttons */}
            <div className="flex flex-wrap gap-2">
              {activeModule.lessons.map((lesson, lIdx) => {
                const isSelected = activeLessonIndex === lIdx;
                const isDone = completedLessons[`${activeModuleIndex}-${lIdx}`];

                return (
                  <button
                    key={lIdx}
                    type="button"
                    onClick={() => setActiveLessonIndex(lIdx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border-white/10'
                    }`}
                  >
                    {isDone ? (
                      <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-[#030712]' : 'text-emerald-400'}`} />
                    ) : (
                      <Play className="w-3 h-3 opacity-70" />
                    )}
                    <span>Lesson {activeModule.num}.{lIdx + 1}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Lesson Header & Mark Completed Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {activeLesson.title}
              </h4>

              <button
                type="button"
                onClick={() => toggleLessonComplete(activeModuleIndex, activeLessonIndex)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                  completedLessons[`${activeModuleIndex}-${activeLessonIndex}`]
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-cyan-400'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${
                  completedLessons[`${activeModuleIndex}-${activeLessonIndex}`] ? 'text-emerald-400' : 'text-slate-400'
                }`} />
                <span>
                  {completedLessons[`${activeModuleIndex}-${activeLessonIndex}`] ? 'Lesson Completed' : 'Mark As Complete'}
                </span>
              </button>
            </div>

            {/* Architecture Flow Diagram for Active Module */}
            <div className="pt-1">
              <VisualDiagramRenderer 
                diagramType={
                  activeModule.id === 'module-1' ? 'neural-network' :
                  activeModule.id === 'module-2' ? 'llm-pipeline' :
                  activeModule.id === 'module-3' ? 'rag-architecture' :
                  activeModule.id === 'module-4' ? 'langgraph-cycle' :
                  activeModule.id === 'module-5' ? 'n8n-workflow' :
                  'hitl-governance'
                }
                title={activeLesson.title}
              />
            </div>

            {/* "In Plain English" Explanation Box */}
            <div className="p-5 rounded-2xl bg-[#070C18] border border-white/10 text-white space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
                <Lightbulb className="w-4 h-4 text-cyan-400" />
                <span>In Plain English:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                {activeLesson.inPlainEnglish}
              </p>
            </div>

            {/* Key Concepts Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">
                Key Principles To Remember:
              </span>
              <div className="space-y-2">
                {activeLesson.keyConcepts.map((concept, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Runnable Code Example & Implementation */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">
                Production Code Example:
              </span>
              <div className="bg-[#030712] rounded-2xl border border-white/10 p-5 text-slate-200 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="text-[11px] text-slate-400 font-bold ml-1">
                      lesson_{activeModule.num}_{activeLessonIndex + 1}_demo.py
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(activeLesson.codeExample)}
                    className="flex items-center gap-1 text-[10px] text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                <pre className="overflow-x-auto text-[11px] leading-relaxed text-cyan-200/90 font-mono max-h-[260px]">
                  <code>{activeLesson.codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Want 3X AI Automation to build a custom system based on <strong className="text-white">{activeModule.title}</strong>?
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
              >
                <span>Book 1-on-1 Engineering Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
