import { motion } from "framer-motion";
import {
  Cloud, Code2, Container, Database, Server, Sparkles,
  Table, Terminal, Workflow, Zap, type LucideIcon,
} from "lucide-react";
import { skills, skillCategories } from "../data/skills";
import { SkillCategory } from "../types";

const iconMap: Record<string, LucideIcon> = {
  Cloud, Database, Zap, Container, Code2, Server,
  Terminal, Table, Sparkles, Workflow,
};

const categoryText: Record<SkillCategory, string> = {
  "Cloud & Infrastructure": "text-blue-500",
  Frontend: "text-purple-500",
  Backend: "text-green-500",
  "AI & Machine Learning": "text-orange-500",
  Automation: "text-orange-500",
};

const barColors: Record<SkillCategory, string> = {
  "Cloud & Infrastructure": "bg-gradient-to-r from-blue-500 to-cyan-500",
  Frontend: "bg-gradient-to-r from-purple-500 to-violet-500",
  Backend: "bg-gradient-to-r from-green-500 to-emerald-500",
  "AI & Machine Learning": "bg-gradient-to-r from-orange-500 to-amber-500",
  Automation: "bg-gradient-to-r from-orange-500 to-rose-500",
};

export const Skills = () => {
  return (
    <section className="container-page mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Tech Stack
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Technologies and tools I work with to build cloud-native applications, AI solutions, and automated systems.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className={`mb-6 text-lg font-semibold ${categoryText[category]}`}>
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill, i) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon size={16} className={categoryText[category]} />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.years}+ yrs
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className={`h-full rounded-full ${barColors[category]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIndex * 0.1 + i * 0.05 + 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
