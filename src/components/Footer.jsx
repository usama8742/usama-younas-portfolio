import React from 'react';
import Logo from './Logo';
import { Mail, ArrowUp, Sparkles, Shield, Send, PhoneCall, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#process' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    { label: 'AI Agents & Multi-Agent Swarms', href: '#services' },
    { label: 'n8n Workflow Automation', href: '#services' },
    { label: 'Lead Generation Systems', href: '#services' },
    { label: 'CRM Automation (HubSpot, GoHighLevel)', href: '#services' },
    { label: 'AI Chatbots (RAG & Tool Calling)', href: '#services' },
    { label: 'AI Voice Agents (Twilio + ElevenLabs)', href: '#services' },
    { label: 'Custom API Integrations', href: '#services' },
    { label: 'High-Performance Web Development', href: '#services' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030712] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            >
              <Logo dark={true} />
            </a>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-normal pt-2">
              3X AI Automation designs, engineers, and deploys autonomous AI agents, enterprise workflows, and intelligent business pipelines that eliminate manual drudgery.
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

          {/* Core Services (4 cols) */}
          <div className="lg:col-span-4">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Automation Services</span>
            </h5>
            <ul className="space-y-2">
              {servicesList.map((svc) => (
                <li key={svc.label}>
                  <a
                    href={svc.href}
                    onClick={(e) => handleNavClick(e, svc.href)}
                    className="text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-cyan-500/40 group-hover:text-cyan-400 font-mono text-[10px] transition-colors">›</span>
                    <span>{svc.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Direct Contact
              </h5>
              <a
                href="mailto:contactbyusama@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-cyan-300 font-mono transition-colors group mb-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">contactbyusama@gmail.com</span>
              </a>
              <p className="text-xs text-slate-500">
                Inquiries answered within 2 hours.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Official Channels
              </h5>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/3xaiautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent flex items-center justify-center transition-all shadow-sm"
                  aria-label="Instagram"
                  title="Follow @3xaiautomation on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/usama8742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 flex items-center justify-center transition-all"
                  aria-label="GitHub"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/usama8742/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-transparent flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contactbyusama@gmail.com"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-cyan-500 hover:text-[#030712] hover:border-transparent flex items-center justify-center transition-all"
                  aria-label="Email Us"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
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
