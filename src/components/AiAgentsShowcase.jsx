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
  Send 
} from 'lucide-react';

export default function AiAgentsShowcase({ onOpenContact }) {
  const [activeChannel, setActiveChannel] = useState('phone'); // 'phone' | 'sms' | 'webchat'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
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
    <section id="ai-agents-suite" className="py-20 lg:py-28 bg-[#EFEAE3] border-b border-[#DBD6CF]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] border border-[#DBD6CF] text-[#FE330A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Bot className="w-3.5 h-3.5" />
            <span>24/7 Autonomous Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] tracking-tight leading-tight mb-4">
            AI Agents for <span className="text-[#FE330A]">Phone, SMS & Webchat.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Never miss an inbound lead again. We deploy human-grade conversational AI agents that answer phone calls, converse via two-way SMS, and engage website visitors 24/7/365.
          </p>
        </div>

        {/* Channel Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveChannel('phone')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'phone'
                ? 'bg-[#FE330A] text-white border-[#FE330A] shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-[#EFEAE3] border-[#DBD6CF]'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>AI Phone / Voice Agent</span>
          </button>

          <button
            onClick={() => setActiveChannel('sms')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'sms'
                ? 'bg-[#FE330A] text-white border-[#FE330A] shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-[#EFEAE3] border-[#DBD6CF]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI SMS Lead Dispatcher</span>
          </button>

          <button
            onClick={() => setActiveChannel('webchat')}
            className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
              activeChannel === 'webchat'
                ? 'bg-[#FE330A] text-white border-[#FE330A] shadow-md scale-105'
                : 'bg-white text-slate-700 hover:bg-[#EFEAE3] border-[#DBD6CF]'
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
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DBD6CF] shadow-card">
                
                {/* 1. PHONE AGENT SIMULATOR */}
                {activeChannel === 'phone' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DBD6CF]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-800">Inbound Call Session: LIVE</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#FE330A] bg-[#EFEAE3] px-2 py-0.5 rounded">
                        Latency: 140ms
                      </span>
                    </div>

                    {/* Audio Waveform Visualizer */}
                    <div className="bg-[#EFEAE3] rounded-2xl p-5 border border-[#DBD6CF] text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#EFEAE3] text-[#FE330A] flex items-center justify-center mx-auto shadow-sm">
                        <Mic className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#191919]">Conversing with Caller: "Apex Commercial"</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Natural voice synthesis + Whisper transcription</p>
                      </div>

                      {/* Animated Audio Frequency Bars */}
                      <div className="flex items-center justify-center gap-1.5 h-8 pt-1">
                        {[40, 75, 90, 50, 85, 100, 65, 45, 80, 60, 95, 70, 55, 85, 40].map((h, i) => (
                          <span
                            key={i}
                            className="w-1.5 bg-[#FE330A] rounded-full animate-pulse"
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
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="font-bold text-slate-600 block text-[10px] uppercase">Caller:</span>
                        <p className="text-slate-800 mt-0.5">"Hi! I need an emergency estimate on automated HVAC controls for our 4-story facility."</p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#EFEAE3] border border-[#DBD6CF]">
                        <span className="font-bold text-[#FE330A] block text-[10px] uppercase flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" /> 3X AI Voice Agent:
                        </span>
                        <p className="text-slate-900 mt-0.5 font-medium">"I can book an on-site engineer visit today at 3:30 PM, or tomorrow at 10:00 AM. Which slot do you prefer?"</p>
                      </div>
                    </div>

                    {/* Automated Outcome */}
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs flex items-center justify-between text-emerald-800">
                      <span className="font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Meeting Confirmed &amp; Synced to CRM
                      </span>
                      <span className="font-mono text-[10px]">Today @ 3:30 PM</span>
                    </div>
                  </div>
                )}

                {/* 2. SMS AGENT SIMULATOR */}
                {activeChannel === 'sms' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DBD6CF]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-800">Two-Way SMS Lead Speed-to-Lead</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Speed: 1.8 seconds
                      </span>
                    </div>

                    {/* Phone Screen Mockup */}
                    <div className="bg-[#EFEAE3] rounded-2xl p-4 border border-[#DBD6CF] space-y-3 font-sans text-xs max-h-[300px] overflow-y-auto">
                      <div className="text-center text-[10px] text-slate-400 font-mono">Today 10:42 AM · Inbound Web Form Trigger</div>

                      <div className="bg-slate-200 text-slate-800 p-2.5 rounded-2xl rounded-bl-none max-w-[80%]">
                        "Hey, saw your real estate automation package. Does it support WhatsApp lead intake?"
                      </div>

                      <div className="bg-[#FE330A] text-white p-2.5 rounded-2xl rounded-br-none max-w-[85%] ml-auto font-medium">
                        "Hi Mark! Yes, our n8n pipeline auto-captures WhatsApp chats, qualifies buyers, and updates your CRM in real time. Would you like a 10-minute demo today?"
                      </div>

                      <div className="bg-slate-200 text-slate-800 p-2.5 rounded-2xl rounded-bl-none max-w-[80%]">
                        "Yes please! 2pm works."
                      </div>

                      <div className="bg-[#FE330A] text-white p-2.5 rounded-2xl rounded-br-none max-w-[85%] ml-auto font-medium">
                        "Locked in! Your calendar invite is sent to mark@apex.com. Looking forward to speaking!"
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                      <span><strong>Lead Status:</strong> High-Intent Buyer (Tier A)</span>
                      <span className="font-bold text-[#FE330A]">Synced to HubSpot</span>
                    </div>
                  </div>
                )}

                {/* 3. WEBCHAT AGENT SIMULATOR */}
                {activeChannel === 'webchat' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DBD6CF]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-xs font-bold text-slate-800">Live Website Knowledge Assistant</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#FE330A] bg-[#EFEAE3] px-2 py-0.5 rounded">
                        RAG Powered
                      </span>
                    </div>

                    {/* Chat Messages */}
                    <div className="bg-[#EFEAE3] rounded-2xl p-4 border border-[#DBD6CF] space-y-3 font-sans text-xs max-h-[220px] overflow-y-auto">
                      {webchatMessages.map((msg, i) => (
                        <div
                          key={i}
                          className={`p-2.5 rounded-2xl max-w-[85%] ${
                            msg.sender === 'bot'
                              ? 'bg-white text-slate-800 border border-[#DBD6CF] rounded-bl-none shadow-sm'
                              : 'bg-[#FE330A] text-white rounded-br-none ml-auto font-medium'
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
                        className="flex-1 px-4 py-2.5 rounded-xl border border-[#DBD6CF] bg-white text-xs text-slate-900 focus:outline-none focus:border-[#FE330A]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl bg-[#FE330A] text-white hover:bg-[#D62705] text-xs font-bold flex items-center gap-1.5 shrink-0"
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
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#DBD6CF] shadow-card space-y-4">
              <h3 className="text-xl font-bold text-[#191919]">
                Why Multi-Channel AI Agents Win
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Instant Speed-to-Lead:</strong> Responds to web inquiries within 2 seconds via phone or SMS before competitors pick up.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Hallucinations:</strong> Grounded strictly in your company documentation, pricing tables, and business rules.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Direct Calendar Booking:</strong> Integrates with Google Calendar, Calendly, and CRM pipelines to secure confirmed appointments.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Seamless Human Handoff:</strong> Flags complex issues or high-value VIP deals directly to your mobile phone via Slack or WhatsApp.</span>
                </li>
              </ul>

              <div className="pt-3 border-t border-[#DBD6CF]">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FE330A] to-[#D62705] hover:shadow-glow transition-all"
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
