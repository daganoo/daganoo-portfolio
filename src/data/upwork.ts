export interface UpworkStat {
  value: string;
  label: string;
}

export interface UpworkProfile {
  name: string;
  avatar: string;
  location: string;
  timezone: string;
  badges: string[];
  stats: UpworkStat[];
  title: string;
  rate: string;
  url: string;
  cta: string;
}

export const upworkProfile: UpworkProfile = {
  name: "Marouane D.",
  avatar: "/favicon-192.png",
  location: "Marrakesh, Morocco",
  timezone: "UTC",
  badges: ["100% Job Success", "Rising Talent"],
  stats: [
    { value: "$1K+", label: "Total earnings" },
    { value: "3", label: "Total jobs" },
    { value: "65", label: "Total hours" },
  ],
  title: "Full-Stack AI Dev | AWS, RAG, LLM & Chatbots (React, Node, Python)",
  rate: "$14.00/hr",
  url: "https://www.upwork.com/freelancers/~01205234478041cf4f",
  cta: "View Upwork Profile",
};
