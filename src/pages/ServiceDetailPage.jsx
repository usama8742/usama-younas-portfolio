import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { SERVICE_PAGES, SITE_INFO } from '../data/seoContentData';
import { 
  Bot, 
  Workflow, 
  Layers, 
  MessageSquareCode, 
  Mic, 
  Database, 
  CheckCheck, 
  Network, 
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Building2,
  PhoneCall,
  Zap,
  ArrowLeft
} from 'lucide-react';

const ICON_MAP = {
  Bot: Bot,
  Workflow: Workflow,
  Layers: Layers,
  MessageSquareCode: MessageSquareCode,
  Mic: Mic,
  Database: Database,
  FilterCheck: CheckCheck,
  Network: Network,
  Globe: Globe,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICE_PAGES.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <h1 className="text-3xl font-bold mb-4">Service Page Not Found</h1>
        <p className="text-slate-400 mb-6">The requested service route does not exist.</p>
        <Link to="/services" className="btn-primary">View All Services</Link>
      </div>
    );
  }

  const IconComponent = ICON_MAP[service.icon] || Bot;
  const canonicalUrl = `/${service.slug}`;

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
        "name": "Services",
        "item": `${SITE_INFO.url}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.h1,
        "item": `${SITE_INFO.url}/${service.slug}`
      }
    ]
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "provider": {
      "@type": "Organization",
      "name": SITE_INFO.name,
      "url": SITE_INFO.url
    },
    "description": service.description,
    "areaServed": ["Dubai", "UAE", "Pakistan", "International"],
    "serviceType": service.h1
  };

  // FAQ Schema if visible FAQs exist
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
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

  const otherServices = SERVICE_PAGES.filter(s => s.slug !== service.slug);

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.description}
        keywords={service.keywords}
        canonicalUrl={canonicalUrl}
        schemaData={combinedSchema}
      />

      <article className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-20 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 truncate max-w-xs">{service.h1}</span>
          </nav>

          {/* Hero Header Card */}
          <header className="bg-[#070C18]/90 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 backdrop-blur-xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>3X AI Automation Capability</span>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 shrink-0">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  {/* Single H1 element */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                    {service.h1}
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mt-4">
                  {service.summary}
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
                  <span>Request Custom Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </header>

          {/* Grid Layout: Main Copy vs Sidebar */}
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Section 1: Key Benefits (H2) */}
              <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>Key Business Benefits</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2: Real-World Use Cases (H2) */}
              <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-cyan-400" />
                  <span>Practical Use Cases & Workflow Pipelines</span>
                </h2>
                <ul className="space-y-4">
                  {service.useCases.map((useCase, idx) => (
                    <li key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-cyan-500/10 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/20">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base text-slate-200">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Section 3: Target Industries Served (H2 & H3) */}
              <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span>Industries Served</span>
                </h2>
                <p className="text-sm text-slate-300 mb-6">
                  Our {service.h1} solutions are customized to handle domain-specific workflows and compliance standards.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {service.industriesServed.map((ind, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-semibold">
                      ✦ {ind}
                    </span>
                  ))}
                </div>
              </section>

              {/* Section 4: Frequently Asked Questions (H2) */}
              {service.faqs && service.faqs.length > 0 && (
                <section className="bg-[#0B1325]/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-400" />
                    <span>Frequently Asked Questions</span>
                  </h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, idx) => (
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

              {/* Internal CTA Banner */}
              <div className="bg-gradient-to-r from-blue-900/60 via-cyan-900/40 to-[#070C18] border border-cyan-400/30 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to automate your operations?</h3>
                  <p className="text-xs sm:text-sm text-slate-300">Book a free consultation with 3X AI Automation to build your workflow blueprint.</p>
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

            {/* Sidebar: Related Services & Internal Links (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Quick Contact Box */}
              <div className="bg-[#070C18] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>Have Questions?</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Talk directly with Usama Younas, AI Automation Engineer at 3X AI Automation.
                </p>
                <a 
                  href="mailto:contactbyusama@gmail.com" 
                  className="text-xs font-mono text-cyan-300 hover:underline block truncate mb-4"
                >
                  contactbyusama@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/3xaiautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-pink-500/40 transition-colors"
                >
                  <span>Follow @3xaiautomation</span>
                </a>
              </div>

              {/* Related Services Links */}
              <div className="bg-[#070C18] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4">
                  Explore Other Services
                </h3>
                <ul className="space-y-2.5">
                  {otherServices.map((otherSvc) => {
                    const OtherIcon = ICON_MAP[otherSvc.icon] || Bot;
                    return (
                      <li key={otherSvc.slug}>
                        <Link
                          to={`/${otherSvc.slug}`}
                          className="text-xs text-slate-300 hover:text-cyan-300 flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <span className="flex items-center gap-2">
                            <OtherIcon className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{otherSvc.h1}</span>
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Industry Solutions Navigation */}
              <div className="bg-[#070C18] border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
                  Industry Automation
                </h3>
                <div className="space-y-2">
                  <Link to="/industries/real-estate" className="text-xs text-slate-400 hover:text-cyan-300 block py-1">✦ Real Estate AI</Link>
                  <Link to="/industries/healthcare" className="text-xs text-slate-400 hover:text-cyan-300 block py-1">✦ Healthcare & Dental</Link>
                  <Link to="/industries/law-firms" className="text-xs text-slate-400 hover:text-cyan-300 block py-1">✦ Law Firms & Legal</Link>
                  <Link to="/industries/restaurants" className="text-xs text-slate-400 hover:text-cyan-300 block py-1">✦ Restaurant Automation</Link>
                  <Link to="/industries/marketing-agencies" className="text-xs text-slate-400 hover:text-cyan-300 block py-1">✦ Marketing Agencies</Link>
                </div>
              </div>

            </aside>

          </div>

        </div>
      </article>
    </>
  );
}
