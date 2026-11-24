import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ArrowDown, ArrowRight, Code2, Cloud, Sparkles, Zap, FileText } from "lucide-react";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { Testimonials } from "../sections/Testimonials";
import { TechIcon } from "../components/TechIcon";
import { item } from "../utils/animations";
import { thumbnail } from "../utils/images";

const featuredProjects = projects.filter((p) => p.featured).reverse();

const highlights = [
  { icon: Cloud, label: "AWS Cloud", description: "Serverless architectures, EC2, S3, Lambda, DynamoDB", color: "bg-blue-500/10 text-blue-500" },
  { icon: Sparkles, label: "AI & Machine Learning", description: "Amazon Bedrock, generative AI pipelines, prompt engineering", color: "bg-emerald-500/10 text-emerald-500" },
  { icon: Code2, label: "Full-Stack Development", description: "React, TypeScript, Node.js, Express, REST APIs", color: "bg-violet-500/10 text-violet-500" },
  { icon: Zap, label: "Automation", description: "n8n workflows, CI/CD, infrastructure as code", color: "bg-cyan-500/10 text-cyan-500" },
];

const categoryAccent: Record<string, string> = {
  Frontend: "text-blue-500",
  "Backend & Databases": "text-green-500",
  "Cloud & DevOps": "text-cyan-500",
  "AI & Automation": "text-orange-500",
  Tools: "text-yellow-500",
  "Mobile & Desktop Development": "text-purple-500",
  Languages: "text-rose-500",
};

export const Home = () => {
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <section className="horizon-hero relative flex min-h-[90vh] items-center">
        <div className="container-page relative z-[2] mx-auto">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center"
          >
            <div className="shrink-0">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-border bg-muted md:h-48 md:w-64 lg:h-64 lg:w-64">
                <img
                  src="/images/avatar.webp"
                  alt="Marouane Dagana"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-muted-foreground/30 -z-10">
                  MD
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
          <m.h1
            className="text-balance text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
                <span className="text-foreground">
                  Hi, I&apos;m{" "}
                </span>
                <m.span
                  variants={prefersReduced ? undefined : item}
                  className="inline-block whitespace-nowrap text-foreground"
                >
                  Marouane
                </m.span>
                <span> </span>
                <m.span
                  variants={prefersReduced ? undefined : item}
                  className="inline-block whitespace-nowrap text-foreground"
                >
                  Dagana
                </m.span>
              </m.h1>

              <p
                className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl lg:text-2xl"
              >
                Full-Stack AI Dev &bull; AWS Cloud &bull; RAG, LLM &amp; Chatbots (React, Node, Python)
              </p>

              <div
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex h-12 w-full items-center justify-center press rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex h-12 w-full items-center justify-center glass-button rounded-full px-8 text-sm font-medium sm:w-auto"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </m.div>
        </div>

        <m.a
          href="#about"
          className="absolute bottom-10 left-1/2 z-[1] -translate-x-1/2 animate-bounce text-muted-foreground/40 transition-colors hover:text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </m.a>
      </section>

      <section id="about" className="relative py-24">

        <div className="container-page mx-auto">
          <m.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Full-Stack Developer and AWS/AI Engineer with 4+ years of experience. I build AI-powered chatbots, RAG systems, automation workflows, and serverless backends on AWS Bedrock and Lambda.
            </p>
          </m.div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((hl, i) => (
              <m.div
                key={hl.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="glass-card rounded-3xl p-6 text-center card-hover"
              >
                <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${hl.color}`}>
                  <hl.icon size={24} />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{hl.label}</h3>
                <p className="text-sm text-muted-foreground">{hl.description}</p>
              </m.div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-6">
            {skillGroups.map((group, catIndex) => (
              <m.div
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: catIndex * 0.04, duration: 0.4 }}
              >
                <h3 className={`mb-3 text-sm font-semibold uppercase tracking-wider ${categoryAccent[group.category]}`}>
                  {group.category}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {group.details}
                </p>
              </m.div>
            ))}
          </div>

          <m.div
            className="mt-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            <Link
              to="/about"
              className="inline-flex h-12 w-full items-center justify-center glass-button rounded-full px-8 text-sm font-medium sm:w-auto"
            >
              Learn More About Me
              <ArrowRight size={16} className="ml-2" />
            </Link>
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="inline-flex h-12 w-full items-center justify-center gap-2 press rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <FileText size={18} />
              View Resume
            </button>
          </m.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="container-page relative z-[2] mx-auto">
          <m.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              A selection of my best work across cloud infrastructure, AI, and full-stack development.
            </p>
          </m.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <m.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="h-full"
              >
              <Link
                to={`/projects/${project.id}`}
                className="group relative flex h-full flex-col overflow-hidden glass-card rounded-3xl text-card-foreground card-hover"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img
                    src={thumbnail(project.image)}
                    decoding="async"
                    alt={project.title}
                    loading="lazy"
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
                        className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        <TechIcon name={tag} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              </m.div>
            ))}
          </div>

          <m.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <Link
              to="/projects"
              className="inline-flex h-12 w-full items-center justify-center glass-button rounded-full px-8 text-sm font-medium sm:w-auto"
            >
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </m.div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};
