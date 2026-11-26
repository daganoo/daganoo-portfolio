import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { TechIcon } from "../components/TechIcon";
import { CloudVisual } from "../components/expertise/CloudVisual";
import { AiVisual } from "../components/expertise/AiVisual";
import { FullstackVisual } from "../components/expertise/FullstackVisual";
import { AutomationVisual } from "../components/expertise/AutomationVisual";
import { useCardSnap } from "../hooks/useCardSnap";
import { expertise, expertiseIntro, type Expertise as ExpertiseItem } from "../data/expertise";

const PEEK_PX = 22;

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } }),
};

const chip = {
  hidden: { opacity: 0, scale: 0.6, y: 8 },
  visible: (i: number) => ({ opacity: 1, scale: 1, y: 0, transition: { delay: 0.35 + i * 0.05, type: "spring" as const, stiffness: 380, damping: 22 } }),
};

const timelineName = (i: number) => `--xp-${i}`;

const Visual = ({ item, live, animate }: { item: ExpertiseItem; live: boolean; animate: boolean }) => {
  switch (item.id) {
    case "cloud":
      return <CloudVisual animate={animate} />;
    case "ai":
      return <AiVisual live={live} />;
    case "fullstack":
      return <FullstackVisual live={live} />;
    case "automation":
      return <AutomationVisual live={live} animate={animate} />;
  }
};

interface CardProps {
  item: ExpertiseItem;
  index: number;
  covered: boolean;
  live: boolean;
  animate: boolean;
}

// The deck effect (cards dimming as the next one slides over) is a CSS scroll-driven
// animation keyed to the next card's sentinel, so it runs on the compositor with no JS per frame.
const ExpertiseCard = ({ item, index, covered, live, animate }: CardProps) => (
  <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:pt-14">
    <article
      data-xp-card={index}
      data-live={live}
      className={`xp-scene glass-card relative grid w-full overflow-hidden rounded-[2rem] md:h-[min(640px,calc(100vh-8rem))] md:grid-cols-[1fr_1.2fr]`}
      style={{ "--xp-accent": item.accent, "--xp-next": timelineName(index + 1), "--xp-top": `${index * PEEK_PX}px` } as CSSProperties}
    >
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14"
      >
        <m.p variants={reveal} custom={0} className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--xp-accent))]">
          <span className="font-mono">0{index + 1}</span>
          <span className="h-px w-8 bg-[hsl(var(--xp-accent)/0.5)]" />
          {item.label}
        </m.p>
        <m.h3 variants={reveal} custom={1} className="mt-4 text-balance text-3xl font-bold tracking-tight text-card-foreground lg:text-[2.6rem] lg:leading-[1.1]">
          {item.title}
        </m.h3>
        <m.p variants={reveal} custom={2} className="mt-4 text-base leading-relaxed text-muted-foreground">
          {item.description}
        </m.p>
        <m.ul variants={reveal} custom={3} className="mt-6 space-y-2.5">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--xp-accent)/0.15)] text-[hsl(var(--xp-accent))]">
                <Check size={10} strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </m.ul>
        <ul className="mt-7 flex flex-wrap gap-2">
          {item.stack.map((tech, i) => (
            <m.li
              key={tech}
              variants={chip}
              custom={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground/85 transition-colors hover:border-[hsl(var(--xp-accent)/0.5)]"
            >
              <TechIcon name={tech} size={14} />
              {tech}
            </m.li>
          ))}
        </ul>
      </m.div>

      <div className="relative m-3 min-h-[320px] overflow-hidden rounded-[1.5rem] border border-foreground/[0.08] bg-foreground/[0.025] sm:min-h-[380px] md:m-4 md:ml-0 md:min-h-0">
        <Visual item={item} live={live} animate={animate} />
      </div>

      {covered && <div aria-hidden className="xp-shade pointer-events-none absolute inset-x-0 top-0 h-24 bg-background opacity-0" />}
    </article>
  </div>
);

