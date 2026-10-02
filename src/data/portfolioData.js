export const BRAND = {
  name: "Usama Younas",
  title: "AI Engineer",
  specialization: "AI Automation & Intelligent Systems",
  business: "3X AI Automation",
  tagline: "I build AI systems that automate real business operations.",
  email: "contactbyusama@gmail.com",
  github: "https://github.com/usama8742",
  linkedin: "https://www.linkedin.com/in/usama8742/",
  instagram: "https://www.instagram.com/3xaiautomation/",
  portfolioUrl: "https://usama-ai-portfolio.vercel.app/",
  location: "Available for Global Remote & Contract Projects",
  status: "Open for AI Automation & Engineering Projects",
  techLine: "AI Agents · n8n Automation · Python · APIs · CRM · Voice AI"
};

export const SERVICES = [
  {
    id: "ai-agents",
    num: "01",
    title: "AI Agents",
    description: "Intelligent AI agents that can understand requests, make decisions, use tools, retrieve information, and complete business tasks.",
    icon: "Bot",
    previewType: "agent-loop",
    tags: ["Autonomous Reasoning", "Tool Calling", "RAG Systems", "Multi-Agent Workflows"]
  },
  {
    id: "workflow-automation",
    num: "02",
    title: "Workflow Automation",
    description: "Automate repetitive processes using AI, n8n, APIs, webhooks, and business applications.",
    icon: "Workflow",
    previewType: "pipeline",
    tags: ["n8n Pipelines", "Webhooks", "Task Triggers", "Error Handling"]
  },
  {
    id: "ai-chatbots",
    num: "03",
    title: "AI Chatbots",
    description: "Website and WhatsApp AI assistants that answer questions, qualify leads, collect information, and guide customers.",
    icon: "MessageSquareCode",
    previewType: "chat",
    tags: ["WhatsApp AI", "Website Assistants", "Custom Knowledge Base", "Human Handoff"]
  },
  {
    id: "ai-voice-agents",
    num: "04",
    title: "AI Voice Agents",
    description: "AI-powered voice systems for handling calls, answering questions, qualifying leads, and booking appointments.",
    icon: "Mic",
    previewType: "voice",
    tags: ["Inbound & Outbound", "Whisper Speech-to-Text", "TTS Voice Engines", "Direct Calendar Booking"]
  },
  {
    id: "crm-automation",
    num: "05",
    title: "CRM Automation",
    description: "Connect leads, customers, sales pipelines, follow-ups, and internal workflows into automated systems.",
    icon: "Database",
    previewType: "crm",
    tags: ["Supabase / HubSpot", "Pipeline Synchronization", "Lead Status Triggers", "Auto Task Dispatch"]
  },
  {
    id: "lead-generation-qualification",
    num: "06",
    title: "Lead Generation & Qualification",
    description: "Capture leads, analyze them with AI, assign lead scores, and automatically route them to the right workflow.",
    icon: "FilterCheck",
    previewType: "scoring",
    tags: ["AI Lead Scoring", "Intent Categorization", "Data Enrichment", "Priority Routing"]
  },
  {
    id: "api-system-integration",
    num: "07",
    title: "API & System Integration",
    description: "Connect websites, CRMs, databases, AI models, communication platforms, and other business tools.",
    icon: "Network",
    previewType: "network",
    tags: ["REST APIs", "Custom Webhooks", "OAuth Security", "Cloud & On-Prem"]
  },
  {
    id: "ai-powered-websites",
    num: "08",
    title: "AI-Powered Websites",
    description: "Modern websites enhanced with AI chatbots, appointment booking, lead capture, personalization, and automated workflows.",
    icon: "Globe",
    previewType: "web",
    tags: ["React & Next.js", "AI Lead Capture", "Automated Booking", "High Performance"]
  }
];

