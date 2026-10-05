import React from 'react';
import HeroVisual from './HeroVisual';
import TiltCard from './TiltCard';
import { 
  ArrowRight, 
  Bot, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CheckCircle2, 
  TrendingUp, 
  Scan, 
  PhoneCall, 
  Zap 
} from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-20">
      {/* Signature Azzle Linen Container with Curved Bottom */}
      <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-[#EFEAE3] pb-20 pt-16 sm:pt-20 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-24 border-b border-[#DBD6CF]/60">
        
        {/* Azzle Rotating Ambient Gradient Orbs */}
        <div className="orange-gradient-1 absolute -right-[150px] top-[180px] -z-[1] h-[500px] w-[500px] rounded-[500px] pointer-events-none opacity-60"></div>
        <div className="orange-gradient-2 absolute right-[60px] top-[480px] -z-[1] h-[450px] w-[450px] rounded-[450px] pointer-events-none opacity-50"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Top Eyebrow Badge (Azzle Pill Style) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[50px] bg-white border border-[#DBD6CF] text-[#191919] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FE330A] fill-current" />
                <span>✦ AI Engineer &amp; Automation Architect · 3X AI Automation</span>
              </div>

              {/* Main Headline with High-Impact Azzle Typography */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#191919] tracking-tight leading-[1.08] mb-5">
                AI Automation That <br className="hidden sm:inline" />
                Saves <span className="text-[#FE330A]">20+ Hours/Week.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-[#4A4A4A] leading-relaxed mb-8 max-w-2xl font-normal">
                Replace manual busywork with custom AI Operating Systems. From intelligent OCR document pipelines to 24/7 autonomous phone, SMS, and webchat agents — we build AI systems that automate real business operations.
              </p>

              {/* Action Buttons (Azzle Signature Pill Buttons) */}
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
                {/* Primary Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      scrollTo('contact');
                    }
                  }}
                  className="btn-azzle-primary"
                >
                  <span>Book Free AI Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* ROI Calculator Button */}
                <button
                  type="button"
                  onClick={() => scrollTo('roi-calculator')}
                  className="btn-azzle-secondary"
                >
                  <TrendingUp className="w-4 h-4 text-[#FE330A]" />
                  <span>Calculate Your ROI</span>
                </button>

                {/* Projects Button */}
                <button
                  type="button"
                  onClick={() => scrollTo('projects')}
                  className="btn-azzle-white"
                >
                  <span>View Live Work</span>
                </button>
              </div>

              {/* Azzle Divider */}
              <div className="h-[1px] w-full bg-[#DBD6CF] mb-8"></div>

              {/* Proven Performance Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
                <div className="p-4 rounded-2xl bg-white border border-[#DBD6CF] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#FE330A]">20+ hrs</div>
                  <div className="text-xs font-bold text-[#555555] mt-0.5">Saved / Wk / Team</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DBD6CF] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#191919] flex items-center gap-1">
                    <span>&lt; 45 Days</span>
                  </div>
                  <div className="text-xs font-bold text-[#555555] mt-0.5">Average Payback</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DBD6CF] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#191919]">99.4%</div>
                  <div className="text-xs font-bold text-[#555555] mt-0.5">OCR Accuracy</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DBD6CF] shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#FE330A]">24/7/365</div>
                  <div className="text-xs font-bold text-[#555555] mt-0.5">Voice &amp; SMS Agents</div>
                </div>
              </div>

              {/* Reliability & Production Trust Badges */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#191919] font-medium">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-white border border-[#DBD6CF] shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Production Reliability SLA</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-white border border-[#DBD6CF] shadow-sm">
                  <Lock className="w-3.5 h-3.5 text-[#FE330A]" />
                  <span>100% Client IP Ownership</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-white border border-[#DBD6CF] shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#FE330A]" />
                  <span>24h Rapid Intake Turnaround</span>
                </span>
              </div>

            </div>

            {/* Right Hero Visual (5 cols) wrapped in 3D TiltCard */}
            <div className="lg:col-span-5 w-full">
              <TiltCard glare={true} maxRotation={4} scale={1.01}>
                <HeroVisual />
              </TiltCard>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
