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

      const sections = ['home', 'about', 'services', 'automation', 'projects', 'how-it-works', 'contact'];
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
    { label: 'AI Agents', href: '#ai-agents-suite', id: 'ai-agents-suite' },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { label: 'Knowledge Hub', href: '#knowledge-hub', id: 'knowledge-hub' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'ROI Calculator', href: '#roi-calculator', id: 'roi-calculator' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#C9DFFF]' 
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on Left (Clean Light Mode) */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878FE] rounded-lg"
            aria-label="3X AI Automation Home"
          >
            <Logo dark={false} />
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
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'text-[#0878FE] bg-[#EAF3FF] font-semibold' 
                      : 'text-[#111827] hover:text-[#0878FE] hover:bg-[#F8FAFE]'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878FE]`}
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
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all group duration-300 bg-white text-[#111827] border-[#C9DFFF] hover:border-[#0878FE] hover:bg-[#F8FAFE] hover:shadow-sm"
              title="Follow @3xaiautomation on Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4 text-[#dc2743] group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>

            {/* Let's Talk CTA */}
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
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878FE] focus-visible:ring-offset-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#111827] hover:text-[#0878FE] bg-white border border-[#C9DFFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878FE]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#C9DFFF] bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#0878FE] bg-[#EAF3FF] font-semibold'
                      : 'text-[#111827] hover:text-[#0878FE] hover:bg-[#F8FAFE]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col gap-2">
              <a
                href="https://www.instagram.com/3xaiautomation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-[#111827] bg-[#F8FAFE] border border-[#C9DFFF] hover:border-[#0878FE] transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#dc2743]" />
                <span>Follow @3xaiautomation on Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, '#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] shadow-md hover:shadow-glow transition-all"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
