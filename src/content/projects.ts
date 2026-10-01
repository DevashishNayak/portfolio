export const projects = [
  {
    id: "lms-ai",
    index: "01",
    className: "project-arc",
    eyebrow: "RAG · Streaming chat · 2025",
    title: "LMS AI Assistant",
    description:
      "A grounded AI workspace for teachers and learners with citations, review queues, and human sign-off before publish.",
    tags: ["React", "TypeScript", "LLM APIs"],
    image:
      "https://images.unsplash.com/photo-1609915189900-455ffd52e50f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Sunlit desk with a laptop and notebooks by a window",
  },
  {
    id: "nativex",
    index: "02",
    className: "project-mori",
    eyebrow: "Real-time systems · 2023",
    title: "NativeX Live Class",
    description:
      "A resilient live-class surface built around Zoom, WebRTC, reconnects, presence, and a 100+ component design system.",
    tags: ["React", "Electron", "WebSockets"],
    image:
      "https://images.unsplash.com/photo-1587522384446-64daf3e2689a?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "People collaborating around laptops in a bright room",
  },
  {
    id: "topica",
    index: "03",
    className: "project-pulse",
    eyebrow: "Product engineering · 2021",
    title: "LMS Product System",
    description:
      "Shared navigation, course discovery, checkout, dashboards, and reusable UI primitives for a learning platform.",
    tags: ["React", "Material UI", "Jest"],
    image: null,
    imageAlt: "",
  },
] as const;

export const featuredSkills = [
  { n: "01", label: "React" },
  { n: "02", label: "Next.js" },
  { n: "03", label: "TypeScript" },
  { n: "04", label: "WebSockets" },
  { n: "05", label: "RAG / LLMs" },
  { n: "06", label: "Storybook" },
  { n: "07", label: "WebRTC" },
  { n: "08", label: "Zustand" },
] as const;

export const journey = [
  {
    dates: "Jul 2025 - now",
    title: "Senior Software Engineer (L3) · Esuhai / LMS AI",
    summary:
      "Owns streaming chat, RAG grounding, citations, and the teacher review queue for AI-assisted learning.",
    place: "Remote · India",
  },
  {
    dates: "Apr 2023 - Jun 2025",
    title: "Software Development Engineer (L2) · NativeX",
    summary:
      "Led live-class architecture, WebSockets, Zoom Electron SDK, GraphQL BFF, and a 100+ component Storybook system.",
    place: "GoEnglishX · Remote",
  },
  {
    dates: "Feb 2021 - Mar 2023",
    title: "Software Engineer (L1) · LMS Product",
    summary:
      "Shipped learner journeys, remediation dashboards, checkout, persistence, and shared Material UI primitives.",
    place: "Topica · Remote",
  },
] as const;
