import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { DollarSign, Clock, Users, Sparkles, ArrowRight, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RoiCalculator({ onAutomate }) {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculations
  const weeklyHoursSaved = teamSize * hoursPerWeek * 0.75; // 75% automation efficiency
  const annualHoursSaved = Math.round(weeklyHoursSaved * 50);
  const annualSavings = Math.round(annualHoursSaved * hourlyRate);
  const turnaroundSpeedup = "18X Faster";

  const handleClaim = () => {
    // Fire celebratory confetti in brand blue & white
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0878FE', '#0255FD', '#FFFFFF', '#C9DFFF']
    });

    if (onAutomate) {
      onAutomate({
        teamSize,
        hoursPerWeek,
        annualSavings
      });
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="roi-calculator" className="py-20 lg:py-28 bg-[#F8FAFE] dark:bg-[#070B16] border-y border-[#C9DFFF]/70 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Interactive Business Impact Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
            How Much Time & Money Will <span className="text-[#0878FE] dark:text-cyan-400">Automation Save You?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Adjust the sliders below to see the realistic annual financial and operational hours your business can reclaim by eliminating manual busywork.
          </p>
        </div>

        {/* Main Interactive Bento Calculator */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard glare={true} maxRotation={3} className="h-full">
              <div className="bg-white dark:bg-[#0B101E] rounded-3xl p-7 sm:p-9 border border-[#C9DFFF] dark:border-slate-800 shadow-card dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full">
                <div className="space-y-7">
                  
                  {/* Slider 1: Team Members */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#0878FE] dark:text-cyan-400" />
                        <span>Team Members Handling Repetitive Tasks</span>
                      </label>
                      <span className="font-mono text-base font-bold text-[#0878FE] dark:text-cyan-400 bg-[#EAF3FF] dark:bg-[#0878FE]/20 px-3 py-0.5 rounded-lg border border-[#C9DFFF] dark:border-[#0878FE]/30">
                        {teamSize} {teamSize === 1 ? 'person' : 'people'}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="40" 
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full h-2 bg-[#EAF3FF] dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0878FE] dark:accent-cyan-400"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                      <span>1 person</span>
                      <span>40+ staff</span>
                    </div>
                  </div>

                  {/* Slider 2: Weekly Hours */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0878FE] dark:text-cyan-400" />
                        <span>Hours Spent Weekly per Person on Manual Tasks</span>
                      </label>
                      <span className="font-mono text-base font-bold text-[#0878FE] dark:text-cyan-400 bg-[#EAF3FF] dark:bg-[#0878FE]/20 px-3 py-0.5 rounded-lg border border-[#C9DFFF] dark:border-[#0878FE]/30">
                        {hoursPerWeek} hrs / week
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="3" 
                      max="30" 
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full h-2 bg-[#EAF3FF] dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0878FE] dark:accent-cyan-400"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                      <span>3 hrs/wk</span>
                      <span>30 hrs/wk</span>
                    </div>
                  </div>

                  {/* Slider 3: Hourly Rate */}
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <label className="text-xs sm:text-sm font-bold text-[#111827] dark:text-white flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-[#0878FE] dark:text-cyan-400" />
                        <span>Average Hourly Cost / Wage</span>
                      </label>
                      <span className="font-mono text-base font-bold text-[#0878FE] dark:text-cyan-400 bg-[#EAF3FF] dark:bg-[#0878FE]/20 px-3 py-0.5 rounded-lg border border-[#C9DFFF] dark:border-[#0878FE]/30">
                        ${hourlyRate} / hr
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="150" 
                      step="5"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full h-2 bg-[#EAF3FF] dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#0878FE] dark:accent-cyan-400"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono mt-1">
                      <span>$20/hr</span>
                      <span>$150/hr</span>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-5 border-t border-[#C9DFFF]/60 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Conservative 75% repetitive task automation rate applied</span>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Results Showcase Box (5 cols) */}
          <div className="lg:col-span-5">
            <TiltCard glare={true} maxRotation={3} className="h-full">
              <div className="bg-gradient-to-br from-[#111827] to-[#0A0F1D] dark:from-[#0D1424] dark:to-[#050811] rounded-3xl p-7 sm:p-9 text-white border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden h-full">
                {/* Top Accent Strip */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0878FE] via-cyan-400 to-[#0255FD]"></div>

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0878FE] dark:text-cyan-400">
                      Estimated ROI Impact
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      High Yield
                    </span>
                  </div>

                  {/* Main Reclaimed Dollars Metric */}
                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      Estimated Annual Savings:
                    </span>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-1">
                      <span className="text-[#0878FE] dark:text-cyan-400">$</span>
                      <span>{annualSavings.toLocaleString()}</span>
                      <span className="text-xs font-mono font-normal text-slate-400">/ yr</span>
                    </div>
                  </div>

                  {/* Two Column Metric Badges */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                      <span className="text-[11px] font-mono text-slate-400 block">Annual Hours Saved</span>
                      <span className="text-xl sm:text-2xl font-black text-[#0878FE] dark:text-cyan-400">
                        {annualHoursSaved.toLocaleString()}h
                      </span>
                    </div>
                    <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-800">
                      <span className="text-[11px] font-mono text-slate-400 block">Speed Increase</span>
                      <span className="text-xl sm:text-2xl font-black text-emerald-400">
                        {turnaroundSpeedup}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    Based on custom n8n pipelines, AI agents, and automated CRM routing replacing repetitive manual coordination.
                  </p>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-5 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={handleClaim}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Automate This For My Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
