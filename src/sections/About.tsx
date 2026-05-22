import { motion } from "framer-motion";
import { Code2, Cloud, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "AWS Cloud", description: "Serverless architectures, EC2, S3, Lambda, DynamoDB" },
  { icon: Sparkles, label: "AI & Machine Learning", description: "Amazon Bedrock, generative AI pipelines, prompt engineering" },
  { icon: Code2, label: "Full-Stack Development", description: "React, TypeScript, Node.js, Express, REST APIs" },
  { icon: Zap, label: "Automation", description: "n8n workflows, CI/CD, infrastructure as code" },
];

export const About = () => {
  return (
    <section className="container-page mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          About Me
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m an AWS &amp; AI developer who helps businesses integrate intelligent features into
          their products. From AI-powered apps with AWS Bedrock and OpenAI, to RAG systems,
          serverless backends, and automation workflows with n8n — I build solutions that ship.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((hl, i) => (
          <motion.div
            key={hl.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <hl.icon size={20} className="text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">{hl.label}</h3>
            <p className="text-sm text-muted-foreground">{hl.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
