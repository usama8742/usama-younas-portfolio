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

  const primaryNavLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'AI Agents', href: '#ai-agents-suite', id: 'ai-agents-suite' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { label: 'ROI Calculator', href: '#roi-calculator', id: 'roi-calculator' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const allNavLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'AI Platform', href: '#ai-platform', id: 'ai-platform' },
    { label: 'AI Course', href: '#ai-academy', id: 'ai-academy' },
    { label: 'AI Agents', href: '#ai-agents-suite', id: 'ai-agents-suite' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Tech Stack', href: '#tech-stack', id: 'tech-stack' },
    { label: 'Knowledge Hub', href: '#knowledge-hub', id: 'knowledge-hub' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DBD6CF]' 
          : 'bg-white/90 backdrop-blur-sm border-b border-[#DBD6CF]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo on Left (Clean Light Mode) */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE330A] rounded-lg shrink-0"
            aria-label="3X AI Automation Home"
          >
            <Logo dark={false} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5" aria-label="Primary Navigation">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-[50px] text-xs xl:text-sm font-bold transition-all whitespace-nowrap ${
                    isActive 
                      ? 'text-white bg-[#191919] shadow-sm' 
                      : 'text-[#191919] hover:text-[#FE330A] hover:bg-[#EFEAE3]'
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE330A]`}
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-[50px] border text-xs font-bold transition-all group duration-300 bg-white text-[#191919] border-[#DBD6CF] hover:border-[#FE330A] hover:text-[#FE330A] shadow-sm whitespace-nowrap"
              title="Follow @3xaiautomation on Instagram"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#FE330A] group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline">Instagram</span>
            </a>

            {/* Let's Talk CTA - Azzle Signature Pill Button */}
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
              className="inline-flex items-center justify-center gap-1.5 px-5 xl:px-6 py-2.5 rounded-[50px] border-2 border-black bg-black text-white hover:bg-[#FE330A] hover:border-[#FE330A] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-sm whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-[50px] text-[#191919] hover:text-[#FE330A] bg-white border border-[#DBD6CF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FE330A]"
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
        <div className="lg:hidden border-b border-[#DBD6CF] bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {allNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'text-[#FE330A] bg-[#EFEAE3]'
                      : 'text-[#191919] hover:text-[#FE330A] hover:bg-[#EFEAE3]'
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
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-xs text-[#191919] bg-[#EFEAE3] border border-[#DBD6CF] hover:border-[#FE330A] transition-all"
              >
                <InstagramIcon className="w-4 h-4 text-[#FE330A]" />
                <span>Follow @3xaiautomation on Instagram</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, '#contact');
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-black hover:bg-[#FE330A] transition-all shadow-md"
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
