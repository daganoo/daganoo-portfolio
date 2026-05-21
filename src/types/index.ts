export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: ProjectCategory;
  image: string;
  links: {
    live?: string;
    source?: string;
  };
  featured: boolean;
}

export type ProjectCategory =
  | "AWS Cloud"
  | "AI/Bedrock"
  | "Full-Stack React+Node"
  | "n8n Automation";

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency: number;
}

export type SkillCategory =
  | "Cloud & Infrastructure"
  | "Frontend"
  | "Backend"
  | "AI & Machine Learning"
  | "Automation";

export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  type: "education" | "work";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
