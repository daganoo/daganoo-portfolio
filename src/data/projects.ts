import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "ai-content-generator",
    title: "ContentAI — Serverless AI Content Generator",
    description:
      "Generate professional blog posts, product descriptions, social media content, and email campaigns in seconds — powered by Llama 3.3 70B, built entirely on AWS serverless infrastructure.",
    longDescription:
      "Generate professional blog posts, product descriptions, social media content, and email campaigns in seconds — powered by Llama 3.3 70B, built entirely on AWS serverless infrastructure.\n\n" +
      "✦ Features\n" +
      "• 4 content types: blog posts, product descriptions, social media posts, email campaigns\n" +
      "• 5 tone options: Professional, Casual, Persuasive, Inspirational, Witty\n" +
      "• Keyword injection for SEO-optimized content\n" +
      "• Persistent history stored in DynamoDB — survives page refresh\n" +
      "• Delete with confirmation dialog and toast notifications\n" +
      "• Copy and download generated content instantly\n" +
      "• Fully serverless — zero servers to manage, scales automatically\n" +
      "• CI/CD pipeline auto-deploys on every git push via GitHub Actions\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React 18 + Vite — hosted on S3 with CloudFront CDN for global edge delivery\n" +
      "• API Layer: Amazon API Gateway — REST endpoints for /generate, /history, /history/{id}\n" +
      "• Backend: Python Lambda functions — one for content generation (calls Groq API for Llama 3.3 70B inference), one for history management (GET/DELETE from DynamoDB)\n" +
      "• Database: DynamoDB with on-demand billing — stores all generations with single-digit ms reads\n" +
      "• AI Engine: Groq API running Llama 3.3 70B — chosen over OpenAI for its free tier and comparable quality\n" +
      "• Infrastructure: AWS SAM CLI — entire stack defined in template.yaml, deployable with 2 commands\n" +
      "• Monitoring: CloudWatch for Lambda logs — real-time debugging and observability\n\n" +
      "✦ Key Technical Decisions\n" +
      "• Why Groq over OpenAI? Free tier with no credit card, Llama 3.3 70B quality matches GPT-4 for content tasks\n" +
      "• Why SAM over console clicks? Infrastructure as Code enables reproducible, auditable, one-command deployments\n" +
      "• Why no AI SDK in Lambda? Uses native HTTP requests to reduce cold start time and keep the package lean\n" +
      "• Why CloudFront in front of S3? Adds HTTPS, global caching, and handles React Router SPA routing\n\n" +
      "✦ Cost\n" +
      "Approximately $0.10/month under normal usage — Lambda, API Gateway, DynamoDB, S3, and CloudFront all have generous free tiers. Groq AI is free. Costs only rise to ~$3-5/month beyond 100,000 requests.\n\n" +
      "Full documentation, architecture diagrams, screenshots, and deployment guide available on GitHub.",
    tags: [
      "Llama 3.3",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "DynamoDB",
      "React",
      "TypeScript",
    ],
    category: "AI/Bedrock",
    image: "/images/projects/ai-content-generator.webp",
    links: {
      live: "https://d6nkyw5z7hqo6.cloudfront.net",
      source: "https://github.com/daganoo/ai-content-generator",
    },
    featured: true,
  },
  {
    id: "wordpress-on-aws",
    title: "WordPress on AWS — Auto-Scaling Infrastructure",
    description:
      "Production-grade WordPress on AWS that auto-scales from 2 to 10 servers based on real traffic, handling 10x spikes with zero downtime. Multi-AZ, shared EFS, CloudWatch monitoring.",
    longDescription:
      "A production-grade WordPress infrastructure on AWS that auto-scales from 2 to 10 servers based on real traffic. Handles 10x traffic spikes automatically with zero downtime.\n\n" +
      "✦ Features\n" +
      "• Auto-Scaling — monitors CPU across all instances, launches new servers within ~2 minutes at 60% CPU threshold\n" +
      "• Multi-AZ High Availability — every critical layer deployed across two Availability Zones, automatic RDS failover\n" +
      "• Shared EFS Storage — all servers mount the same /var/www/html directory, plugins/themes/uploads always in sync\n" +
      "• Layered Security — 3 security groups (loadbalancer-sg, webserver-sg, database-sg) with defense in depth\n" +
      "• CloudWatch Monitoring — live dashboard + 4 alarms (CPU, healthy hosts, RDS storage, DB connections)\n" +
      "• Load Balanced — Application Load Balancer distributes traffic across all healthy instances\n" +
      "• Managed Database — RDS MySQL 8.0 with Multi-AZ standby, automated backups, 7-day retention\n\n" +
      "✦ Architecture\n" +
      "• VPC: Custom 10.0.0.0/16 network — 2 AZs, 2 public subnets, 2 private subnets, NAT Gateway\n" +
      "• Compute: EC2 t3.micro running Amazon Linux 2023 — Apache + PHP serving WordPress\n" +
      "• Database: RDS MySQL 8.0 Multi-AZ — primary in eu-west-3a, standby in eu-west-3b, no public access\n" +
      "• Storage: EFS mounted at /var/www/html — NFS shared across all EC2 instances\n" +
      "• Load Balancer: ALB internet-facing — HTTP listener, health checks on /wp-login.php\n" +
      "• Auto Scaling: Min 2 / Max 10 / Desired 2 — target tracking policy at 60% CPU\n" +
      "• Monitoring: CloudWatch dashboard with 4 widgets + SNS email alerts for all 4 alarms\n\n" +
      "✦ Load Test Results\n" +
      "• 10,000 requests with 100 concurrent users — CPU spiked 0% → 68.51%\n" +
      "• DB connections jumped from 0 to 56 under load\n" +
      "• ASG automatically scaled from 2 to 3 instances in ~2 minutes\n" +
      "• Zero errors, all requests served successfully\n\n" +
      "✦ Key Technical Decisions\n" +
      "• Why EFS over EBS? Multi-server WordPress needs shared storage — without EFS, uploads to one server are invisible to others causing 404s\n" +
      "• Why Multi-AZ RDS? Automatic failover to standby replica in different AZ — invisible until needed\n" +
      "• Why NAT Gateway? Allows private subnets (RDS) to reach internet for updates without being reachable from internet\n" +
      "• Why 3 security groups? Defense in depth — each layer only talks to the layer directly next to it\n" +
      "• Why CloudWatch alarms? CPU >80%, healthy hosts <2, RDS storage <5GB, DB connections >100 — covers every failure mode\n\n" +
      "✦ Cost\n" +
      "Full production: ~$87/month (EC2, RDS Multi-AZ, EFS, ALB, NAT Gateway). Learning mode without Multi-AZ and NAT Gateway: ~$21/month. EC2 and RDS free tier covers most during first year.\n\n" +
      "Full documentation, architecture diagrams, screenshots, deployment guide, and cost analysis available on GitHub.",
    tags: [
      "EC2",
      "Auto Scaling",
      "RDS",
      "EFS",
      "ALB",
      "CloudWatch",
      "VPC",
      "SNS",
    ],
    category: "AWS Cloud",
    image: "/images/projects/wordpress-aws.webp",
    links: {
      source: "https://github.com/daganoo/wordpress-aws-autoscaling",
    },
    featured: true,
  },
  {
    id: "techflow-dashboard",
    title: "TechFlow Dashboard — React + AWS CI/CD",
    description:
      "SaaS analytics dashboard with automated CI/CD pipeline. Every code push auto-deploys to production — React frontend via CloudFront CDN, Node.js API on EC2, PostgreSQL on RDS.",
    longDescription:
      "A full-stack SaaS analytics dashboard with automated CI/CD pipeline. Every code push automatically builds and deploys to production.\n\n" +
      "✦ Features\n" +
      "• JWT Authentication — secure login with bcrypt password hashing and 8-hour token expiry\n" +
      "• Real-time Analytics — revenue, users, and orders pulled live from PostgreSQL\n" +
      "• Interactive Charts — line chart, bar chart, and donut chart powered by Recharts\n" +
      "• Date Range Filter — filter all charts by custom date range\n" +
      "• Orders Table — search, filter by status, and export to CSV\n" +
      "• Dark/Light Mode — full theme toggle with smooth transitions\n" +
      "• Skeleton Loading — professional loading states while data fetches\n" +
      "• Responsive Layout — works on desktop, tablet, and mobile\n" +
      "• Automated CI/CD — every git push auto-deploys frontend + backend via GitHub Actions\n" +
      "• Zero Downtime — PM2 process manager keeps API alive, auto-restarts on server reboot\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React 18 + Vite + Recharts — line, bar, and donut charts with real-time data\n" +
      "• CDN: CloudFront — HTTPS, global edge caching for both frontend (S3) and API (EC2)\n" +
      "• Backend: Node.js + Express — 6 REST endpoints with JWT authentication middleware\n" +
      "• Database: PostgreSQL on RDS — 4 tables (revenue, users, orders, admins)\n" +
      "• Compute: EC2 — runs Node.js API, PM2 keeps it alive 24/7\n" +
      "• Security: VPC — EC2 + RDS isolated, RDS never exposed to internet\n" +
      "• Deployment: GitHub Actions — frontend job (S3 + CloudFront invalidation) and backend job (EC2 via SSM)\n\n" +
      "✦ Key Technical Decisions\n" +
      "• Why EC2 instead of Lambda? Full Node.js environment control, persistent DB connections, more representative of production freelance work\n" +
      "• Why CloudFront wraps EC2 API? React app is HTTPS, browsers block HTTP API calls — CloudFront solves mixed content without SSL on server\n" +
      "• Why SSM over SSH? Runs commands on EC2 without port 22 or .pem key in GitHub secrets — more secure, no key management\n" +
      "• Why JWT with 8-hour expiry? Limits damage from stolen tokens, React auto-clears expired tokens\n" +
      "• Why GitHub Actions? Simpler than AWS CodePipeline, free, and the paths filter runs only the relevant frontend/backend job on each push\n\n" +
      "✦ Cost\n" +
      "~$0.00/month first year — EC2 t2.micro and RDS db.t3.micro both qualify for AWS free tier (750 hrs/month). S3 + CloudFront free tier covers hosting and bandwidth.\n\n" +
      "Full documentation, screenshots, API reference, and deploy guide available on GitHub.",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "EC2",
      "RDS",
      "CloudFront",
      "S3",
      "GitHub Actions",
    ],
    category: "AWS Cloud + DevOps",
    image: "/images/projects/cicd_dashboard.webp",
    links: {
      source: "https://github.com/daganoo/dashboard-cicd",
    },
    featured: true,
  },
  {
    id: "smart-contact-form",
    title: "Smart Contact Form — Serverless AWS",
    description:
      "Serverless contact form pipeline on AWS — form submissions validated client-side, sent via HTTPS to API Gateway, processed by Node.js Lambda, stored in DynamoDB, and transactional email via SES. ~$0.50/month.",
    longDescription:
      "Serverless contact form pipeline built on AWS — form submissions are validated client-side, transmitted via HTTPS to API Gateway, processed by a Node.js Lambda function, persisted in DynamoDB (UUID partition key), and trigger transactional email notifications through SES. Includes a JWT-less secret-based secured admin dashboard to query all submissions. Infrastructure costs ~$0.50/month under real traffic.\n\n" +
      "✦ Features\n" +
      "• Google reCAPTCHA v2 — blocks bot submissions client-side before hitting the API\n" +
      "• Authorization header — secures the admin /submissions endpoint with a server-side secret\n" +
      "• Client-side validation — prevents empty or malformed submissions from reaching Lambda\n" +
      "• DynamoDB persistence — every submission stored with UUID partition key, never lost\n" +
      "• SES email notifications — transactional email delivered under 5 seconds\n" +
      "• CORS configured — API Gateway restricts to expected headers and methods only\n" +
      "• No secrets in code — all sensitive values stored in Lambda env vars and Amplify build vars\n" +
      "• CI/CD via Amplify — auto-deploys on every GitHub push, zero manual steps\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React 18 + Vite — custom CSS, Axios HTTP client, Google reCAPTCHA v2\n" +
      "• Hosting: AWS Amplify — S3 + CloudFront CDN, automatic HTTPS\n" +
      "• API: AWS API Gateway HTTP API — POST /contact, GET /submissions, OPTIONS for CORS\n" +
      "• Compute: AWS Lambda Node.js 22.x — validates fields, writes to DynamoDB, sends SES email\n" +
      "• Database: DynamoDB on-demand billing — partition key id (UUID v4), sorted by timestamp\n" +
      "• Email: AWS SES — transactional email from verified identity, delivered in <5 seconds\n\n" +
      "✦ Request Flow\n" +
      "• Form submission: reCAPTCHA → field validation → POST /contact → Lambda validates → DynamoDB PutItem → SES SendEmail → 200 OK with UUID\n" +
      "• Admin dashboard: GET /submissions + Authorization header → Lambda checks ADMIN_SECRET → DynamoDB Scan → sorted by timestamp descending\n\n" +
      "✦ Security Model\n" +
      "• Bot submissions → reCAPTCHA v2 token required client-side\n" +
      "• Unauthorized admin access → Authorization header checked in Lambda against env variable\n" +
      "• Secrets in source code → all secrets stored in Lambda env vars and Amplify build vars\n" +
      "• Overly permissive API → CORS restricts accepted headers and methods\n" +
      "• Lost submissions → every submission persisted to DynamoDB regardless of email delivery\n\n" +
      "✦ Cost\n" +
      "~$0.50/month total — Lambda 1M requests free, API Gateway 1M free, DynamoDB 25GB free, SES 62K emails free, Amplify 1K build mins free (only hosting cost).\n\n" +
      "Full documentation, architecture diagram, screenshots, and setup guide available on GitHub.",
    tags: [
      "React",
      "Node.js",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "SES",
      "reCAPTCHA",
      "Amplify",
    ],
    category: "Full-Stack React+Node",
    image: "/images/projects/smart-contact-form.webp",
    links: {
      live: "https://smart-contact-form.vercel.app",
      source: "https://github.com/daganoo/smart_contact_form",
    },
    featured: false,
  },
  {
    id: "hahoi-smart-plant",
    title: "Smart Plant Care System",
    description:
      "IoT plant monitoring and automated watering system using ML predictions, Arduino simulation, and a modern React dashboard with FastAPI backend.",
    longDescription:
      "An intelligent IoT platform combining machine learning, real-time sensor simulation, and a modern web interface to revolutionize plant watering management.\n\n" +
      "✦ Features\n" +
      "• ML Prediction — machine learning algorithm decides if the plant needs water based on soil humidity, temperature, and weather\n" +
      "• IoT Simulation — complete Arduino UNO simulation with YL-69 soil sensor, 12V water pump, LED, and buzzer\n" +
      "• Interactive Dashboard — humidity slider, weather panel, color-coded ML results, and humidity history chart\n" +
      "• Adaptive Weather — adjusts watering decisions based on weather conditions (sunny, cloudy, rainy)\n" +
      "• Dark Glassmorphism UI — modern design with smooth Framer Motion animations\n" +
      "• REST API — FastAPI backend with automatic Swagger documentation\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React 18 + Vite + TailwindCSS — dashboard with Recharts for humidity graphs\n" +
      "• Backend: FastAPI + Uvicorn — high-performance async REST API\n" +
      "• ML Engine: scikit-learn + NumPy — prediction model for optimal watering decisions\n" +
      "• Arduino Simulation: virtual UNO with sensor, pump, LED, and serial monitor at 9600 baud\n" +
      "• Containerization: Docker Compose — one command to run frontend + backend\n\n" +
      "✦ ML Prediction Logic\n" +
      "• Reads soil humidity (0-100%), temperature, and weather condition\n" +
      "• Cancels watering if rain probability > 70%\n" +
      "• Triggers urgent watering if humidity < 40% and temperature > 30°C\n" +
      "• Returns confidence score (0-1) with reasoning and timestamp\n\n" +
      "✦ Key Technical Decisions\n" +
      "• Why FastAPI? OpenAPI auto-documentation, async support, and Pydantic validation out of the box\n" +
      "• Why Arduino simulation? Allows full system testing without physical hardware — ready for real sensors\n" +
      "• Why Docker Compose? One command deploys both services, perfect for demos and development\n" +
      "• Auto mode monitors sensor every 2 seconds and activates pump when dry — manual mode gives user full control\n\n" +
      "Full documentation, architecture diagrams, and team info available on GitHub.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "TailwindCSS",
      "scikit-learn",
      "Docker",
      "Arduino",
    ],
    category: "Full-Stack React+Node",
    image: "/images/projects/hahoi-smart-plant.webp",
    links: {
      source: "https://github.com/daganoo/hahoi-smart-plant",
    },
    featured: false,
  },
];

export const projectCategories = [
  "All",
  "AWS Cloud",
  "AWS Cloud + DevOps",
  "AI/Bedrock",
  "Full-Stack React+Node",
] as const;
