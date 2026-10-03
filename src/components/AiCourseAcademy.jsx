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
    <section id="ai-academy" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#DBD6CF] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="orange-gradient-1 absolute top-1/3 right-1/4 w-[700px] h-[500px] pointer-events-none -z-10 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[50px] bg-[#EFEAE3] border border-[#DBD6CF] text-[#191919] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 text-[#FE330A]" />
              <span>Full AI Engineering &amp; Automation Academy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] tracking-tight leading-tight mb-4">
              Complete AI Course: <span className="text-[#FE330A]">Zero Jargon to Production.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Everything explained clearly in simple words. Learn how Machine Learning, LLMs, RAG knowledge bases, and multi-agent workflows work from the ground up, with runnable production code.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div className="bg-[#EFEAE3] p-5 rounded-3xl border border-[#DBD6CF] shrink-0 min-w-[240px]">
            <div className="flex justify-between items-center text-xs font-bold text-[#191919] mb-2">
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#FE330A]" />
                Course Progress
              </span>
              <span className="font-mono text-[#FE330A]">{completedCount} of {totalLessons} done</span>
            </div>
            <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-[#DBD6CF] mb-2">
              <div 
                className="bg-[#FE330A] h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(progressPercent, 5)}%` }}
              ></div>
            </div>
            <div className="text-[11px] text-slate-600 font-mono flex justify-between">
              <span>{progressPercent}% Complete</span>
              <span className="font-bold text-[#191919]">100% Free Access</span>
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
                      ? 'bg-[#EFEAE3] border-2 border-[#FE330A] shadow-sm'
                      : 'bg-white border-[#DBD6CF] hover:border-[#191919] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-[50px] border ${
                      isSelected ? 'bg-[#FE330A] text-white border-[#FE330A]' : 'bg-white text-slate-700 border-[#DBD6CF]'
                    }`}>
                      Module {module.num}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {module.duration}
                    </span>
                  </div>

                  <h3 className="font-black text-sm sm:text-base text-[#191919] mb-1">
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
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#DBD6CF] shadow-card space-y-6">
            
            {/* Module Banner */}
            <div className="pb-5 border-b border-[#DBD6CF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#FE330A] tracking-wider block">
                  Module {activeModule.num} · {activeModule.level}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#191919] mt-0.5">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {activeModule.summary}
                </p>
              </div>

              <span className="text-xs font-mono font-bold px-3 py-1 rounded-[50px] bg-[#EFEAE3] text-[#191919] border border-[#DBD6CF] shrink-0 self-start sm:self-center">
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
                    className={`px-3.5 py-2 rounded-[50px] text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-[#EFEAE3] text-[#191919] hover:bg-white border-[#DBD6CF]'
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
              <h4 className="text-lg sm:text-xl font-black text-[#191919]">
                {activeLesson.title}
              </h4>

              <button
                type="button"
                onClick={() => toggleLessonComplete(activeModuleIndex, activeLessonIndex)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[50px] text-xs font-bold transition-all border shrink-0 ${
                  completedLessons[`${activeModuleIndex}-${activeLessonIndex}`]
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-slate-700 border-[#DBD6CF] hover:border-black'
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
            <div className="p-5 rounded-2xl bg-[#EFEAE3] border border-[#DBD6CF] text-[#191919] space-y-2">
              <div className="flex items-center gap-2 text-[#FE330A] font-bold text-xs uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#FE330A]" />
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
                  <div key={cIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#DBD6CF] text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
              <div className="bg-[#191919] rounded-2xl border border-black p-5 text-slate-200 font-mono text-xs shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FE330A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] text-slate-400 font-bold ml-1">
                      lesson_{activeModule.num}_{activeLessonIndex + 1}_demo.py
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(activeLesson.codeExample)}
                    className="flex items-center gap-1 text-[10px] text-slate-300 hover:text-white bg-slate-800 px-3 py-1 rounded-[50px] transition-colors"
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
            <div className="pt-4 border-t border-[#DBD6CF] flex flex-col sm:flex-row items-center justify-between gap-4">
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
                className="btn-azzle-primary"
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
