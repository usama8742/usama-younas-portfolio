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
  Zap
} from 'lucide-react';
import { FULL_COURSE_MODULES } from '../data/aiCourseData';

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
    <section id="ai-academy" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#C9DFFF]/70 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(8,120,254,0.05)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#C9DFFF] text-[#0878FE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Full AI Engineering &amp; Automation Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight mb-4">
              Complete AI Course: <span className="text-[#0878FE]">Zero Jargon to Production.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Everything explained clearly in simple words. Learn how Machine Learning, LLMs, RAG knowledge bases, and multi-agent workflows work from the ground up, with runnable production code.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-[#F8FAFE] p-4 sm:p-5 rounded-2xl border border-[#C9DFFF] shrink-0 min-w-[240px]">
            <div className="flex justify-between items-center text-xs font-bold text-[#111827] mb-2">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0878FE]" />
                Course Progress
              </span>
              <span className="font-mono text-[#0878FE]">{completedCount} of {totalLessons} done</span>
            </div>
            <div className="w-full bg-[#EAF3FF] h-2.5 rounded-full overflow-hidden border border-[#C9DFFF]/60 mb-2">
              <div 
                className="bg-gradient-to-r from-[#0878FE] to-[#0255FD] h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(progressPercent, 5)}%` }}
              ></div>
            </div>
            <div className="text-[11px] text-slate-500 font-mono flex justify-between">
              <span>{progressPercent}% Complete</span>
              <span>100% Free Access</span>
            </div>
          </div>
        </div>

        {/* Course Interactive Explorer Grid (12 cols) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Module Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block px-1 mb-2">
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
                      ? 'bg-[#EAF3FF] border-[#0878FE] shadow-sm ring-2 ring-[#0878FE]/20'
                      : 'bg-white border-[#C9DFFF] hover:border-[#0878FE] hover:bg-[#F8FAFE]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#0878FE] bg-white px-2 py-0.5 rounded border border-[#C9DFFF]">
                      Module {module.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {module.duration}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#111827] mb-1">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    {module.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Lesson Reader & Code Playground (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#C9DFFF] shadow-card space-y-6">
            
            {/* Module Banner */}
            <div className="pb-5 border-b border-[#C9DFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#0878FE] tracking-wider block">
                  Module {activeModule.num} · {activeModule.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] mt-0.5">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {activeModule.summary}
                </p>
              </div>

              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F8FAFE] text-slate-600 border border-[#C9DFFF] shrink-0 self-start sm:self-center">
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
                        ? 'bg-[#0878FE] text-white border-[#0878FE] shadow-sm'
                        : 'bg-[#F8FAFE] text-slate-700 hover:bg-[#EAF3FF] border-[#C9DFFF]'
                    }`}
                  >
                    {isDone ? (
                      <Check className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
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
              <h4 className="text-lg sm:text-xl font-black text-[#111827]">
                {activeLesson.title}
              </h4>

              <button
                type="button"
                onClick={() => toggleLessonComplete(activeModuleIndex, activeLessonIndex)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                  completedLessons[`${activeModuleIndex}-${activeLessonIndex}`]
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-slate-600 border-[#C9DFFF] hover:border-[#0878FE]'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${
                  completedLessons[`${activeModuleIndex}-${activeLessonIndex}`] ? 'text-emerald-600' : 'text-slate-400'
                }`} />
                <span>
                  {completedLessons[`${activeModuleIndex}-${activeLessonIndex}`] ? 'Lesson Completed' : 'Mark As Complete'}
                </span>
              </button>
            </div>

            {/* "In Plain English" Explanation Box */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>In Plain English:</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
                {activeLesson.inPlainEnglish}
              </p>
            </div>

            {/* Key Concepts Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Key Principles To Remember:
              </span>
              <div className="space-y-2">
                {activeLesson.keyConcepts.map((concept, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFE] border border-[#C9DFFF]/70 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Runnable Code Example & Implementation */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Production Code Example:
              </span>
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 text-slate-200 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] text-slate-400 font-bold ml-1">
                      lesson_{activeModule.num}_{activeLessonIndex + 1}_demo.py
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(activeLesson.codeExample)}
                    className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300 font-mono max-h-[260px]">
                  <code>{activeLesson.codeExample}</code>
                </pre>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-[#C9DFFF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                Want Usama to build a custom system based on <strong>{activeModule.title}</strong>?
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow transition-all"
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
