import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import { projects } from "../data/projects";
import { Testimonials } from "../sections/Testimonials";
import { Expertise } from "../sections/Expertise";
import { TechStack } from "../sections/TechStack";
import { TypewriterHeadline } from "../components/TypewriterHeadline";
import { TechIcon } from "../components/TechIcon";
import { heroPhrases } from "../data/hero";
import { thumbnail } from "../utils/images";

const featuredProjects = projects.filter((p) => p.featured).reverse();

export const Home = () => {
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
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-border bg-muted md:h-48 md:w-48 lg:h-64 lg:w-64">
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
              <TypewriterHeadline
                phrases={heroPhrases}
                className="text-[length:min(7vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-foreground"
              />

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
          className="absolute inset-x-0 bottom-10 z-[1] mx-auto w-6 animate-[bounce_1s_1s_4] text-muted-foreground/40 motion-reduce:animate-none transition-colors hover:text-muted-foreground"
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
          <Expertise />

          <TechStack />

          <m.div
            className="mt-14 flex flex-wrap justify-center gap-4"
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
