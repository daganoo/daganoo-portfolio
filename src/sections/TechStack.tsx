import { type CSSProperties } from "react";
import { m } from "framer-motion";
import { Boxes, Cloud, Code2, Database, Smartphone, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { TechIcon } from "../components/TechIcon";
import { stackGroups, stackIntro } from "../data/skills";

const GROUP_ICONS: Record<string, LucideIcon> = {
  "Cloud & DevOps": Cloud,
  "AI & Data": Sparkles,
  Frontend: Code2,
  "Backend & Databases": Database,
  "Mobile & Desktop": Smartphone,
  Tools: Wrench,
};

const GROUP_SPAN: Record<string, string> = {
  "Cloud & DevOps": "lg:col-span-2",
  "Backend & Databases": "lg:col-span-2",
  Tools: "lg:col-span-2",
};

const chip = {
  hidden: { opacity: 0, y: 6, scale: 0.85 },
  visible: (i: number) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: 0.15 + i * 0.03, type: "spring" as const, stiffness: 420, damping: 26 } }),
};

const tile = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: (i % 3) * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }),
};

export const TechStack = ({ className = "mt-28" }: { className?: string }) => {
  return (
    <div className={className}>
      <m.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{stackIntro.eyebrow}</p>
        <h3 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{stackIntro.title}</h3>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{stackIntro.subtitle}</p>
      </m.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, i) => {
          const Icon = GROUP_ICONS[group.category] ?? Boxes;
          return (
            <m.div
              key={group.category}
              variants={tile}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`stack-tile glass-card relative overflow-hidden rounded-3xl p-6 ${GROUP_SPAN[group.category] ?? ""}`}
              style={{ "--xp-accent": group.accent } as CSSProperties}
            >
              <Icon aria-hidden className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 text-[hsl(var(--xp-accent)/0.06)]" strokeWidth={1.25} />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--xp-accent)/0.14)] text-[hsl(var(--xp-accent))]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{group.category}</h4>
                    <p className="text-xs text-muted-foreground">{group.blurb}</p>
                  </div>
                </div>
                <span className="rounded-full border border-foreground/10 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((tech, j) => (
                  <m.li
                    key={tech}
                    variants={chip}
                    custom={j}
                    className="stack-chip inline-flex items-center gap-1.5 rounded-lg border border-foreground/10 bg-background/50 px-2.5 py-1.5 text-xs font-medium text-foreground/85"
                  >
                    <TechIcon name={tech} size={14} />
                    {tech}
                  </m.li>
                ))}
              </ul>
            </m.div>
          );
        })}

      </div>
    </div>
  );
};
