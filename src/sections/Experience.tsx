import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, work } from "../data/experience";
import type { Experience as ExperienceType } from "../types";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const TimelineCard = ({ exp, i }: { exp: ExperienceType; i: number }) => {
  const isEducation = exp.type === "education";
  const accent = isEducation
    ? "border-blue-500/30 bg-blue-500/10 text-blue-500"
    : "border-green-500/30 bg-green-500/10 text-green-500";
  const iconColor = isEducation ? "text-blue-500" : "text-green-500";

  return (
    <motion.div
      className="relative pl-12"
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background ${iconColor}`}
      >
        {isEducation ? <GraduationCap size={14} /> : <Briefcase size={14} />}
      </div>

      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${accent}`}>
            {isEducation ? "Education" : "Work"}
          </span>
          <span className="text-xs text-muted-foreground">
            {exp.startDate} — {exp.endDate || "Present"}
          </span>
        </div>

        <h3 className="mb-1 text-base font-semibold">{exp.title}</h3>
        <p className="mb-2 text-sm text-muted-foreground">
          {exp.organization}{exp.location ? ` · ${exp.location}` : ""}
        </p>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
          {exp.description}
        </p>
        <ul className="space-y-1.5">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13px] text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/60" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export const Experience = () => {
  return (
    <section className="container-page mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Experience &amp; Education
        </h2>
        <p className="mt-6 max-w-none text-lg text-muted-foreground">
          My journey through cloud engineering, AI development, and software engineering.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
              <Briefcase size={20} className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Work</h3>
          </div>
          <div className="relative">
            <div className="absolute left-[15px] top-0 h-full w-px bg-border" />
            <div className="space-y-8">
              {work.map((exp, i) => (
                <TimelineCard key={exp.id} exp={exp} i={i} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
              <GraduationCap size={20} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="relative">
            <div className="absolute left-[15px] top-0 h-full w-px bg-border" />
            <div className="space-y-8">
              {education.map((exp, i) => (
                <TimelineCard key={exp.id} exp={exp} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
