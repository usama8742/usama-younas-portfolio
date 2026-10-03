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
  ShieldCheck,
  Bot,
  Brain,
  Network,
  Cloud,
  Globe,
  Radio,
  FileCode2,
  Boxes,
  Compass
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

export const DOMAIN_STACKS = [
  {
    id: "ai-agents",
    title: "AI & Multi-Agent Systems",
    tagline: "Autonomous Reasoning & Multi-Agent Orchestration",
    badge: "Core Specialization",
    icon: Brain,
    color: "from-blue-600 to-indigo-600",
    description: "Architecting autonomous systems that reason, collaborate, use specialized tools, and execute end-to-end business workflows with human oversight.",
    skills: [
      {
        name: "LangGraph",
        role: "Stateful Multi-Agent Orchestration & Cyclic Graphs",
        level: "Production Core",
        highlight: true,
        snippet: `from langgraph.graph import StateGraph, END\n\nbuilder = StateGraph(AgentState)\nbuilder.add_node("researcher", research_agent)\nbuilder.add_node("qa_validator", validation_agent)\nbuilder.add_edge("researcher", "qa_validator")\nbuilder.add_conditional_edges("qa_validator", should_continue, {"loop": "researcher", "done": END})\ngraph = builder.compile()`
      },
      {
        name: "LangChain",
        role: "LLM Chaining, Tool Calling & Structured Output Parsers",
        level: "Expert",
        highlight: true,
        snippet: `from langchain_core.prompts import ChatPromptTemplate\nfrom langchain_openai import ChatOpenAI\n\nprompt = ChatPromptTemplate.from_messages([\n    ("system", "Extract structured lead intent matching schema."),\n    ("user", "{input_message}")\n])\nchain = prompt | llm.with_structured_output(LeadQualificationSchema)`
      },
      {
        name: "CrewAI",
        role: "Role-Based Autonomous Multi-Agent Teams",
        level: "Specialist",
        highlight: true,
        snippet: `from crewai import Agent, Crew, Task\n\nlead_qualifier = Agent(role="Senior Intake Analyst", goal="Score and classify inbound leads", verbose=True)\nsync_specialist = Agent(role="CRM Operator", goal="Sync enriched data to HubSpot & Supabase")\ncrew = Crew(agents=[lead_qualifier, sync_specialist], tasks=[score_task, sync_task])\nresult = crew.kickoff()`
      },
      {
        name: "RAG Pipelines",
        role: "Hybrid Vector Search, Chunking & Context Retrieval",
        level: "Production Core",
        highlight: true,
        snippet: `// Vector similarity search with pgvector & LangChain\nconst results = await vectorStore.similaritySearchWithScore(\n  "commercial lease tenant escalation rules",\n  5\n);\nreturn rerankedContext(results);`
      },
      {
        name: "Multi-Agent Orchestration",
        role: "Hierarchical Supervisor, Router & Sub-Agent Topologies",
        level: "Advanced",
        highlight: false,
        snippet: `async function orchestrateLeadPipeline(inbound) {\n  const classification = await routerAgent.classify(inbound);\n  if (classification.type === "high_value") {\n    return await vipExecutiveAgent.handle(inbound);\n  }\n  return await standardNurtureAgent.handle(inbound);\n}`
      },
      {
        name: "Human-in-the-Loop",
        role: "Review Checkpoints, Escalations & Approval Gates",
        level: "Advanced",
        highlight: false,
        snippet: `// Interrupt execution graph for human verification\ngraph = builder.compile(checkpointer=memory, interrupt_before=["execute_payout"])`
      },
      {
        name: "Prompt Engineering",
        role: "Deterministic JSON Formatting, Few-Shot & COT Prompts",
        level: "Expert",
        highlight: false,
        snippet: `SYSTEM_PROMPT = """\nYou are the 3X Lead Classification Engine.\nRules:\n1. Adhere strictly to the Pydantic schema.\n2. Output zero markdown formatting.\n3. Return confidence score from 0.0 to 1.0."""`
      },
      {
        name: "Sentiment & Intent Analysis",
        role: "Real-Time Customer Sentiment Tracking & Urgency Detection",
        level: "Specialist",
        highlight: false,
        snippet: `const analysis = await analyzeSentiment({\n  transcript: callTranscript,\n  metrics: ["urgency", "churn_risk", "buying_intent"]\n});`
      },
      {
        name: "Structured Outputs",
        role: "Guaranteed Pydantic / JSON Schema Conformance",
        level: "Expert",
        highlight: false,
        snippet: `class LeadExtraction(BaseModel):\n    name: str\n    company: Optional[str]\n    budget_usd: float = Field(..., gt=0)\n    target_services: List[str]\n    priority: Literal["low", "medium", "high", "urgent"]`
      }
    ]
  },
  {
    id: "llms-apis",
    title: "LLMs & AI APIs",
    tagline: "Frontier Foundation Models & Audio AI",
    badge: "Model Engine",
    icon: Cpu,
    color: "from-sky-500 to-blue-600",
    description: "Integrating and fine-tuning frontier generative AI models, low-latency audio synthesis, and multimodal APIs for production workloads.",
    skills: [
      {
        name: "OpenAI (GPT-4o / mini)",
        role: "Multimodal Reasoning, Function Calling & Vision",
        level: "Production Core",
        highlight: true,
        snippet: `import OpenAI from "openai";\nconst openai = new OpenAI();\n\nconst completion = await openai.chat.completions.create({\n  model: "gpt-4o",\n  messages: [{ role: "system", content: "Analyze invoice image" }],\n  response_format: { type: "json_object" }\n});`
      },
      {
        name: "Anthropic Claude",
        role: "200k Context Analysis, Complex Logic & Coding Engines",
        level: "Advanced",
        highlight: true,
        snippet: `import Anthropic from "@anthropic-ai/sdk";\nconst anthropic = new Anthropic();\n\nconst msg = await anthropic.messages.create({\n  model: "claude-3-5-sonnet-20241022",\n  max_tokens: 4096,\n  messages: [{ role: "user", content: "Audit commercial agreement" }]\n});`
      },
      {
        name: "Google Gemini",
        role: "High-Throughput Multimodal Processing & Deep Reasoning",
        level: "Advanced",
        highlight: true,
        snippet: `const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });\nconst result = await model.generateContent([prompt, fileAttachment]);\nconsole.log(result.response.text());`
      },
      {
        name: "ElevenLabs",
        role: "Ultra-Low Latency Conversational Voice & Speech Synthesis",
        level: "Specialist",
        highlight: true,
        snippet: `import { ElevenLabsClient } from "elevenlabs";\nconst client = new ElevenLabsClient();\n\nconst audioStream = await client.textToSpeech.convertAsStream("voice_id", {\n  text: "Hello Usama, your appointment is confirmed for 2:00 PM tomorrow.",\n  model_id: "eleven_turbo_v2_5"\n});`
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    tagline: "High-Throughput Async Microservices & Databases",
    badge: "System Backbone",
    icon: Server,
    color: "from-emerald-600 to-teal-700",
    description: "Building fast, fault-tolerant Python and Node.js backend services, real-time WebSockets, streaming WebRTC, and typed database architectures.",
    skills: [
      {
        name: "FastAPI",
        role: "Async Python REST Microservices & OpenAPI",
        level: "Production Core",
        highlight: true,
        snippet: `from fastapi import FastAPI, Depends\napp = FastAPI(title="3X-Automation-Core")\n\n@app.post("/v1/pipeline/dispatch")\nasync def dispatch_pipeline(request: PipelineRequest, user: User = Depends(get_current_user)):\n    return await worker.queue(request)`
      },
      {
        name: "Flask",
        role: "Lightweight Python Services & Webhook Handlers",
        level: "Advanced",
        highlight: false,
        snippet: `from flask import Flask, request, jsonify\napp = Flask(__name__)\n\n@app.route("/webhook/twilio", methods=["POST"])\ndef twilio_handler():\n    return jsonify({"status": "received"})`
      },
      {
        name: "Node.js & Fastify / Express",
        role: "Event-Driven APIs, Microservices & High-Concurrency I/O",
        level: "Advanced",
        highlight: true,
        snippet: `import Fastify from "fastify";\nconst fastify = Fastify({ logger: true });\n\nfastify.post("/v1/lead/ingest", async (req, reply) => {\n  return await ingestLead(req.body);\n});`
      },
      {
        name: "WebSockets & WebRTC",
        role: "Bidirectional Real-Time Communication & Audio Streaming",
        level: "Specialist",
        highlight: true,
        snippet: `// Real-Time Audio Streaming WebRTC PeerConnection\nconst pc = new RTCPeerConnection();\npc.ontrack = (event) => audioPlayer.srcObject = event.streams[0];`
      },
      {
        name: "asyncio & Pydantic v2",
        role: "Concurrent Python Tasks, Thread Pools & Strict Type Schemas",
        level: "Expert",
        highlight: false,
        snippet: `import asyncio\nfrom pydantic import BaseModel, Field\n\nasync def batch_process(items):\n    return await asyncio.gather(*(process_item(x) for x in items))`
      },
      {
        name: "SQLAlchemy 2.0 & Alembic",
        role: "Async ORM, Database Migrations & Transaction Guarantees",
        level: "Advanced",
        highlight: false,
        snippet: `async with async_session() as session:\n    result = await session.execute(select(Lead).where(Lead.score > 85))\n    leads = result.scalars().all()`
      },
      {
        name: "PostgreSQL & Supabase",
        role: "Relational Queries, pgvector Similarity Search & RLS",
        level: "Production Core",
        highlight: true,
        snippet: `SELECT id, name, 1 - (embedding <=> query_vec) AS match_score\nFROM knowledge_docs\nWHERE match_score > 0.82\nORDER BY match_score DESC LIMIT 5;`
      },
      {
        name: "SQLite",
        role: "Embedded Edge Storage & Local Vector Indexing",
        level: "Advanced",
        highlight: false,
        snippet: `// Local embedded state checkpointing for agents`
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & Extension Dev",
    tagline: "Interactive Dashboards & Browser Tooling",
    badge: "Client Experience",
    icon: Layout,
    color: "from-blue-500 to-cyan-500",
    description: "Designing high-performance responsive web applications, real-time analytics dashboards, and custom Chrome Extensions for business automation.",
    skills: [
      {
        name: "React.js & Next.js",
        role: "Server-Side Rendering, App Router & Component Systems",
        level: "Production Core",
        highlight: true,
        snippet: `export default function AutomationDashboard({ initialData }) {\n  const { data } = useQuery({ queryKey: ["leads"], queryFn: fetchLeads });\n  return <AnalyticsGrid metrics={data} />;\n}`
      },
      {
        name: "TypeScript",
        role: "Strict Compile-Time Typing & API Data Contracts",
        level: "Expert",
        highlight: true,
        snippet: `export interface SystemTelemetry {\n  nodeId: string;\n  status: "idle" | "running" | "error";\n  uptimeSec: number;\n  memoryMb: number;\n}`
      },
      {
        name: "Tailwind CSS & Radix UI",
        role: "Accessible, Modern & Custom Design Systems",
        level: "Expert",
        highlight: true,
        snippet: `<div className="bg-white border border-[#DBD6CF] rounded-3xl p-6 shadow-card hover:border-[#FE330A] transition-all">\n  <!-- High-contrast accessible interface -->\n</div>`
      },
      {
        name: "Recharts",
        role: "Real-Time Telemetry & Financial ROI Data Visualizations",
        level: "Advanced",
        highlight: false,
        snippet: `<ResponsiveContainer width="100%" height={260}>\n  <AreaChart data={savingsData}>\n    <Area type="monotone" dataKey="savings" stroke="#FE330A" fill="#EFEAE3" />\n  </AreaChart>\n</ResponsiveContainer>`
      },
      {
        name: "TanStack Query",
        role: "Asynchronous Server State Management & Optimistic UI",
        level: "Advanced",
        highlight: false,
        snippet: `const { data, isLoading } = useQuery({\n  queryKey: ["agent-logs", sessionId],\n  queryFn: () => getAgentTranscript(sessionId),\n  refetchInterval: 3000\n});`
      },
      {
        name: "Chrome Extensions",
        role: "Manifest V3 In-Browser Automation & DOM Scraping Tools",
        level: "Specialist",
        highlight: true,
        snippet: `// Manifest V3 Background Service Worker\nchrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {\n  if (msg.action === "EXTRACT_PAGE_LEAD") {\n    const data = await parsePageDOM();\n    await syncTo3XCrm(data);\n  }\n});`
      },
      {
        name: "Vite",
        role: "Lightning-Fast HMR & Optimized Production Bundler",
        level: "Expert",
        highlight: false,
        snippet: `// Production bundle compilation in under 2 seconds with zero latency`
      }
    ]
  },
  {
    id: "automation-cloud",
    title: "Automation, Scraping & Cloud",
    tagline: "n8n, Headless Scraping & Cloud DevOps",
    badge: "Execution & Infrastructure",
    icon: Workflow,
    color: "from-amber-500 to-orange-600",
    description: "Orchestrating visual automated workflows, enterprise browser scraping, multi-channel communication APIs, containerization, and reliable cloud deployments.",
    skills: [
      {
        name: "n8n & Make",
        role: "Visual Workflow Pipelines, Multi-Step Webhooks & Logic",
        level: "Expert",
        highlight: true,
        snippet: `// n8n workflow execution node JSON\n{\n  "name": "AI Decision Gate",\n  "type": "n8n-nodes-base.if",\n  "parameters": { "conditions": { "number": [{ "value1": "={{ $json.confidence }}", "operation": "largerEqual", "value2": 0.9 }] } }\n}`
      },
      {
        name: "Selenium, Playwright & DrissionPage",
        role: "Headless Browser Automation, Anti-Bot Bypass & Data Scraping",
        level: "Specialist",
        highlight: true,
        snippet: `from playwright.async_api import async_playwright\n\nasync with async_playwright() as p:\n    browser = await p.chromium.launch(headless=True)\n    page = await browser.new_page()\n    await page.goto("https://portal.example.com")\n    data = await page.locator(".listing-card").all_text_contents()`
      },
      {
        name: "Twilio & HubSpot",
        role: "Programmable SMS/Voice & Enterprise CRM Integrations",
        level: "Advanced",
        highlight: true,
        snippet: `await twilioClient.messages.create({\n  body: "Hi! Your AI automated inquiry has been approved.",\n  from: process.env.TWILIO_PHONE,\n  to: leadPhone\n});`
      },
      {
        name: "Google APIs",
        role: "Google Calendar, Gmail, Drive & Sheets Integration",
        level: "Expert",
        highlight: false,
        snippet: `await calendar.events.insert({\n  calendarId: "primary",\n  resource: { summary: "3X AI Strategy Session", start: { dateTime: timeSlot } }\n});`
      },
      {
        name: "Docker",
        role: "Containerized Microservices & Reproducible Environments",
        level: "Advanced",
        highlight: true,
        snippet: `FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`
      },
      {
        name: "AWS (EC2, S3)",
        role: "Cloud Compute, File Storage & Scalable Infrastructure",
        level: "Advanced",
        highlight: false,
        snippet: `// AWS S3 presigned URL for document storage\nconst command = new PutObjectCommand({ Bucket: "3x-docs", Key: docKey });\nconst url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });`
      },
      {
        name: "Vercel, Render & GitHub Actions",
        role: "Continuous Integration, Automated Builds & Edge Deployments",
        level: "Production Core",
        highlight: true,
        snippet: `name: CI/CD Pipeline\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci && npm run build`
      }
    ]
  }
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('ai-agents');
  const [selectedSkill, setSelectedSkill] = useState(DOMAIN_STACKS[0].skills[0]);
  const [copied, setCopied] = useState(false);
  const [showArchitectureDiagram, setShowArchitectureDiagram] = useState(false);

  const activeDomain = DOMAIN_STACKS.find(d => d.id === activeTab) || DOMAIN_STACKS[0];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tech-stack" className="py-20 lg:py-28 bg-transparent relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(8,120,254,0.08)_0%,transparent_70%)] pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFEAE3] border border-[#DBD6CF] text-[#FE330A] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production AI Engineering &amp; Full-Stack Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#191919] tracking-tight leading-tight mb-4">
              Engineered With <span className="text-[#FE330A]">Modern Tools.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              A battle-tested technology stack spanning autonomous multi-agent systems, frontier LLM APIs, async backends, high-performance web extensions, and robust cloud automation.
            </p>
          </div>

          {/* Quick Stats & Architecture Blueprint Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowArchitectureDiagram(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EFEAE3] text-[#FE330A] hover:bg-[#FE330A] hover:text-white border border-[#DBD6CF] transition-all font-bold text-xs sm:text-sm shadow-sm"
            >
              <Layers className="w-4 h-4" />
              <span>View Full Architecture Blueprint</span>
            </button>
          </div>
        </div>

        {/* 5 Core Domain Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {DOMAIN_STACKS.map((domain) => {
            const isActive = activeTab === domain.id;
            const Icon = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => {
                  setActiveTab(domain.id);
                  setSelectedSkill(domain.skills[0]);
                }}
                className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-white border-[#FE330A] shadow-card scale-[1.02] ring-2 ring-[#FE330A]/20'
                    : 'bg-[#EFEAE3] border-[#DBD6CF] hover:bg-white text-slate-700'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 ${
                  isActive ? 'bg-[#EFEAE3] text-[#FE330A]' : 'bg-slate-200/60 text-slate-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-[#191919] line-clamp-1">
                  {domain.title}
                </span>
                <span className="text-[10px] text-slate-500 font-mono mt-0.5 line-clamp-1">
                  {domain.skills.length} core tools
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Overview Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DBD6CF] shadow-card mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#DBD6CF]">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE3] text-[#FE330A] text-xs font-bold font-mono">
                <span>{activeDomain.badge}</span>
                <span>•</span>
                <span>{activeDomain.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#191919]">
                {activeDomain.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                {activeDomain.description}
              </p>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono font-bold text-slate-500 bg-[#EFEAE3] px-3 py-1.5 rounded-xl border border-[#DBD6CF]">
                Production Grade
              </span>
            </div>
          </div>

          {/* Interactive Bento: Skills Grid (Left 7 cols) + Code Inspector (Right 5 cols) */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-6">
            
            {/* Skills Badges Grid (7 cols) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
              {activeDomain.skills.map((skill, idx) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 text-left ${
                      isSelected
                        ? 'bg-[#EFEAE3] border-[#FE330A] shadow-sm ring-1 ring-[#FE330A]'
                        : 'bg-[#EFEAE3] border-[#DBD6CF] hover:border-[#FE330A] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-sm text-[#191919] flex items-center gap-1.5">
                        {skill.name}
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        )}
                      </h4>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-[#FE330A] border border-[#DBD6CF]">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-snug line-clamp-2">
                      {skill.role}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Live Implementation Code Inspector (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-5 text-slate-200 shadow-xl font-mono text-xs flex flex-col justify-between min-h-[360px]">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] text-slate-400 font-bold ml-1">
                      {selectedSkill.name}.implementation
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(selectedSkill.snippet)}
                    className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition-colors bg-slate-800/80 px-2.5 py-1 rounded-md"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-[11px] text-sky-400 font-semibold mb-2">
                  // {selectedSkill.role}
                </div>

                <pre className="overflow-x-auto text-[11px] leading-relaxed text-slate-300 font-mono py-1 max-h-[240px]">
                  <code>{selectedSkill.snippet}</code>
                </pre>
              </div>

              <div className="pt-3 border-t border-slate-800 mt-4 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Type-Safe &amp; Tested
                </span>
                <span className="text-slate-500">3X Automation Architecture</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Modal for Full Architecture Blueprint */}
      {showArchitectureDiagram && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowArchitectureDiagram(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl border border-[#DBD6CF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-[#DBD6CF]">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#FE330A]" />
                <h3 className="font-bold text-base text-[#191919]">
                  Master System Architecture Blueprint
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowArchitectureDiagram(false)}
                className="w-8 h-8 rounded-full bg-[#EFEAE3] text-slate-600 hover:text-black flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-auto flex-1">
              <img 
                src="/images/master-architecture.jpg" 
                alt="Full Master Architecture Blueprint" 
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
