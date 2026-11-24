import { m, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Code2, Cloud, FileText, MapPin, Sparkles, Zap } from "lucide-react";
import { JobSuccessIcon } from "../components/icons/JobSuccessIcon";
import { TopRatedIcon } from "../components/icons/TopRatedIcon";
import { UpworkIcon } from "../components/icons/UpworkIcon";
import { upworkProfile } from "../data/upwork";

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
      <m.span ref={ref}>{rounded}</m.span>
      {suffix}
    </p>
  );
};

const formatTime = (timeZone: string) =>
  new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone })
    .format(new Date())
    .toLowerCase();

const LocalTime = ({ timeZone }: { timeZone: string }) => {
  const [time, setTime] = useState(() => formatTime(timeZone));
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 30000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <>{time}</>;
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
      <div className="relative z-[1]">
      <m.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
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
          className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 press rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          <FileText size={18} />
          View Resume
        </button>
      </m.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="glass-card rounded-3xl p-5 text-center"
        >
          <AnimatedCounter from={0} to={4} suffix="+" delay={0.1} />
          <p className="mt-1 text-sm text-muted-foreground">Years Experience</p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="glass-card rounded-3xl p-5 text-center"
        >
          <AnimatedCounter from={0} to={12} suffix="+" delay={0.2} />
          <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="glass-card rounded-3xl p-5 text-center"
        >
          <AnimatedCounter from={0} to={2} suffix="+" delay={0.3} />
          <p className="mt-1 text-sm text-muted-foreground">Years Freelancing</p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.08, duration: 0.4 }}
          className="glass-card rounded-3xl p-5 text-center"
        >
          <AnimatedCounter from={0} to={4} suffix="+" delay={0.4} />
          <p className="mt-1 text-sm text-muted-foreground">Tech Stacks</p>
        </m.div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((hl, i) => (
          <m.div
            key={hl.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="glass-card rounded-3xl p-6 text-center"
          >
            <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${hl.color}`}>
              <hl.icon size={24} />
            </div>
            <h3 className="mb-2 font-semibold text-card-foreground">{hl.label}</h3>
            <p className="text-sm text-muted-foreground">{hl.description}</p>
          </m.div>
        ))}
      </div>

      <m.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="mt-8"
      >
        <div className="overflow-hidden glass-card rounded-3xl">
          <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:justify-between md:p-8">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="relative shrink-0">
                <img
                  src={upworkProfile.avatar}
                  alt={upworkProfile.name}
                  className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20"
                />
                <span className="absolute left-0.5 top-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-green-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold text-card-foreground md:text-3xl">{upworkProfile.name}</h3>
                  <BadgeCheck size={22} className="fill-blue-600 text-card" />
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground md:text-base">
                  <MapPin size={16} />
                  {upworkProfile.location} – <LocalTime timeZone={upworkProfile.timezone} /> local time
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-5 text-sm font-medium text-card-foreground md:text-base">
                  {upworkProfile.badges.map((badge) => (
                    <span key={badge.type} className="inline-flex items-center gap-2">
                      {badge.type === "jobSuccess" ? <JobSuccessIcon size={28} /> : <TopRatedIcon size={26} />}
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={upworkProfile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
            >
              <UpworkIcon size={14} />
              {upworkProfile.cta}
              <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>
          <div className="grid border-t border-border md:grid-cols-[auto_1fr]">
            <div className="flex gap-10 border-b border-border p-6 md:border-b-0 md:border-r md:p-8">
              {upworkProfile.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-semibold text-card-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
              <p className="text-lg font-semibold text-card-foreground md:text-xl">{upworkProfile.title}</p>
              <p className="shrink-0 text-lg font-semibold text-card-foreground md:text-xl">{upworkProfile.rate}</p>
            </div>
          </div>
        </div>
      </m.div>
      </div>
    </section>
  );
};
