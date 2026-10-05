import React from 'react';
import Logo from './Logo';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#191919] text-white pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE330A] rounded-lg"
            >
              <Logo dark={true} />
            </a>

            <div className="pt-2">
              <h4 className="text-base font-bold text-white">Usama Younas</h4>
              <p className="text-xs text-[#FE330A] font-semibold mt-0.5">
                AI Engineer · Automation Specialist
              </p>
              <p className="text-sm text-slate-400 mt-2 max-w-sm leading-relaxed font-normal">
                "Building intelligent systems for modern businesses."
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Navigation
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-slate-300 hover:text-[#FE330A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE330A] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Direct Channels (3 cols) */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-4">
              Connect With Me
            </h5>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.instagram.com/3xaiautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
                title="Follow @3xaiautomation on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/usama8742"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#FE330A] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/usama8742/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#FE330A] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:contactbyusama@gmail.com"
                className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-[#FE330A] flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-[#FE330A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Usama Younas. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono text-[11px]">
            <span>3X AI Automation</span>
            <span>·</span>
            <span className="text-[#FE330A]">Intelligent Systems</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
