// Complete AI & Automation Engineering Master Course Data
// Written in crystal-clear, simple language inspired by CloudFactory's production platform

export const AI_PLATFORM_PILLARS = [
  {
    id: "data-foundation",
    title: "Data Foundation",
    subtitle: "Make Your Data AI-Ready",
    plainEnglish: "AI is only as smart as the information you feed it. We clean, structure, and connect your business files so AI models never get confused.",
    icon: "Database",
    benefits: [
      "Connect data across Google Drive, Dropbox, SQL, and internal servers with zero migration pain",
      "Ingest messy PDFs, scanned receipts, emails, and audio recordings automatically",
      "Convert unstructured customer records into searchable, organized databases",
      "Ensure 100% compliance with HIPAA, GDPR, and enterprise privacy standards"
    ],
    simpleAnalogy: "Think of your data like cooking ingredients. If you feed a master chef rotten vegetables, you get a bad meal. We wash, chop, and organize all your ingredients so your AI cooks perfection every time."
  },
  {
    id: "agent-orchestration",
    title: "Model & Agent Orchestration",
    subtitle: "Use Any AI Model Without Lock-In",
    plainEnglish: "Don't get trapped by one company. We connect GPT-4o, Claude 3.5, Gemini, and open-source models into cooperative teams where each agent does what it's best at.",
    icon: "Brain",
    benefits: [
      "Pick the cheapest, fastest model for simple tasks and the smartest model for complex deals",
      "Chain multiple specialized AI agents together (e.g. Researcher -> Writer -> Reviewer)",
      "Swap models instantly if prices change or a newer model launches",
      "Real-time monitoring of response speed, token costs, and accuracy"
    ],
    simpleAnalogy: "Like a sports team: you don't make your quarterback play goalie. We assign the right AI model to the exact job it excels at, saving you thousands in API bills."
  },
  {
    id: "trust-oversight",
    title: "Trust & Human Oversight",
    subtitle: "Because 95% Accuracy Isn't Enough",
    plainEnglish: "In business, a wrong email or bad contract calculation can cost real money. We build safety guardrails and human review checkpoints so AI never goes rogue.",
    icon: "ShieldCheck",
    benefits: [
      "Calibrated confidence scoring: if the AI is less than 90% sure, it pauses for a human",
      "Strict policy guardrails preventing hallucinations, leaks, and off-brand answers",
      "Complete audit trails: see every prompt, thought process, and decision step",
      "Seamless Slack / WhatsApp approval buttons for your team"
    ],
    simpleAnalogy: "Like cruise control on a high-end car: the car steers and keeps speed on the highway, but instantly alerts you to take the wheel when approaching tricky construction."
  },
  {
    id: "workflow-enablement",
    title: "Workflow Control & Enablement",
    subtitle: "Operate AI Across Real Operations",
    plainEnglish: "AI shouldn't live in a separate chat window. We wire intelligence directly into the tools your team already uses every day: CRMs, spreadsheets, and email.",
    icon: "Workflow",
    benefits: [
      "Visual n8n and Make pipelines connecting 500+ business applications",
      "Zero friction: your staff doesn't need to learn prompt engineering",
      "Automated fallback recovery if a third-party service temporarily goes down",
      "Real-time analytics dashboard tracking hours saved and ROI generated"
    ],
    simpleAnalogy: "Like running electricity through your house: you don't carry batteries from room to room; you just flip a wall switch. We wire AI directly into your existing software."
  }
];

