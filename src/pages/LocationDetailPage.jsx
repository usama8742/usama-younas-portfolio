import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { LOCATION_PAGES, SERVICE_PAGES, SITE_INFO } from '../data/seoContentData';
import { 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle, 
  Globe2,
  PhoneCall
} from 'lucide-react';

export default function LocationDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const location = LOCATION_PAGES.find(l => l.slug === slug);

  if (!location) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Location Page Not Found</h1>
        <p className="text-slate-400 mb-6">The requested location route does not exist.</p>
        <Link to="/locations" className="btn-primary">View All Locations</Link>
      </div>
    );
  }

  const canonicalUrl = `/locations/${location.slug}`;

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
        "name": "Locations",
        "item": `${SITE_INFO.url}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": location.h1,
        "item": `${SITE_INFO.url}${canonicalUrl}`
      }
    ]
  };

  // Service schema for location
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": location.h1,
    "provider": {
      "@type": "Organization",
      "name": SITE_INFO.name,
      "url": SITE_INFO.url
    },
    "areaServed": location.locationName,
    "description": location.description
  };

  // FAQ Schema
  const faqSchema = location.faqs && location.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      serviceSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  return (
    <>
      <SEOHead
        title={location.title}
        description={location.description}
        keywords={location.keywords}
        canonicalUrl={canonicalUrl}
        schemaData={combinedSchema}
      />

      <article className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/locations" className="hover:text-cyan-400 transition-colors">Locations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 truncate max-w-xs">{location.locationName}</span>
          </nav>

          <header className="bg-[#070C18]/90 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Regional AI Hub · {location.locationName}</span>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                  {location.h1}
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {location.summary}
                </p>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/', { state: { scrollToContact: true } });
                  }}
                  className="btn-primary w-full lg:w-auto justify-center"
                >
                  <span>Book {location.locationName} AI Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 space-y-16">
              
              {/* Regional Insights (H2 & H3) */}
              <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-400" />
                  <span>Tailored AI Automation for Businesses in {location.locationName}</span>
                </h2>
                <div className="grid gap-4">
                  {location.localInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {location.faqs && (
                <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                    <span>Location FAQs</span>
                  </h2>
                  <div className="space-y-6">
                    {location.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                        <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                          <span className="text-cyan-400 font-mono">Q.</span>
                          <span>{faq.q}</span>
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed pl-6 font-normal">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-900/60 via-cyan-900/40 to-[#070C18] border border-cyan-400/30 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Transform Your Business in {location.locationName}</h3>
                  <p className="text-xs sm:text-sm text-slate-300">Schedule a free workflow audit with 3X AI Automation.</p>
                </div>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/', { state: { scrollToContact: true } });
                  }}
                  className="btn-primary shrink-0"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            <aside className="lg:col-span-4 space-y-8">
              
              <div className="bg-[#070C18] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4">
                  Core Services Available
                </h3>
                <ul className="space-y-2.5">
                  {SERVICE_PAGES.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        to={`/${svc.slug}`}
                        className="text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span>{svc.h1}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#070C18] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Other Target Markets
                </h3>
                <div className="space-y-2">
                  {LOCATION_PAGES.filter(l => l.slug !== location.slug).map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/locations/${loc.slug}`}
                      className="text-xs text-slate-400 hover:text-cyan-300 block py-1"
                    >
                      ✦ {loc.h1}
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>

        </div>
      </article>
    </>
  );
}
