import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, ArrowUp, Sparkles, MapPin, Building2, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks = [
    { label: 'AI Automation', path: '/ai-automation' },
    { label: 'AI Agents & Multi-Agent Swarms', path: '/ai-agents' },
    { label: 'n8n Workflow Automation', path: '/n8n-automation' },
    { label: 'AI Chatbots & WhatsApp', path: '/ai-chatbots' },
    { label: 'AI Voice Agents & Phone Booking', path: '/ai-voice-agents' },
    { label: 'CRM Automation (HubSpot, GoHighLevel)', path: '/crm-automation' },
    { label: 'Lead Generation & Qualification', path: '/lead-generation' },
    { label: 'API Integrations & Webhooks', path: '/api-integrations' },
    { label: 'Website Design & Development', path: '/web-design' },
  ];

  const industryLinks = [
    { label: 'Real Estate AI', path: '/industries/real-estate' },
    { label: 'Healthcare & Dental', path: '/industries/healthcare' },
    { label: 'Law Firms & Legal', path: '/industries/law-firms' },
    { label: 'Restaurants & Hospitality', path: '/industries/restaurants' },
    { label: 'Marketing Agencies', path: '/industries/marketing-agencies' },
  ];

  const locationLinks = [
    { label: 'AI Automation Dubai', path: '/locations/dubai' },
    { label: 'AI Automation UAE', path: '/locations/uae' },
    { label: 'AI Automation Pakistan', path: '/locations/pakistan' },
  ];

  return (
    <footer className="bg-[#030712] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link 
              to="/" 
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            >
              <Logo dark={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal pt-2">
              3X AI Automation designs, engineers, and deploys autonomous AI agents, enterprise n8n workflows, and intelligent business pipelines that eliminate manual drudgery.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Systems Operational 24/7
              </span>
              <span className="text-xs font-mono text-slate-500">
                v2.5 Lab Edition
              </span>
            </div>
          </div>

          {/* Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Services</span>
            </h5>
            <ul className="space-y-2">
              {serviceLinks.map((svc) => (
                <li key={svc.path}>
                  <Link
                    to={svc.path}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-cyan-500/40 group-hover:text-cyan-400 font-mono text-[10px] transition-colors">›</span>
                    <span>{svc.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Industry Solutions</span>
              </h5>
              <ul className="space-y-2">
                {industryLinks.map((ind) => (
                  <li key={ind.path}>
                    <Link
                      to={ind.path}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="text-cyan-500/40 group-hover:text-cyan-400 font-mono text-[10px]">›</span>
                      <span>{ind.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Target Locations</span>
              </h5>
              <ul className="space-y-2">
                {locationLinks.map((loc) => (
                  <li key={loc.path}>
                    <Link
                      to={loc.path}
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="text-cyan-500/40 group-hover:text-cyan-400 font-mono text-[10px]">›</span>
                      <span>{loc.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Knowledge</span>
              </h5>
              <Link to="/blog" className="text-xs text-cyan-300 hover:underline block mb-4">
                Explore Blog & Articles →
              </Link>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Direct Contact
              </h5>
              <a
                href="mailto:contactbyusama@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-cyan-300 font-mono transition-colors group mb-3 block truncate"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">contactbyusama@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/3xaiautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/usama8742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/usama8742/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 3X AI Automation. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-slate-400">Founded by Usama Younas</span>
            <span>·</span>
            <span className="text-cyan-400">Autonomous Business Intelligence</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
