/**
 * portfolio.ts
 * ─────────────────────────────────────────────────────────────────────
 * Single source of truth for all portfolio content.
 * Edit here — no need to touch any component file.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────

export const HERO = {
  name: "Adhithiyan S.",
  roles: [
    "Full-Stack Software Engineer",
    "React.js / Next.js Developer",
    "FastAPI Backend Engineer",
  ],
  headline: "Building Full-Stack\nWeb Apps",
  bio: "2+ years shipping React.js & Next.js interfaces — scalable architecture, real-time data via SSE, FastAPI backends, and polished UX across the web.",
  cta: { primary: "Contact Me", secondary: "View My Work" },
  links: {
    linkedin: "https://www.linkedin.com/in/adhithiyan-s-735851267",
    github:   "https://github.com/adhiththiyan",
    email:    "mailto:adhithiyan.sg@gmail.com",
  },
} as const;

// ─── About ────────────────────────────────────────────────────────────────

export const ABOUT = {
  badge:   "About Me",
  heading: "Turning Ideas Into Working Software",
  bio:     "I'm Adhithiyan S, a Full-Stack Software Engineer with 2+ years of experience designing and building end-to-end web and mobile applications using React.js, Next.js, React Native, Python, FastAPI, and PostgreSQL.",
  bioSecondary:
    "Experienced in real-time features via SSE, cross-platform mobile development, and production-grade auth systems — with a strong focus on clean, maintainable code across AI, fintech, and investment products.",

  profile: [
    { label: "Experience",  value: "2+ Years" },
    { label: "Education",   value: "Bachelor of Computer Application" },
    { label: "Role",        value: "Software Engineer" },
    { label: "Location",    value: "Coimbatore, India" },
    { label: "Email",       value: "adhithiyan.sg@gmail.com" },
    { label: "Phone",       value: "+91 9566853297" },
  ],

  stats: [
    { value: "2+", label: "Years Exp." },
    { value: "5+", label: "Products"   },
    { value: "2",  label: "Companies"  },
  ],

  skills: [
    { name: "React.js / Next.js",      level: 92 },
    { name: "React Native",            level: 60 },
    { name: "TypeScript / JavaScript", level: 88 },
    { name: "FastAPI / Python",        level: 78 },
    { name: "PostgreSQL / SQL",        level: 72 },
    { name: "Tailwind CSS",            level: 90 },
    { name: "Firebase / RBAC",         level: 75 },
    { name: "Docker / CI/CD",          level: 65 },
  ],
} as const;

// ─── Experience ───────────────────────────────────────────────────────────

export const EXPERIENCE = {
  badge:   "Experience",
  heading: "Work Experience",
  bio:     "My professional journey — from internship to full-time engineering roles.",

  items: [
    {
      role:    "Software Engineer",
      company: "Innoboon Technology",
      period:  "June 2024 — Present",
      type:    "Full-Time",
      current: true,
      points: [
        "Developed full-stack and frontend-focused web and mobile applications using React.js, Next.js, React Native, and FastAPI across multiple AI-driven and fintech products.",
        "Designed and implemented RESTful APIs, database models, and authentication systems using Python, FastAPI, and PostgreSQL.",
        "Built scalable, production-ready frontend architectures with reusable components, optimized state management, and real-time data integration.",
        "Collaborated across cross-functional teams to deliver features spanning web, mobile, and admin platforms.",
      ],
    },
    {
      role:    "Full-Stack Intern",
      company: "L3 Squad",
      period:  "Jan 2024 — Jun 2024",
      type:    "Internship",
      current: false,
      points: [
        "Built full-stack features for internal products including a meeting application and Chrome extensions.",
        "Used React.js for frontend development and Python/FastAPI for backend services.",
      ],
    },
  ],
} as const;

// ─── Projects ─────────────────────────────────────────────────────────────

export const PROJECTS = {
  badge:       "Selected Work",
  heading:     "Projects I've Built & Shipped",
  description: "From no-code AI agent platforms and AI-powered proposal automation to multi-agent investment tools and real-time fintech platforms.",

  items: [
    {
      category:    "AI Platform · ThinkLoop",
      title:       "No-Code AI Agent Platform",
      points: [
        "Designed and implemented the frontend architecture for a no-code AI agent platform using Next.js and React.",
        "Built real-time chatbot streaming via Server-Sent Events (SSE).",
        "Integrated external tools through MCP servers.",
      ],
      tags:        ["Next.js", "React", "SSE", "MCP", "TypeScript"],
    },
    {
      category:    "Investment · Stock Analysis",
      title:       "Multi-Agent AI Investment Platform",
      points: [
        "Architected cross-platform Investor Desk and Signals features using React.js, Next.js, and React Native.",
        "Shared stock signals, filtering, and thesis reporting across web and mobile.",
        "Implemented Firebase auth and admin approval workflows.",
      ],
      tags:        ["React.js", "Next.js", "React Native", "Firebase", "FastAPI"],
    },
    {
      category:    "FinTech · Transient AI",
      title:       "Portfolio Management Platform",
      points: [
        "Designed and developed interactive, scalable user interfaces using React.js and Next.js with clean architecture and reusable components.",
        "Integrated Microsoft Azure AD authentication for secure login and session handling.",
        "Implemented Role-Based Access Control (RBAC) to structure user permissions.",
        "Integrated real-time stock market data from third-party APIs to power live portfolio tracking and performance insights.",
        "Collaborated closely with FastAPI backend engineers for seamless data exchange.",
      ],
      tags:        ["React.js", "Next.js", "Azure AD", "RBAC", "FastAPI"],
    },
    {
      category:    "FinTech · Tickerlens",
      title:       "Stock Market Analysis Platform",
      points: [
        "Developed and maintained a full-stack stock market analysis platform using Next.js, React.js, FastAPI, and PostgreSQL.",
        "Delivered real-time market insights by integrating live data from the TrueData market data provider.",
        "Built and enhanced RESTful APIs supporting real-time stock data processing, user management, and authentication across web, mobile, and backend services.",
        "Worked within a monorepo architecture spanning the main web app, an internal admin portal, and shared modules for consistency across projects.",
        "Collaborated on the React Native mobile app, integrating the same backend APIs and business logic for feature parity across platforms.",
      ],
      tags:        ["Next.js", "React.js", "FastAPI", "PostgreSQL", "React Native"],
    },
    {
      category:    "AI Platform · Proposal Generator",
      title:       "AI-Powered Proposal Generation Platform",
      points: [
        "Developed and maintained an AI-powered proposal generation platform using Next.js, TypeScript, FastAPI, and PostgreSQL.",
        "Automated client proposal creation from RFP documents.",
        "Built responsive, production-grade UIs for proposal creation, review, knowledge base management, and organization settings.",
        "Integrated FastAPI backend APIs for authentication, proposal workflows, document management, AI generation, and export.",
        "Implemented real-time generation progress via Server-Sent Events (SSE).",
        "Contributed to an AI-powered RAG workflow spanning knowledge base retrieval, section generation, inline editing, and document export.",
        "Built role-based functionality for organization admins and members with secure, org-level data isolation.",
      ],
      tags:        ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "RAG"],
    },
    {
      category:    "Full-Stack · Stelvio",
      title:       "Service Booking Platform",
      points: [
        "Developed a scalable, service-based web application from scratch using React.js, Next.js, FastAPI, Python, and PostgreSQL.",
        "Enabled users to browse services and submit requests through a responsive, intuitive interface.",
        "Designed RESTful APIs with request validation, business logic, and database integration.",
        "Optimized PostgreSQL schemas and queries for performance and reliability.",
        "Built a comprehensive admin portal for managing services, customers, and bookings with full CRUD functionality and RBAC.",
        "Implemented secure authentication and reliable API communication with proper validation and error handling.",
      ],
      tags:        ["React.js", "Next.js", "FastAPI", "PostgreSQL", "RBAC"],
    },
    {
      category:    "Full-Stack",
      title:       "Project Management System",
      points: [
        "Built a full-stack project management platform — Next.js/React.js frontend and Python/FastAPI/PostgreSQL backend.",
        "Implemented RESTful APIs, database models, authentication, and task management functionality.",
      ],
      tags:        ["Next.js", "FastAPI", "PostgreSQL", "Python", "REST APIs"],
    },
  ],
} as const;

// ─── Services ─────────────────────────────────────────────────────────────

export const SERVICES = {
  badge:       "Services",
  heading:     "What Can I Do For You?",
  description: "From frontend to backend, web to mobile — here's how I can help bring your product to life.",

  items: [
    {
      title:       "Full-Stack Web Development",
      description: "End-to-end web applications using Next.js and React.js on the frontend, paired with FastAPI and PostgreSQL on the backend — from RESTful APIs and authentication to polished, responsive UIs.",
    },
    {
      title:       "Cross-Platform Mobile Apps",
      description: "Building shared codebases for web and mobile using React Native — delivering consistent UX and feature parity across platforms with a single unified architecture.",
    },
    {
      title:       "Real-Time & AI-Driven Systems",
      description: "Streaming chatbot interfaces via Server-Sent Events (SSE), no-code AI agent platforms with MCP integrations, and multi-agent investment tools that work at production scale.",
    },
    {
      title:       "API Design & Backend Engineering",
      description: "Designing clean RESTful APIs, database schemas, and auth systems using FastAPI and Python — including RBAC, Firebase Auth, and session management for production apps.",
    },
    {
      title:       "UI Architecture & Component Systems",
      description: "Building reusable component libraries, scalable design systems, and Storybook-documented UI kits that keep product UIs consistent and developer velocity high.",
    },
  ],
} as const;

// ─── Footer ───────────────────────────────────────────────────────────────

export const FOOTER = {
  badge:   "Contact",
  heading: "I'd Love To Hear From You.",
  description:
    "Whether you have a question, want to start a project, or just want to connect — feel free to get in touch. I'm always open to discussing new ideas, creative projects, or opportunities.",

  contact: [
    { label: "Where to Find Me", value: "Coimbatore, India",          href: null },
    { label: "Email Me At",      value: "adhithiyan.sg@gmail.com",    href: "mailto:adhithiyan.sg@gmail.com" },
    { label: "Call Me At",       value: "+91 9566853297",             href: "tel:+919566853297" },
  ],
} as const;
