import { Skill } from "../types";

export const skills: Skill[] = [
  {
    name: "AWS",
    icon: "Cloud",
    category: "Cloud & Infrastructure",
    proficiency: 90,
    years: 4,
  },
  {
    name: "S3",
    icon: "Database",
    category: "Cloud & Infrastructure",
    proficiency: 85,
    years: 3,
  },
  {
    name: "Lambda",
    icon: "Zap",
    category: "Cloud & Infrastructure",
    proficiency: 85,
    years: 3,
  },
  {
    name: "Docker",
    icon: "Container",
    category: "Cloud & Infrastructure",
    proficiency: 75,
    years: 2,
  },
  {
    name: "React",
    icon: "Code2",
    category: "Frontend",
    proficiency: 90,
    years: 4,
  },
  {
    name: "Node.js",
    icon: "Server",
    category: "Backend",
    proficiency: 85,
    years: 4,
  },
  {
    name: "Python",
    icon: "Terminal",
    category: "Backend",
    proficiency: 80,
    years: 3,
  },
  {
    name: "DynamoDB",
    icon: "Table",
    category: "Backend",
    proficiency: 80,
    years: 3,
  },
  {
    name: "Bedrock",
    icon: "Sparkles",
    category: "AI & Machine Learning",
    proficiency: 80,
    years: 2,
  },
  {
    name: "n8n",
    icon: "Workflow",
    category: "Automation",
    proficiency: 85,
    years: 2,
  },
];

export const skillCategories = [
  "Cloud & Infrastructure",
  "Frontend",
  "Backend",
  "AI & Machine Learning",
  "Automation",
] as const;