// Only the front card animates. "Front" is the last card that has come into view (past the
// bottom 15% of the screen), so its scene is already playing before it is fully visible; IntersectionObserver reports it off the scroll path, so scrolling
// itself never re-renders React.
const useFrontCard = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [front, setFront] = useState(-1);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const seen = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = Number((e.target as HTMLElement).dataset.xpCard);
          if (e.isIntersecting) seen.add(i);
          else seen.delete(i);
        });
        setFront(seen.size ? Math.max(...Array.from(seen)) : -1);
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    root.querySelectorAll("article[data-xp-card]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
  return front;
};

// Which card is settled on screen, for the progress rail. Updates only when the card changes.
const useStackPosition = (ref: React.RefObject<HTMLDivElement | null>, count: number) => {
  const [pos, setPos] = useState({ index: 0, visible: false });
  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const vh = window.innerHeight;
      const offset = -el.getBoundingClientRect().top;
      const index = Math.min(count - 1, Math.max(0, Math.round(offset / vh)));
      const visible = window.matchMedia("(min-width: 768px)").matches && offset > -vh * 0.35 && offset < (count - 1) * vh + vh * 0.35;
      setPos((prev) => (prev.index === index && prev.visible === visible ? prev : { index, visible }));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ref, count]);
  return pos;
};

const pad = (n: number) => String(n).padStart(2, "0");

const ProgressRail = ({ index, visible, onJump }: { index: number; visible: boolean; onJump: (i: number) => void }) => {
  const current = expertise[index];
  return (
    <nav
      aria-label={expertiseIntro.railLabel}
      aria-hidden={!visible}
      className={`fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 transition-opacity duration-300 md:flex lg:right-4 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ "--xp-accent": current.accent } as CSSProperties}
    >
      <span key={`n${index}`} className="xp-in font-mono text-sm font-semibold text-[hsl(var(--xp-accent))]">
        {pad(index + 1)}
      </span>
      <ul className="flex flex-col gap-1.5">
        {expertise.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              tabIndex={visible ? 0 : -1}
              onClick={() => onJump(i)}
              aria-label={item.label}
              aria-current={i === index ? "step" : undefined}
              className="group relative flex h-9 w-3 items-center justify-center"
            >
              <span className="relative h-full w-[3px] overflow-hidden rounded-full bg-foreground/15">
                <span
                  className="absolute inset-0 origin-top rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    background: i === index ? "hsl(var(--xp-accent))" : "hsl(var(--foreground) / 0.45)",
                    transform: `scaleY(${i <= index ? 1 : 0})`,
                    boxShadow: i === index ? "0 0 10px hsl(var(--xp-accent))" : undefined,
                  }}
                />
              </span>
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full border border-foreground/10 bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <span className="font-mono text-[11px] text-muted-foreground">{pad(expertise.length)}</span>
      {visible && (
        <span
          key={`l${index}`}
          aria-live="polite"
          className="xp-flash pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 whitespace-nowrap rounded-full border border-[hsl(var(--xp-accent)/0.35)] bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground"
        >
          <span className="mr-1.5 font-mono text-[hsl(var(--xp-accent))]">{pad(index + 1)}</span>
          {current.label}
        </span>
      )}
    </nav>
  );
};

export const Expertise = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const front = useFrontCard(ref);
  const total = expertise.length;
  useCardSnap(ref, total);
  const position = useStackPosition(ref, total);
  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + i * window.innerHeight, behavior: "smooth" });
  };
  const names = expertise.slice(1).map((_, i) => timelineName(i + 1)).join(", ");

  return (
    <div>
      <m.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{expertiseIntro.eyebrow}</p>
        <h3 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{expertiseIntro.title}</h3>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">{expertiseIntro.subtitle}</p>
      </m.div>
      <div ref={ref} className="xp-stack mt-10 space-y-6 md:mt-0 md:space-y-0" style={{ timelineScope: names } as CSSProperties}>
        {expertise.map((item, i) => (
          <Fragment key={item.id}>
            {i > 0 && <div aria-hidden className="xp-sentinel h-0" style={{ viewTimelineName: timelineName(i) } as CSSProperties} />}
            <ExpertiseCard item={item} index={i} covered={i < total - 1} live={front === i && !reduce} animate={!reduce} />
          </Fragment>
        ))}
      </div>
      <ProgressRail index={position.index} visible={position.visible} onJump={jump} />
    </div>
  );
};
