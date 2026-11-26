export type ExpertiseId = "cloud" | "ai" | "fullstack" | "automation";

export interface Expertise {
  id: ExpertiseId;
  label: string;
  title: string;
  description: string;
  points: string[];
  stack: string[];
  accent: string;
}

export const expertiseIntro = {
  eyebrow: "Core expertise",
  title: "What I deliver, end to end",
  subtitle: "Four areas I own from architecture to production. Each panel shows a typical example of the work.",
  railLabel: "Expertise progress",
};

export const expertise: Expertise[] = [
  {
    id: "cloud",
    label: "AWS Cloud",
    title: "Serverless backends that scale themselves",
    description:
      "AWS architectures that stay fast and cost nothing when idle: Lambda and API Gateway APIs, DynamoDB and S3 storage, CloudFront at the edge, all shipped as code.",
    points: [
      "Serverless APIs on Lambda and API Gateway",
      "Highly available EC2, RDS and Auto Scaling stacks",
      "Infrastructure as code with Terraform",
    ],
    stack: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "Terraform", "Docker"],
    accent: "28 100% 55%",
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    title: "AI that actually knows your business",
    description:
      "Chatbots and RAG systems grounded in your own documents, built on Amazon Bedrock and modern LLM APIs, with retrieval and prompts tuned for real users.",
    points: [
      "RAG over your docs with vector search",
      "Chatbots for web, WhatsApp and Telegram",
      "Bedrock, OpenAI, Llama and DeepSeek models",
    ],
    stack: ["Bedrock", "OpenAI", "Llama 3.3", "DeepSeek", "LangChain", "Pinecone", "Python"],
    accent: "158 72% 48%",
  },
  {
    id: "fullstack",
    label: "Full-Stack Development",
    title: "Products, from the first pixel to the database",
    description:
      "Fast React and TypeScript interfaces on top of Node.js and Express APIs, with clean data models in PostgreSQL or MongoDB and payments, auth and webhooks done right.",
    points: [
      "Type-safe React and Next.js frontends",
      "REST APIs with auth, payments and webhooks",
      "PostgreSQL, MongoDB and Redis data layers",
    ],
    stack: ["React", "TypeScript", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "TailwindCSS"],
    accent: "262 90% 66%",
  },
  {
    id: "automation",
    label: "Automation",
    title: "Workflows that run while you sleep",
    description:
      "n8n workflows that connect the tools you already use, and CI/CD pipelines that test and ship every commit without anyone clicking a button.",
    points: [
      "n8n workflows across Gmail, Sheets and CRMs",
      "GitHub Actions pipelines deploying to AWS",
      "AI agents that triage, reply and report",
    ],
    stack: ["n8n", "Gmail", "Google Sheets", "Telegram", "GitHub Actions", "Docker"],
    accent: "346 84% 61%",
  },
];

export const cloudDemo = {
  stats: [
    { label: "p95 latency", value: "42 ms" },
    { label: "idle cost", value: "$0.00" },
  ],
  nodes: { users: "Users", cdn: "CloudFront", api: "API Gateway", lambda: "Lambda", db: "DynamoDB", s3: "S3", ai: "Bedrock" },
};

export const ragDemo = {
  assistant: "Support assistant",
  question: "Can I get a refund on an annual plan?",
  searching: "Searching knowledge base",
  sources: [
    { name: "refund-policy.pdf", score: 0.94 },
    { name: "billing-faq.md", score: 0.88 },
    { name: "terms-2025.pdf", score: 0.71 },
  ],
  answer:
    "Yes. Annual plans can be refunded in full within 30 days of purchase, and pro-rated after that. I can start the request for you now.",
  models: ["Bedrock", "OpenAI", "Llama 3.3", "DeepSeek"],
};

export const codeDemo = {
  file: "Dashboard.tsx",
  url: "app.client.com/dashboard",
  lines: [
    [["k", "export const "], ["f", "Dashboard"], ["p", " = () => {"]],
    [["p", "  "], ["k", "const "], ["p", "{ data } = "], ["f", "useQuery"], ["p", "("], ["s", "\"/api/orders\""], ["p", ");"]],
    [["p", "  "], ["k", "return "], ["p", "("]],
    [["p", "    <"], ["t", "Layout"], ["p", ">"]],
    [["p", "      <"], ["t", "Stats"], ["a", " revenue"], ["p", "={data.total} />"]],
    [["p", "      <"], ["t", "SalesChart"], ["a", " points"], ["p", "={data.daily} />"]],
    [["p", "    </"], ["t", "Layout"], ["p", ">"]],
    [["p", "  );"]],
    [["p", "};"]],
  ] as [string, string][][],
  stats: [
    { label: "Revenue", value: "$48.2k" },
    { label: "Orders", value: "1,284" },
  ],
  log: "GET /api/orders 200 · 38 ms",
  layers: ["React", "Node.js", "PostgreSQL"],
};

export const workflowDemo = {
  nodes: { trigger: "New lead", agent: "AI Agent", gmail: "Reply", sheets: "Log to Sheets", telegram: "Notify" },
  pipeline: ["Push", "Build", "Test", "Deploy"],
  deployed: "Live on AWS",
  executions: "executions today",
};
