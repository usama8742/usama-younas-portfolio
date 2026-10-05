import React from 'react';
import HeroVisual from './HeroVisual';
import TiltCard from './TiltCard';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CheckCircle2, 
  TrendingUp, 
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#030712] overflow-hidden">
      {/* Background Subtle Lab Grid */}
      <div className="absolute inset-0 bg-lab-grid opacity-60 pointer-events-none"></div>

      {/* Atmospheric Glowing Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[110px] pointer-events-none -z-10"></div>
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-glow-cyan backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>✦ AI Automation Lab · Enterprise Multi-Agent Systems</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
              AI Automation Solutions That <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-200 bg-clip-text text-transparent">
                Help Your Business Grow
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              3X AI Automation builds custom AI agents, n8n workflows, conversational chatbots, CRM systems, autonomous voice agents, and end-to-end automation pipelines that eliminate repetitive busywork and scale your business operations.
            </p>

            {/* Two Strong CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    scrollTo('contact');
                  }
                }}
                className="btn-primary"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="btn-secondary"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Performance Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-8 border-t border-white/10 mb-6">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">20+ hrs</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Saved / Wk / Team</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">&lt; 45 Days</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Average Payback</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-white">99.4%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">OCR Accuracy</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-cyan-300">24/7/365</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Autonomous Ops</div>
              </div>
            </div>

            {/* Reliability & Production Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Enterprise SLA Guarantee</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>100% Client IP Ownership</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>24h Intake Turnaround</span>
              </span>
            </div>

          </div>

          {/* Right Hero Visual (5 cols) wrapped in 3D TiltCard */}
          <div className="lg:col-span-5 w-full">
            <TiltCard glare={true} maxRotation={5} scale={1.01}>
              <HeroVisual />
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
