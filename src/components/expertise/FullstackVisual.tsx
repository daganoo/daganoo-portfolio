import { type CSSProperties } from "react";
import { Lock } from "lucide-react";
import { TechIcon } from "../TechIcon";
import { useLoop } from "../../hooks/useLoop";
import { codeDemo } from "../../data/expertise";

const LOOP_MS = 9000;
const BARS = [38, 52, 44, 70, 58, 84, 96];
const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

const TOKEN_COLOR: Record<string, string> = {
  k: "text-violet-500 dark:text-violet-400",
  f: "text-sky-600 dark:text-sky-400",
  s: "text-emerald-600 dark:text-emerald-400",
  t: "text-rose-500 dark:text-rose-400",
  a: "text-amber-600 dark:text-amber-300",
  p: "text-foreground/70",
};

export const FullstackVisual = ({ live }: { live: boolean }) => {
  const round = useLoop(live, LOOP_MS);
  const typed = codeDemo.lines.length * 0.11;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-4 sm:p-8">
      <div key={round} className="grid w-full max-w-[620px] gap-3 sm:grid-cols-[1.05fr_1fr]">
        <div className="hidden overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 sm:block">
          <div className="flex items-center gap-2 border-b border-foreground/10 px-3 py-2">
            <span className="flex gap-1">
              {["bg-rose-400", "bg-amber-400", "bg-emerald-400"].map((c) => (
                <span key={c} className={`h-2 w-2 rounded-full ${c}`} />
              ))}
            </span>
            <span className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-foreground/5 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
              <TechIcon name="React" size={11} />
              {codeDemo.file}
            </span>
          </div>
          <pre className="overflow-hidden p-3 font-mono text-[10.5px] leading-[1.75]">
            {codeDemo.lines.map((line, i) => (
              <div key={i} className="xp-anim xp-type flex whitespace-pre" style={delay(0.1 + i * 0.11)}>
                <span className="mr-3 w-3 select-none text-right text-foreground/25">{i + 1}</span>
                {line.map(([kind, text], j) => (
                  <span key={j} className={TOKEN_COLOR[kind]}>{text}</span>
                ))}
                {i === codeDemo.lines.length - 1 && <span className="xp-anim xp-caret ml-0.5 inline-block w-[6px] bg-[hsl(var(--xp-accent))]" />}
              </div>
            ))}
          </pre>
        </div>

        <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/60">
          <div className="flex items-center gap-2 border-b border-foreground/10 px-3 py-2">
            <span className="flex flex-1 items-center gap-1.5 truncate rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground">
              <Lock size={9} />
              {codeDemo.url}
            </span>
          </div>
          <div className="space-y-2.5 p-3">
            <div className="xp-anim xp-in flex items-center justify-between" style={delay(typed + 0.1)}>
              <span className="h-2 w-16 rounded-full bg-foreground/20" />
              <span className="h-5 w-5 rounded-full bg-[hsl(var(--xp-accent)/0.5)]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {codeDemo.stats.map((stat, i) => (
                <div key={stat.label} className="xp-anim xp-in rounded-xl border border-foreground/10 p-2.5" style={delay(typed + 0.3 + i * 0.15)}>
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                  <p className="text-base font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="flex h-24 items-end gap-1.5 rounded-xl border border-foreground/10 p-2.5">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="xp-anim xp-grow-y flex-1 rounded-t-[4px] bg-gradient-to-t from-[hsl(var(--xp-accent)/0.35)] to-[hsl(var(--xp-accent))]"
                  style={{ height: `${h}%`, ...delay(typed + 0.6 + i * 0.07) }}
                />
              ))}
            </div>
            <p className="xp-anim xp-in flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground" style={delay(typed + 1.3)}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {codeDemo.log}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[620px] items-center">
        {codeDemo.layers.map((layer, i) => (
          <div key={layer} className="contents">
            {i > 0 && (
              <div className="relative mx-2 h-px flex-1 bg-foreground/15">
                <div className="xp-anim xp-travel absolute inset-0" style={delay(i * 0.6)}>
                  <span className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full bg-[hsl(var(--xp-accent))] shadow-[0_0_10px_hsl(var(--xp-accent))]" />
                </div>
              </div>
            )}
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-foreground/10 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground">
              <TechIcon name={layer} size={14} />
              {layer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
