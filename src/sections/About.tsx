import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Cloud, FileText, Sparkles, Zap } from "lucide-react";
import { RisingTalentIcon } from "../components/icons/RisingTalentIcon";
import { UpworkIcon } from "../components/icons/UpworkIcon";

const AnimatedCounter = ({
  from,
  to,
  suffix = "",
  delay = 0,
}: {
  from: number;
  to: number;
  suffix?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, {
        duration: 1.5,
        delay,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, motionValue, to, delay]);

  return (
    <p className="text-3xl font-bold text-primary">
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </p>
  );
};

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
        <button
          onClick={() => window.open("/resume.pdf", "_blank")}
          className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          <FileText size={18} />
          View Resume
        </button>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
        >
          <AnimatedCounter from={0} to={4} suffix="+" delay={0.1} />
          <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
        >
          <AnimatedCounter from={0} to={12} suffix="+" delay={0.2} />
          <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
        >
          <AnimatedCounter from={0} to={2} suffix="+" delay={0.3} />
          <p className="mt-1 text-sm text-muted-foreground">Years Freelancing</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="rounded-xl border border-border bg-card p-5 text-center shadow-sm"
        >
          <AnimatedCounter from={0} to={4} suffix="+" delay={0.4} />
          <p className="mt-1 text-sm text-muted-foreground">Tech Stacks</p>
        </motion.div>
      </div>

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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8"
      >
        <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
          <RisingTalentIcon size={48} />
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <UpworkIcon size={12} />
              Upwork
            </div>
            <h3 className="font-semibold text-card-foreground">Rising Talent</h3>
            <p className="mb-3 text-sm text-muted-foreground">
              Earned this badge from Upwork for early success, quality work, and strong client satisfaction.
            </p>
            <a
              href="https://www.upwork.com/freelancers/~01205234478041cf4f"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-green-600 transition-colors hover:text-green-500 dark:text-green-400 dark:hover:text-green-300"
            >
              Show Portfolio
              <span className="ml-0.5 inline-block animate-slide-right group-hover:scale-125 transition-transform">&rarr;</span>
        </a>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};
