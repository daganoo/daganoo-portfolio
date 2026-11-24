import { BarChart3, Brain, GitBranch, Lock, Network, Sparkles, TreePine, Webhook, Workflow, type LucideIcon } from "lucide-react";
import type { IconBaseProps, IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { TbLambda } from "react-icons/tb";
import {
  SiArduino,
  SiDeepseek,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiGmail,
  SiGoogle,
  SiGoogledrive,
  SiGooglesheets,
  SiJsonwebtokens,
  SiLaravel,
  SiMeta,
  SiMongodb,
  SiN8N,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiScikitlearn,
  SiStripe,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface TechIconDef {
  icon: IconType;
  color?: string;
}

// react-icons components return ReactNode, which TS 4.9 rejects as a JSX element type,
// so every icon is normalised to IconType and invoked as a function.
const fromLucide =
  (Icon: LucideIcon): IconType =>
  ({ size, color, className }: IconBaseProps) =>
    <Icon size={size} color={color} className={className} />;

const AWS_ORANGE = "#FF9900";
const aws: TechIconDef = { icon: FaAws, color: AWS_ORANGE };
const lambda: TechIconDef = { icon: TbLambda, color: AWS_ORANGE };

const TECH_ICONS: Record<string, TechIconDef> = {
  react: { icon: SiReact, color: "#61DAFB" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  "node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  express: { icon: SiExpress },
  vite: { icon: SiVite, color: "#646CFF" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  redis: { icon: SiRedis, color: "#FF4438" },
  docker: { icon: SiDocker, color: "#2496ED" },
  python: { icon: SiPython, color: "#3776AB" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  laravel: { icon: SiLaravel, color: "#FF2D20" },
  "php 8.3": { icon: SiPhp, color: "#777BB4" },
  stripe: { icon: SiStripe, color: "#635BFF" },
  supabase: { icon: SiSupabase, color: "#3FCF8E" },
  tailwindcss: { icon: SiTailwindcss, color: "#06B6D4" },
  "github actions": { icon: SiGithubactions, color: "#2088FF" },
  n8n: { icon: SiN8N, color: "#EA4B71" },
  gmail: { icon: SiGmail, color: "#EA4335" },
  "google drive": { icon: SiGoogledrive, color: "#4285F4" },
  "google sheets": { icon: SiGooglesheets, color: "#34A853" },
  arduino: { icon: SiArduino, color: "#00878F" },
  "scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  jwt: { icon: SiJsonwebtokens },
  "react query": { icon: SiReactquery, color: "#FF4154" },
  "react hook form": { icon: SiReacthookform, color: "#EC5990" },
  "styled-components": { icon: SiStyledcomponents, color: "#DB7093" },
  deepseek: { icon: SiDeepseek, color: "#4D6BFE" },
  "llama 3.3": { icon: SiMeta, color: "#0467DF" },
  "gpt-4o-mini": { icon: RiOpenaiFill },
  recaptcha: { icon: SiGoogle, color: "#4285F4" },
  pinecone: { icon: fromLucide(TreePine), color: "#00A67E" },
  recharts: { icon: fromLucide(BarChart3), color: "#22B5BF" },
  ai: { icon: fromLucide(Sparkles), color: "#8B5CF6" },
  rag: { icon: fromLucide(Brain), color: "#8B5CF6" },
  embeddings: { icon: fromLucide(Network), color: "#8B5CF6" },
  automation: { icon: fromLucide(Workflow), color: "#EA4B71" },
  "ci/cd": { icon: fromLucide(GitBranch), color: "#F05032" },
  "rest api": { icon: fromLucide(Webhook), color: "#10B981" },
  bcrypt: { icon: fromLucide(Lock), color: "#64748B" },
  lambda,
  "aws lambda": lambda,
  "api gateway": aws,
  s3: aws,
  dynamodb: aws,
  ec2: aws,
  "aws ec2": aws,
  rds: aws,
  cloudfront: aws,
  cloudwatch: aws,
  ses: aws,
  sns: aws,
  iam: aws,
  vpc: aws,
  acm: aws,
  alb: aws,
  "auto scaling": aws,
  efs: aws,
  elasticache: aws,
  amplify: aws,
};

export const TechIcon = ({ name, size = 12 }: { name: string; size?: number }) => {
  const def = TECH_ICONS[name.toLowerCase()];
  if (!def) return null;
  return <>{def.icon({ size, color: def.color, className: "shrink-0", "aria-hidden": true })}</>;
};
