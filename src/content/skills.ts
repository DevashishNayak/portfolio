export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend",
    items: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "REST",
      "GraphQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Zustand",
      "Tailwind",
      "Material UI",
      "Electron",
      "Storybook",
      "WebRTC",
    ],
  },
  {
    id: "realtime",
    label: "Real-time",
    items: ["WebSockets", "Rooms and presence", "Zoom Meeting SDK", "GraphQL BFF"],
  },
  {
    id: "ai",
    label: "AI / LLM",
    items: [
      "OpenAI API",
      "Anthropic API",
      "RAG",
      "Streaming chat",
      "Grounded UI",
      "Cursor",
      "Claude",
    ],
  },
  {
    id: "quality",
    label: "Quality",
    items: [
      "Core Web Vitals",
      "Code splitting",
      "Jest",
      "Cypress",
      "GitHub Actions",
      "ARIA",
      "SEO",
    ],
  },
];
