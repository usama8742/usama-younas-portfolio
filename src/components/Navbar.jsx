import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'solutions', 'process', 'about', 'knowledge-hub', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          ? 'bg-[#070C18]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.6)] border-b border-white/10' 
          : 'bg-[#030712]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on Left */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group"
            aria-label="3X AI Automation Home"
          >
            <Logo dark={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5 hover:border hover:border-white/10'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Group: Instagram + CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Instagram Profile Link */}
            <a
              href="https://www.instagram.com/3xaiautomation/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all group duration-300 bg-white/5 text-slate-300 border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-white/10"
              title="Follow @3xaiautomation on Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
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
              className="btn-primary !py-2.5 !px-5 text-xs uppercase tracking-wider font-bold !rounded-full shadow-glow-cyan"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
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
        <div className="lg:hidden border-b border-white/10 bg-[#070C18]/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 font-semibold border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/3xaiautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-cyan-400" />
                <span>Follow @3xaiautomation on Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, '#contact');
                }}
                className="btn-primary w-full justify-center !py-3 text-xs uppercase tracking-wider"
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
