import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "../data/experience";

const timelineItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
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
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          My journey through cloud engineering, AI development, and software engineering.
        </p>
      </motion.div>

      <div className="relative mt-12">
        <div className="absolute left-6 top-0 h-full w-px bg-border md:left-8" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative pl-16 md:pl-20"
              custom={i}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div
                className={`absolute left-[18px] top-1 rounded-full border-2 border-border bg-background p-2 md:left-[26px] ${
                  exp.type === "education"
                    ? "text-blue-500"
                    : "text-green-500"
                }`}
              >
                {exp.type === "education" ? (
                  <GraduationCap size={16} />
                ) : (
                  <Briefcase size={16} />
                )}
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-1 flex items-center gap-3">
                  <span
                    className={`rounded-md border px-2.5 py-0.5 text-xs font-semibold ${
                      exp.type === "education"
                        ? "border-blue-500/30 bg-blue-500/10 text-blue-500"
                        : "border-green-500/30 bg-green-500/10 text-green-500"
                    }`}
                  >
                    {exp.type === "education" ? "Education" : "Work"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {exp.startDate} — {exp.endDate || "Present"}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                  {exp.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  {exp.organization} &middot; {exp.location}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
