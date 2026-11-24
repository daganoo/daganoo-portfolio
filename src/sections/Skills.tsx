import { m } from "framer-motion";
import { Code, Database, Cloud, Sparkles, Wrench, Monitor, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillGroups } from "../data/skills";

const iconMap: Record<string, LucideIcon> = {
  Frontend: Code,
  "Backend & Databases": Database,
  "Cloud & DevOps": Cloud,
  "AI & Automation": Sparkles,
  Tools: Wrench,
  "Mobile & Desktop Development": Monitor,
  Languages: Globe,
};

const accentColors: Record<string, string> = {
  Frontend: "text-blue-500",
  "Backend & Databases": "text-green-500",
  "Cloud & DevOps": "text-cyan-500",
  "AI & Automation": "text-orange-500",
  Tools: "text-yellow-500",
  "Mobile & Desktop Development": "text-purple-500",
  Languages: "text-rose-500",
};

export const Skills = () => {
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
          Tech Stack
        </h2>
        <p className="mt-6 max-w-none text-lg text-muted-foreground">
          Technologies and tools I work with to build cloud-native applications, AI solutions, and automated systems.
        </p>
      </m.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.category] || Code;
          return (
            <m.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className={accentColors[group.category]} />
                </div>
                <h3 className="text-base font-semibold">{group.category}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {group.details}
              </p>
            </m.div>
          );
        })}
      </div>
      </div>
    </section>
  );
};
