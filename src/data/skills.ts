export interface StackGroup {
  category: string;
  blurb: string;
  accent: string;
  items: string[];
}

export const stackIntro = {
  eyebrow: "Tech stack",
  title: "Tools I use in production",
  subtitle: "The languages, frameworks and services behind the work above, grouped by where they sit in a product.",
};

export const stackGroups: StackGroup[] = [
  {
    category: "Cloud & DevOps",
    blurb: "AWS infrastructure, containers and pipelines",
    accent: "28 100% 55%",
    items: ["Bedrock", "Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront", "EC2", "RDS", "ELB", "Auto Scaling", "EFS", "Route 53", "ACM", "VPC", "Docker", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    category: "AI & Data",
    blurb: "LLMs, retrieval, agents and analytics",
    accent: "158 72% 48%",
    items: ["Bedrock", "OpenAI", "RAG", "AI Agents", "MCP", "n8n", "Python", "PySpark", "Spark MLlib", "Pandas", "NumPy", "Scikit-learn", "NLP", "Machine Learning", "Data Visualization"],
  },
  {
    category: "Frontend",
    blurb: "Fast, accessible interfaces",
    accent: "217 91% 60%",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
  },
  {
    category: "Backend & Databases",
    blurb: "APIs and data models",
    accent: "142 71% 45%",
    items: ["Node.js", "Express", "Laravel", "PHP", "Java", "Python", "REST API", "PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "Mobile & Desktop",
    blurb: "Apps beyond the browser",
    accent: "262 90% 66%",
    items: ["React Native", "Flutter", "Electron", "JavaFX", "Tkinter"],
  },
  {
    category: "Tools",
    blurb: "Everyday workflow",
    accent: "45 93% 52%",
    items: ["Git", "GitHub", "Supabase", "Stripe", "Figma", "WordPress"],
  },
];