export const FULL_COURSE_MODULES = [
  {
    id: "module-1",
    num: "01",
    title: "AI & Machine Learning Foundations",
    tagline: "How AI Actually Thinks, Learns, and Predicts",
    duration: "4 Lessons · 45 Mins",
    level: "Beginner to Intermediate",
    summary: "Clear, zero-jargon breakdown of machine learning, neural networks, and how algorithms turn raw data into intelligent business predictions.",
    lessons: [
      {
        title: "1.1 What Machine Learning Really Is (Without The Math)",
        inPlainEnglish: "Traditional software is a rigid rulebook written by humans (If X happens, do Y). Machine Learning is the opposite: you show the computer 10,000 examples of good and bad outcomes, and the computer figures out the rules itself.",
        keyConcepts: [
          "Supervised Learning: Learning with an answer key (e.g. past house sales to predict new home prices)",
          "Unsupervised Learning: Finding hidden patterns without labels (e.g. grouping customers by shopping habits)",
          "Overfitting: When a model memorizes the training data like a robot but fails in the real world"
        ],
        codeExample: `# Simple Python example: Predicting if a customer will buy\nfrom sklearn.tree import DecisionTreeClassifier\n\n# Features: [Visited Pricing Page (0 or 1), Time on Site (mins), Downloaded PDF (0 or 1)]\nX = [[1, 15, 1], [0, 2, 0], [1, 25, 1], [0, 1, 0]]\ny = [1, 0, 1, 0] # 1 = Bought, 0 = Left\n\nmodel = DecisionTreeClassifier()\nmodel.fit(X, y)\n\n# Predict a new visitor who spent 18 mins and viewed pricing:\nprediction = model.predict([[1, 18, 1]])\nprint("Will buy?" , "Yes!" if prediction[0] == 1 else "No")`
      },
      {
        title: "1.2 Deep Learning & Neural Networks Explained",
        inPlainEnglish: "A neural network is inspired by the human brain: layers of mathematical calculators (neurons) connected together. Early layers recognize simple lines and edges, middle layers recognize shapes and words, and final layers understand full concepts like invoices, faces, or customer emotions.",
        keyConcepts: [
          "Input Layer: The raw pixels, audio frequencies, or text characters",
          "Hidden Layers: Where the deep feature extraction and pattern recognition happens",
          "Weights & Biases: Knobs the computer adjusts millions of times until accuracy reaches 99%+"
        ],
        codeExample: `# PyTorch: The engine behind modern neural networks\nimport torch\nimport torch.nn as nn\n\nclass SimpleBrain(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.layers = nn.Sequential(\n            nn.Linear(10, 64), # 10 inputs -> 64 neuron thoughts\n            nn.ReLU(),         # Activation filter\n            nn.Linear(64, 1)   # Final decision output\n        )\n    def forward(self, x): return self.layers(x)`
      },
      {
        title: "1.3 Training vs. Inference: Where Business Money Is Spent",
        inPlainEnglish: "Training is like going to medical school for 8 years (it takes massive cloud compute and costs millions). Inference is when the doctor answers a patient's question in 10 seconds (fast, cheap, and runs everywhere). In business, we almost always use pre-trained models for inference!",
        keyConcepts: [
          "Pre-training: Massive computing cost done once by OpenAI, Google, or Meta",
          "Fine-Tuning: Teaching a model specific company vocabulary or formatting",
          "Inference Latency: How fast the model replies to a user (aiming for sub-1 second)"
        ],
        codeExample: `# In business, we call pre-trained models via fast API inference\nresponse = await llm.generate("Classify this lead as High, Medium, or Low priority: ...")`
      }
    ]
  },
  {
    id: "module-2",
    num: "02",
    title: "Large Language Models & Prompt Engineering",
    tagline: "Controlling Frontier AI for Deterministic Results",
    duration: "4 Lessons · 55 Mins",
    level: "Intermediate",
    summary: "Mastering tokenization, context windows, few-shot prompts, and forcing LLMs to return strict JSON data without hallucinating.",
    lessons: [
      {
        title: "2.1 How LLMs Read Text: Tokens & Context Windows",
        inPlainEnglish: "Computers don't read words or letters; they read 'tokens' (chunks of words, roughly 4 characters). The context window is the model's short-term memory desk. If your prompt and company documents exceed the desk size, the model forgets earlier parts.",
        keyConcepts: [
          "Tokens: 1,000 tokens ≈ 750 English words",
          "Context Window: Claude 3.5 Sonnet has 200k tokens (about a 500-page book)",
          "Temperature: Setting temperature to 0.0 makes the model strictly logical; 0.8 makes it creative"
        ],
        codeExample: `// Prompting for deterministic business outputs\nconst prompt = {\n  model: "gpt-4o",\n  temperature: 0.0, // Zero randomness for business tasks\n  messages: [\n    { role: "system", content: "You are an executive assistant. Only return valid JSON." },\n    { role: "user", content: "Extract customer name and phone from: John Doe at 555-0192" }\n  ]\n};`
      },
      {
        title: "2.2 Few-Shot Prompting & Chain-of-Thought (COT)",
        inPlainEnglish: "Telling an AI 'classify this lead' is good. Giving it 3 examples of previously classified leads (Few-Shot) makes it 10x more accurate. Telling it to 'think step-by-step before answering' (Chain of Thought) prevents silly logic mistakes.",
        keyConcepts: [
          "Zero-Shot: Asking without examples",
          "Few-Shot: Showing 2-3 perfect examples first",
          "Chain of Thought: Asking the model to explain its reasoning before giving the final answer"
        ],
        codeExample: `PROMPT = """\nTask: Categorize lead urgency.\n\nExample 1:\nInput: 'Need demo next month for planning.'\nReasoning: Timeline is 30+ days away.\nOutput: LOW\n\nExample 2:\nInput: 'Current system crashed, need emergency replacement today.'\nReasoning: Critical business blocker right now.\nOutput: URGENT\n\nInput: '{new_customer_message}'\nReasoning:\nOutput:\n"""`
      },
      {
        title: "2.3 Structured Outputs & Pydantic Validation",
        inPlainEnglish: "The biggest fear in business is an AI responding with poetry when your CRM needs a database number. Structured Outputs force the LLM to follow a mathematical schema so it can never output invalid data.",
        keyConcepts: [
          "Pydantic v2 Models: Defining exact fields, types, and constraints",
          "JSON Mode: Guaranteed RFC-compliant JSON",
          "Function / Tool Calling: LLM decides which company software function to trigger"
        ],
        codeExample: `from pydantic import BaseModel, Field\nfrom typing import Literal\n\nclass LeadRecord(BaseModel):\n    name: str\n    email: str\n    budget_estimate: int = Field(..., gt=0)\n    urgency: Literal["low", "medium", "urgent"]\n\n# Guaranteed to output exact schema matching LeadRecord`
      }
    ]
  },
  {
    id: "module-3",
    num: "03",
    title: "RAG & Vector Knowledge Bases",
    tagline: "Giving AI Access to Your Private Business Data",
    duration: "5 Lessons · 1 Hour",
    level: "Intermediate to Advanced",
    summary: "How to stop AI hallucinations by retrieving exact paragraphs from company manuals, legal contracts, and databases before answering.",
    lessons: [
      {
        title: "3.1 Why RAG Beats Fine-Tuning for 99% of Businesses",
        inPlainEnglish: "Fine-tuning is like trying to teach someone facts by hypnotizing them: it's expensive, they might still forget, and updating a price requires re-training. RAG is like an open-book exam: you give the AI the exact company document page, and it simply reads from it!",
        keyConcepts: [
          "Open-Book vs Closed-Book AI",
          "Zero Retraining Cost: Add a new PDF to your database and AI knows it instantly",
          "Verifiable Citations: AI tells you 'I found this in paragraph 3 of page 12'"
        ],
        codeExample: `# RAG Prompt Structure\nPROMPT = f"""\nAnswer the client question ONLY using the verified context below.\nIf the answer is not in the text, say 'I do not have that information.'\n\nVerified Context:\n{retrieved_company_chunks}\n\nClient Question: {client_question}\n"""`
      },
      {
        title: "3.2 Vector Embeddings: Math That Understands Meaning",
        inPlainEnglish: "How does a computer know that 'automobile' and 'car' mean the same thing? An embedding model turns text into coordinates on a multi-dimensional map. Words and sentences with similar meanings land right next to each other on the map!",
        keyConcepts: [
          "Vector Space: 1536 numerical coordinates representing meaning",
          "Cosine Similarity: Measuring the angle between two thoughts",
          "Dense vs Sparse Search: Semantic search vs keyword exact matches"
        ],
        codeExample: `// Generating embeddings with OpenAI\nconst embedding = await openai.embeddings.create({\n  model: "text-embedding-3-small",\n  input: "Commercial property lease rates in downtown"\n});`
      },
      {
        title: "3.3 Chunking, Hybrid Search & Reranking",
        inPlainEnglish: "You can't shove a 300-page PDF into a vector search all at once. We slice the document into smart bite-sized paragraphs (chunking), search using both keywords and meaning (hybrid search), and rank the top 3 best paragraphs for the AI to read.",
        keyConcepts: [
          "Chunk Size & Overlap: Ensuring sentences don't get cut in half",
          "BM25 + Dense Search: Best of keyword matching + concept matching",
          "Cross-Encoder Rerankers: Pinpointing the exact paragraph that answers the user"
        ],
        codeExample: `SELECT content, 1 - (embedding <=> user_query) AS score\nFROM company_kb\nORDER BY score DESC LIMIT 3;`
      }
    ]
  },
  {
    id: "module-4",
    num: "04",
    title: "Multi-Agent Systems & LangGraph",
    tagline: "Moving From Single Chatbots to Autonomous Digital Teams",
    duration: "5 Lessons · 1.2 Hours",
    level: "Advanced to Expert",
    summary: "Building stateful agent graphs that can make decisions, loop through research tasks, evaluate their own work, and collaborate.",
    lessons: [
      {
        title: "4.1 What Makes an 'Agent' Different From a 'Chatbot'?",
        inPlainEnglish: "A chatbot just talks back to you. An AI Agent has a Goal, Memory, Tools (like a web browser, CRM access, or email sender), and a Decision Loop. It plans steps, uses tools, checks if the result worked, and loops until the job is done.",
        keyConcepts: [
          "Perception: Reading inbound customer messages or webhooks",
          "Reasoning: Deciding what tools are needed",
          "Action: Calling APIs, running scrapers, or writing to databases",
          "Reflection: Checking if the result solved the goal"
        ],
        codeExample: `# Agent decision loop structure\nwhile not task_completed:\n    thought = agent.reason(current_state)\n    action = agent.pick_tool(thought)\n    result = execute(action)\n    task_completed = agent.evaluate(result)`
      },
      {
        title: "4.2 LangGraph: Cyclic State Machines",
        inPlainEnglish: "Old AI pipelines only moved forward in a straight line: A -> B -> C. But what if step B produces an error? LangGraph lets AI loop back to step A to fix its mistake, consult another agent, or ask a human supervisor for advice.",
        keyConcepts: [
          "State Graph: Central memory shared across all agents",
          "Nodes: Specialized workers (e.g. Scraper, Scorer, Email Drafter)",
          "Conditional Edges: Decision intersections in the graph",
          "Checkpoints: Saving state so an agent can pause for days and resume"
        ],
        codeExample: `from langgraph.graph import StateGraph, END\n\nworkflow = StateGraph(ProjectState)\nworkflow.add_node("coder", write_code_node)\nworkflow.add_node("tester", test_code_node)\n\n# If tests fail, loop back to coder! If pass, finish!\nworkflow.add_conditional_edges(\n    "tester",\n    lambda state: "coder" if state["errors"] > 0 else END\n)`
      },
      {
        title: "4.3 Multi-Agent Crews (CrewAI & Hierarchical Teams)",
        inPlainEnglish: "Instead of one giant AI trying to do everything, you create a virtual office: one agent is the Lead Researcher, one is the Financial Auditor, and one is the Client Communicator. A Supervisor Agent distributes tasks and reviews their deliverables.",
        keyConcepts: [
          "Role Definition: Giving agents clear job titles and backstories",
          "Delegation: Agents asking each other for help",
          "Hierarchical Execution: Manager agent reviews output before client delivery"
        ],
        codeExample: `from crewai import Agent, Crew, Task\n\nresearcher = Agent(role="Market Analyst", goal="Find commercial property comps")\nwriter = Agent(role="Executive Writer", goal="Create 1-page investment summary")\ncrew = Crew(agents=[researcher, writer], tasks=[...])`
      }
    ]
  },
  {
    id: "module-5",
    num: "05",
    title: "Production Automation with n8n & APIs",
    tagline: "Connecting AI to 500+ Business Applications",
    duration: "4 Lessons · 50 Mins",
    level: "Intermediate",
    summary: "How to automate real business operations: syncing leads to HubSpot, sending WhatsApp messages, and processing payments with n8n.",
    lessons: [
      {
        title: "5.1 n8n: The Visual Backbone of Enterprise Automation",
        inPlainEnglish: "n8n is an open-source workflow engine that acts like digital glue. When a lead fills out your website form, n8n instantly grabs the data, sends it to your AI agent for qualification, updates your CRM, and alerts your sales team on Slack—all in 1.5 seconds.",
        keyConcepts: [
          "Triggers: Events that start a workflow (Webhooks, New Email, Form Submit)",
          "Nodes: Software connectors (HubSpot, Stripe, Supabase, Twilio, OpenAI)",
          "Execution History: Inspecting exact inputs and outputs of every single run"
        ],
        codeExample: `// n8n Webhook incoming JSON\n{\n  "lead_name": "Apex Realty LLC",\n  "inquiry": "Need voice agent for 4 offices",\n  "budget": "$5,000/mo"\n}`
      },
      {
        title: "5.2 Real-Time Webhooks vs. Polling",
        inPlainEnglish: "Polling is like asking 'Are we there yet?' every 5 minutes—it wastes server resources and creates lag. Webhooks are like a doorbell: when someone arrives, they ring the bell and your system wakes up instantly with zero wasted server energy.",
        keyConcepts: [
          "Instant Event Dispatch (<200ms latency)",
          "HMAC Signatures: Verifying the webhook truly came from Stripe/HubSpot",
          "Idempotency: Making sure duplicate webhook clicks don't charge a customer twice"
        ],
        codeExample: `# FastAPI webhook receiver with signature validation\n@app.post("/webhooks/stripe")\nasync def stripe_webhook(request: Request):\n    event = verify_stripe_signature(request)\n    await process_payment_event(event)\n    return {"status": "success"}`
      },
      {
        title: "5.3 Error Handling & Self-Healing Workflows",
        inPlainEnglish: "Third-party APIs fail all the time. Good automation doesn't crash when HubSpot is temporarily down; it automatically catches the failure, retries 3 times with exponential backoff, and alerts your team if human review is needed.",
        keyConcepts: [
          "Exponential Backoff (Retry after 1s, 2s, 4s, 8s)",
          "Dead Letter Queues: Storing failed requests safely in a database",
          "Automated Slack Incident Notifiers"
        ],
        codeExample: `// Exponential retry loop in n8n/Node.js\nfor (let i = 0; i < 3; i++) {\n  try { return await syncToCrm(data); }\n  catch (e) { await sleep(1000 * Math.pow(2, i)); }\n}`
      }
    ]
  },
  {
    id: "module-6",
    num: "06",
    title: "Trust, Safety & Human-in-the-Loop",
    tagline: "Operating AI When Mistakes Cost Real Money",
    duration: "4 Lessons · 45 Mins",
    level: "Advanced",
    summary: "Building approval gates, audit trails, and risk controls so companies can deploy AI safely without worrying about brand damage.",
    lessons: [
      {
        title: "6.1 Human-in-the-Loop (HITL) Architecture",
        inPlainEnglish: "Let AI do 90% of the repetitive grunt work (reading PDFs, organizing data, drafting emails), but put a human checkpoint before irreversible actions (sending money, firing an email to a $100k client, or publishing contracts).",
        keyConcepts: [
          "Autonomous vs Semi-Autonomous Modes",
          "Approval Gates in Slack / Telegram / Mobile SMS",
          "Timeouts & Escalation Paths if manager doesn't respond in 1 hour"
        ],
        codeExample: `# Pause agent execution until human clicks 'Approve'\ngraph = builder.compile(\n    checkpointer=memory,\n    interrupt_before=["transfer_funds", "send_vip_proposal"]\n)`
      },
      {
        title: "6.2 Confidence Scoring & Risk Mitigation",
        inPlainEnglish: "Every time our AI makes a calculation or extracts invoice data, it assigns itself a confidence score from 0% to 100%. If confidence is 98%, it processes automatically. If it's 72% (e.g. blurry receipt), it flags a human reviewer.",
        keyConcepts: [
          "Confidence Thresholds (e.g. 95% threshold for automatic execution)",
          "Discrepancy Detection: Cross-checking invoice math against totals",
          "Zero Data Leakage: Redacting social security numbers and credit cards before LLMs"
        ],
        codeExample: `if extraction.confidence_score >= 0.95:\n    await auto_approve_invoice(extraction)\nelse:\n    await route_to_human_accountant(extraction, reason="Low OCR confidence")`
      },
      {
        title: "6.3 Complete Auditability & Enterprise Governance",
        inPlainEnglish: "In regulated industries like finance, healthcare, and real estate, you must be able to prove WHY an AI made a decision 6 months ago. We log every single prompt, document source, model version, and user action.",
        keyConcepts: [
          "Full Lineage Tracking (Exact prompt + document version + output)",
          "Tamper-Proof Audit Logs",
          "SOC2 & GDPR Data Retention Policies"
        ],
        codeExample: `await audit_logger.record({\n  event: "AI_DECISION_EXECUTED",\n  agent_id: "agent_qualifier_v2",\n  prompt_hash: "sha256_9f82...",\n  sources_used: ["policy_doc_p4.pdf"],\n  output: decision_payload\n});`
      }
    ]
  }
];
