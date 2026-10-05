import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BLOG_ARTICLES, SITE_INFO } from '../data/seoContentData';
import { BookOpen, Sparkles, ArrowRight, ChevronRight, Clock, Tag } from 'lucide-react';

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const title = "AI Automation Blog & Insights | 3X AI Automation";
  const description = "Practical guides, technical deep dives, and business automation strategies covering AI agents, n8n, CRM automation, and voice AI.";

  const categories = ['All', ...new Set(BLOG_ARTICLES.map(a => a.category))];

  const filteredArticles = selectedCategory === 'All' 
    ? BLOG_ARTICLES 
    : BLOG_ARTICLES.filter(a => a.category === selectedCategory);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "3X AI Automation Blog",
    "description": description,
    "url": `${SITE_INFO.url}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": SITE_INFO.name
    },
    "blogPost": BLOG_ARTICLES.map(article => ({
      "@type": "BlogPosting",
      "headline": article.h1,
      "description": article.description,
      "url": `${SITE_INFO.url}/blog/${article.slug}`,
      "datePublished": "2026-10-01"
    }))
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords="AI automation blog, business process automation guide, n8n tutorials, AI chatbot guides"
        canonicalUrl="/blog"
        schemaData={schema}
      />

      <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300">Blog & Knowledge Hub</span>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>Automation Knowledge Hub</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              AI Automation <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">Articles & Blueprints</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Actionable, technical, and strategic guides to help you automate lead generation, CRM, workflows, and customer engagement.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-[#030712] shadow-glow-cyan'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.slug} className="bg-[#070C18] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                    <span className="inline-flex items-center gap-1 text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.h1}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">{article.date}</span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