export const PROJECTS = [
  {
    id: "real-estate-crm",
    num: "01",
    title: "Real Estate CRM",
    category: "Full-Stack CRM & Intelligent Lead System",
    description: "Full-stack CRM designed for managing leads, properties, contacts, deals, and sales workflows.",
    technology: "React · Node.js · Express · Supabase · REST APIs",
    image: "/images/project-real-estate-crm.jpg",
    techStack: ["React", "Node.js", "Express", "Supabase", "REST APIs", "PostgreSQL"],
    architecture: {
      inbound: "Inbound Leads & Property Inquiries",
      processing: "Express API & Supabase Database Pipeline",
      features: ["Role-based authentication", "Lead & Property tracking", "Deal pipeline stages", "Automated status updates"],
      output: "Real-time Broker Dashboard & Client Portal"
    },
    liveUrl: "https://github.com/usama8742"
  },
  {
    id: "ai-lead-qualification",
    num: "02",
    title: "AI Lead Qualification System",
    category: "Autonomous Lead Scoring Pipeline",
    description: "AI-powered lead processing system that analyzes incoming leads, assigns qualification scores, and routes them through automated workflows.",
    technology: "n8n · AI · Ollama · JavaScript · Supabase",
    image: "/images/project-lead-qualification.jpg",
    techStack: ["n8n", "AI Models", "Ollama", "JavaScript", "Supabase", "Webhooks"],
    architecture: {
      inbound: "Webform & Ad Inbound Webhooks",
      processing: "Ollama LLM Intent Scoring & Validation",
      features: ["Custom qualification scoring matrix", "Disqualification filtering", "Instant CRM sync", "High-priority SMS alerts"],
      output: "Qualified Leads routed to Top Closers within 45 seconds"
    },
    liveUrl: "https://github.com/usama8742"
  },
  {
    id: "ai-business-automation",
    num: "03",
    title: "AI Business Automation",
    category: "Enterprise System Orchestration",
    description: "Intelligent workflows that connect AI models, business applications, APIs, databases, and communication platforms.",
    technology: "n8n · APIs · Webhooks · AI Agents",
    image: "/images/project-business-automation.jpg",
    techStack: ["n8n", "APIs", "Webhooks", "AI Agents", "Python", "Cloud Integrations"],
    architecture: {
      inbound: "Cross-platform triggers (Email, Web, Forms)",
      processing: "Autonomous AI Agent node decision engine",
      features: ["Dynamic tool calling", "Document parsing", "Cross-system synchronization", "Automated Slack & CRM notifications"],
      output: "Zero manual data-entry business backend"
    },
    liveUrl: "https://github.com/usama8742"
  },
  {
    id: "ai-powered-chatbot",
    num: "04",
    title: "AI-Powered Chatbot",
    category: "Conversational Intelligence & Lead Capture",
    description: "Conversational AI system designed to answer customer questions, capture leads, and connect conversations to business workflows.",
    technology: "Python · Flask / FastAPI · Ollama · WebSockets · Embeddings",
    image: "/images/project-chatbot.jpg",
    techStack: ["Python", "FastAPI", "Ollama", "Embeddings", "WebSockets", "CRM Webhooks"],
    architecture: {
      inbound: "Live Customer Inquiries (Web & WhatsApp)",
      processing: "RAG vector retrieval over business docs",
      features: ["Semantic search", "Instant lead detail extraction", "Contextual memory", "Seamless CRM update"],
      output: "24/7 autonomous client engagement with zero hallucination"
    },
    liveUrl: "https://github.com/usama8742"
  },
  {
    id: "ai-voice-agent",
    num: "05",
    title: "AI Voice Agent",
    category: "Speech AI & Voice Appointment Booking",
    description: "Voice-based AI assistant designed to handle customer conversations and automate repetitive call-based tasks.",
    technology: "Python · Whisper STT · Kokoro TTS · n8n · Calendar API",
    image: "/images/project-voice-agent.jpg",
    techStack: ["Python", "Whisper", "Kokoro TTS", "n8n", "Calendar API", "Twilio / Telephony"],
    architecture: {
      inbound: "Inbound Phone Calls & Voice Requests",
      processing: "Real-time speech-to-text -> LLM reasoning -> ultra-fast TTS",
      features: ["Human-like response latency", "Dynamic calendar slot lookup", "Automated appointment confirmation", "CRM call logging"],
      output: "Confirmed booked meetings synced directly to Google Calendar"
    },
    liveUrl: "https://github.com/usama8742"
  },
  {
    id: "data-automation-system",
    num: "06",
    title: "Data Automation System",
    category: "Automated Data Processing & Extraction",
    description: "Automated data collection and processing system designed to reduce manual research and repetitive data operations.",
    technology: "Python · Playwright · REST APIs · PostgreSQL · Automation Scripts",
    image: "/images/project-data-automation.jpg",
    techStack: ["Python", "Playwright", "PostgreSQL", "REST APIs", "Automated Cron Workers"],
    architecture: {
      inbound: "Scheduled multi-source data targets",
      processing: "Headless browser automation & structured normalization",
      features: ["Automated deduplication", "Schema validation", "Error recovery", "Export to database & analytics feeds"],
      output: "Continuous structured data feeds with zero human intervention"
    },
    liveUrl: "https://github.com/usama8742"
  }
];

