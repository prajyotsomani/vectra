export const blogPosts = [
  {
    id: 1,
    slug: 'preparing-for-gpt-6-frontier-reasoning-llms',
    cat: 'AI & LLMs',
    date: 'Oct 15, 2026',
    title: 'Preparing for GPT-6 & Frontier Reasoning LLMs: What Enterprise Tech Leaders Need to Know',
    excerpt: 'As frontier models push past simple text generation toward deep multi-step reasoning, how should NZ enterprises architect their systems to leverage next-gen models without catastrophic vendor lock-in?',
    read: '7 min read',
    author: {
      name: 'Ravi Kumar',
      role: 'Head of Engineering',
      init: 'RK'
    },
    content: [
      {
        type: 'intro',
        text: 'The trajectory of large language models has fundamentally shifted. While the GPT-3 and GPT-4 era was defined by probabilistic next-token generation and creative synthesis, the latest paradigm led by deep test-time compute reasoning models — and the emerging architectures powering next-generation frontier models like GPT-6, Claude Opus 4, and Gemini 2.5 — is focused on autonomous problem solving, iterative verification, and executable task planning.'
      },
      {
        type: 'section',
        heading: '1. What Changes With Next-Generation Models?',
        body: 'Earlier generations of LLMs required complex prompting tricks, extensive few-shot exemplars, and delicate chain-of-thought nudges to avoid hallucinations. With frontier models advancing toward deep test-time compute (reinforcement learning over reasoning traces):',
        bullets: [
          'Intrinsic Self-Correction: Models reflect on their own logic and run simulated self-checks before returning an answer.',
          'Native Structured Output Execution: Guaranteed adherence to JSON schemas, OpenAPI specifications, and strongly typed SQL.',
          'Massive Multi-Million Token Effective Context: The ability to ingest entire enterprise codebases, legal repositories, and architectural schematics in a single inference call.',
          'True Multimodal Co-Reasoning: Processing audio streams, CAD drawings, video footage, and financial ledger spreadsheets simultaneously.'
        ]
      },
      {
        type: 'callout',
        text: 'Architectural Shift: Stop writing brittle 5-page prompt templates. Instead, build clean API schemas and structured verification loops that allow reasoning models to act as autonomous system orchestrators.'
      },
      {
        type: 'section',
        heading: '2. Avoiding the Single-Vendor Trap',
        body: 'One of the most dangerous mistakes New Zealand engineering teams make today is hardcoding proprietary OpenAI or Anthropic SDK calls directly throughout their business logic. With rapid price drops and benchmark leaps every three months, enterprise applications must decouple via an AI Gateway pattern (such as LiteLLM, Portkey, or custom Envoy proxies). This enables seamless fallback, dynamic cost routing between lightweight 8B models and frontier GPT-6 tier models, and automatic load balancing.'
      },
      {
        type: 'section',
        heading: '3. Data Privacy and Sovereignty Under the NZ Privacy Act',
        body: 'Before piping operational customer records or intellectual property to commercial frontier APIs, organizations must establish clear zero-retention data processing agreements (BAAs / DPAs). Enterprise-tier endpoints with zero data training guarantees and private cloud VPC hosting (such as Azure OpenAI Australia East / New Zealand North) are mandatory for financial, legal, and healthcare verticals.'
      },
      {
        type: 'conclusion',
        heading: 'Action Plan for Q4 2026',
        body: 'Audit your existing AI initiatives: replace legacy chatbot wrappers with structured tool-calling agents, establish an API gateway abstraction, and test your internal workflows against current reasoning benchmarks.'
      }
    ]
  },
  {
    id: 2,
    slug: 'zero-downtime-deployments-github-actions-kubernetes',
    cat: 'DevOps & CI/CD',
    date: 'Oct 12, 2026',
    title: 'Zero-Downtime Deployments with GitHub Actions & Kubernetes: Our Production Blueprint',
    excerpt: 'Deploying software should be a non-event. Here is the exact CI/CD pipeline architecture we use to push releases in under 3 minutes with zero downtime and automated rollbacks.',
    read: '6 min read',
    author: {
      name: 'Ravi Kumar',
      role: 'Head of Engineering',
      init: 'RK'
    },
    content: [
      {
        type: 'intro',
        text: 'If your engineering team still schedules Friday midnight maintenance windows or warns customers that the portal will be unavailable during an upgrade, your deployment process is broken. Modern cloud infrastructure allows multiple releases per day with zero dropped connections and 100% automated health verification.'
      },
      {
        type: 'section',
        heading: '1. The GitOps Workflow: From Merge to Production',
        body: 'Our delivery pipeline follows an opinionated GitOps model using GitHub Actions and ArgoCD / Helm:',
        bullets: [
          'Pre-Merge Verification: Parallelized unit tests, linting, and security audits run within 90 seconds on pull requests.',
          'Container Image Baking: Multi-stage Docker builds utilizing BuildKit remote caching to push minimal distroless images to private registries.',
          'Vulnerability Scanning (DevSecOps): Automated Trivy gates halt pipeline progression if Critical/High CVEs are detected.',
          'ArgoCD Sync: Kubernetes clusters reconcile git state automatically, triggering canary deployments with progressive traffic shifting.'
        ]
      },
      {
        type: 'callout',
        text: 'Zero-Downtime Rule: Your database migrations must always follow the "Expand-and-Contract" pattern. Never rename or drop columns in the same release where new code is deployed.'
      },
      {
        type: 'section',
        heading: '2. Kubernetes Readiness Probes & Connection Draining',
        body: 'Zero downtime requires smooth traffic handover. We configure preStop hooks to allow in-flight HTTP connections up to 15 seconds to drain before SIGTERM is sent. Combined with accurate readiness and liveness probes, Envoy/NGINX ingresses route requests strictly to warm, healthy pods.'
      },
      {
        type: 'section',
        heading: '3. Automated Rollbacks with Prometheus Metrics',
        body: 'Instead of waiting for customer support tickets to report a regression, our canary controller monitors HTTP 5xx error rates and p99 latency spikes during the first 5 minutes of rollout. If error rates exceed 0.5%, the rollout aborts immediately and reverts traffic to the previous known-good deployment.'
      },
      {
        type: 'conclusion',
        heading: 'Summary',
        body: 'When deployments are fully automated and low-risk, shipping software becomes a daily habit rather than a stressful milestone.'
      }
    ]
  },
  {
    id: 3,
    slug: 'autonomous-ai-agents-production-workflows',
    cat: 'AI & LLMs',
    date: 'Oct 2, 2026',
    title: 'Autonomous AI Agents in Production: Moving Beyond Chatbots to Actionable Workflows',
    excerpt: 'Why 2026 is the year businesses stop deploying simple FAQ bots and start building autonomous agentic pipelines that execute complex multi-step business logic.',
    read: '6 min read',
    author: {
      name: 'Vishal Pandya',
      role: 'Founder & Managing Director',
      init: 'VP'
    },
    content: [
      {
        type: 'intro',
        text: 'For the past two years, most corporate AI investments were funnelled into conversational chat interfaces. But chatting is rarely how businesses generate value. Real operational value lives in background execution: reconciling invoices, triaging support tickets, generating code refactors, and validating regulatory compliance without human babysitting.'
      },
      {
        type: 'section',
        heading: 'The Anatomy of a Production-Grade Agent',
        body: 'A toy agent is just an LLM given a calculator tool. A production-grade enterprise agent requires four discrete engineering layers:',
        bullets: [
          'State Management & Memory: Durable transactional state stored in Redis or PostgreSQL, preserving conversation context across days.',
          'Deterministic Tool Gateways: Sandboxed API execution where tools perform strict input validation before mutating production databases.',
          'Observability & Traceability: Full logging of thought chains, token expenditures, latency percentiles, and error recovery actions.',
          'Human-in-the-Loop Safeguards: Automatic pause triggers whenever monetary thresholds, legal disclaimers, or high-risk actions are initiated.'
        ]
      },
      {
        type: 'callout',
        text: 'Core Principle: Deterministic code should handle execution; generative models should handle reasoning, intent classification, and fuzzy matching.'
      },
      {
        type: 'section',
        heading: 'Real-World Case Study: Automated Auckland Logistics Operations',
        body: 'At Vectra Limited, we recently deployed an agentic workflow for an Auckland supply chain distributor. The agent ingests supplier dispatch emails in PDF/image format, extracts shipping manifests, queries internal ERP inventory levels via REST APIs, identifies stock discrepancies, and drafts supplier credit claims for review. Total manual processing time dropped from 4 hours daily to under 12 minutes.'
      },
      {
        type: 'conclusion',
        heading: 'How to Get Started',
        body: 'Pick one high-friction, repetitive back-office workflow that currently requires 2+ software applications. Scope a controlled agent proof-of-concept with human sign-off gates before opening up full automation.'
      }
    ]
  },
  {
    id: 4,
    slug: 'speeding-up-slow-ci-cd-pipelines',
    cat: 'DevOps & CI/CD',
    date: 'Sep 25, 2026',
    title: 'Why Your CI/CD Pipeline Takes 30 Minutes (And How to Get It Under 4 Minutes)',
    excerpt: 'Slow CI/CD pipelines kill engineering momentum and delay hotfixes. Here are five concrete optimizations that reduced our build times by 85%.',
    read: '5 min read',
    author: {
      name: 'Tim Nguyen',
      role: 'Cybersecurity Lead',
      init: 'TN'
    },
    content: [
      {
        type: 'intro',
        text: 'Every developer knows the frustration of waiting 30 minutes for a CI build to run only to discover a missing semicolon or formatting warning. Slow test and deployment cycles do not just waste cloud compute credits — they cause context-switching and paralyze team velocity.'
      },
      {
        type: 'section',
        heading: '1. Layer Caching with Docker BuildKit & GitHub Actions Cache',
        body: 'In 90% of legacy pipelines, every CI run reinstalls all package dependencies and rebuilds base Docker layers from scratch. By configuring inline cache manifests (type=gha or remote registry caches), unchanging layers are reused instantly, cutting container image creation from 12 minutes to 45 seconds.'
      },
      {
        type: 'section',
        heading: '2. Test Parallelization & Matrix Sharding',
        body: 'Running 1,500 integration tests sequentially on a single runner is an anti-pattern. By slicing tests across 4 or 8 parallel matrix runners grouped by historical execution time, test suites finish in the time of the longest single test slice.'
      },
      {
        type: 'callout',
        text: 'Pro Tip: Run fast fail-first smoke tests and lint checks before spinning up heavy end-to-end browser clusters or cloud database instances.'
      },
      {
        type: 'section',
        heading: '3. Ephemeral Staging Environments on PRs',
        body: 'Instead of fighting over a shared "dev" or "staging" server that constantly gets broken by untested branches, our CI automatically spawns isolated preview URLs on Kubernetes via ephemeral namespaces for each pull request. When the PR closes, the resources are wiped completely.'
      },
      {
        type: 'conclusion',
        heading: 'The Result',
        body: 'Sub-4-minute pipelines allow developers to test, review, and ship multiple times per afternoon without breaking focus.'
      }
    ]
  },
  {
    id: 5,
    slug: 'frontier-llms-vs-sovereign-open-models',
    cat: 'AI & LLMs',
    date: 'Sep 18, 2026',
    title: 'Commercial Frontier LLMs vs Sovereign Open-Weight Models: The 2026 Strategy Guide',
    excerpt: 'Running specialized 8B-70B models locally on sovereign infrastructure vs. calling commercial API endpoints (GPT-5/GPT-6, Claude). The latency, security, and cost trade-offs every CTO must weigh.',
    read: '8 min read',
    author: {
      name: 'Tim Nguyen',
      role: 'Cybersecurity Lead',
      init: 'TN'
    },
    content: [
      {
        type: 'intro',
        text: 'The gap between closed commercial APIs (OpenAI, Anthropic, Google) and open-weight models (Llama 3.3, Mistral, Qwen, DeepSeek) has closed dramatically. For mid-market and enterprise organizations, the question is no longer "is open source good enough?", but rather "where does on-premise sovereign AI beat commercial cloud APIs?"'
      },
      {
        type: 'section',
        heading: 'The Case for Sovereign Open-Weight Deployments',
        body: 'Deploying quantized open-weight models (using vLLM, TensorRT-LLM, or Ollama) on dedicated AWS/Azure GPU instances or local Auckland hardware provides distinct strategic advantages:',
        bullets: [
          'Zero Data Leakage: 100% of telemetry, prompts, and training data remain strictly inside your private network perimeter.',
          'Immunity to Censorship & Provider Outages: No rate-limiting, sudden API deprecations, or vendor policy changes.',
          'Predictable Fixed Hardware Costs: High-volume throughput without worrying about runaway per-token billing.',
          'Fine-Tuning on Proprietary Domain Lexicons: Training models on your specific codebase, local NZ legislation, or industry terminology.'
        ]
      },
      {
        type: 'section',
        heading: 'When Commercial Frontier Models Still Dominate',
        body: 'Commercial frontier models (such as GPT-4o, GPT-5/6, and Claude 3.5/4 Sonnet) remain indispensable for tasks requiring broad general knowledge, deep multi-domain synthetic reasoning, advanced visual document OCR, and bleeding-edge code generation. For complex architectural design or unstructured cross-lingual translation, frontier APIs still hold an undeniable lead.'
      },
      {
        type: 'callout',
        text: 'The Modern Architecture: Use cheap open-weight models (8B-14B) for 80% of classification, summarization, and extraction, and escalate to frontier models only for complex reasoning and planning.'
      },
      {
        type: 'conclusion',
        heading: 'Summary',
        body: 'The future of enterprise AI is not a monopoly; it is an intelligent hybrid mesh. Design your software architecture to support both self-hosted models and cloud frontier endpoints interchangeably.'
      }
    ]
  },
  {
    id: 6,
    slug: 'why-nz-cloud-migrations-fail',
    cat: 'Cloud',
    date: 'Sep 05, 2026',
    title: 'Why Most NZ Cloud Migrations Fail (And How to Fix Them)',
    excerpt: 'The majority of cloud migration failures come down to inadequate discovery and planning. Here is what we have learned from 40+ migrations across New Zealand.',
    read: '6 min read',
    author: {
      name: 'Ravi Kumar',
      role: 'Head of Engineering',
      init: 'RK'
    },
    content: [
      {
        type: 'intro',
        text: 'Cloud migration is often sold by hyperscalers and sales reps as a simple "lift-and-shift" exercise: package up your on-premise VMs, pipe them to AWS or Azure, and immediately start saving money. In reality, after architecting over 40 cloud migrations across Auckland, Wellington, and Christchurch, we can tell you that lift-and-shift is where projects fail before they even start.'
      },
      {
        type: 'section',
        heading: '1. The "Lift-and-Shift" Trap',
        body: 'Moving legacy technical debt from a local server rack to cloud instances does not modernize your application — it just makes your inefficiencies billed by the minute. Unoptimized relational database queries, monolithic services with uncontrolled RAM consumption, and uncompressed static assets immediately drive cloud billing through the roof.'
      },
      {
        type: 'callout',
        text: 'Key Insight: The goal is not just moving to the cloud; it is taking advantage of cloud primitives — elasticity, managed services, automated backups, and infrastructure as code.'
      },
      {
        type: 'section',
        heading: '2. Underestimating Network Latency & Data Sovereignty in NZ',
        body: 'New Zealand businesses face unique considerations regarding network geography and data residency. While major cloud providers now have active or planned local availability zones in Auckland, routing traffic through Australian regions (ap-southeast-2) still introduces latency that can degrade transactional performance if not engineered with local edge caches and sensible CDN configurations.'
      },
      {
        type: 'section',
        heading: '3. What a Predictable Migration Looks Like',
        body: 'A successful migration follows four strict engineering stages rather than a rushed weekend cutover:',
        bullets: [
          'Comprehensive Discovery: Dependency mapping, bandwidth profiling, and license audits.',
          'Cloud Architecture & Refactoring: Containerization with Docker and Kubernetes, migrating to managed databases (RDS / Cloud SQL).',
          'Shadow Deployment & Load Testing: Running production workloads in parallel with zero impact on real clients.',
          'Automated Cutover with Rollback Guarantee: DNS switches with small TTLs and pre-tested rollback plans.'
        ]
      },
      {
        type: 'conclusion',
        heading: 'Final Thoughts',
        body: 'If your organization is considering a cloud migration or struggling with skyrocketing cloud bills, prioritize an independent technical audit before signing multi-year vendor commitments.'
      }
    ]
  },
  {
    id: 7,
    slug: 'fixed-price-vs-time-and-materials',
    cat: 'Software Dev',
    date: 'Aug 24, 2026',
    title: 'Fixed-Price vs Time-and-Materials: What Works for Custom Software',
    excerpt: 'Both engagement models have their place. We break down when each one protects you and when it does not — from the client side of the table.',
    read: '5 min read',
    author: {
      name: 'Vishal Pandya',
      role: 'Founder & Managing Director',
      init: 'VP'
    },
    content: [
      {
        type: 'intro',
        text: 'When commissioning custom software, the contract pricing model is one of the most critical decisions a business leader will make. The two prevailing models — Fixed-Price and Time-and-Materials (T&M) — each come with distinct trade-offs that affect project delivery, budget control, and agility.'
      },
      {
        type: 'section',
        heading: 'The Myth of Fixed-Price Safety',
        body: 'Clients often gravitate toward Fixed-Price because it creates an impression of guaranteed budget certainty. However, software development is inherently discovery-driven. When requirements evolve mid-project (as they almost always do once stakeholders touch the first prototypes), Fixed-Price contracts trigger contentious change orders, inflated initial risk premiums, and adversarial relationships with developers.'
      },
      {
        type: 'section',
        heading: 'When Fixed-Price Actually Works',
        body: 'Fixed-Price is suitable only when requirements are completely deterministic and well-bounded. Examples include:',
        bullets: [
          'Pre-scoped API integrations between well-documented systems.',
          'Migrating a database schema with defined input and output specs.',
          'Building a standalone landing page or marketing microsite with finalized Figma designs.'
        ]
      },
      {
        type: 'section',
        heading: 'The Hybrid Model: Capped Milestones',
        body: 'At Vectra Limited, we champion a modern hybrid approach: Capped Agile Milestones. We break projects into two-to-four-week delivery sprints with transparent sprint ceilings. Clients get guaranteed cost boundaries per milestone, regular working demonstrations, and the flexibility to pivot features without renegotiating a legal contract.'
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        body: 'Choose an engagement structure that aligns incentives toward shipping high-quality software, not one that encourages cutting corners to protect artificial margins.'
      }
    ]
  },
  {
    id: 8,
    slug: 'five-cybersecurity-gaps-smb-audit',
    cat: 'Security',
    date: 'Aug 14, 2026',
    title: 'The Five Cybersecurity Gaps We Find in Every SMB Audit',
    excerpt: 'After running dozens of security audits for Auckland-based businesses, five issues come up nearly every time. This post names them and tells you what to do.',
    read: '7 min read',
    author: {
      name: 'Tim Nguyen',
      role: 'Cybersecurity Lead',
      init: 'TN'
    },
    content: [
      {
        type: 'intro',
        text: 'Small and medium businesses in New Zealand are often under the impression that they are too small to be targeted by cybercriminals. In reality, automated vulnerability scanners do not care about your company turnover. They scan IP ranges indiscriminately, seeking unpatched servers, open ports, and weak credentials.'
      },
      {
        type: 'section',
        heading: 'Gap 1: Missing MFA on Legacy Systems & VPNs',
        body: 'While primary email accounts usually have MFA enabled, secondary portals, older remote desktop connections, and internal VPN appliances are frequently neglected. A single compromised password can give attackers full network ingress.'
      },
      {
        type: 'section',
        heading: 'Gap 2: Unmanaged SaaS & Shadow IT',
        body: 'Employees frequently spin up third-party productivity tools, paste sensitive customer information into unauthorized cloud platforms, or leave terminated staff accounts active months after departure.'
      },
      {
        type: 'section',
        heading: 'Gap 3: Backups That Have Never Been Restored',
        body: 'Having a green checkmark next to your automated nightly backup job is not the same as having a working disaster recovery plan. In simulated ransomware exercises, nearly 40% of organizations discover that their backup archives are corrupt, missing credentials, or take weeks to restore.'
      },
      {
        type: 'callout',
        text: 'Actionable Rule: An untested backup is not a backup — it is merely a hypothesis.'
      },
      {
        type: 'section',
        heading: 'Gap 4 & 5: Unpatched Perimeter Appliances & Over-Privileged Access',
        body: 'Firewalls and routers running firmware from three years ago remain one of the easiest attack vectors. Combine that with domain accounts where all users have Local Administrator privileges, and a standard phishing email turns into a company-wide ransomware lockdown within minutes.'
      },
      {
        type: 'conclusion',
        heading: 'Remediation Checklist',
        body: 'Begin by locking down external attack surfaces, enforcing phishing-resistant MFA across 100% of services, and conducting quarterly recovery drills.'
      }
    ]
  },
  {
    id: 9,
    slug: 'reporting-system-leadership-will-use',
    cat: 'Data',
    date: 'Jul 30, 2026',
    title: 'Building a Reporting System Your Leadership Team Will Actually Use',
    excerpt: 'Most BI dashboards go unused within three months. The reason is almost never technical — it is a discovery problem. Here is how we approach it.',
    read: '5 min read',
    author: {
      name: 'Ravi Kumar',
      role: 'Head of Engineering',
      init: 'RK'
    },
    content: [
      {
        type: 'intro',
        text: 'Enterprise software companies have spent a decade selling the dream of "real-time dashboards." Yet when you audit mid-market companies, the executive leadership still relies on emailed Excel sheets and manual reconciliations. Why do expensive BI implementations fail to gain traction?'
      },
      {
        type: 'section',
        heading: 'The "Metric Overload" Syndrome',
        body: 'When BI developers build dashboards, they typically cram dozens of charts, filters, and gauges onto a single screen. When an executive opens a dashboard with 25 visualizations, cognitive overload takes over. If a dashboard requires a five-minute user manual, nobody will check it before their 9 AM Monday leadership meeting.'
      },
      {
        type: 'section',
        heading: 'Designing Around Decision Triggers',
        body: 'Every metric on a dashboard should answer a single question: "If this number changes by 10%, what operational decision will we make?" If the metric does not directly trigger an action, it belongs in an ad-hoc exploratory tool, not on the executive dashboard.',
        bullets: [
          'Highlight anomalies and trends over absolute raw tallies.',
          'Automate alerting via Slack or email when thresholds breach normal bounds.',
          'Ensure the data latency is transparent (e.g. "Updated 12 mins ago").'
        ]
      },
      {
        type: 'conclusion',
        heading: 'Summary',
        body: 'Focus on simplicity, single sources of truth, and direct decision alignment to build reports that leaders check daily.'
      }
    ]
  },
  {
    id: 10,
    slug: 'azure-vs-aws-nz-2026',
    cat: 'Cloud',
    date: 'Jul 15, 2026',
    title: 'Azure vs AWS for New Zealand Businesses in 2026',
    excerpt: 'Latency, pricing, and compliance considerations for NZ companies choosing between the two leading cloud platforms this year.',
    read: '8 min read',
    author: {
      name: 'Vishal Pandya',
      role: 'Founder & Managing Director',
      init: 'VP'
    },
    content: [
      {
        type: 'intro',
        text: 'For New Zealand organizations modernizing their infrastructure, the choice almost always narrows down to Amazon Web Services (AWS) and Microsoft Azure. In 2026, both platforms offer incredible maturity, but distinct structural differences make each suited for different business profiles.'
      },
      {
        type: 'section',
        heading: 'When Azure is the Clear Winner',
        body: 'If your organization is already heavily invested in Microsoft 365, Active Directory / Entra ID, and Windows Server licensing, Azure provides unmatched integration and cost advantages through Azure Hybrid Benefit. Enterprise identity management and single-sign-on work out of the box.'
      },
      {
        type: 'section',
        heading: 'When AWS Dominates',
        body: 'AWS remains the undisputed leader in developer ergonomics, serverless ecosystems (Lambda, DynamoDB), and specialized open-source tooling. For SaaS builders, tech startups, and companies building greenfield cloud-native applications, AWS offers deeper tooling and faster deployment pipelines.'
      },
      {
        type: 'conclusion',
        heading: 'The Vectra Recommendation',
        body: 'Do not choose a cloud based on brand loyalty. Evaluate your current software stack, team skillset, and compliance needs to choose the platform that minimizes operational friction.'
      }
    ]
  },
  {
    id: 11,
    slug: 'rebuild-vs-refactor-legacy-system',
    cat: 'Software Dev',
    date: 'Jun 28, 2026',
    title: 'When to Rebuild vs. When to Refactor Your Legacy System',
    excerpt: 'The decision to rewrite from scratch is expensive and risky. We walk through the evaluation framework we use with clients facing this question.',
    read: '6 min read',
    author: {
      name: 'Anika Morrison',
      role: 'Lead UX Engineer',
      init: 'AM'
    },
    content: [
      {
        type: 'intro',
        text: 'Every growing business reaches a point where its core software feels slow, fragile, and difficult to update. The engineering team asks for a "complete ground-up rewrite," while leadership worries about business disruption and ballooning costs. How do you objectively decide between refactoring and rebuilding?'
      },
      {
        type: 'section',
        heading: 'The Second-System Effect',
        body: 'The risk of a complete rewrite is that all the subtle bug fixes, edge cases, and business logic accumulated over years are lost or misunderstood by the team writing the new code. Many companies spend two years rebuilding only to ship a system that does less than the legacy platform they retired.'
      },
      {
        type: 'section',
        heading: 'The Strangler Fig Pattern',
        body: 'Instead of an all-or-nothing rewrite, we frequently employ the Strangler Fig pattern: we leave the core system running while gradually carving out individual features into modern microservices or clean React frontends. Over time, the new system absorbs the old system with zero downtime and constant incremental value delivery.'
      },
      {
        type: 'conclusion',
        heading: 'Final Recommendation',
        body: 'Refactor if the foundational database schema and core domain models are sound. Rebuild only if the fundamental technology stack is dead and preventing you from hiring talent or securing customer data.'
      }
    ]
  }
]
