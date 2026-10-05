import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { INDUSTRY_PAGES, SITE_INFO } from '../data/seoContentData';
import { 
  Building2, 
  Stethoscope, 
  Scale, 
  Utensils, 
  Megaphone,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const ICON_MAP = {
  Building2: Building2,
  Stethoscope: Stethoscope,
  Scale: Scale,
  Utensils: Utensils,
  Megaphone: Megaphone,
};

export default function IndustriesIndexPage() {
  const title = "AI Automation Industry Solutions | 3X AI Automation";
  const description = "Tailored AI automation systems for Real Estate, Healthcare, Law Firms, Restaurants, Marketing Agencies, and SMBs.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "3X AI Automation Industry Solutions",
    "itemListElement": INDUSTRY_PAGES.map((ind, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": ind.h1,
      "url": `${SITE_INFO.url}/industries/${ind.slug}`
    }))
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords="AI automation real estate, AI healthcare automation, AI law firm automation, restaurant AI, agency AI"
        canonicalUrl="/industries"
        schemaData={schema}
      />

      <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300">Industries</span>
          </nav>

          <header className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Targeted Sector Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              AI Automation for <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">High-Value Industries</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal">
              Select your industry to explore practical, domain-specific AI automation solutions and custom workflow blueprints.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_PAGES.map((ind) => {
              const IconComp = ICON_MAP[ind.icon] || Building2;
              return (
                <div key={ind.slug} className="bg-[#070C18] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300 group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {ind.h1}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-6">
                      {ind.summary}
                    </p>
                  </div>

                  <div>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Industry Workflows</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
