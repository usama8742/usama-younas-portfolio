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
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 bg-transparent overflow-hidden"
    >
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(8,120,254,0.10)_0%,rgba(2,85,253,0.04)_50%,transparent_80%)] rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#C9DFFF] text-[#0878FE] text-xs sm:text-sm font-semibold tracking-wide mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>✦ AI Engineer &amp; Automation Architect · 3X AI Automation</span>
            </div>

            {/* Main Headline with high-converting punch */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.08] mb-5">
              AI Automation That <br className="hidden sm:inline" />
              Saves <span className="text-[#0878FE] bg-gradient-to-r from-[#0878FE] via-sky-500 to-[#0255FD] bg-clip-text text-transparent">20+ Hours/Week.</span>
            </h1>

            {/* Description highlighting OCR, Multi-Channel Agents & Custom AI OS */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mb-7 max-w-2xl font-normal">
              Replace manual busywork with custom AI Operating Systems. From intelligent OCR document pipelines to 24/7 autonomous phone, SMS, and webchat agents — we build AI systems that automate real business operations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-9">
              {/* Primary Contact Button */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    scrollTo('contact');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Book Free AI Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* ROI Calculator Button */}
              <button
                type="button"
                onClick={() => scrollTo('roi-calculator')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#0878FE] bg-[#EAF3FF] hover:bg-[#0878FE] hover:text-white border border-[#C9DFFF] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Calculate Your ROI</span>
              </button>

              {/* Projects Button */}
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-700 bg-white border border-[#C9DFFF] hover:bg-slate-50 transition-all shadow-sm"
              >
                <span>View Live Work</span>
              </button>
            </div>

            {/* Proven Performance Metrics Bar (Matching aiagencysanantonio.com) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[#C9DFFF] mb-6">
              <div className="p-3 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF]">
                <div className="text-xl sm:text-2xl font-black text-[#0878FE]">20+ hrs</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-0.5">Saved / Wk / Team</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF]">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">&lt; 45 Days</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-0.5">Average Payback</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF]">
                <div className="text-xl sm:text-2xl font-black text-[#111827]">99.4%</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-0.5">OCR Accuracy</div>
              </div>

              <div className="p-3 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF]">
                <div className="text-xl sm:text-2xl font-black text-[#0878FE]">24/7/365</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-0.5">Voice &amp; SMS Agents</div>
              </div>
            </div>

            {/* Reliability & Production Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAFE] border border-[#C9DFFF]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Production Reliability SLA</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAFE] border border-[#C9DFFF]">
                <Lock className="w-3.5 h-3.5 text-[#0878FE]" />
                <span>100% Client IP Ownership</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAFE] border border-[#C9DFFF]">
                <Clock className="w-3.5 h-3.5 text-[#0878FE]" />
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
    </section>
  );
}
