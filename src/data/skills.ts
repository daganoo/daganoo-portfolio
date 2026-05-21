import { Skill } from "../types";

export const skills: Skill[] = [
  {
    name: "AWS",
    icon: "Cloud",
    category: "Cloud & Infrastructure",
    proficiency: 90,
  },
  {
    name: "S3",
    icon: "Database",
    category: "Cloud & Infrastructure",
    proficiency: 85,
  },
  {
    name: "Lambda",
    icon: "Zap",
    category: "Cloud & Infrastructure",
    proficiency: 85,
  },
  {
    name: "Docker",
    icon: "Container",
    category: "Cloud & Infrastructure",
    proficiency: 75,
  },
  {
    name: "React",
    icon: "Code2",
    category: "Frontend",
    proficiency: 90,
  },
  {
    name: "Node.js",
    icon: "Server",
    category: "Backend",
    proficiency: 85,
  },
  {
    name: "Python",
    icon: "Terminal",
    category: "Backend",
    proficiency: 80,
  },
  {
    name: "DynamoDB",
    icon: "Table",
    category: "Backend",
    proficiency: 80,
  },
  {
    name: "Bedrock",
    icon: "Sparkles",
    category: "AI & Machine Learning",
    proficiency: 80,
  },
  {
    name: "n8n",
    icon: "Workflow",
    category: "Automation",
    proficiency: 85,
  },
];

export const skillCategories = [
  "Cloud & Infrastructure",
  "Frontend",
  "Backend",
  "AI & Machine Learning",
  "Automation",
] as const;
