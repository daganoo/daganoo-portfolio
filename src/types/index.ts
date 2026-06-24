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
  | "AWS Cloud + DevOps"
  | "AI/Bedrock"
  | "Full-Stack React+Node";

export interface SkillGroup {
  category: string;
  details: string;
}

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
