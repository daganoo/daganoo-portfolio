export interface UpworkStat {
  value: string;
  label: string;
}

export type UpworkBadgeType = "jobSuccess" | "topRated";

export interface UpworkBadge {
  type: UpworkBadgeType;
  label: string;
}

export interface UpworkProfile {
  name: string;
  avatar: string;
  location: string;
  timezone: string;
  badges: UpworkBadge[];
  stats: UpworkStat[];
  title: string;
  rate: string;
  url: string;
  cta: string;
}

export const upworkProfile: UpworkProfile = {
  name: "Marouane D.",
  avatar: "/images/avatar.webp",
  location: "Marrakesh, Morocco",
  timezone: "Africa/Casablanca",
  badges: [
    { type: "jobSuccess", label: "100% Job Success" },
    { type: "topRated", label: "Top Rated" },
  ],
  stats: [
    { value: "$1K+", label: "Total earnings" },
    { value: "4", label: "Total jobs" },
    { value: "65", label: "Total hours" },
  ],
  title: "Full-Stack AI Dev | AWS, RAG, LLM & Chatbots (React, Node, Python)",
  rate: "$14.00/hr",
  url: "https://www.upwork.com/freelancers/~01205234478041cf4f",
  cta: "View Upwork Profile",
};
