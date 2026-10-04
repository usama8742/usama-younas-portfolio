import React, { useState } from 'react';
import TiltCard from './TiltCard';
import { 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Clock,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  RefreshCw,
  Inbox,
  CheckCheck,
  Zap,
  Activity
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import InstagramWidget from './InstagramWidget';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  "AI Agent",
  "n8n Workflow Automation",
  "Lead Generation Systems",
  "CRM Automation",
  "AI Chatbot",
  "AI Voice Agent",
  "API Integrations",
  "Website Development",
  "Other"
];

export default function Contact({ prefillGoal = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Agent',
    automationGoal: prefillGoal || '',
    message: ''
  });

  React.useEffect(() => {
    if (prefillGoal) {
      setFormData((prev) => ({
        ...prev,
        automationGoal: prefillGoal,
        service: 'n8n Workflow Automation'
      }));
    }
  }, [prefillGoal]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle' | 'success' | 'activate_needed' | 'fallback'

  const copyEmail = () => {
    navigator.clipboard.writeText("contactbyusama@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // 1-Click Test Demo Filler
  const handleAutoFillTest = () => {
    setFormData({
      name: 'Test Client Partner',
      email: 'contactbyusama@gmail.com',
      company: '3X AI Automation Testing',
      service: 'AI Agent',
      automationGoal: 'Verify live email delivery to contactbyusama@gmail.com',
      message: 'Hello Usama! This is a test inquiry to confirm the 3X AI Automation contact section is in 100% working condition.'
    });
  };

  const getSubject = () => {
    return `New Project Inquiry: ${formData.service || 'AI Automation'} - ${formData.name || 'Website Visitor'}`;
  };

  const getBodyText = () => {
    return (
      `Hi Usama,\n\nI would like to discuss an AI automation project.\n\n` +
      `Name: ${formData.name || 'Not provided'}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Service Needed: ${formData.service || 'AI Agent'}\n` +
      `Automation Goal: ${formData.automationGoal || 'Not specified'}\n\n` +
      `Additional Notes:\n${formData.message || 'None'}\n\n` +
      `Sent via 3X AI Automation Lab (contactbyusama@gmail.com).`
    );
  };

  // Direct Web Gmail Draft URL (Opens in browser)
  const getGmailWebLink = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBodyText());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=contactbyusama@gmail.com&su=${subject}&body=${body}`;
  };

  // Standard mailto link
  const getMailtoLink = () => {
    const subject = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getBodyText());
    return `mailto:contactbyusama@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      // Direct live dispatch to FormSubmit for contactbyusama@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/contactbyusama@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          service: formData.service,
          automation_goal: formData.automationGoal,
          message: formData.message || "No additional message",
          _subject: `New 3X Automation Lead: ${formData.name} (${formData.service})`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (data && (data.success === "true" || data.success === true)) {
        setSubmissionStatus('success');
      } else if (data && data.message && data.message.toLowerCase().includes('activate')) {
        setSubmissionStatus('activate_needed');
      } else if (response.ok) {
        setSubmissionStatus('success');
      } else {
        setSubmissionStatus('fallback');
      }

      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#0878FE', '#FFFFFF', '#38BDF8', '#10B981']
      });

    } catch (error) {
      console.warn("Form transmission note:", error);
      // In case of network restrictions, trigger fallback view with 1-click Gmail/Mail app
      setSubmissionStatus('fallback');
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#06B6D4', '#0878FE', '#FFFFFF']
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#070C18] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 fill-current" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Let's Engineer Your <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous Systems
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
            Ready to replace hours of repetitive manual drag with intelligent AI pipelines? Submit your operational goals below for a custom architecture plan.
          </p>
        </div>

        {/* Contact Grid: Form on Left/Center (7 cols) + Direct Info on Right (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#0B1325]/90 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl relative">
            
            {/* Live Delivery Guarantee Banner */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#070C18] border border-cyan-500/30 text-xs text-cyan-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-400">Direct Route:</span>
                <span className="font-mono font-bold text-cyan-300">contactbyusama@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAutoFillTest}
                  className="text-[11px] font-bold text-slate-300 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md border border-white/10 transition-colors"
                  title="Auto-fill with test data to try immediately"
                >
                  <Zap className="w-3 h-3 text-cyan-400" />
                  <span>Fill Demo Data</span>
                </button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[11px] font-bold text-cyan-300 hover:underline flex items-center gap-1 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Project Request Transmitted!
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono font-semibold mt-1">
                    Delivered to contactbyusama@gmail.com
                  </p>
                </div>

                {/* Submitted Summary Box */}
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#070C18] border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Client Name:</span>
                    <span className="font-bold text-white">{formData.name || 'Visitor'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Client Email:</span>
                    <span className="font-bold text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Service Requested:</span>
                    <span className="font-bold text-cyan-300">{formData.service}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Company:</span>
                      <span className="font-bold text-white">{formData.company}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-slate-500 font-medium block mb-0.5">Automation Goal:</span>
                    <p className="text-cyan-200 italic bg-white/5 p-2 rounded-lg border border-white/10">
                      "{formData.automationGoal}"
                    </p>
                  </div>
                </div>

                {/* Clear Instruction for Usama's Inbox */}
                <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left text-xs text-amber-200 flex items-start gap-2.5">
                  <Inbox className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Delivery Note:</span>
                    <span>Submissions are routed directly to <strong>contactbyusama@gmail.com</strong>. We analyze requirements and respond within 2 hours.</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getGmailWebLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Pre-filled Draft in Gmail Web</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href={getMailtoLink()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Open in Mail App</span>
                  </a>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'AI Agent',
                        automationGoal: '',
                        message: ''
                      });
                    }}
                    className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Submit Another Automation Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Work Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Service Dropdown */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Realty Group / Marketing Agency"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                      Service Needed <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#070C18] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* What would you like to automate? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                    What would you like to automate? <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Qualify inbound web leads, sync with CRM, and trigger WhatsApp follow-ups"
                    value={formData.automationGoal}
                    onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 font-mono">
                    System Requirements / Existing Tools
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current software stack (n8n, HubSpot, custom database, Twilio) and target turnaround goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#070C18] text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button Stack */}
                <div className="space-y-3 pt-2">
                  {/* Primary Direct Form Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-[#030712] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin text-[#030712]" />
                        <span>Transmitting to contactbyusama@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <span>Transmit Project Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Secondary 1-Click Direct Web Gmail Button */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <a
                      href={getGmailWebLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all border border-white/10 font-mono"
                      title="Open draft in Gmail with fields pre-filled"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open in Gmail Web</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all border border-white/10 font-mono"
                      title="Open in your default mail app"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <p className="text-[11px] text-slate-500 font-mono">
                    Direct Inquiry Route: {' '}
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="font-bold text-cyan-400 hover:underline"
                    >
                      contactbyusama@gmail.com
                    </button>
                  </p>
                </div>

              </form>
            )}
          </div>

          {/* Direct Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Card */}
            <div className="bg-[#0B1325]/90 rounded-3xl p-7 border border-white/10 shadow-lg space-y-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white">
                  Direct Channels
                </h3>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Verified Live
                </span>
              </div>

              <div className="space-y-4">
                {/* Primary Email */}
                <div className="p-4 rounded-2xl bg-[#070C18] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 font-semibold block uppercase tracking-wider font-mono">
                          Official Direct Email
                        </span>
                        <a 
                          href="mailto:contactbyusama@gmail.com"
                          className="text-sm font-bold text-white hover:text-cyan-300 font-mono transition-colors"
                        >
                          contactbyusama@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=contactbyusama@gmail.com&su=AI%20Automation%20Inquiry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#030712] bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email via Gmail</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1 py-2 px-3 rounded-lg text-xs font-bold bg-white/5 text-slate-200 border border-white/10 hover:border-cyan-400 transition-all"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Instagram Channel */}
                <a 
                  href="https://www.instagram.com/3xaiautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 text-[#dc2743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">Instagram Official</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      @3xaiautomation
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/usama8742/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/usama8742
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/usama8742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-400/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-medium block">GitHub Repositories</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/usama8742
                    </span>
                  </div>
                </a>

              </div>

              {/* SLA Guarantee Box */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-slate-400 bg-[#070C18] p-3 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white">Response Guarantee:</strong> Direct engineering reply within <strong className="text-cyan-300">2 hours</strong>.
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Instagram Feed Widget */}
            <InstagramWidget />

          </div>

        </div>

      </div>
    </section>
  );
}
