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
  "Cloud & Infrastructure": "text-blue-600 dark:text-blue-400",
  Frontend: "text-violet-600 dark:text-violet-400",
  Backend: "text-emerald-600 dark:text-emerald-400",
  "AI & Machine Learning": "text-amber-600 dark:text-amber-400",
  Automation: "text-rose-600 dark:text-rose-400",
};

const barColors: Record<SkillCategory, string> = {
  "Cloud & Infrastructure": "bg-gradient-to-r from-blue-500 to-cyan-500",
  Frontend: "bg-gradient-to-r from-violet-500 to-purple-500",
  Backend: "bg-gradient-to-r from-emerald-500 to-green-500",
  "AI & Machine Learning": "bg-gradient-to-r from-amber-500 to-orange-500",
  Automation: "bg-gradient-to-r from-rose-500 to-pink-500",
};

export const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="section-subtitle">
          Technologies and tools I work with to build cloud-native applications, AI solutions, and automated systems.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category, catIndex) => {
          const categorySkills = skills.filter((s) => s.category === category);

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-card p-6"
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
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-white/5">
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