export const TECH_STACK = {
  AI: [
    { name: "Python", role: "Core Language for AI & Scripting", level: "Expert" },
    { name: "AI Agents", role: "Autonomous Decision & Tool Use", level: "Specialist" },
    { name: "LLMs", role: "Prompting, RAG & Fine-Tuning", level: "Advanced" },
    { name: "Prompt Engineering", role: "Structured System Prompts", level: "Expert" },
    { name: "Ollama", role: "Local & Private Model Deployment", level: "Advanced" }
  ],
  Automation: [
    { name: "n8n", role: "Visual Workflow Orchestration", level: "Expert" },
    { name: "Webhooks", role: "Real-Time Event Triggers", level: "Expert" },
    { name: "Workflow Automation", role: "End-to-End Business Logic", level: "Specialist" },
    { name: "API Integrations", role: "Cross-Platform Interoperability", level: "Expert" }
  ],
  Backend: [
    { name: "FastAPI", role: "High-Performance Python APIs", level: "Advanced" },
    { name: "Node.js", role: "Server Runtime & Microservices", level: "Advanced" },
    { name: "Express", role: "RESTful Backend Framework", level: "Advanced" },
    { name: "REST APIs", role: "API Design & Documentation", level: "Expert" }
  ],
  Frontend: [
    { name: "React", role: "Modern Component Architecture", level: "Advanced" },
    { name: "JavaScript", role: "ES6+, Async, DOM & Logic", level: "Expert" },
    { name: "HTML", role: "Semantic Accessible Markup", level: "Expert" },
    { name: "CSS", role: "Tailwind, Responsive & UI Styling", level: "Expert" }
  ],
  Database: [
    { name: "Supabase", role: "Managed Postgres, Auth & Realtime", level: "Advanced" },
    { name: "PostgreSQL", role: "Relational Queries & Schema Design", level: "Advanced" }
  ],
  Other: [
    { name: "Git", role: "Version Control & Branching", level: "Expert" },
    { name: "GitHub", role: "CI/CD & Repository Management", level: "Expert" },
    { name: "Authentication", role: "JWT, OAuth & Role-Based Access", level: "Advanced" },
    { name: "CRM Systems", role: "HubSpot, GoHighLevel, Custom CRM", level: "Specialist" }
  ]
};

export const INDUSTRIES = [
  {
    title: "Real Estate",
    description: "Lead qualification, property matching, CRM automation, follow-ups and appointment systems.",
    icon: "Building2",
    tag: "High ROI",
    image: "/images/industry-real-estate.jpg",
    features: ["Automated Zillow/Web Form Ingestion", "Instant Buyer Budget Qualification", "Broker Calendar Slot Booking"]
  },
  {
    title: "Healthcare & Dental",
    description: "AI chatbots, appointment booking, patient inquiries and automated reminders.",
    icon: "Stethoscope",
    tag: "24/7 Patient Intake",
    image: "/images/industry-healthcare.jpg",
    features: ["HIPAA-Conscious Patient Triage", "Automated SMS/WhatsApp Confirmations", "Zero-Wait Emergency Desk Routing"]
  },
  {
    title: "Law Firms",
    description: "Lead capture, consultation booking, document workflows and client communication.",
    icon: "Scale",
    tag: "Case Routing",
    image: "/images/industry-law-firm.jpg",
    features: ["Conflict-Free Consultation Booking", "Automated Intake Questionnaires", "Direct Legal CRM Pipeline Sync"]
  },
  {
    title: "Education",
    description: "Student inquiries, admissions automation, appointment scheduling and follow-ups.",
    icon: "GraduationCap",
    tag: "Fast Admissions",
    image: "/images/industry-education.jpg",
    features: ["24/7 Student Query Chatbot", "Admissions Tour Calendar Lock", "Document & Transcript Ingestion"]
  },
  {
    title: "Marketing Agencies",
    description: "Lead management, client workflows, reporting and internal automation.",
    icon: "Megaphone",
    tag: "Client Ops",
    image: "/images/industry-marketing.jpg",
    features: ["Cross-Platform Campaign Ingestion", "Automated Weekly Performance Reports", "Slack & Client Alert Dispatches"]
  },
  {
    title: "Manufacturing",
    description: "Data workflows, internal automation, lead processing and system integrations.",
    icon: "Factory",
    tag: "ERP Sync",
    image: "/images/industry-manufacturing.jpg",
    features: ["Supply Chain Event Webhooks", "Automated Inventory Alert Pipelines", "Legacy ERP & Modern API Bridge"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    description: "Understand your business, workflow and goals."
  },
  {
    step: "02",
    name: "Analyze",
    description: "Identify repetitive tasks and automation opportunities."
  },
  {
    step: "03",
    name: "Design",
    description: "Map the AI system and workflow architecture."
  },
  {
    step: "04",
    name: "Build",
    description: "Develop the AI, automation, integrations and interfaces."
  },
  {
    step: "05",
    name: "Test",
    description: "Test workflows, edge cases and system reliability."
  },
  {
    step: "06",
    name: "Launch",
    description: "Deploy the solution and continue improving it."
  }
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Business First",
    description: "I focus on the problem before choosing the technology.",
    icon: "Briefcase"
  },
  {
    title: "Custom Built",
    description: "Every workflow can be designed around your existing process and tools.",
    icon: "Sliders"
  },
  {
    title: "Connected Systems",
    description: "AI becomes much more useful when it can communicate with your CRM, database, website and other platforms.",
    icon: "Network"
  },
  {
    title: "Built to Scale",
    description: "Solutions are designed so they can evolve as your business grows.",
    icon: "TrendingUp"
  }
];
