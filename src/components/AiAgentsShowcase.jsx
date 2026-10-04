import React, { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import { 
  Bot, 
  PhoneCall, 
  MessageSquare, 
  Globe, 
  Mic, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Volume2, 
  ShieldCheck, 
  Zap, 
  Send,
  Activity
} from 'lucide-react';

export default function AiAgentsShowcase({ onOpenContact }) {
  const [activeChannel, setActiveChannel] = useState('phone'); // 'phone' | 'sms' | 'webchat'
  const [webchatInput, setWebchatInput] = useState('');
  const [webchatMessages, setWebchatMessages] = useState([
    { sender: 'bot', text: 'Hello! I am the 3X AI Virtual Representative. How can I help streamline your operations today?' },
    { sender: 'user', text: 'Can you qualify inbound leads and schedule calls directly into my Google Calendar?' },
    { sender: 'bot', text: 'Absolutely! Our AI agents capture contact details, ask custom qualification questions, and instantly sync confirmed meetings to Google Calendar or your CRM.' }
  ]);

  const handleSendWebchat = (e) => {
    e.preventDefault();
    if (!webchatInput.trim()) return;

    const userText = webchatInput;
    setWebchatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setWebchatInput('');

    setTimeout(() => {
      setWebchatMessages((prev) => [
        ...prev,
        { 
          sender: 'bot', 
          text: `Great question regarding "${userText}". Our intelligent agent workflows execute this autonomously with live CRM and webhook integrations!` 
        }
      ]);
    }, 600);
  };

  return (
    <section id="ai-agents-suite" className="py-24 lg:py-32 bg-[#070C18] border-b border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current" />
            <span>24/7 Autonomous Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            AI Agents for <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Phone, SMS &amp; Webchat.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Never miss an inbound lead again. We deploy human-grade conversational AI agents that answer phone calls, converse via two-way SMS, and engage website visitors 24/7/365.
          </p>
        </div>

        {/* Channel Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveChannel('phone')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'phone'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                : 'bg-[#0B1325] text-slate-300 hover:text-white hover:bg-white/5 border-white/10'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>AI Phone / Voice Agent</span>
          </button>

          <button
            onClick={() => setActiveChannel('sms')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'sms'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                : 'bg-[#0B1325] text-slate-300 hover:text-white hover:bg-white/5 border-white/10'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI SMS Lead Dispatcher</span>
          </button>

          <button
            onClick={() => setActiveChannel('webchat')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'webchat'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                : 'bg-[#0B1325] text-slate-300 hover:text-white hover:bg-white/5 border-white/10'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Interactive Webchat Assistant</span>
          </button>
        </div>

        {/* Channel Demo Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Simulation Interface (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard glare={true} maxRotation={2}>
              <div className="bg-[#0B1325]/90 rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                
                {/* 1. PHONE AGENT SIMULATOR */}
                {activeChannel === 'phone' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-white font-mono">Inbound Call Session: LIVE</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                        Latency: 140ms
                      </span>
                    </div>

                    {/* Audio Waveform Visualizer */}
                    <div className="bg-[#070C18] rounded-2xl p-5 border border-white/10 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto shadow-sm">
                        <Mic className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">Conversing with Caller: "Apex Commercial"</h4>
                        <p className="text-xs text-slate-400 mt-0.5">ElevenLabs + Whisper neural speech synthesis</p>
                      </div>

                      {/* Animated Audio Frequency Bars */}
                      <div className="flex items-center justify-center gap-1.5 h-8 pt-1">
                        {[40, 75, 90, 50, 85, 100, 65, 45, 80, 60, 95, 70, 55, 85, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                            style={{ 
                              height: `${h}%`,
                              animationDelay: `${(i * 0.08).toFixed(2)}s`
                            }}
                          ></span>
                        ))}
                      </div>
                    </div>

                    {/* Live Transcript Stream */}
                    <div className="space-y-2 text-xs font-sans">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                        <span className="font-bold text-slate-400 block text-[10px] uppercase font-mono">Caller:</span>
                        <p className="text-slate-200 mt-0.5">"Hi! I need an emergency estimate on automated HVAC controls for our 4-story facility."</p>
                      </div>
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                        <span className="font-bold text-cyan-400 block text-[10px] uppercase flex items-center gap-1 font-mono">
                          <Sparkles className="w-2.5 h-2.5" /> 3X AI Voice Agent:
                        </span>
                        <p className="text-white mt-0.5 font-medium">"I can book an on-site engineer visit today at 3:30 PM, or tomorrow at 10:00 AM. Which slot do you prefer?"</p>
                      </div>
                    </div>

                    {/* Automated Outcome */}
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs flex items-center justify-between text-emerald-300 font-mono">
                      <span className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Meeting Confirmed &amp; Synced to CRM
                      </span>
                      <span className="text-[10px]">Today @ 3:30 PM</span>
                    </div>
                  </div>
                )}

                {/* 2. SMS AGENT SIMULATOR */}
                {activeChannel === 'sms' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-white font-mono">Two-Way SMS Speed-to-Lead</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                        Speed: 1.8 seconds
                      </span>
                    </div>

                    {/* Phone Screen Mockup */}
                    <div className="bg-[#070C18] rounded-2xl p-4 border border-white/10 space-y-3 font-sans text-xs max-h-[300px] overflow-y-auto">
                      <div className="text-center text-[10px] text-slate-500 font-mono">Today 10:42 AM · Inbound Web Form Trigger</div>

                      <div className="bg-white/10 text-slate-200 p-2.5 rounded-2xl rounded-bl-none max-w-[80%] border border-white/10">
                        "Hey, saw your real estate automation package. Does it support WhatsApp lead intake?"
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-2xl rounded-br-none max-w-[85%] ml-auto font-medium shadow-sm">
                        "Hi Mark! Yes, our n8n pipeline auto-captures WhatsApp chats, qualifies buyers, and updates your CRM in real time. Would you like a 10-minute demo today?"
                      </div>

                      <div className="bg-white/10 text-slate-200 p-2.5 rounded-2xl rounded-bl-none max-w-[80%] border border-white/10">
                        "Yes please! 2pm works."
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-2.5 rounded-2xl rounded-br-none max-w-[85%] ml-auto font-medium shadow-sm">
                        "Locked in! Your calendar invite is sent to mark@apex.com. Looking forward to speaking!"
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 flex items-center justify-between font-mono">
                      <span><strong>Lead Status:</strong> High-Intent Buyer (Tier A)</span>
                      <span className="font-bold text-white">Synced to HubSpot</span>
                    </div>
                  </div>
                )}

                {/* 3. WEBCHAT AGENT SIMULATOR */}
                {activeChannel === 'webchat' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-white font-mono">Live Website Knowledge Assistant</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                        RAG Powered
                      </span>
                    </div>

                    {/* Chat Messages */}
                    <div className="bg-[#070C18] rounded-2xl p-4 border border-white/10 space-y-3 font-sans text-xs max-h-[220px] overflow-y-auto">
                      {webchatMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-2xl max-w-[85%] ${
                            msg.sender === 'bot'
                              ? 'bg-white/5 text-slate-200 border border-white/10 rounded-bl-none'
                              : 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-none ml-auto font-medium'
                          }`}
                        >
                          {msg.text}
                        </div>
                      ))}
                    </div>

                    {/* Interactive Input Form */}
                    <form onSubmit={handleSendWebchat} className="flex gap-2">
                      <input
                        type="text"
                        value={webchatInput}
                        onChange={(e) => setWebchatInput(e.target.value)}
                        placeholder="Type a question to test the AI agent..."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 bg-[#070C18] text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-bold text-xs flex items-center gap-1.5 shrink-0"
                      >
                        <span>Send</span>
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Capabilities & Technical Value (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#0B1325]/90 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-lg space-y-4 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">
                Why Multi-Channel AI Agents Win
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Instant Speed-to-Lead:</strong> Responds to web inquiries within 2 seconds via phone or SMS before competitors pick up.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Zero Hallucinations:</strong> Grounded strictly in your company documentation, pricing tables, and business rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Direct Calendar Booking:</strong> Integrates with Google Calendar, Cal.com, and CRM pipelines to secure confirmed appointments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Seamless Human Handoff:</strong> Flags complex issues or high-value VIP deals directly to your mobile phone via Slack or WhatsApp.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) {
                      onOpenContact();
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                >
                  <span>Deploy An AI Agent for Your Business</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
