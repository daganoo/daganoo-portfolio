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
  {
    id: "nexmart-ecommerce",
    title: "NexMart — Full-Stack E-Commerce on AWS",
    description:
      "Production-style MERN e-commerce platform deployed on scalable AWS — Auto Scaling EC2, CloudFront CDN, Stripe payments, admin dashboard, and load-tested for traffic spikes.",
    longDescription:
      "A production-style e-commerce application built with the MERN stack and deployed on scalable AWS infrastructure. Demonstrates end-to-end skills in full-stack development, cloud architecture, auto-scaling, CDN delivery, and payment integration.\n\n" +
      "✦ Why This Project Matters\n" +
      "• Built to scale, not just to work — deployed behind an ALB with Auto Scaling Group, adds capacity under traffic spikes and scales back to control cost\n" +
      "• Fast for real users globally — product images and static assets served through CloudFront CDN for low-latency worldwide delivery\n" +
      "• Real payment flow — Checkout wired to Stripe, covering full cart → payment → order confirmation\n" +
      "• Operationally realistic — admin dashboard for product CRUD, order overview, and sales insights\n" +
      "• Validated scaling — load tested with Artillery, instance count confirmed going from 1 → 2 under load in CloudWatch\n" +
      "• Cost-conscious design — same Auto Scaling that adds capacity also scales down during idle periods\n\n" +
      "✦ Features\n" +
      "• Storefront — product catalog, category filtering, product detail pages\n" +
      "• Cart & Checkout — persistent cart, Stripe-powered checkout with test card support\n" +
      "• Order Management — order history, order confirmation, status tracking\n" +
      "• Admin Dashboard — product CRUD, order overview, sales insights\n" +
      "• Authentication — secure user registration/login with bcrypt-hashed passwords and JWT sessions\n" +
      "• Scalable Infrastructure — horizontal auto-scaling under load, verified via Artillery load testing\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React + React Router + Context API — responsive storefront with dynamic product pages\n" +
      "• CDN: CloudFront + S3 — static assets and product images served globally with low latency\n" +
      "• Load Balancer: Application Load Balancer — distributes API traffic across EC2 instances\n" +
      "• Compute: Auto Scaling Group of EC2 t3.micro instances — scales based on CPU utilization\n" +
      "• Backend: Node.js + Express — REST API with JWT auth middleware, Mongoose ODM\n" +
      "• Database: MongoDB Atlas (M0, Paris region) — persistent storage for users, products, orders, cart\n" +
      "• Payments: Stripe API — secure checkout in test mode with full transaction history\n" +
      "• Load Testing: Artillery — verified auto-scaling from 1 to 2 instances under simulated traffic\n\n" +
      "✦ Infrastructure Highlights\n" +
      "• Auto Scaling configured to scale out when average CPU crosses threshold, scale back in during low traffic\n" +
      "• ALB health checks ensure traffic only hits healthy instances\n" +
      "• CloudFront CDN for product images and frontend assets — global edge caching\n" +
      "• Load tested and verified — scaling behavior confirmed in CloudWatch metrics and ASG activity log\n\n" +
      "Full documentation, architecture diagrams, screenshots, and load test config available on GitHub.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "EC2",
      "Auto Scaling",
      "CloudFront",
      "Stripe",
    ],
    category: "Full-Stack React+Node",
    image: "/images/projects/nexmart.webp",
    links: {
      source: "https://github.com/daganoo/nexmart-aws-ecommerce",
    },
    featured: false,
  },
  {
    id: "popcorn-movies",
    title: "PopCorn Movies — AWS Cloud Deployment",
    description:
      "React movie app deployed on AWS serverless (S3 + CloudFront) with automated CI/CD via GitHub Actions. 400+ edge locations globally, <200ms load times, ~$2-5/month.",
    longDescription:
      "A React movie app deployed on AWS serverless infrastructure with automated CI/CD pipeline. This project demonstrates modern cloud deployment practices, DevOps workflows, and AWS service integration.\n\n" +
      "✦ Key Achievements\n" +
      "• Global Load Time: <200ms worldwide via CloudFront's 400+ edge locations\n" +
      "• Deployment Time: 2 minutes (85% faster than manual deployment)\n" +
      "• Monthly Cost: $2-5 (70% cost reduction vs traditional hosting)\n" +
      "• Uptime: 99.99% with AWS managed infrastructure\n\n" +
      "✦ Features\n" +
      "• Movie search powered by OMDb API — browse thousands of movies with instant results\n" +
      "• Movie details and ratings — view IMDb ratings, cast, plot, runtime, and genre\n" +
      "• Custom error handling — friendly 404 page with navigation back to home\n" +
      "• Responsive design — works seamlessly on desktop, tablet, and mobile\n\n" +
      "✦ Architecture\n" +
      "• Frontend: React + JavaScript — intentionally simple app, focus is on infrastructure\n" +
      "• Storage: S3 bucket (eu-west-3) — static website hosting, origin for CloudFront\n" +
      "• CDN: CloudFront — HTTPS, global edge caching at 400+ locations, automatic SSL via ACM\n" +
      "• CI/CD: GitHub Actions — git push triggers build → deploy to S3 → CloudFront cache invalidation\n" +
      "• Security: IAM least-privilege policies, no hardcoded secrets, environment variables only\n\n" +
      "✦ CI/CD Pipeline\n" +
      "• Every push to main: checkout → npm install → npm build → S3 sync → CloudFront invalidation\n" +
      "• Zero-downtime deployments with automatic rollback on build failures\n" +
      "• Full deployment history in GitHub Actions logs\n\n" +
      "✦ Global Performance\n" +
      "• Paris (origin): 30ms | New York: 60ms | Tokyo: 50ms | London: 45ms | Sydney: 65ms\n" +
      "• Average global load time: <200ms — 13-24x faster than serving from a single origin\n\n" +
      "✦ Cost\n" +
      "~$2-5/month (S3 ~$0.03, CloudFront ~$2). First year with free tier: ~$0.50-1/month. 70% cheaper than traditional hosting.\n\n" +
      "Full documentation, architecture diagrams, screenshots, and deployment guide available on GitHub.",
    tags: [
      "React",
      "S3",
      "CloudFront",
      "GitHub Actions",
      "IAM",
      "CI/CD",
      "ACM",
    ],
    category: "AWS Cloud + DevOps",
    image: "/images/projects/popcorn-movies.webp",
    links: {
      live: "https://d31lnk1d97vqkv.cloudfront.net",
      source: "https://github.com/daganoo/PopCorn_moviesRate",
    },
    featured: false,
  },
  {
    id: "php-app-migration",
    title: "PHP App Migration to AWS — Cloud Infrastructure",
    description:
      "Full migration of a Laravel accounting platform from shared hosting to AWS — EC2, RDS, ElastiCache Redis, S3, and CloudFront. 10x page load improvement, 50% cost savings.",
    longDescription:
      "A full migration of a legacy PHP application (Akaunting — an open-source accounting platform) from traditional shared hosting to production-grade AWS cloud infrastructure. Each concern now lives on its own dedicated managed service.\n\n" +
      "✦ Why This Migration Mattered\n" +
      "• Before: app, database, file storage, and cache all shared one server — competing for CPU/RAM\n" +
      "• No automated backups — server failure meant data loss\n" +
      "• Uploaded files stored on local disk — breaks immediately with multiple servers\n" +
      "• Sessions in local files — can't share state across instances\n" +
      "• No CDN — static assets served by the same PHP server handling requests\n\n" +
      "✦ AWS Architecture\n" +
      "• Compute: EC2 t2.micro running Nginx + PHP 8.3 + Laravel 11 (Akaunting 3.1)\n" +
      "• Database: RDS MySQL 8.4 — isolated, automated daily backups, 7-day retention, Multi-AZ ready\n" +
      "• Cache: ElastiCache Redis 7.1 — sessions and application cache in-memory, source of 10x page load improvement\n" +
      "• Storage: S3 bucket for all uploaded files — 99.999999999% durability, survives EC2 termination\n" +
      "• CDN: CloudFront — caches static assets (CSS, JS, images) at edge locations, reduces EC2 load\n" +
      "• OS: Ubuntu 24.04 LTS — region eu-west-3 (Paris)\n\n" +
      "✦ Security Architecture\n" +
      "• RDS and ElastiCache: no public IP — only reachable from EC2 security group within VPC\n" +
      "• EC2: dedicated security group (php-migration-sg), ports 22 (SSH key auth) and 80 (HTTP)\n" +
      "• RDS: own security group, port 3306 open only to EC2 SG — nothing else can reach it\n" +
      "• ElastiCache: port 6379 open only to EC2 SG\n" +
      "• Defense in depth — 3 layers, each service isolated with least-privilege access\n\n" +
      "✦ Key Technical Decisions\n" +
      "• Why RDS over MySQL on EC2? Automated backups, automatic patching, one-click Multi-AZ — no single point of failure\n" +
      "• Why ElastiCache Redis? Sessions in memory instead of disk files — enables horizontal scaling to multiple EC2 instances with shared state\n" +
      "• Why S3 over local disk? Files survive instance reboots, replacements, and scaling events — 11 nines durability\n" +
      "• Why CloudFront? Redirects static asset requests away from EC2 — faster global delivery, lower server load\n\n" +
      "✦ Results\n" +
      "• Database: single-server MySQL → isolated managed RDS with automated backups\n" +
      "• File storage: EC2 local disk → S3 (99.999999999% durability)\n" +
      "• Sessions/Cache: local files/DB queries → ElastiCache Redis in-memory (10x faster page loads)\n" +
      "• Static assets: PHP server → CloudFront CDN global edge delivery\n" +
      "• Cost: ~50% savings vs equivalent managed hosting\n\n" +
      "Full documentation, architecture diagrams, screenshots, and step-by-step migration guide available on GitHub.",
    tags: [
      "PHP 8.3",
      "Laravel",
      "EC2",
      "RDS",
      "S3",
      "ElastiCache",
      "Redis",
      "CloudFront",
    ],
    category: "AWS Cloud",
    image: "/images/projects/php-migration.webp",
    links: {
      source: "https://github.com/daganoo/php-app-migration-aws",
    },
    featured: false,
  },
  {
    id: "bookshelf-api",
    title: "BookShelf — Full-Stack Book Collection Manager",
    description:
      "Track, rate, and organize your reading journey with a REST API and React dashboard. Express 5 + PostgreSQL + JWT auth + rate limiting + Swagger docs — deployed on AWS EC2 & RDS.",
    longDescription:
      "A full-stack book collection manager — track, rate, and organize your reading journey with a REST API and a React dashboard. Deployed on AWS EC2 with RDS PostgreSQL.\n\n" +
      "✦ Features\n" +
      "• JWT Authentication — register, login, protected routes with Bearer token\n" +
      "• Full CRUD — create, read, update, delete books with status tracking\n" +
      "• Status Filtering — want-to-read, reading, finished with color-coded badges\n" +
      "• Rating System — 1-5 star ratings with review text\n" +
      "• Owner Scoping — users can only see and manage their own books\n" +
      "• Swagger API Docs — interactive OpenAPI 3.0 documentation at /api-docs\n" +
      "• Postman Collection — all 8 endpoints with auto-populated JWT token\n" +
      "• Rate Limiting — 100 req/15min global, 5 req/15min on auth endpoints\n\n" +
      "✦ Architecture\n" +
      "• Backend: Express 5 + Node.js — REST API with middleware chain (helmet, cors, morgan, rate-limit)\n" +
      "• Database: PostgreSQL 15 on AWS RDS — users and books tables with foreign key relationship\n" +
      "• Auth: JWT signed with secret + expiration — bcryptjs password hashing (10 salt rounds)\n" +
      "• Validation: express-validator on all write endpoints — prevents malformed data\n" +
      "• Frontend: React 18 + React Router 6 — Axios with JWT interceptor, plain CSS styling\n" +
      "• Infrastructure: EC2 t2.micro (Ubuntu 22.04) + Nginx reverse proxy + RDS db.t3.micro in VPC\n\n" +
      "✦ Frontend Pages\n" +
      "• Login/Register — JWT stored in localStorage, auto-redirect to dashboard\n" +
      "• Dashboard — book cards grid with status badges (gray/blue/green) and star ratings, filter dropdown\n" +
      "• Add Book — form with title, author, genre, status, rating, and review fields\n" +
      "• Book Detail — view mode with Edit toggle (inline inputs) and Delete button\n\n" +
      "✦ Security\n" +
      "• Password hashing: bcryptjs with 10 salt rounds\n" +
      "• Token auth: JWT signed with secret + expiration (7d)\n" +
      "• Rate limiting: express-rate-limit (100 global / 5 auth per 15 min)\n" +
      "• HTTP headers: Helmet (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)\n" +
      "• Owner scoping: all book queries filter by user_id — zero data leakage between users\n" +
      "• Input validation: express-validator on all POST/PUT endpoints\n\n" +
      "Full documentation, architecture diagrams, Swagger spec, and Postman collection available on GitHub.",
    tags: [
      "Node.js",
      "Express",
      "React",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "REST API",
      "AWS EC2",
    ],
    category: "Full-Stack React+Node",
    image: "/images/projects/bookshelf.webp",
    links: {
      source: "https://github.com/daganoo/bookshelf-api",
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
