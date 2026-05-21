import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: "masters-software-engineering",
    title: "Master's in Software Engineering",
    organization: "Ibn Zohr University",
    location: "Agadir, Morocco",
    startDate: "2024",
    endDate: undefined,
    description:
      "Pursuing advanced studies in software engineering with a focus on cloud architecture, distributed systems, and AI integration.",
    highlights: [
      "Specializing in cloud-native application design and AWS services",
      "Research focus on AI-powered automation and serverless architectures",
      "Coursework in distributed systems, machine learning, and DevOps",
    ],
    type: "education",
  },
  {
    id: "freelance-aws-ai",
    title: "Freelance AWS & AI Developer",
    organization: "Self-employed",
    location: "Remote",
    startDate: "2023",
    endDate: undefined,
    description:
      "Independent consultant delivering cloud infrastructure and AI automation solutions for startups and small businesses.",
    highlights: [
      "Deployed highly available WordPress on AWS with auto-scaling and CDN",
      "Built AI content generation pipelines using Amazon Bedrock and Lambda",
      "Developed full-stack React applications with serverless Node.js backends",
      "Automated business workflows using n8n integrated with AWS services",
      "Designed IoT monitoring systems with AWS IoT Core and real-time dashboards",
    ],
    type: "work",
  },
];
