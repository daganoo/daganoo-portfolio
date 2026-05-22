import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, ArrowRight, Code2, Cloud, Sparkles, Zap, Mail, MapPin, FileText } from "lucide-react";
import { projects } from "../data/projects";
import { skills, skillCategories } from "../data/skills";

const easeOutExpo = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

const nameReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const letterVariant = {
  hidden: { opacity: 0, y: 30, rotateX: -90 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.45, ease: easeOutExpo } },
};

const featuredProjects = projects.filter((p) => p.featured);

const highlights = [
  { icon: Cloud, label: "AWS Cloud", description: "Serverless architectures, EC2, S3, Lambda, DynamoDB" },
  { icon: Sparkles, label: "AI & Machine Learning", description: "Amazon Bedrock, generative AI pipelines, prompt engineering" },
  { icon: Code2, label: "Full-Stack Development", description: "React, TypeScript, Node.js, Express, REST APIs" },
  { icon: Zap, label: "Automation", description: "n8n workflows, CI/CD, infrastructure as code" },
];

const categoryAccent: Record<string, string> = {
  "Cloud & Infrastructure": "text-blue-500",
  Frontend: "text-purple-500",
  Backend: "text-green-500",
  "AI & Machine Learning": "text-orange-500",
  Automation: "text-orange-500",
};

export const Home = () => {
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="container-page mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
          >
            <motion.div variants={item} className="shrink-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-border bg-muted md:h-48 md:w-64 lg:h-64 lg:w-64">
                <img
                  src="/images/avatar.jpg"
                  alt="Marouane Dagana"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-muted-foreground/30 -z-10">
                  MD
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col items-center">
          <motion.h1
            className="text-balance text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
                <span className="text-foreground">
                  Hi, I&apos;m{" "}
                </span>
                <motion.span
                  variants={prefersReduced ? undefined : item}
                  className="inline-block whitespace-nowrap text-foreground"
                >
                  Marouane
                </motion.span>
                <span> </span>
                <motion.span
                  variants={prefersReduced ? undefined : item}
                  className="inline-block whitespace-nowrap text-foreground"
                >
                  Dagana
                </motion.span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl"
              >
                AWS Cloud &amp; AI Engineer &bull; Serverless &amp; Bedrock &bull; Full-Stack Developer
              </motion.p>

              <motion.div
                variants={item}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
                >
                  View Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/40 transition-colors hover:text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.a>
      </section>

      <section id="about" className="relative overflow-hidden py-24">
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-secondary blur-3xl" />

        <div className="container-page mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Software Engineering Master&apos;s student at Ibn Zohr University in Agadir and
              a freelance AWS &amp; AI developer. I build cloud-native applications, automate workflows,
              and craft AI-powered solutions for startups and businesses.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((hl, i) => (
              <motion.div
                key={hl.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <hl.icon size={20} className="text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{hl.label}</h3>
                <p className="text-sm text-muted-foreground">{hl.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-6">
            {skillCategories.map((category, catIndex) => {
              const catSkills = skills.filter((s) => s.category === category);
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1, duration: 0.4 }}
                >
                  <h3 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${categoryAccent[category]}`}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center rounded-full border border-border/60 bg-muted/70 px-3 py-1 text-[11px] font-medium text-foreground/80 transition-colors hover:scale-105 md:px-2 md:py-0.5"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/about"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              Learn More About Me
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              <FileText size={16} />
              View Resume
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A selection of my best work across cloud infrastructure, AI, and full-stack development.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:border-border/80 hover:shadow-md"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2">
                    <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
