import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import LiveSystemStatus from './components/LiveSystemStatus';
import AuroraGlow from './components/AuroraGlow';
import ScrollProgress from './components/ScrollProgress';

// Pages
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesIndexPage from './pages/IndustriesIndexPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import LocationsIndexPage from './pages/LocationsIndexPage';
import LocationDetailPage from './pages/LocationDetailPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogArticlePage from './pages/BlogArticlePage';
import NotFoundPage from './pages/NotFoundPage';

// Helper component to handle scroll position on route change
function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollToContact || state?.scrollTo) {
      const targetId = state.scrollToContact ? 'contact' : state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return null;
}

function AppContent() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [contactGoal, setContactGoal] = useState('');

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024 && !window.matchMedia('(hover: none)').matches);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e) => {
      if (isDesktop) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDesktop]);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAutomateFromCalculator = (calcData) => {
    setContactGoal(
      `Automate manual workflow for ${calcData.teamSize} team members (~${calcData.hoursPerWeek} hrs/wk each) to reclaim an estimated $${calcData.annualSavings.toLocaleString()}/year`
    );
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-[#191919] selection:bg-[#FE330A] selection:text-white transition-colors duration-300 ease-out font-sans overflow-x-hidden">
      <ScrollToTop />
      
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Dynamic Ambient Aurora Glow */}
      <AuroraGlow />

      {/* Interactive Ambient Particle Constellation */}
      <ParticleCanvas />

      {/* Desktop Spotlight Cursor Glow */}
      {isDesktop && (
        <div 
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-transform duration-75 ease-out opacity-20"
          style={{
            transform: `translate3d(${cursorPos.x - 192}px, ${cursorPos.y - 192}px, 0)`,
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(8, 120, 254, 0.05) 50%, transparent 70%)',
          }}
        />
      )}

      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Routes */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              onOpenContact={handleOpenContact} 
              onAutomateFromCalculator={handleAutomateFromCalculator}
              contactGoal={contactGoal}
            />
          } 
        />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesIndexPage />} />
        <Route path="/:slug" element={<ServiceDetailPage />} />

        {/* Industries Routes */}
        <Route path="/industries" element={<IndustriesIndexPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />

        {/* Locations Routes */}
        <Route path="/locations" element={<LocationsIndexPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />

        {/* Blog Routes */}
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />

        {/* 404 Handler */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Live Status Pill & Modal */}
      <LiveSystemStatus />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
