import React from 'react';
import { 
  Brain, 
  Database, 
  Workflow, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Zap, 
  FileText, 
  UserCheck, 
  RefreshCw,
  Server,
  Globe,
  Binary,
  Code2
} from 'lucide-react';

export default function VisualDiagramRenderer({ diagramType, title }) {
  switch (diagramType) {
    // 1. NEURAL NETWORK & MACHINE LEARNING PIPELINE DIAGRAM
    case 'neural-network':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Brain className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: Neural Network &amp; Decision Pipeline</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Forward Pass &amp; Backpropagation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 items-center py-4 text-center">
            {/* Stage 1: Raw Inputs */}
            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">1. Feature Inputs</span>
              <div className="space-y-1 text-[11px] font-semibold text-slate-800">
                <div className="bg-slate-50 p-1 rounded border border-slate-200">Client Signals</div>
                <div className="bg-slate-50 p-1 rounded border border-slate-200">Feature Vector [x₁..xₙ]</div>
                <div className="bg-slate-50 p-1 rounded border border-slate-200">Behavioral Score</div>
              </div>
            </div>

            {/* Stage 2: Hidden Layers & Activations */}
            <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] uppercase block">2. Hidden Neurons</span>
              <div className="space-y-1 text-[11px] font-semibold text-[#111827]">
                <div className="bg-white p-1 rounded border border-[#C9DFFF]">Linear (W · x + b)</div>
                <div className="bg-white p-1 rounded border border-[#C9DFFF]">ReLU / GELU Filter</div>
                <div className="bg-white p-1 rounded border border-[#C9DFFF]">Self-Attention Head</div>
              </div>
            </div>

            {/* Stage 3: Loss Function */}
            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase block">3. Loss &amp; Optimization</span>
              <div className="space-y-1 text-[11px] font-semibold text-indigo-900">
                <div className="bg-white p-1 rounded border border-indigo-200">Cross-Entropy Loss</div>
                <div className="bg-white p-1 rounded border border-indigo-200">AdamW Optimizer</div>
                <div className="bg-white p-1 rounded border border-indigo-200">Backprop Gradients</div>
              </div>
            </div>

            {/* Stage 4: Prediction Output */}
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">4. Production Output</span>
              <div className="space-y-1 text-[11px] font-bold text-emerald-900">
                <div className="bg-white p-1 rounded border border-emerald-200">Confidence: 99.4%</div>
                <div className="bg-white p-1 rounded border border-emerald-200">Class: High Intent</div>
                <div className="bg-emerald-600 text-white p-1 rounded">Automated Action</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span><strong>How It Works:</strong> Neurons multiply input weights by activation thresholds. Gradients update parameters backwards until error converges to near zero.</span>
            <span className="text-[#0878FE] font-mono font-semibold shrink-0">Convergence: Loss &lt; 0.003</span>
          </div>
        </div>
      );

    // 2. LLM PIPELINE & STRUCTURED OUTPUTS DIAGRAM
    case 'llm-pipeline':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Binary className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: LLM Tokenization, Attention &amp; Schema Guarantee</span>
            </span>
            <span className="text-[10px] font-mono text-[#0878FE] bg-[#EAF3FF] px-2 py-0.5 rounded border border-[#C9DFFF]">
              Strict Pydantic JSON
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 text-center">
            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase block">1. Inbound Text</span>
              <p className="text-xs font-bold text-slate-900 mt-1">Prompt &amp; Context</p>
              <span className="text-[10px] font-mono text-slate-500 mt-1 block">Byte-Pair Encoding</span>
            </div>

            <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] uppercase block">2. Transformer</span>
              <p className="text-xs font-bold text-[#111827] mt-1">Multi-Head Attention</p>
              <span className="text-[10px] font-mono text-[#0878FE] mt-1 block">Q, K, V Matrix Multiplies</span>
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-purple-700 uppercase block">3. Logit Bias Filter</span>
              <p className="text-xs font-bold text-purple-900 mt-1">Schema Constrained</p>
              <span className="text-[10px] font-mono text-purple-600 mt-1 block">Disallow Invalid Tokens</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">4. Verified Output</span>
              <p className="text-xs font-bold text-emerald-900 mt-1">100% Valid JSON</p>
              <span className="text-[10px] font-mono text-emerald-700 mt-1 block">Ready For Database</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Key Benefit:</strong> By applying constrained decoding with Pydantic v2 schemas at the logit level, LLMs cannot hallucinate unwanted formatting or corrupt CRM databases.
          </div>
        </div>
      );

    // 3. RAG ARCHITECTURE & VECTOR SEARCH DIAGRAM
    case 'rag-architecture':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Database className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: RAG Pipeline &amp; Vector Database</span>
            </span>
            <span className="text-[10px] font-mono text-[#0878FE] bg-[#EAF3FF] px-2 py-0.5 rounded border border-[#C9DFFF]">
              Zero Hallucinations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center py-4 text-center">
            {/* Step 1: Raw Knowledge */}
            <div className="p-2.5 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-500 block uppercase">1. Raw Files</span>
              <p className="text-xs font-bold text-slate-800 mt-1">PDFs, Contracts, Notion &amp; SQL</p>
            </div>

            <div className="text-[#0878FE] font-bold flex items-center justify-center">
              <span className="hidden sm:inline">➔</span>
              <span className="sm:hidden">↓</span>
            </div>

            {/* Step 2: Chunking & Embeddings */}
            <div className="p-2.5 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] block uppercase">2. Chunk &amp; Embed</span>
              <p className="text-xs font-bold text-[#111827] mt-1">1536-Dim Floating Point Vectors</p>
            </div>

            <div className="text-[#0878FE] font-bold flex items-center justify-center">
              <span className="hidden sm:inline">➔</span>
              <span className="sm:hidden">↓</span>
            </div>

            {/* Step 3: Top Chunks + LLM Synthesis */}
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-emerald-800 block uppercase">3. Grounded Answer</span>
              <p className="text-xs font-bold text-emerald-900 mt-1">Exact Page Citation &amp; Zero Errors</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>How It Works:</strong> Client question is converted to an embedding vector. High-speed vector search (HNSW index) retrieves the top 3 exact paragraphs, which are injected into the prompt as ground-truth facts.
          </div>
        </div>
      );

    // 4. LANGGRAPH CYCLIC MULTI-AGENT STATE GRAPH DIAGRAM
    case 'langgraph-cycle':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: LangGraph Cyclic Multi-Agent Team</span>
            </span>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Self-Healing Loop
            </span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#C9DFFF] relative space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-center">
              {/* Node 1: Supervisor */}
              <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] flex-1 min-w-[130px]">
                <span className="text-[10px] font-mono font-bold text-[#0878FE] uppercase block">Supervisor Node</span>
                <span className="text-xs font-bold text-[#111827]">Task Decomposition</span>
              </div>

              <span className="text-[#0878FE] font-bold">➔</span>

              {/* Node 2: Worker */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-300 flex-1 min-w-[130px]">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase block">Specialist Worker</span>
                <span className="text-xs font-bold text-slate-900">Tool &amp; API Calling</span>
              </div>

              <span className="text-[#0878FE] font-bold">➔</span>

              {/* Node 3: QA Validator */}
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 flex-1 min-w-[130px]">
                <span className="text-[10px] font-mono font-bold text-amber-800 uppercase block">QA Auditor Node</span>
                <span className="text-xs font-bold text-amber-900">Format &amp; Error Check</span>
              </div>
            </div>

            {/* Loopback conditional line */}
            <div className="p-2.5 rounded-lg bg-slate-50 border border-dashed border-[#0878FE] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-600 gap-1.5">
              <span className="flex items-center gap-1.5 text-[#0878FE] font-bold">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                Conditional Branch:
              </span>
              <span>Errors &gt; 0 ➔ Loop back to Worker with compiler feedback</span>
              <span className="font-bold text-emerald-600">Errors == 0 ➔ Final Delivery</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Key Advantage:</strong> Unlike linear scripts that break on any anomaly, cyclic state machines inspect intermediate outputs, reflect on mistakes, and autonomously retry until validated.
          </div>
        </div>
      );

    // 5. HUMAN-IN-THE-LOOP & GOVERNANCE DIAGRAM
    case 'hitl-governance':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: Confidence Scoring &amp; Human Approval Gate</span>
            </span>
            <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Risk Control
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 py-3">
            {/* Path A: High Confidence (Automated) */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800">Confidence Score ≥ 95%</span>
                <span className="text-[10px] font-mono font-bold bg-emerald-600 text-white px-2 py-0.5 rounded">
                  Green Light
                </span>
              </div>
              <p className="text-xs text-slate-700">
                Data matches verified database rules and format constraints with zero ambiguity.
              </p>
              <div className="p-2 rounded bg-white border border-emerald-200 text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant Auto-Execution (No Human Needed)</span>
              </div>
            </div>

            {/* Path B: Low Confidence (Human Approval Gate) */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900">Confidence Score &lt; 95%</span>
                <span className="text-[10px] font-mono font-bold bg-amber-500 text-white px-2 py-0.5 rounded">
                  Approval Gate
                </span>
              </div>
              <p className="text-xs text-slate-700">
                Ambiguous contract term, low-resolution invoice OCR, or VIP deal detected.
              </p>
              <div className="p-2 rounded bg-white border border-amber-200 text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-amber-600" />
                <span>Slack / WhatsApp Button: 1-Click Human Approval</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Peace of Mind:</strong> The system automates 90% of routine operations while ensuring your company remains 100% compliant, audited, and error-free.
          </div>
        </div>
      );

    // 6. N8N & PRODUCTION WORKFLOW AUTOMATION DIAGRAM
    case 'n8n-workflow':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: n8n Event-Driven Enterprise Pipeline</span>
            </span>
            <span className="text-[10px] font-mono text-[#0878FE] bg-[#EAF3FF] px-2 py-0.5 rounded border border-[#C9DFFF]">
              Sub-Second Execution
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 text-center">
            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">1. Inbound</span>
              <p className="text-xs font-bold text-[#111827] mt-1">Webhook Trigger</p>
              <span className="text-[10px] font-mono text-emerald-600 mt-0.5 block">&lt;20ms latency</span>
            </div>

            <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] block uppercase">2. AI Logic</span>
              <p className="text-xs font-bold text-[#111827] mt-1">LLM / Agent Node</p>
              <span className="text-[10px] font-mono text-[#0878FE] mt-0.5 block">Qualify &amp; Score</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">3. Database</span>
              <p className="text-xs font-bold text-[#111827] mt-1">CRM Sync</p>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">HubSpot / Supabase</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-emerald-800 block uppercase">4. Dispatch</span>
              <p className="text-xs font-bold text-emerald-900 mt-1">Instant Alert</p>
              <span className="text-[10px] font-mono text-emerald-700 mt-0.5 block">Slack &amp; WhatsApp</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Total Pipeline Runtime:</strong> ~1.4 seconds from customer submission to full CRM update and sales team push notification.
          </div>
        </div>
      );

    // 7. FASTAPI & ASYNC BACKEND DIAGRAM
    case 'fastapi-backend':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Server className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: High-Concurrency FastAPI &amp; Async Worker Engine</span>
            </span>
            <span className="text-[10px] font-mono text-[#0878FE] bg-[#EAF3FF] px-2 py-0.5 rounded border border-[#C9DFFF]">
              Non-Blocking I/O
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 text-center">
            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">1. Inbound I/O</span>
              <p className="text-xs font-bold text-[#111827] mt-1">HTTP / WebSockets</p>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">Uvicorn ASGI</span>
            </div>

            <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] block uppercase">2. Validation</span>
              <p className="text-xs font-bold text-[#111827] mt-1">Pydantic v2 Engine</p>
              <span className="text-[10px] font-mono text-[#0878FE] mt-0.5 block">Compiled Rust Core</span>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-amber-800 block uppercase">3. Async Tasks</span>
              <p className="text-xs font-bold text-amber-900 mt-1">asyncio Worker Pool</p>
              <span className="text-[10px] font-mono text-amber-700 mt-0.5 block">10,000+ Concurrency</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-emerald-800 block uppercase">4. Persistence</span>
              <p className="text-xs font-bold text-emerald-900 mt-1">PostgreSQL &amp; Redis</p>
              <span className="text-[10px] font-mono text-emerald-700 mt-0.5 block">Connection Pooling</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Production Standard:</strong> FastAPI delivers sub-millisecond route dispatching and handles thousands of concurrent AI agent requests without thread locking.
          </div>
        </div>
      );

    // 8. WEB SCRAPING & DATA HARVESTING DIAGRAM
    case 'web-scraping':
      return (
        <div className="bg-[#F8FAFE] rounded-2xl p-5 border border-[#C9DFFF] space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-[#C9DFFF]/70 pb-2.5">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#0878FE]" />
              <span>Architecture Diagram: Anti-Detection Scraping &amp; Data Pipeline</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              100% Bypass Rate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 text-center">
            <div className="p-3 rounded-xl bg-white border border-[#C9DFFF] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">1. Network</span>
              <p className="text-xs font-bold text-[#111827] mt-1">Residential Proxies</p>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5 block">IP Rotation Per Request</span>
            </div>

            <div className="p-3 rounded-xl bg-[#EAF3FF] border border-[#0878FE] shadow-sm">
              <span className="text-[10px] font-mono font-bold text-[#0878FE] block uppercase">2. Browser</span>
              <p className="text-xs font-bold text-[#111827] mt-1">Playwright &amp; Drission</p>
              <span className="text-[10px] font-mono text-[#0878FE] mt-0.5 block">Stealth Fingerprints</span>
            </div>

            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-purple-700 block uppercase">3. Extraction</span>
              <p className="text-xs font-bold text-purple-900 mt-1">DOM &amp; API Intercept</p>
              <span className="text-[10px] font-mono text-purple-600 mt-0.5 block">Headless Hydration</span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 shadow-sm">
              <span className="text-[10px] font-mono font-bold text-emerald-800 block uppercase">4. Delivery</span>
              <p className="text-xs font-bold text-emerald-900 mt-1">Clean Database Push</p>
              <span className="text-[10px] font-mono text-emerald-700 mt-0.5 block">PostgreSQL / Supabase</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-[#C9DFFF]/60">
            <strong>Resilient Data Extraction:</strong> Fingerprint masking, TLS spoofing, and automatic captcha solving bypass Cloudflare and Datadome defenses for 24/7 autonomous data collection.
          </div>
        </div>
      );

    default:
      return null;
  }
}
