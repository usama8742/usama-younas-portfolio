import React from 'react';
import SEOHead from '../components/SEOHead';
import { HOMEPAGE_SEO } from '../data/seoContentData';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AiPlatformPillars from '../components/AiPlatformPillars';
import AiCourseAcademy from '../components/AiCourseAcademy';
import AiAgentsShowcase from '../components/AiAgentsShowcase';
import AutomationCompare from '../components/AutomationCompare';
import Projects from '../components/Projects';
import CaseStudy from '../components/CaseStudy';
import TechStack from '../components/TechStack';
import KnowledgeHub from '../components/KnowledgeHub';
import Industries from '../components/Industries';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import Process from '../components/Process';
import InteractiveSandbox from '../components/InteractiveSandbox';
import RoiCalculator from '../components/RoiCalculator';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import MotionReveal from '../components/MotionReveal';

export default function HomePage({ onOpenContact, onAutomateFromCalculator, contactGoal }) {
  return (
    <>
      <SEOHead
        title={HOMEPAGE_SEO.title}
        description={HOMEPAGE_SEO.description}
        keywords={HOMEPAGE_SEO.keywords}
        canonicalUrl="/"
        schemaData={HOMEPAGE_SEO.schema}
      />

      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenContact={onOpenContact} />

        {/* 2. About Section */}
        <MotionReveal direction="up" distance={35}>
          <About />
        </MotionReveal>

        {/* 3. Services Section */}
        <MotionReveal direction="up" distance={40}>
          <Services />
        </MotionReveal>

        {/* 3.1 AI Platform Architecture */}
        <MotionReveal direction="up" distance={40}>
          <AiPlatformPillars onOpenContact={onOpenContact} />
        </MotionReveal>

        {/* 3.2 AI Masterclass Academy */}
        <MotionReveal direction="up" distance={40}>
          <AiCourseAcademy onOpenContact={onOpenContact} />
        </MotionReveal>

        {/* 3.3 AI Agents Showcase */}
        <MotionReveal direction="up" distance={40}>
          <AiAgentsShowcase onOpenContact={onOpenContact} />
        </MotionReveal>

        {/* 4. Automation Section */}
        <MotionReveal direction="up" distance={40}>
          <AutomationCompare />
        </MotionReveal>

        {/* 5. Projects Section */}
        <MotionReveal direction="up" distance={40}>
          <Projects />
        </MotionReveal>

        {/* 6. Case Study Section */}
        <MotionReveal direction="up" distance={40}>
          <CaseStudy />
        </MotionReveal>

        {/* 7. Technology Stack Section */}
        <MotionReveal direction="up" distance={40}>
          <TechStack />
        </MotionReveal>

        {/* 7.1 Interactive Knowledge Hub */}
        <MotionReveal direction="up" distance={40}>
          <KnowledgeHub onOpenContact={onOpenContact} />
        </MotionReveal>

        {/* 8. Industries Section */}
        <MotionReveal direction="up" distance={40}>
          <Industries />
        </MotionReveal>

        {/* 9. Interactive Business ROI Calculator */}
        <MotionReveal direction="up" distance={40}>
          <RoiCalculator onAutomate={onAutomateFromCalculator} />
        </MotionReveal>

        {/* 10. Why Work With Me Section */}
        <MotionReveal direction="up" distance={40}>
          <WhyWorkWithMe />
        </MotionReveal>

        {/* 11. Process Section */}
        <MotionReveal direction="up" distance={40}>
          <Process />
        </MotionReveal>

        {/* 12. Interactive Live Sandbox */}
        <MotionReveal direction="up" distance={40}>
          <InteractiveSandbox />
        </MotionReveal>

        {/* 13. Final CTA Section */}
        <MotionReveal direction="up" distance={40}>
          <FinalCTA onOpenContact={onOpenContact} />
        </MotionReveal>

        {/* 14. Contact Section */}
        <MotionReveal direction="up" distance={40}>
          <Contact prefillGoal={contactGoal} />
        </MotionReveal>
      </main>
    </>
  );
}
