import { Experience } from "../types";

export const education: Experience[] = [
  {
    id: "masters-se",
    title: "Master's in Software Engineering — AI & Cloud Specialization",
    organization: "Ibn Zohr University",
    location: "Agadir, Morocco",
    startDate: "2025",
    endDate: "2027",
    description:
      "Pursuing advanced studies in software engineering with a focus on cloud architecture, AI integration, and DevOps practices.",
    highlights: [
      "Specializing in cloud-native application design and AWS services",
      "Coursework in distributed systems, machine learning, and DevOps",
      "Building real-world AI and serverless projects alongside academic work",
    ],
    type: "education",
  },
  {
    id: "licence-se",
    title: "Licence in Software Engineering",
    organization: "Ibn Zohr University",
    location: "Agadir, Morocco",
    startDate: "2022",
    endDate: "2025",
    description:
      "Completed a full software engineering degree covering the full stack — from low-level programming to modern web and cloud development.",
    highlights: [
      "Coursework in Java OOP, databases, UML, and full-stack web development",
      "Built multiple academic and personal projects in React, Node.js, and PHP",
      "Graduated and continued directly into Master's program",
    ],
    type: "education",
  },
  {
    id: "dut-web-mobile",
    title: "DUT — Web & Mobile Development",
    organization: "Higher School of Technology",
    location: "Meknes, Morocco",
    startDate: "2020",
    endDate: "2022",
    description:
      "First technical degree covering web, mobile, and desktop development fundamentals.",
    highlights: [
      "Studied web development, mobile apps, game development, and Python",
      "First hands-on experience building real applications from scratch",
      "Covered databases, UML architecture, networking, and Linux fundamentals",
    ],
    type: "education",
  },
];

export const work: Experience[] = [
  {
    id: "freelance-fullstack-ai",
    title: "Freelance Full-Stack & AI Developer",
    organization: "Self-employed",
    location: "Remote",
    link: "https://www.upwork.com/freelancers/~01205234478041cf4f",
    startDate: "2024",
    endDate: undefined,
    description:
      "Independent developer delivering cloud infrastructure, AI solutions, and full-stack applications for clients worldwide.",
    highlights: [
      "Built production WordPress infrastructure on AWS handling 10x traffic spikes with 40% cost reduction",
      "Developed AI-powered chatbot using AWS Bedrock and RAG — answers questions from company documents",
      "Deployed full-stack e-commerce platform on AWS handling 100k+ monthly users with under 1s load times",
      "Built serverless contact form running at $0.50/month using Lambda, DynamoDB, and SES",
      "Automated business workflows for Upwork clients using n8n integrated with AWS services",
    ],
    type: "work",
  },
  {
    id: "intern-m-innovation",
    title: "Full-Stack Developer Intern",
    organization: "M Innovation",
    location: "Marrakech, Morocco",
    startDate: "2024",
    endDate: "2024",
    description:
      "Built internal tools and client-facing applications during an intensive internship.",
    highlights: [
      "Built a React-based task management application with full CRUD functionality",
      "Delivered a complete internal tool from scratch across the full stack",
    ],
    type: "work",
  },
  {
    id: "intern-newdoor",
    title: "Full-Stack Developer Intern",
    organization: "NEWDOOR Real Estate Agency",
    location: "Marrakech, Morocco",
    startDate: "2023",
    endDate: "2023",
    description:
      "Developed a production real estate platform handling listings, search, and client inquiries.",
    highlights: [
      "Developed a full-stack real estate website using Laravel and PHP",
      "Handled backend logic, database design, and frontend templating for a client-facing product",
    ],
    type: "work",
  },
];
