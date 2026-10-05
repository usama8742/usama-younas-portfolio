import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { BLOG_ARTICLES, SERVICE_PAGES, SITE_INFO } from '../data/seoContentData';
import { 
  BookOpen, 
  Clock, 
  Tag, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  ArrowLeft,
  Share2,
  CheckCircle2
} from 'lucide-react';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = BLOG_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-slate-400 mb-6">The requested blog post does not exist.</p>
        <Link to="/blog" className="btn-primary">View All Blog Posts</Link>
      </div>
    );
  }

  const canonicalUrl = `/blog/${article.slug}`;

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.h1,
    "description": article.description,
    "author": {
      "@type": "Person",
      "name": SITE_INFO.founder,
      "url": SITE_INFO.url
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_INFO.name,
      "logo": `${SITE_INFO.url}/3x-logo.svg`
    },
    "datePublished": "2026-10-01",
    "mainEntityOfPage": `${SITE_INFO.url}${canonicalUrl}`
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_INFO.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_INFO.url}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.h1,
        "item": `${SITE_INFO.url}${canonicalUrl}`
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, breadcrumbSchema]
  };

  const otherArticles = BLOG_ARTICLES.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        canonicalUrl={canonicalUrl}
        schemaData={combinedSchema}
      />

      <article className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 truncate max-w-xs">{article.category}</span>
          </nav>

          <header className="mb-12 border-b border-white/10 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                {article.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span>·</span>
              <span>Published by {SITE_INFO.founder}</span>
            </div>

            {/* Single H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              {article.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal bg-[#070C18] border border-white/10 p-6 rounded-2xl">
              {article.excerpt}
            </p>
          </header>

          {/* Body Article Content */}
          <div className="prose prose-invert max-w-none space-y-10 text-slate-200 leading-relaxed font-normal">
            {article.contentSections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-white tracking-tight pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono">#</span>
                  <span>{sec.h2}</span>
                </h2>
                <div className="text-sm sm:text-base text-slate-300 whitespace-pre-line leading-relaxed">
                  {sec.p}
                </div>
              </section>
            ))}
          </div>

          {/* Contextual Internal Link Banner to Relevant Services */}
          <div className="my-12 p-8 rounded-3xl bg-[#070C18] border border-cyan-400/30">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Implement This in Your Business</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
              3X AI Automation designs, builds, and deploys custom AI agents, n8n workflow pipelines, and CRM systems for high-growth companies.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/ai-automation" className="btn-primary text-xs">
                <span>Explore AI Automation Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/n8n-automation" className="btn-secondary text-xs">
                <span>n8n Services</span>
              </Link>
              <Link to="/ai-agents" className="btn-secondary text-xs">
                <span>AI Agents</span>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {otherArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Related Articles & Guides</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {otherArticles.map((rel) => (
                  <div key={rel.slug} className="bg-[#070C18] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/50 transition-colors">
                    <span className="text-[10px] font-mono text-cyan-400 block mb-2">{rel.category}</span>
                    <h4 className="text-sm font-bold text-white mb-2 line-clamp-2">
                      <Link to={`/blog/${rel.slug}`} className="hover:text-cyan-300 transition-colors">
                        {rel.h1}
                      </Link>
                    </h4>
                    <Link to={`/blog/${rel.slug}`} className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1 mt-2">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    </>
  );
}
