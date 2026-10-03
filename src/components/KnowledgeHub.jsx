import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Cpu, 
  Brain, 
  Terminal, 
  Check, 
  Copy, 
  X, 
  ExternalLink,
  Zap,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import TiltCard from './TiltCard';
import { KNOWLEDGE_CATEGORIES, KNOWLEDGE_TOPICS } from '../data/knowledgeBaseData';
import VisualDiagramRenderer from './VisualDiagramRenderer';

export default function KnowledgeHub({ onOpenContact }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeLevel, setActiveLevel] = useState('beginner'); // 'beginner' | 'intermediate' | 'advanced' | 'expert'
  const [copied, setCopied] = useState(false);

  // Filter topics based on search query and category
  const filteredTopics = useMemo(() => {
    return KNOWLEDGE_TOPICS.filter((topic) => {
      const matchesCategory = selectedCategory === 'All' || topic.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        topic.title.toLowerCase().includes(q) ||
        topic.shortDesc.toLowerCase().includes(q) ||
        topic.tags.some(tag => tag.toLowerCase().includes(q)) ||
        topic.searchTerms.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenTopic = (topic, level = 'beginner') => {
    setSelectedTopic(topic);
    setActiveLevel(level);
  };

  const handleCloseTopic = () => {
    setSelectedTopic(null);
  };

  return (
    <section id="knowledge-hub" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#C9DFFF]/70 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(8,120,254,0.06)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#C9DFFF] text-[#0878FE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Interactive AI &amp; Engineering Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight mb-4">
            Mastery From <span className="text-[#0878FE]">Beginner to Expert.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Search any skill, model, or engineering domain below. Explore clear conceptual roadmaps, practical architecture, and production code snippets from foundational syntax to multi-agent enterprise deployment.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-[#0878FE]" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any skill (e.g. Python, Machine Learning, Deep Learning, LangGraph, RAG, FastAPI)..."
              className="w-full pl-12 sm:pl-14 pr-12 py-4 rounded-2xl bg-[#F8FAFE] border-2 border-[#C9DFFF] text-sm sm:text-base text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-4 focus:ring-[#0878FE]/10 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Quick search suggestions */}
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500">
            <span className="font-semibold text-slate-600">Popular searches:</span>
            {['Python', 'Machine Learning', 'Deep Learning', 'LangGraph', 'RAG', 'FastAPI', 'Web Scraping'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setSearchQuery(term)}
                className="px-2.5 py-1 rounded-lg bg-[#EAF3FF] text-[#0878FE] hover:bg-[#0878FE] hover:text-white font-medium transition-colors border border-[#C9DFFF]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {KNOWLEDGE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#0878FE] text-white border-[#0878FE] shadow-sm scale-105'
                  : 'bg-[#F8FAFE] text-slate-700 hover:bg-[#EAF3FF] border-[#C9DFFF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between max-w-7xl mx-auto mb-6 px-1">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
            Showing {filteredTopics.length} Knowledge Guides
          </span>
          {searchQuery && (
            <span className="text-xs font-bold text-[#0878FE]">
              Filtered by: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Topics Cards Grid */}
        {filteredTopics.length === 0 ? (
          <div className="text-center py-16 bg-[#F8FAFE] rounded-3xl border border-[#C9DFFF] max-w-2xl mx-auto p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#111827]">No topics found matching "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              Try searching for broader terms like "python", "neural", "agent", or "pipeline".
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 rounded-xl bg-[#0878FE] text-white text-xs font-bold hover:bg-[#0255FD]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredTopics.map((topic) => (
              <div 
                key={topic.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C9DFFF] shadow-card hover:border-[#0878FE] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0878FE] bg-[#EAF3FF] px-2.5 py-1 rounded-full border border-[#C9DFFF]">
                      {topic.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 flex items-center gap-1">
                        <Layers className="w-3 h-3 text-purple-600" />
                        <span>Diagrams</span>
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        4 Tiers
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#0878FE] transition-colors mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {topic.shortDesc}
                  </p>

                  {/* 4 Skill Tiers Indicator */}
                  <div className="grid grid-cols-4 gap-1.5 mb-5 p-2 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF]/70">
                    <div 
                      onClick={() => handleOpenTopic(topic, 'beginner')}
                      className="cursor-pointer text-center p-1.5 rounded-lg bg-emerald-100/60 hover:bg-emerald-200/80 transition-colors"
                      title="Beginner: Fundamentals"
                    >
                      <span className="block text-[9px] font-bold text-emerald-800 uppercase">Beg</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mx-auto mt-0.5 block"></span>
                    </div>

                    <div 
                      onClick={() => handleOpenTopic(topic, 'intermediate')}
                      className="cursor-pointer text-center p-1.5 rounded-lg bg-sky-100/60 hover:bg-sky-200/80 transition-colors"
                      title="Intermediate: Integrations"
                    >
                      <span className="block text-[9px] font-bold text-sky-800 uppercase">Int</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mx-auto mt-0.5 block"></span>
                    </div>

                    <div 
                      onClick={() => handleOpenTopic(topic, 'advanced')}
                      className="cursor-pointer text-center p-1.5 rounded-lg bg-amber-100/60 hover:bg-amber-200/80 transition-colors"
                      title="Advanced: Scalability"
                    >
                      <span className="block text-[9px] font-bold text-amber-800 uppercase">Adv</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mx-auto mt-0.5 block"></span>
                    </div>

                    <div 
                      onClick={() => handleOpenTopic(topic, 'expert')}
                      className="cursor-pointer text-center p-1.5 rounded-lg bg-purple-100/60 hover:bg-purple-200/80 transition-colors"
                      title="Expert: Production Architect"
                    >
                      <span className="block text-[9px] font-bold text-purple-800 uppercase">Exp</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mx-auto mt-0.5 block"></span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {topic.tags.slice(0, 4).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Open Guide Button */}
                <button
                  type="button"
                  onClick={() => handleOpenTopic(topic, 'beginner')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-[#0878FE] bg-[#EAF3FF] hover:bg-[#0878FE] hover:text-white transition-all duration-200 border border-[#C9DFFF]"
                >
                  <span>Explore Beginner ➔ Expert Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Interactive Deep-Dive Topic Modal */}
      {selectedTopic && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={handleCloseTopic}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-[#C9DFFF]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 sm:p-7 border-b border-[#C9DFFF] bg-[#F8FAFE]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0878FE] bg-[#EAF3FF] px-2.5 py-0.5 rounded-full border border-[#C9DFFF]">
                    {selectedTopic.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Comprehensive Knowledge Roadmap
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111827]">
                  {selectedTopic.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                  {selectedTopic.shortDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCloseTopic}
                className="w-9 h-9 rounded-full bg-white text-slate-600 hover:text-black hover:bg-slate-100 flex items-center justify-center font-bold border border-[#C9DFFF] shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Modal Level Switcher (4 Tiers) */}
            <div className="px-6 sm:px-7 pt-4 border-b border-[#C9DFFF] bg-white flex flex-wrap gap-2">
              {[
                { id: 'beginner', label: '1. Beginner', color: 'emerald', tag: 'Core Fundamentals' },
                { id: 'intermediate', label: '2. Intermediate', color: 'sky', tag: 'Integration & Workflows' },
                { id: 'advanced', label: '3. Advanced', color: 'amber', tag: 'Scaling & Optimization' },
                { id: 'expert', label: '4. Expert', color: 'purple', tag: 'Production Architecture' }
              ].map((lvl) => {
                const isActive = activeLevel === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    onClick={() => setActiveLevel(lvl.id)}
                    className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all border-b-2 ${
                      isActive
                        ? 'text-[#0878FE] border-[#0878FE] bg-[#EAF3FF]/40 font-black'
                        : 'text-slate-600 border-transparent hover:text-[#0878FE]'
                    }`}
                  >
                    <span>{lvl.label}</span>
                    <span className="text-[10px] font-normal text-slate-400 block sm:inline sm:ml-1.5 font-mono">
                      ({lvl.tag})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Modal Body: Active Level Detail */}
            <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-6">
              {(() => {
                const levelData = selectedTopic.levels[activeLevel];
                if (!levelData) return null;

                return (
                  <div className="space-y-6 animate-fadeIn">
                    
                    {/* Level Description & Concepts Covered */}
                    <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base sm:text-lg font-bold text-[#111827]">
                          {levelData.title}
                        </h4>
                        <span className="text-[11px] font-mono font-bold uppercase text-[#0878FE] bg-white px-2.5 py-0.5 rounded border border-[#C9DFFF]">
                          Tier {activeLevel.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {levelData.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                          Key Concepts &amp; Architecture:
                        </span>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {levelData.topicsCovered.map((item, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-2 p-2 rounded-xl bg-white border border-[#C9DFFF]/70 text-xs text-slate-800 font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Visual Architecture Diagram */}
                    {(() => {
                      const topicDiagramMap = {
                        python: 'fastapi-backend',
                        ml: 'neural-network',
                        dl: 'neural-network',
                        langgraph: 'langgraph-cycle',
                        rag: 'rag-architecture',
                        fastapi: 'fastapi-backend',
                        n8n: 'n8n-workflow',
                        scraping: 'web-scraping'
                      };
                      const diagType = topicDiagramMap[selectedTopic.id];
                      if (!diagType) return null;

                      return (
                        <div className="space-y-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                            Visual Architecture &amp; Execution Schematic:
                          </span>
                          <VisualDiagramRenderer diagramType={diagType} title={selectedTopic.title} />
                        </div>
                      );
                    })()}

                    {/* Code Snippet Playground */}
                    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 text-slate-200 font-mono text-xs shadow-xl">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-[11px] text-slate-400 font-bold ml-1">
                            {selectedTopic.id}_{activeLevel}_example.py
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopyCode(levelData.codeSnippet)}
                          className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md transition-colors"
                        >
                          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300 font-mono max-h-[220px]">
                        <code>{levelData.codeSnippet}</code>
                      </pre>
                    </div>

                    {/* How Usama Uses This in Production */}
                    <div className="p-4 rounded-2xl bg-[#EAF3FF] border border-[#C9DFFF] flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#0878FE] shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-700">
                        <strong className="text-[#111827] block mb-0.5">How Usama Applies This For Clients:</strong>
                        <span>{selectedTopic.businessImpact}</span>
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>

            {/* Modal Footer with Direct Build CTA */}
            <div className="p-5 sm:p-6 border-t border-[#C9DFFF] bg-[#F8FAFE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                Need a custom system built with <strong>{selectedTopic.title}</strong>?
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCloseTopic}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-white border border-[#C9DFFF] hover:bg-slate-50 transition-all flex-1 sm:flex-initial"
                >
                  Close Guide
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleCloseTopic();
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow transition-all flex items-center justify-center gap-1.5 flex-1 sm:flex-initial"
                >
                  <span>Build This System With Usama</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
