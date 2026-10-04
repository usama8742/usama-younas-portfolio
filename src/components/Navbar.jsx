import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'solutions', 'process', 'knowledge-hub', 'about', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Solutions', href: '#solutions', id: 'solutions' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Knowledge Hub', href: '#knowledge-hub', id: 'knowledge-hub' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070C18]/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] border-b border-white/[0.08]' 
          : 'bg-[#070C18]/60 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          
          {/* Logo on Left */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group shrink-0"
            aria-label="3X AI Automation Home"
          >
            <Logo dark={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-[13px] font-medium whitespace-nowrap transition-all duration-200 border ${
                    isActive 
                      ? 'text-cyan-300 bg-white/[0.08] border-cyan-400/25 shadow-[0_0_12px_rgba(6,182,212,0.15)] font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05] border-transparent'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Group: Instagram + CTA Button */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/3xaiautomation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all group duration-300 bg-white/[0.04] text-slate-300 border-white/10 hover:border-pink-500/40 hover:text-white hover:bg-white/[0.08]"
              title="Follow @3xaiautomation on Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform shrink-0" />
              <span className="hidden xl:inline">Instagram</span>
            </a>

            {/* Primary Action Button - Modern Blue/Cyan Gradient with subtle glow */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                } else {
                  handleNavClick(e, '#contact');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 shadow-[0_0_18px_rgba(6,182,212,0.3)] hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
            </a>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Glass Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070C18]/95 backdrop-blur-2xl px-5 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-white/[0.08] font-semibold border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-2.5 border-t border-white/10 mt-2">
              <a
                href="https://www.instagram.com/3xaiautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-slate-300 bg-white/5 border border-white/10 hover:border-pink-500/40 hover:text-white transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Follow @3xaiautomation on Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) {
                    e.preventDefault();
                    onOpenContact();
                  } else {
                    handleNavClick(e, '#contact');
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 shadow-glow-cyan"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
