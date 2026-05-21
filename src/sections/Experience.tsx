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
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Experience &amp; <span className="text-gradient">Education</span>
        </h2>
        <p className="section-subtitle">
          My journey through software engineering education and hands-on freelance work.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 top-0 h-full w-px bg-gray-200 dark:bg-white/10 md:left-8" />

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
                className={`absolute left-[18px] top-1 rounded-full border-2 border-gray-200 p-2 dark:border-white/10 md:left-[26px] ${
                  exp.type === "education"
                    ? "bg-brand-50 dark:bg-brand-500/10"
                    : "bg-emerald-50 dark:bg-emerald-500/10"
                }`}
              >
                {exp.type === "education" ? (
                  <GraduationCap size={16} className="text-brand-600 dark:text-brand-400" />
                ) : (
                  <Briefcase size={16} className="text-emerald-600 dark:text-emerald-400" />
                )}
              </div>

              <div className="glass-card p-6">
                <div className="mb-1 flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      exp.type === "education"
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                        : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                    }`}
                  >
                    {exp.type === "education" ? "Education" : "Work"}
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-500">
                    {exp.startDate} — {exp.endDate || "Present"}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>

                <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                  {exp.organization} &middot; {exp.location}
                </p>

                <p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
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
