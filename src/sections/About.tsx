import { motion } from "framer-motion";
import { Code2, Cloud, Sparkles, Zap } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "AWS Cloud", description: "Serverless architectures, EC2, S3, Lambda, DynamoDB", color: "bg-blue-500/10 text-blue-500" },
  { icon: Sparkles, label: "AI & Machine Learning", description: "Amazon Bedrock, generative AI pipelines, prompt engineering", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Code2, label: "Full-Stack Development", description: "React, TypeScript, Node.js, Express, REST APIs", color: "bg-violet-500/10 text-violet-500" },
  { icon: Zap, label: "Automation", description: "n8n workflows, CI/CD, infrastructure as code", color: "bg-cyan-500/10 text-cyan-500" },
];

export const About = () => {
  return (
    <section className="relative container-page mx-auto py-24">
      <div className="pointer-events-none absolute -left-32 top-1/3 hidden h-[600px] w-[600px] rounded-full opacity-35 blur-[120px] dark:block" style={{ background: "radial-gradient(circle at center, #4c1d95 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-20 top-2/3 hidden h-[400px] w-[400px] rounded-full opacity-20 blur-[100px] dark:block" style={{ background: "radial-gradient(circle at center, #1e3a5f 0%, transparent 70%)" }} />
      <div className="relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          About Me
        </h2>
        <p className="mt-6 max-w-none text-lg leading-relaxed text-muted-foreground">
          I&apos;m a Full-Stack Developer and AWS/AI Engineer with 4+ years of experience building web,
          desktop, and mobile applications. I specialize in adding AI capabilities to products,
          chatbots, RAG systems, automation workflows, and intelligent serverless backends built on
          AWS Bedrock, Lambda, and modern AI APIs. I take full ownership from architecture to
          deployment. Clean code, clear communication.
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
            <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${hl.color}`}>
              <hl.icon size={24} />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">{hl.label}</h3>
            <p className="text-sm text-muted-foreground">{hl.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
