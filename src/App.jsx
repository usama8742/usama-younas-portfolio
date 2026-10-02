import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AiAgentsShowcase from './components/AiAgentsShowcase';
import AutomationCompare from './components/AutomationCompare';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Process from './components/Process';
import InteractiveSandbox from './components/InteractiveSandbox';
import RoiCalculator from './components/RoiCalculator';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import LiveSystemStatus from './components/LiveSystemStatus';
import AuroraGlow from './components/AuroraGlow';
import MotionReveal from './components/MotionReveal';

function AppContent() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [contactGoal, setContactGoal] = useState('');

  useEffect(() => {
    // Only enable cursor glow on non-touch desktop screens
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
    <div className="relative min-h-screen bg-white text-[#111827] selection:bg-[#0878FE] selection:text-white transition-colors duration-300 ease-out">
      {/* Dynamic Ambient Aurora Motion Glow */}
      <AuroraGlow />

      {/* Interactive Ambient Particle Constellation Canvas */}
      <ParticleCanvas />

      {/* Desktop Spotlight Cursor Glow */}
      {isDesktop && (
        <div 
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-transform duration-75 ease-out opacity-30"
          style={{
            transform: `translate3d(${cursorPos.x - 192}px, ${cursorPos.y - 192}px, 0)`,
            background: 'radial-gradient(circle, rgba(8, 120, 254, 0.16) 0%, rgba(2, 85, 253, 0.04) 50%, transparent 70%)',
          }}
        />
      )}

      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections with Motion Reveals */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. About Section */}
        <MotionReveal direction="up" distance={35}>
          <About />
        </MotionReveal>

        {/* 3. Services Section */}
        <MotionReveal direction="up" distance={40}>
          <Services />
        </MotionReveal>

        {/* 3.1 AI Agents Showcase (Phone, SMS, Webchat) */}
        <MotionReveal direction="up" distance={40}>
          <AiAgentsShowcase onOpenContact={handleOpenContact} />
        </MotionReveal>

        {/* 4. Automation Section (Before & After Comparison) */}
        <MotionReveal direction="up" distance={40}>
          <AutomationCompare />
        </MotionReveal>

        {/* 5. Projects Section (6 Production Systems with Real Mockups) */}
        <MotionReveal direction="up" distance={40}>
          <Projects />
        </MotionReveal>

        {/* 6. Case Study Section (Real Estate Lead Automation Blueprint) */}
        <MotionReveal direction="up" distance={40}>
          <CaseStudy />
        </MotionReveal>

        {/* 7. Technology Stack Section (Master Architecture Blueprint & Interactive Inspector) */}
        <MotionReveal direction="up" distance={40}>
          <TechStack />
        </MotionReveal>

        {/* 8. Industries Section (6 Visual Industry Deployments) */}
        <MotionReveal direction="up" distance={40}>
          <Industries />
        </MotionReveal>

        {/* 9. Interactive Business ROI & Automation Savings Calculator */}
        <MotionReveal direction="up" distance={40}>
          <RoiCalculator onAutomate={handleAutomateFromCalculator} />
        </MotionReveal>

        {/* 10. Why Work With Me Section */}
        <MotionReveal direction="up" distance={40}>
          <WhyWorkWithMe />
        </MotionReveal>

        {/* 11. Process Section (From Idea to Automation) */}
        <MotionReveal direction="up" distance={40}>
          <Process />
        </MotionReveal>

        {/* 12. Interactive Live Sandbox */}
        <MotionReveal direction="up" distance={40}>
          <InteractiveSandbox />
        </MotionReveal>

        {/* 13. Final CTA Section */}
        <MotionReveal direction="up" distance={40}>
          <FinalCTA onOpenContact={handleOpenContact} />
        </MotionReveal>

        {/* 14. Contact Section */}
        <MotionReveal direction="up" distance={40}>
          <Contact prefillGoal={contactGoal} />
        </MotionReveal>
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating Live System Telemetry Status Pill & Diagnostic Modal */}
      <LiveSystemStatus />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
