import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "AI-powered content generation platform using Amazon Bedrock for automated blog posts, social media content, and marketing copy with human-in-the-loop review.",
    longDescription:
      "Built a full-stack AI content generation platform leveraging Amazon Bedrock's Claude and Titan models. The system generates high-quality marketing content, blog posts, and social media copy through a streamlined pipeline. Features include prompt templating, content review workflows, multi-language support, and A/B testing for content variants. Integrated with S3 for asset storage and DynamoDB for content versioning.",
    tags: [
      "Amazon Bedrock",
      "Claude",
      "Lambda",
      "S3",
      "DynamoDB",
      "React",
      "TypeScript",
    ],
    category: "AI/Bedrock",
    image: "/images/projects/ai-content-generator.jpg",
    links: {
      live: "https://ai-content.example.com",
      source: "https://github.com/daganoo/ai-content-generator",
    },
    featured: true,
  },
  {
    id: "wordpress-on-aws",
    title: "WordPress on AWS",
    description:
      "Highly available WordPress deployment on AWS with auto-scaling EC2 instances, RDS database, CloudFront CDN, and automated backups.",
    longDescription:
      "Designed and deployed a production-grade WordPress hosting infrastructure on AWS. The architecture features an auto-scaling group of EC2 instances behind an Application Load Balancer, Aurora MySQL for the database layer, ElastiCache for session and query caching, CloudFront CDN for global content delivery, and S3 for media offloading. Implemented infrastructure as code using CloudFormation, automated backups with AWS Backup, and CloudWatch monitoring with custom dashboards.",
    tags: [
      "EC2",
      "Auto Scaling",
      "RDS",
      "CloudFront",
      "S3",
      "CloudFormation",
      "ElastiCache",
    ],
    category: "AWS Cloud",
    image: "/images/projects/wordpress-aws.jpg",
    links: {
      live: "https://wordpress-aws.example.com",
      source: "https://github.com/daganoo/wordpress-aws",
    },
    featured: true,
  },
  {
    id: "smart-contact-form",
    title: "Smart Contact Form",
    description:
      "Intelligent contact form with real-time validation, spam detection via AI, and automated email routing built with React and Node.js.",
    longDescription:
      "Developed a modern contact form application featuring real-time field validation, AI-powered spam classification using Amazon Bedrock, and intelligent email routing with SES. The frontend is built with React and Tailwind CSS for a responsive, accessible UI. The backend runs on Node.js with Express, handling form submissions through API Gateway and Lambda. Includes reCAPTCHA integration, rate limiting, and a dashboard for viewing submission analytics.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Lambda",
      "API Gateway",
      "SES",
      "DynamoDB",
    ],
    category: "Full-Stack React+Node",
    image: "/images/projects/smart-contact-form.jpg",
    links: {
      live: "https://contact-form.example.com",
      source: "https://github.com/daganoo/smart-contact-form",
    },
    featured: true,
  },
  {
    id: "hahoi-smart-plant",
    title: "Hahoi Smart Plant App",
    description:
      "IoT plant monitoring and automated care system using n8n workflows, AWS IoT Core, and a React Native mobile app for real-time plant health tracking.",
    longDescription:
      "Created an end-to-end IoT plant care solution combining hardware sensors with cloud automation. n8n workflows handle sensor data ingestion from AWS IoT Core, triggering automated watering via smart plugs when soil moisture drops below thresholds. The system sends push notifications for plant health alerts, generates weekly care reports, and provides a React Native mobile app for real-time monitoring. Uses DynamoDB for time-series sensor data, S3 for plant growth photo storage, and Lambda for custom processing logic.",
    tags: [
      "n8n",
      "AWS IoT Core",
      "React Native",
      "Lambda",
      "DynamoDB",
      "S3",
      "SNS",
    ],
    category: "n8n Automation",
    image: "/images/projects/hahoi-smart-plant.jpg",
    links: {
      source: "https://github.com/daganoo/hahoi-smart-plant",
    },
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "AWS Cloud",
  "AI/Bedrock",
  "Full-Stack React+Node",
  "n8n Automation",
] as const;
