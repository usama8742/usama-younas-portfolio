import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Workflow, 
  Server, 
  Layout, 
  Database, 
  Wrench,
  CheckCircle2,
  Code2,
  ArrowRight,
  Zap,
  Layers,
  Copy,
  Check,
  Maximize2,
  ShieldCheck
} from 'lucide-react';
import {
  PythonLogo,
  N8nLogo,
  ReactLogo,
  SupabaseLogo,
  PostgreSQLLogo,
  FastAPILogo,
  NodeLogo,
  OllamaLogo,
  AgentBrainLogo,
  WebhooksLogo,
  CRMLogo,
  GitLogo,
  AuthLogo,
  ApiLogo,
  JavaScriptLogo,
  HtmlCssLogo
} from './TechLogos';

const TECH_CATALOG = [
  // AI Category
  {
    name: "Python",
    category: "AI",
    level: "Expert",
    role: "Core Language for AI & Intelligent Backends",
    icon: PythonLogo,
    tag: "Production Core",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `from fastapi import FastAPI\nfrom langchain.agents import AgentExecutor\n\napp = FastAPI(title="3X-AI-Worker")\n@app.post("/v1/agent/execute")\nasync def run_agent(task: BusinessTask):\n    return await agent.run(task)`
  },
  {
    name: "AI Agents",
    category: "AI",
    level: "Specialist",
    role: "Autonomous Multi-Step Decision & Tool-Use Systems",
    icon: AgentBrainLogo,
    tag: "Autonomous Ops",
    badgeColor: "bg-[#EAF3FF] text-[#0878FE] border-[#C9DFFF]",
    snippet: `// AI Agent Decision Loop\nconst agent = new AutonomousAgent({\n  tools: [CRMConnector, CalendarBooking, Scraper],\n  model: "ollama/llama3:8b",\n  temperature: 0.2\n});`
  },
  {
    name: "Ollama",
    category: "AI",
    level: "Advanced",
    role: "Local & Privacy-Preserving LLM Deployment",
    icon: OllamaLogo,
    tag: "Zero Cloud Cost",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    snippet: `$ ollama run llama3:8b\n# Running locally on enterprise server\n# 0 cloud API costs, 100% HIPAA/GDPR private`
  },
  {
    name: "LLMs & RAG",
    category: "AI",
    level: "Advanced",
    role: "Context Retrieval, Embeddings & Vector Search",
    icon: Cpu,
    tag: "Zero Hallucination",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `SELECT doc_id, content, 1 - (embedding <=> query_vec) AS similarity\nFROM knowledge_base\nORDER BY similarity DESC LIMIT 5;`
  },
  {
    name: "Prompt Engineering",
    category: "AI",
    level: "Expert",
    role: "Deterministic JSON Schema & System Prompts",
    icon: Code2,
    tag: "Structured Data",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `SYSTEM_PROMPT = """\nYou are the 3X Lead Qualification Engine.\nAlways return strictly validated JSON matching\nthe LeadQualificationSchema."""`
  },

  // Automation Category
  {
    name: "n8n",
    category: "Automation",
    level: "Expert",
    role: "Visual Workflow Pipelines & Automated Logic",
    icon: N8nLogo,
    tag: "Self-Hosted & Cloud",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    snippet: `{\n  "nodes": [\n    { "name": "Webhook Inbound", "type": "n8n-nodes-base.webhook" },\n    { "name": "AI Qualification", "type": "n8n-nodes-base.openAi" },\n    { "name": "Update CRM", "type": "n8n-nodes-base.supabase" }\n  ]\n}`
  },
  {
    name: "Webhooks",
    category: "Automation",
    level: "Expert",
    role: "Sub-Second Event Triggers & Real-Time Sync",
    icon: WebhooksLogo,
    tag: "Sub-Second Latency",
    badgeColor: "bg-[#EAF3FF] text-[#0878FE] border-[#C9DFFF]",
    snippet: `POST /api/v1/webhook/incoming HTTP/1.1\nHost: api.3xautomation.com\nX-Webhook-Signature: sha256=9f82c...\nContent-Type: application/json`
  },
  {
    name: "Workflow Automation",
    category: "Automation",
    level: "Specialist",
    role: "End-to-End Business Logic & Automated Routing",
    icon: Workflow,
    tag: "Hours Saved Daily",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `// Automated Routing Pipeline\nif (lead.score >= 85) {\n  await triggerVIPRoute(lead);\n} else {\n  await triggerNurtureCampaign(lead);\n}`
  },
  {
    name: "API Integrations",
    category: "Automation",
    level: "Expert",
    role: "REST & GraphQL Cross-Platform Connectors",
    icon: ApiLogo,
    tag: "Unified Systems",
    badgeColor: "bg-[#EAF3FF] text-[#0878FE] border-[#C9DFFF]",
    snippet: `async function syncPlatforms(leadData) {\n  await Promise.all([\n    crm.insert(leadData),\n    slack.notify("#sales-alerts", leadData),\n    calendar.reserveSlot(leadData.preferredTime)\n  ]);\n}`
  },

  // Backend Category
  {
    name: "FastAPI",
    category: "Backend",
    level: "Advanced",
    role: "Ultra-Fast Asynchronous Python Microservices",
    icon: FastAPILogo,
    tag: "Async High Throughput",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    snippet: `@app.post("/v1/score-lead", response_model=QualificationResult)\nasync def score_lead(inquiry: LeadInquiry):\n    return await scoring_service.calculate(inquiry)`
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced",
    role: "Server Runtime & Event-Driven Microservices",
    icon: NodeLogo,
    tag: "Scalable Services",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    snippet: `import express from 'express';\nimport { createServer } from 'http';\n\nconst app = express();\napp.use(express.json());`
  },
  {
    name: "Express",
    category: "Backend",
    level: "Advanced",
    role: "RESTful API Server & Webhook Handlers",
    icon: Server,
    tag: "Robust Architecture",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    snippet: `router.post('/lead/intake', authenticateRequest, async (req, res) => {\n  const result = await processInboundLead(req.body);\n  return res.status(200).json(result);\n});`
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Expert",
    role: "Production API Design, OpenAPI & Schemas",
    icon: ApiLogo,
    tag: "Standardized Specs",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `GET /api/v1/leads?status=qualified&tier=A\n200 OK\n{\n  "total": 42,\n  "items": [...]\n}`
  },

  // Frontend Category
  {
    name: "React",
    category: "Frontend",
    level: "Advanced",
    role: "Modern Component Architecture & Dashboards",
    icon: ReactLogo,
    tag: "Modern UI / UX",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `export function LeadDashboard() {\n  const { leads, loading } = useRealtimeLeads();\n  return <KanbanBoard data={leads} />;\n}`
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Expert",
    role: "Modern ES6+, Async Patterns & DOM Logic",
    icon: JavaScriptLogo,
    tag: "Full-Stack Core",
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    snippet: `const qualifiedLeads = rawLeads\n  .filter(lead => lead.score > 80)\n  .map(lead => formatCRMRecord(lead));`
  },
  {
    name: "HTML & CSS",
    category: "Frontend",
    level: "Expert",
    role: "Tailwind CSS, Semantic Accessibility & Layouts",
    icon: HtmlCssLogo,
    tag: "Responsive & Fast",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    snippet: `<div className="bg-white border border-[#C9DFFF] rounded-2xl shadow-card">\n  <!-- High-contrast, keyboard-accessible UI -->\n</div>`
  },

  // Database Category
  {
    name: "Supabase",
    category: "Database",
    level: "Advanced",
    role: "Managed Postgres, Realtime Webhooks & RLS",
    icon: SupabaseLogo,
    tag: "Realtime Data Engine",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    snippet: `const { data, error } = await supabase\n  .from('leads')\n  .insert([payload])\n  .select();`
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Advanced",
    role: "Relational Queries, Schema Design & pgvector",
    icon: PostgreSQLLogo,
    tag: "Enterprise Data",
    badgeColor: "bg-slate-100 text-slate-800 border-slate-200",
    snippet: `CREATE TABLE leads (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  name TEXT NOT NULL,\n  qualification_score INT CHECK (qualification_score BETWEEN 0 AND 100)\n);`
  },

  // Other Category
  {
    name: "CRM Systems",
    category: "Other",
    level: "Specialist",
    role: "HubSpot, GoHighLevel & Custom CRM Platforms",
    icon: CRMLogo,
    tag: "Sales Pipeline Sync",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    snippet: `await hubspotClient.crm.contacts.basicApi.create({\n  properties: {\n    email: lead.email,\n    lead_score: lead.score\n  }\n});`
  },
  {
    name: "Authentication",
    category: "Other",
    level: "Advanced",
    role: "JWT Tokens, OAuth 2.0 & Role-Based Access",
    icon: AuthLogo,
    tag: "Bank-Grade Security",
    badgeColor: "bg-blue-50 text-[#0878FE] border-[#C9DFFF]",
    snippet: `const token = jwt.sign(\n  { userId: user.id, role: 'broker_admin' },\n  process.env.JWT_SECRET,\n  { expiresIn: '7d' }\n);`
  },
  {
    name: "Git & GitHub",
    category: "Other",
    level: "Expert",
    role: "Version Control, CI/CD Actions & Code Reviews",
    icon: GitLogo,
    tag: "Reliable Deployments",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    snippet: `$ git checkout -b feature/n8n-webhook-handler\n$ git commit -m "feat: automated lead scoring pipeline"\n$ git push origin main`
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedTech, setSelectedTech] = useState(TECH_CATALOG[0]);
  const [copied, setCopied] = useState(false);
  const [showArchitectureDiagram, setShowArchitectureDiagram] = useState(false);

  const categories = ['ALL', 'AI', 'Automation', 'Backend', 'Frontend', 'Database', 'Other'];

  const filteredItems = activeCategory === 'ALL'
    ? TECH_CATALOG
    : TECH_CATALOG.filter(item => item.category === activeCategory);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-transparent relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(8,120,254,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(8,120,254,0.18)_0%,transparent_70%)] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3FF] dark:bg-[#0878FE]/15 border border-[#C9DFFF] dark:border-[#0878FE]/30 text-[#0878FE] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & AI Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] dark:text-white tracking-tight leading-tight mb-4">
              Tools I <span className="text-[#0878FE] dark:text-cyan-400">Work With</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
              A production-tested stack connecting LLMs, workflow orchestrators, backend APIs, relational databases, and modern frontends.
            </p>
          </div>

          {/* Quick Stats & Architecture Blueprint Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowArchitectureDiagram(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EAF3FF] dark:bg-[#0878FE]/15 text-[#0878FE] dark:text-cyan-400 hover:bg-[#0878FE] hover:text-white dark:hover:bg-[#0878FE] dark:hover:text-white border border-[#C9DFFF] dark:border-[#0878FE]/30 transition-all font-bold text-xs sm:text-sm shadow-sm"
            >
              <Layers className="w-4 h-4" />
              <span>View Master Architecture Blueprint</span>
            </button>
          </div>
        </div>

        {/* Master Architecture Visual Card Banner */}
        <div className="mb-12 bg-white dark:bg-[#0B101E] rounded-3xl p-6 sm:p-8 border border-[#C9DFFF] dark:border-slate-800 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-[#C9DFFF]/70 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-sm sm:text-base font-bold text-[#111827] dark:text-white">
                Master System Architecture: How I Connect These Tools in Production
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowArchitectureDiagram(true)}
              className="text-xs font-semibold text-[#0878FE] dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Click to Enlarge Full Blueprint</span>
            </button>
          </div>

          <div 
            className="relative rounded-2xl overflow-hidden border border-[#C9DFFF] dark:border-slate-800 cursor-pointer group max-h-80"
            onClick={() => setShowArchitectureDiagram(true)}
          >
            <img 
              src="/images/master-architecture.jpg" 
              alt="Enterprise AI Automation Platform Architecture Blueprint"
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 text-[#0878FE] dark:text-cyan-400 font-bold text-xs shadow-lg transition-opacity border border-[#C9DFFF] dark:border-slate-700">
                Inspect 5-Layer Integration Map
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[#0878FE] text-white border-[#0878FE] shadow-glow-sm -translate-y-0.5'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-[#C9DFFF] dark:border-slate-800 hover:border-[#0878FE] hover:text-[#0878FE] dark:hover:text-cyan-400 hover:bg-[#F8FAFE] dark:hover:bg-slate-800'
                }`}
              >
                {cat === 'ALL' ? 'All Technologies' : cat}
              </button>
            );
          })}
        </div>

        {/* 2-Column Split: High-Impact Visual Grid on Left + Interactive Code Inspector on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech Grid (8 cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((tech) => {
                const IconComponent = tech.icon;
                const isSelected = selectedTech.name === tech.name;

                return (
                  <div
                    key={tech.name}
                    onClick={() => setSelectedTech(tech)}
                    className={`group cursor-pointer relative bg-white dark:bg-[#0B101E] rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#0878FE] dark:border-cyan-400 ring-2 ring-[#0878FE]/20 shadow-glow-sm bg-gradient-to-b from-white to-[#F8FAFE] dark:from-slate-800 dark:to-slate-900 -translate-y-1'
                        : 'border-[#C9DFFF] dark:border-slate-800 hover:border-[#0878FE] dark:hover:border-cyan-400/80 hover:shadow-card-hover hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      {/* Top Header: Logo + Level */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#F8FAFE] dark:bg-slate-900 border border-[#C9DFFF] dark:border-slate-800 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                          {typeof IconComponent === 'function' ? (
                            <IconComponent className="w-7 h-7" />
                          ) : (
                            <IconComponent className="w-6 h-6 text-[#0878FE] dark:text-cyan-400" />
                          )}
                        </div>

                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${tech.badgeColor} dark:bg-slate-900 dark:border-slate-700`}>
                          {tech.level}
                        </span>
                      </div>

                      {/* Tech Name */}
                      <h3 className="text-base font-bold text-[#111827] dark:text-white group-hover:text-[#0878FE] dark:group-hover:text-cyan-400 transition-colors mb-1.5 flex items-center justify-between">
                        <span>{tech.name}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#0878FE] dark:bg-cyan-400 animate-pulse"></span>
                        )}
                      </h3>

                      {/* Tech Role / Business Use */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4 line-clamp-2">
                        {tech.role}
                      </p>
                    </div>

                    {/* Bottom Tag */}
                    <div className="pt-3 border-t border-[#C9DFFF]/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        {tech.tag}
                      </span>
                      <span className="text-[#0878FE] dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                        Inspect →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Live Integration & Code Inspector (4 cols) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-[#111827] text-white rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden">
              
              {/* Subtle Blue Header Glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0878FE] via-[#0255FD] to-[#0878FE]"></div>

              {/* Terminal Window Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2">
                    stack-inspector.sh
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(selectedTech.snippet)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy snippet"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Active Tool Info Banner */}
              <div className="flex items-center gap-3.5 mb-4 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center p-2 shrink-0">
                  {typeof selectedTech.icon === 'function' ? (
                    <selectedTech.icon className="w-6 h-6" />
                  ) : (
                    <selectedTech.icon className="w-5 h-5 text-[#0878FE]" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    {selectedTech.name}
                    <span className="text-[10px] font-mono text-[#0878FE] px-2 py-0.2 bg-[#0878FE]/10 rounded border border-[#0878FE]/30">
                      {selectedTech.category}
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Proficiency: <span className="text-emerald-400 font-bold">{selectedTech.level}</span>
                  </p>
                </div>
              </div>

              {/* Business Value Highlight */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  How Usama Implements This:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedTech.role}
                </p>
              </div>

              {/* Real Code / Configuration Terminal */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#0878FE] block mb-2">
                  Sample Implementation Code
                </span>
                <div className="bg-[#0A0F1D] p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-56">
                  <pre>{selectedTech.snippet}</pre>
                </div>
              </div>

              {/* Footer Tip */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Production Ready
                </span>
                <span className="text-[#0878FE]">
                  Click card to switch
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Master Architecture Blueprint */}
      {showArchitectureDiagram && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowArchitectureDiagram(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-3xl p-5 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-3 px-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0878FE]" />
                <span className="text-base font-bold text-[#111827]">
                  Enterprise AI Automation Platform Architecture Blueprint
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowArchitectureDiagram(false)}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold"
              >
                Close (ESC)
              </button>
            </div>
            <img 
              src="/images/master-architecture.jpg" 
              alt="High resolution architecture blueprint"
              className="w-full h-auto rounded-2xl object-contain max-h-[82vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
