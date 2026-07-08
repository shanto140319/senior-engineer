import type { RoadmapPhase, SeniorTip, ToolCategory } from "./types";

export const phases: RoadmapPhase[] = [
  {
    id: 1,
    title: "Backend Foundations",
    subtitle: "Spring Boot + Java Mastery",
    duration: "Weeks 1–6",
    color: "#6366f1",
    icon: "⚙️",
    steps: [
      {
        title: "Java Essentials for Spring Boot",
        practical: [
          {
            text: "Write Java with generics, lambdas, streams, and Optional — no raw types",
            slug: "java-modern-features",
          },
          {
            text: "Understand OOP deeply: SOLID principles, composition over inheritance",
            slug: "oop-solid-composition",
          },
          {
            text: "Master checked vs unchecked exceptions and when to use each",
            slug: "exceptions-checked-unchecked",
          },
          "Practice: convert 5 frontend array operations (map, filter, reduce) into Java Streams",
        ],
      },
      {
        title: "Spring Boot Project Structure",
        practical: [
          "Scaffold a project on start.spring.io with Web, JPA, Validation, Security",
          "Layer it correctly: Controller → Service → Repository. Never skip layers.",
          "Use @RestController, @Service, @Repository — understand what each does",
          "Practice: build a /users CRUD API with proper layering in 3 hours",
        ],
      },
      {
        title: "REST API Design",
        practical: [
          "Design resource URLs as nouns, not verbs: /users not /getUsers",
          "Use HTTP verbs correctly: GET (read), POST (create), PUT (replace), PATCH (update), DELETE",
          "Return consistent JSON: { data, message, status } always",
          "Use @Valid with DTOs — never expose entity classes directly to API",
          "Practice: design a Twitter-like API contract before writing any code",
        ],
      },
      {
        title: "PostgreSQL + Spring Data JPA",
        practical: [
          "Write queries in JPQL and native SQL — don't rely only on method names",
          "Understand lazy vs eager loading. Default to LAZY. Never trigger N+1.",
          "Use @Transactional correctly — know propagation and isolation levels",
          "Enable Hibernate SQL logs in dev and analyze every query your app runs",
          "Practice: find and fix 3 N+1 issues in your users API using JPA logs",
        ],
      },
      {
        title: "Auth: Spring Security + JWT",
        practical: [
          "Implement JWT auth from scratch — UserDetailsService, JwtFilter, SecurityConfig",
          "Understand SecurityFilterChain — trace every auth request through filters",
          "Add role-based access: @PreAuthorize('hasRole(ADMIN)') on endpoints",
          "Practice: build login, register, refresh token endpoints with proper 401/403 handling",
        ],
      },
      {
        title: "Exception Handling & Validation",
        practical: [
          "Build a global @ControllerAdvice — one place for all error responses",
          "Validate all inputs with Bean Validation (@NotBlank, @Size, @Pattern)",
          "Map exceptions to correct HTTP status codes, never leak stack traces",
          "Practice: make your API return consistent errors for every edge case",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Database Mastery",
    subtitle: "SQL, NoSQL & Performance",
    duration: "Weeks 7–10",
    color: "#0ea5e9",
    icon: "🗄️",
    steps: [
      {
        title: "SQL That Actually Performs",
        practical: [
          "Write every JOIN type with real data: INNER, LEFT, RIGHT, FULL, CROSS",
          "Use EXPLAIN ANALYZE on every slow query — read the query plan",
          "Index columns you filter or sort on. Composite indexes: column order matters.",
          "Use window functions: ROW_NUMBER, RANK, LAG, LEAD for analytics queries",
          "Practice: optimize a query from 2 seconds to under 50ms using indexes",
        ],
      },
      {
        title: "Transactions & Consistency",
        practical: [
          "Understand ACID — Atomicity, Consistency, Isolation, Durability in code",
          "Handle optimistic locking with @Version to prevent lost updates",
          "Know isolation levels: READ_COMMITTED vs REPEATABLE_READ vs SERIALIZABLE",
          "Practice: simulate a bank transfer, ensure money never disappears",
        ],
      },
      {
        title: "Database Migrations with Flyway",
        practical: [
          "Never alter a running DB manually — all changes go through migration scripts",
          "Name migrations: V1__create_users_table.sql, V2__add_email_index.sql",
          "Write rollback strategies for every migration before you write the migration",
          "Practice: migrate a 3-table schema through 5 versions with Flyway",
        ],
      },
      {
        title: "Redis Caching",
        practical: [
          "Add Spring Cache with Redis: @Cacheable, @CacheEvict, @CachePut",
          "Implement cache-aside manually for complex scenarios",
          "Set TTL on every cache key — stale data is a bug",
          "Use Redis for rate limiting: increment and expire with Lua scripts",
          "Practice: cache a slow product list endpoint and measure the speed gain",
        ],
      },
      {
        title: "When to Use NoSQL",
        practical: [
          "Use MongoDB for dynamic schemas (user activity logs, CMS content)",
          "Use Redis for ephemeral data (sessions, caches, rate limits, queues)",
          "Use Elasticsearch for full-text search over structured data",
          "Practice: add MongoDB to store user activity events alongside your SQL DB",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "System Design Core",
    subtitle: "Build Systems That Scale",
    duration: "Weeks 11–16",
    color: "#10b981",
    icon: "🏗️",
    steps: [
      {
        title: "The 5-Step Design Framework",
        practical: [
          "Step 1 — Clarify: ask functional (what) and non-functional (scale, latency) requirements",
          "Step 2 — Estimate: calculate RPS, storage, bandwidth before drawing boxes",
          "Step 3 — High-level: draw client → API → services → DB → cache → queue",
          "Step 4 — Deep dive: zoom into the hardest component and solve it fully",
          "Step 5 — Bottlenecks: name single points of failure and how you fix each",
          "Practice: apply this to URL Shortener in writing before reading any solution",
        ],
      },
      {
        title: "Load Balancing & Horizontal Scaling",
        practical: [
          "Make your Spring Boot app stateless — no in-memory session state",
          "Store session in Redis so any instance can serve any request",
          "Understand Nginx round-robin vs least-connections vs IP-hash",
          "Practice: run 3 Spring Boot instances behind Nginx locally with Docker Compose",
        ],
      },
      {
        title: "Async Processing with Message Queues",
        practical: [
          "Use Kafka or RabbitMQ for anything that can be slow: emails, reports, notifications",
          "Implement producer in Spring with @KafkaTemplate, consumer with @KafkaListener",
          "Handle retries and dead-letter queues — failed messages must not vanish",
          "Practice: move email sending from synchronous to Kafka-queued in your project",
        ],
      },
      {
        title: "API Gateway & Rate Limiting",
        practical: [
          "Implement token bucket rate limiting with Redis (atomic Lua script)",
          "Add API gateway concepts: auth check, routing, request logging in one place",
          "Use Spring Cloud Gateway or Nginx for local gateway simulation",
          "Practice: enforce 100 requests/minute per user on your API",
        ],
      },
      {
        title: "CAP Theorem in Practice",
        practical: [
          "CP systems (PostgreSQL): choose consistency over availability during partition",
          "AP systems (Cassandra, DynamoDB): choose availability, accept eventual consistency",
          "Understand why you can't have all three — pick your tradeoff explicitly",
          "Practice: explain in writing what happens to your app if the DB goes down for 30 seconds",
        ],
      },
      {
        title: "Classic Design Problems",
        practical: [
          "URL Shortener: hashing, ID generation, redirect caching — build it",
          "Rate Limiter: token bucket, sliding window — implement both in Redis",
          "Notification System: fan-out, multi-channel (push, email, SMS) — design it",
          "News Feed: fan-out-on-write vs fan-out-on-read — know the tradeoff",
          "Chat App: WebSockets in Spring, message ordering, delivery guarantees",
          "Practice: spend 45 minutes on each problem before reading any reference",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Production Engineering",
    subtitle: "Docker, CI/CD & Observability",
    duration: "Weeks 17–20",
    color: "#f59e0b",
    icon: "🚀",
    steps: [
      {
        title: "Docker & Containerization",
        practical: [
          "Write a multi-stage Dockerfile for Spring Boot — build stage + lean runtime stage",
          "Use docker-compose.yml for full local stack: app + PostgreSQL + Redis + Kafka",
          "Never use :latest in production — always pin image versions",
          "Practice: containerize your full project, run it with one docker compose up",
        ],
      },
      {
        title: "CI/CD Pipeline",
        practical: [
          "Set up GitHub Actions: test → build → Docker build → push → deploy",
          "Run unit + integration tests in CI — no merge without green pipeline",
          "Use environment-specific configs: application-dev.yml, application-prod.yml",
          "Practice: any git push to main automatically deploys to Railway or Render",
        ],
      },
      {
        title: "Observability: Logs, Metrics, Traces",
        practical: [
          "Use structured logging with Logback + JSON — searchable in production",
          "Add Micrometer + Actuator for metrics — expose /actuator/health and /metrics",
          "Add correlation IDs to every request so you can trace across logs",
          "Set up Grafana + Prometheus locally — build a dashboard for your app",
          "Practice: debug a simulated production incident using only your logs and metrics",
        ],
      },
      {
        title: "Security Hardening",
        practical: [
          "Store secrets in env vars or Vault — never in code or git",
          "Add HTTPS everywhere — configure SSL in Nginx, not in Spring Boot",
          "Implement OWASP Top 10 fixes: injection, XSS, IDOR, insecure deserialization",
          "Practice: run OWASP ZAP against your app and fix every finding",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "AI-Age Engineering",
    subtitle: "Build AI-Native Products",
    duration: "Weeks 21–26",
    color: "#ec4899",
    icon: "🤖",
    steps: [
      {
        title: "LLM API Integration in Spring Boot",
        practical: [
          "Call Anthropic or OpenAI API from Spring Boot with WebClient",
          "Implement streaming responses with Server-Sent Events (SSE)",
          "Add function/tool calling — let the LLM call your Java methods",
          "Track token usage per request — cost is a first-class metric",
          "Practice: build a streaming chat endpoint in Spring Boot in one day",
        ],
      },
      {
        title: "RAG: Retrieval-Augmented Generation",
        practical: [
          "Understand embeddings — vectors that encode semantic meaning as numbers",
          "Store vectors in pgvector (PostgreSQL extension) — no new DB needed",
          "Build the RAG pipeline: chunk docs → embed → store → retrieve → prompt",
          "Tune chunk size and overlap — test with 500, 1000, and 2000 token chunks",
          "Practice: build a document Q&A endpoint for PDF uploads in Spring Boot",
        ],
      },
      {
        title: "AI Agents & Tool Use",
        practical: [
          "Understand the ReAct loop: Reason → Act (tool call) → Observe → Repeat",
          "Define tools as Java methods exposed to the LLM via function definitions",
          "Handle multi-turn conversations with full message history in context",
          "Add timeout and max-turn guards — agents can loop infinitely without them",
          "Practice: build an agent that can query your DB and answer business questions",
        ],
      },
      {
        title: "AI Evals & Production Reliability",
        practical: [
          "LLMs are non-deterministic — you need test cases, not just unit tests",
          "Build an eval dataset: 50 question-answer pairs for your feature",
          "Run evals before deploying prompt changes — treat prompts as code",
          "Add guardrails: detect and block prompt injection, toxic output, PII leakage",
          "Practice: write 20 eval cases for your Q&A feature, run them in CI",
        ],
      },
      {
        title: "AI-Assisted Development Workflow",
        practical: [
          "Use Claude Code or Cursor as a pair programmer — not an autocomplete",
          "Give precise context: architecture decisions, existing patterns, constraints",
          "Review every AI-generated diff line by line — you own what merges",
          "Use AI for: boilerplate, test generation, refactoring, documentation",
          "Avoid AI for: security-critical code, architecture decisions, DB migrations",
          "Practice: build a full feature in half the time using AI, without skipping review",
        ],
      },
      {
        title: "Cost & Performance of AI Features",
        practical: [
          "Cache LLM responses for identical prompts with Redis (semantic or exact)",
          "Use smaller models for simple tasks — GPT-4o-mini vs GPT-4o per use case",
          "Add a cost budget per user — block requests that exceed daily token spend",
          "Monitor latency of LLM calls separately in your metrics dashboard",
          "Practice: reduce your AI feature's cost by 40% through caching and model selection",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Senior-Level Habits",
    subtitle: "What separates senior from mid",
    duration: "Ongoing",
    color: "#8b5cf6",
    icon: "🎯",
    steps: [
      {
        title: "Code Review as a Communication Skill",
        practical: [
          "Review for correctness first, style second — never the reverse",
          "Leave comments that teach, not judge: 'Consider X because Y' not 'wrong'",
          "Catch: missing error handling, no tests, N+1 queries, hardcoded secrets",
          "Practice: review 3 open-source Spring Boot PRs per week on GitHub",
        ],
      },
      {
        title: "Technical Writing",
        practical: [
          "Write an Architecture Decision Record (ADR) for every major technical choice",
          "Document the why, not just the what — future you needs the reasoning",
          "Write post-mortems for bugs: what happened, why, how to prevent it",
          "Practice: write one ADR for your current project this week",
        ],
      },
      {
        title: "Estimation & Delivery",
        practical: [
          "Break tasks into sub-tasks under 1 day each — if you can't, it's not clear enough",
          "Add 30% buffer to estimates — uncertainty is not pessimism, it's honesty",
          "Communicate blockers on day one, not deadline day",
          "Practice: estimate your next 3 tasks, track actual time, calibrate",
        ],
      },
      {
        title: "Build in Public",
        practical: [
          "Ship a real project that solves a real problem — not another todo app",
          "Write a blog post about a hard problem you solved this month",
          "Contribute a PR to a Spring Boot or Spring Security project",
          "Build one AI-powered tool publicly and share it",
        ],
      },
    ],
  },
];

export const allTools: ToolCategory[] = [
  { cat: "Backend", items: ["Java 21+", "Spring Boot 3", "Spring Security", "Spring Data JPA", "Maven / Gradle"] },
  { cat: "Database", items: ["PostgreSQL", "Redis", "MongoDB", "Flyway", "pgvector"] },
  { cat: "Messaging", items: ["Apache Kafka", "RabbitMQ", "Spring Kafka"] },
  { cat: "DevOps", items: ["Docker", "Docker Compose", "GitHub Actions", "Nginx"] },
  { cat: "Observability", items: ["Micrometer", "Prometheus", "Grafana", "Logback JSON"] },
  { cat: "AI Layer", items: ["Anthropic SDK", "OpenAI Java SDK", "Spring AI", "LangChain4j"] },
  { cat: "AI Dev Tools", items: ["Claude Code", "Cursor", "GitHub Copilot"] },
  { cat: "Testing", items: ["JUnit 5", "Mockito", "Testcontainers", "WireMock"] },
];

export const catColors: Record<string, string> = {
  Backend: "#6366f1",
  Database: "#0ea5e9",
  Messaging: "#10b981",
  DevOps: "#f59e0b",
  Observability: "#ef4444",
  "AI Layer": "#ec4899",
  "AI Dev Tools": "#8b5cf6",
  Testing: "#14b8a6",
};

export const learningOrder = [
  "Java + Spring Boot",
  "PostgreSQL + JPA",
  "Docker + GitHub Actions",
  "Redis + Kafka",
  "Spring Security + JWT",
  "System Design",
  "LLM APIs + RAG",
  "AI Agents + Evals",
];

export const seniorTips: SeniorTip[] = [
  {
    icon: "🎯",
    title: "You own the problem, not the ticket",
    points: [
      "Don't just implement what's asked — understand why it's asked",
      "If the requirement is wrong, say so before building",
      "Proactively flag risks, edge cases, and dependencies",
      "Communicate status without being asked",
    ],
    color: "#6366f1",
  },
  {
    icon: "🔍",
    title: "You debug with method, not luck",
    points: [
      "Read the full stack trace before Googling anything",
      "Reproduce the bug locally before touching production",
      "Use logs and metrics to narrow the surface area first",
      "When you fix it, explain why it worked",
    ],
    color: "#0ea5e9",
  },
  {
    icon: "🏛️",
    title: "You think in systems, not features",
    points: [
      "Ask: what breaks if this gets 10x more load?",
      "Design for the change that hasn't happened yet",
      "Write ADRs — decisions without rationale are just accidents",
      "Know the cost (latency, money, ops burden) of your choices",
    ],
    color: "#10b981",
  },
  {
    icon: "🤝",
    title: "You make the team better",
    points: [
      "Your code reviews teach, they don't just approve or block",
      "You write tests that serve as documentation",
      "You document the why, not just the what",
      "Junior engineers grow faster around you",
    ],
    color: "#f59e0b",
  },
  {
    icon: "⚠️",
    title: "You manage risk, not just code",
    points: [
      "You never deploy on Fridays without a rollback plan",
      "Feature flags before big releases — decouple deploy from release",
      "Migrations are the scariest thing — you test them twice",
      "You know the blast radius of every change you ship",
    ],
    color: "#ef4444",
  },
  {
    icon: "🤖",
    title: "AI tools amplify, not replace, your judgment",
    points: [
      "You use AI for boilerplate and tests, not architecture",
      "You review AI code harder than your own — it has no context",
      "You catch when AI generates plausible but wrong logic",
      "You prompt with constraints: 'no new dependencies, use existing patterns'",
    ],
    color: "#ec4899",
  },
];
