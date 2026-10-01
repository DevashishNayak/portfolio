export type Experience = {
  id: string;
  title: string;
  company: string;
  org: string;
  level: string;
  dates: string;
  location: string;
  stack: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    id: "lms-ai",
    title: "LMS AI",
    company: "Esuhai / GoEnglishX",
    org: "GoEnglishX Education Pvt. Ltd.",
    level: "L3",
    dates: "Jul 2025 - Apr 2026",
    location: "Remote",
    stack: "JavaScript, TypeScript, React, Next.js, Node.js, NestJS",
    summary:
      "Own the LMS AI assistant for teachers and learners: streaming chat, content suggestions, and citation-backed answers with human review before publish.",
    highlights: [
      "Designed RAG over course and FAQ corpora on a NestJS service layer so ungrounded output cannot ship.",
      "Built a teacher review queue (accept, edit, reject) so suggested content never publishes without an explicit action.",
      "Wired citation chips in the chat UI so answers link back to the retrieved course or FAQ chunk.",
      "Standardized Cursor and Claude scaffolding, prompt templates, and PR gates so AI-authored TypeScript still requires human review.",
    ],
  },
  {
    id: "nativex",
    title: "NativeX Live Class",
    company: "GoEnglishX",
    org: "GoEnglishX Education Pvt. Ltd.",
    level: "L2",
    dates: "Apr 2023 - Jun 2025",
    location: "Remote",
    stack: "JavaScript, TypeScript, React, Next.js, Node.js, NestJS",
    summary:
      "Led live-class architecture across Zoom Electron SDK and WebRTC, then a Storybook design system of 100+ components used by Admin and LMS.",
    highlights: [
      "Re-architected the live-class surface for stability and shipped 40+ Admin and LMS screens.",
      "Code-splitting cut initial JS by about 28% and improved loads by about 30%.",
      "Brought live-class LCP from about 4.1s to 2.3s with a frontend perf dashboard.",
      "Owned LMS chat (WebSocket rooms, presence, MongoDB), a NestJS GraphQL BFF, and Zustand media and chat state.",
      "Added Jest and Cypress coverage for live-class join and chat reconnect, plus a11y and SEO on LMS surfaces.",
    ],
  },
  {
    id: "topica",
    title: "LMS Product",
    company: "Topica Edtech Group",
    org: "Topica Edtech Group",
    level: "L1",
    dates: "Feb 2021 - Mar 2023",
    location: "Remote",
    stack: "JavaScript, TypeScript, React, Next.js",
    summary:
      "Shipped learner and internal LMS surfaces on a shared MUI layer, including course discovery, cart, checkout, and remediation dashboards.",
    highlights: [
      "Shipped 25+ React/MUI LMS pages covering navigation, course discovery, detail, and cart/checkout.",
      "Delivered 10+ remediation dashboard pages plus shared search primitives (chips, autocomplete, advanced search).",
      "Extracted shared tables, forms, dialogs, and empty/error states so new screens reused one UI layer.",
      "Owned cart/checkout and course-detail API wiring, including loading, validation, and failure states.",
      "Implemented enrollment and cart persistence so learners could leave and resume checkout without losing state.",
    ],
  },
];

export const nativexMetrics = [
  { value: "2.3s", label: "Live-class LCP, down from 4.1s" },
  { value: "28%", label: "Less initial JavaScript after code-splitting" },
  { value: "40+", label: "Admin and LMS surfaces shipped" },
] as const;
