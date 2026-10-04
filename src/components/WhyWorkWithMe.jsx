import React from 'react';
import TiltCard from './TiltCard';
import CountUp from './CountUp';
import { 
  Clock, 
  Cpu, 
  TrendingUp, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

const WHY_POINTS = [
  {
    pointNumber: "01",
    title: "24/7 AI Automation",
    subtitle: "Always-On Operations",
    description: "Your business runs around the clock. AI agents engage visitors, qualify leads, and dispatch bookings at 2:00 AM just as flawlessly as at 2:00 PM.",
    metricValue: 99.9,
    metricPrefix: "",
    metricSuffix: "%",
    metricLabel: "Autonomous Uptime",
    icon: Clock,
    glowColor: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "group-hover:border-cyan-400/60"
  },
  {
    pointNumber: "02",
    title: "Reduce Manual Work",
    subtitle: "Eliminate Human Drudgery",
    description: "Cut out manual data entry, copy-pasting across tools, chasing follow-ups, and email ping-pong. Free your team to focus strictly on closing deals.",
    metricValue: 85,
    metricPrefix: "-",
    metricSuffix: "%",
    metricLabel: "Manual Task Reduction",
    icon: Cpu,
    glowColor: "from-cyan-500/20 to-blue-600/20",
    borderAccent: "group-hover:border-blue-400/60"
  },
  {
    pointNumber: "03",
    title: "Capture More Leads",
    subtitle: "Zero Drop-Off Across Channels",
    description: "Engage prospects across Web, WhatsApp, Instagram, and SMS immediately. Never lose a high-value customer to a competitor due to slow response.",
    metricValue: 300,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Lead Capture Acceleration",
    icon: TrendingUp,
    glowColor: "from-blue-600/20 to-indigo-600/20",
    borderAccent: "group-hover:border-indigo-400/60"
  },
  {
    pointNumber: "04",
    title: "Faster Customer Response",
    subtitle: "Seconds Instead of Hours",
    description: "Engage warm inquiries within seconds with hyper-relevant context. Speed-to-lead is the single biggest factor in winning modern contracts.",
    metricValue: 45,
    metricPrefix: "< ",
    metricSuffix: "s",
    metricLabel: "Avg Response Latency",
    icon: Zap,
    glowColor: "from-indigo-600/20 to-purple-600/20",
    borderAccent: "group-hover:border-purple-400/60"
  },
  {
    pointNumber: "05",
    title: "Scalable Business Systems",
    subtitle: "10X Volume, Same Headcount",
    description: "Grow your transaction volume from 10 leads to 10,000 without linearly hiring staff. Your automated infrastructure expands seamlessly with your pipeline.",
    metricValue: 10,
    metricPrefix: "",
    metricSuffix: "X",
    metricLabel: "Operational Scalability",
    icon: Layers,
    glowColor: "from-purple-600/20 to-cyan-500/20",
    borderAccent: "group-hover:border-cyan-400/60"
  }
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-3x" className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/5 via-cyan-500/5 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>Why 3X AI Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Engineered for Impact. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Built to Multiply Your Revenue.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Why leading businesses partner with 3X AI Automation over generic agencies or off-the-shelf software.
          </p>
        </div>

        {/* 5 Points Grid: 2 columns on top, 3 columns on bottom on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
          {WHY_POINTS.map((item, idx) => {
            const Icon = item.icon;
            // First 2 items span 3 columns each on lg (half width)
            // Last 3 items span 2 columns each on lg (third width)
            const colSpan = idx < 2 ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <div key={item.pointNumber} className={colSpan}>
                <TiltCard glare={true} maxRotation={3} className="h-full">
                  <div
                    className={`group bg-[#070C18]/90 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_12px_40px_rgba(6,182,212,0.18)] flex flex-col justify-between h-full backdrop-blur-xl relative overflow-hidden`}
                  >
                    {/* Top ambient glow */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    <div>
                      {/* Top Bar with Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                          POINT {item.pointNumber}
                        </span>
                      </div>

                      {/* Large Metric Display with CountUp */}
                      <div className="mb-4">
                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tight flex items-baseline gap-0.5">
                          <CountUp
                            end={item.metricValue}
                            prefix={item.metricPrefix}
                            suffix={item.metricSuffix}
                            decimals={item.metricValue % 1 !== 0 ? 1 : 0}
                            className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent"
                          />
                        </div>
                        <span className="text-xs font-mono uppercase tracking-wider text-cyan-400/90 font-semibold block mt-1">
                          {item.metricLabel}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mb-3">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Status Ribbon */}
                    <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 font-medium text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                        Verified Advantage
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
