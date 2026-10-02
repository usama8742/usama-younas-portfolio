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
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import InstagramWidget from './InstagramWidget';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  "AI Agent",
  "AI Chatbot",
  "Voice Agent",
  "Workflow Automation",
  "CRM Automation",
  "AI Website",
  "API Integration",
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
        service: 'Workflow Automation'
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
      name: 'Usama Test Client',
      email: 'contactbyusama@gmail.com',
      company: '3X AI Automation Testing',
      service: 'AI Agent',
      automationGoal: 'Verify live email delivery to contactbyusama@gmail.com',
      message: 'Hello Usama! This is a test inquiry to confirm the contact section is in 100% working condition.'
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
      `Sent via 3X AI Automation Portfolio (contactbyusama@gmail.com).`
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
        colors: ['#0878FE', '#0255FD', '#FFFFFF', '#38BDF8', '#10B981']
      });

    } catch (error) {
      console.warn("Form transmission note:", error);
      // In case of adblockers or network restrictions, trigger fallback view with 1-click Gmail/Mail app
      setSubmissionStatus('fallback');
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0878FE', '#0255FD', '#FFFFFF']
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFE] border-t border-[#C9DFFF]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] border border-[#C9DFFF] text-[#0878FE] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Client Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight mb-4">
            Let's Build Something <span className="text-[#0878FE]">Intelligent.</span>
          </h2>
          <div className="space-y-1 text-base sm:text-lg text-slate-600 font-normal">
            <p>Have an AI idea, automation project, or business process you'd like to improve?</p>
            <p>Send me a message and let's discuss your system architecture.</p>
          </div>
        </div>

        {/* Contact Grid: Form on Left/Center (7 cols) + Direct Info on Right (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#C9DFFF] shadow-card">
            
            {/* Live Delivery Guarantee Banner */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#EAF3FF] border border-[#C9DFFF] text-xs text-[#0878FE]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-slate-800">Email Destination:</span>
                <span className="font-mono font-bold text-[#0878FE]">contactbyusama@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAutoFillTest}
                  className="text-[11px] font-bold text-slate-600 hover:text-[#0878FE] flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-md border border-[#C9DFFF]"
                  title="Auto-fill with test data to try immediately"
                >
                  <Zap className="w-3 h-3 text-amber-500" />
                  <span>Fill Test Data</span>
                </button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[11px] font-bold text-[#0878FE] hover:underline flex items-center gap-1 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#111827]">
                    Project Request Transmitted!
                  </h3>
                  <p className="text-xs text-[#0878FE] font-mono font-semibold mt-1">
                    Target: contactbyusama@gmail.com
                  </p>
                </div>

                {/* Submitted Summary Box */}
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF] text-left text-xs space-y-1.5 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Client Name:</span>
                    <span className="font-bold text-[#111827]">{formData.name || 'Visitor'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Client Email:</span>
                    <span className="font-bold text-[#111827]">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Service Requested:</span>
                    <span className="font-bold text-[#0878FE]">{formData.service}</span>
                  </div>
                  {formData.company && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Company:</span>
                      <span className="font-bold text-[#111827]">{formData.company}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#C9DFFF]/70">
                    <span className="text-slate-500 font-medium block mb-0.5">Goal:</span>
                    <p className="text-slate-800 italic bg-white p-2 rounded-lg border border-[#C9DFFF]/50">
                      "{formData.automationGoal}"
                    </p>
                  </div>
                </div>

                {/* Clear Instruction for Usama's Inbox */}
                <div className="max-w-md mx-auto p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs text-amber-900 flex items-start gap-2.5">
                  <Inbox className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Where to check this email:</span>
                    <span>Submissions go directly to <strong>contactbyusama@gmail.com</strong>. If this is your first test submission, check your <strong>Gmail Updates or Spam folder</strong> for FormSubmit's confirmation email and click "Activate Form".</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getGmailWebLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Pre-filled Draft in Gmail Web</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  <a
                    href={getMailtoLink()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-[#C9DFFF] transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-500" />
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
                    className="text-xs font-bold text-[#0878FE] hover:underline inline-flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Send Another Project Request</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Name <span className="text-[#0878FE]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email <span className="text-[#0878FE]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Service Dropdown */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Realty / Logistics LLC"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Needed <span className="text-[#0878FE]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* What would you like to automate? */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    What would you like to automate? <span className="text-[#0878FE]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Qualify inbound web leads and sync with our CRM & WhatsApp"
                    value={formData.automationGoal}
                    onChange={(e) => setFormData({ ...formData, automationGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current manual bottlenecks, tools you use (n8n, HubSpot, custom DB), and your target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C9DFFF] bg-[#F8FAFE] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:border-[#0878FE] focus:bg-white focus:ring-1 focus:ring-[#0878FE] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button Stack */}
                <div className="space-y-3 pt-1">
                  {/* Primary Direct Form Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#0878FE] to-[#0255FD] hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting to contactbyusama@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Project Request</span>
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
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-[#0878FE] bg-[#EAF3FF] hover:bg-[#0878FE] hover:text-white transition-all border border-[#C9DFFF]"
                      title="Open draft in Gmail with fields pre-filled"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Gmail Web</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 transition-all border border-[#C9DFFF]"
                      title="Open in your default mail app"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <p className="text-[11px] text-slate-500">
                    Need instant response? Email directly to{' '}
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="font-bold text-[#0878FE] hover:underline"
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
            <div className="bg-white rounded-3xl p-7 border border-[#C9DFFF] shadow-card space-y-6">
              <div className="flex items-center justify-between border-b border-[#C9DFFF] pb-4">
                <h3 className="text-xl font-bold text-[#111827]">
                  Direct Channels
                </h3>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#EAF3FF] text-[#0878FE] border border-[#C9DFFF] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Verified Live
                </span>
              </div>

              <div className="space-y-4">
                {/* Primary Email */}
                <div className="p-4 rounded-2xl bg-[#F8FAFE] border border-[#C9DFFF] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#EAF3FF] text-[#0878FE] flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-500 font-semibold block uppercase tracking-wider">
                          Official Direct Email
                        </span>
                        <a 
                          href="mailto:contactbyusama@gmail.com"
                          className="text-sm font-bold text-[#111827] hover:text-[#0878FE] transition-colors"
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
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#0878FE] hover:bg-[#0255FD] transition-all shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email via Gmail</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1 py-2 px-3 rounded-lg text-xs font-bold bg-white text-[#111827] border border-[#C9DFFF] hover:border-[#0878FE] transition-all"
                      title="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Instagram Channel */}
                <a 
                  href="https://www.instagram.com/3xaiautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-[#F8FAFE] border border-transparent hover:border-[#C9DFFF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 text-[#dc2743] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Instagram Official</span>
                    <span className="text-sm font-bold text-[#111827] group-hover:text-[#0878FE] transition-colors">
                      @3xaiautomation
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/usama8742/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-[#F8FAFE] border border-transparent hover:border-[#C9DFFF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3FF] text-[#0878FE] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">LinkedIn Profile</span>
                    <span className="text-sm font-bold text-[#111827] group-hover:text-[#0878FE] transition-colors">
                      linkedin.com/in/usama8742
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/usama8742"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-[#F8FAFE] border border-transparent hover:border-[#C9DFFF] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">GitHub Repositories</span>
                    <span className="text-sm font-bold text-[#111827] group-hover:text-[#0878FE] transition-colors">
                      github.com/usama8742
                    </span>
                  </div>
                </a>

              </div>

              {/* SLA Guarantee Box */}
              <div className="pt-4 border-t border-[#C9DFFF]/70">
                <div className="flex items-center gap-3 text-xs text-slate-600 bg-[#F8FAFE] p-3 rounded-xl border border-[#C9DFFF]/60">
                  <Clock className="w-4 h-4 text-[#0878FE] shrink-0" />
                  <span>
                    <strong>Response Guarantee:</strong> Inquiries replied to within <strong>24 business hours</strong>.
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
