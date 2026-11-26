import { type CSSProperties } from "react";
import { FileText, Search } from "lucide-react";
import { TechIcon } from "../TechIcon";
import { useLoop } from "../../hooks/useLoop";
import { ragDemo } from "../../data/expertise";

const LOOP_MS = 10000;
const words = ragDemo.answer.split(" ");
const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

export const AiVisual = ({ live }: { live: boolean }) => {
  const round = useLoop(live, LOOP_MS);
  const model = ragDemo.models[Math.max(round - 1, 0) % ragDemo.models.length];

  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-foreground/10 bg-background/60">
        <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="xp-anim absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {ragDemo.assistant}
          </div>
          <span key={model} className="xp-anim xp-in inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 py-1 text-[11px] text-muted-foreground">
            <TechIcon name={model} size={12} />
            {model}
          </span>
        </div>

        <div key={round} className="space-y-3 p-4 text-[13px] leading-relaxed">
          <div className="flex justify-end">
            <p className="xp-anim xp-in max-w-[80%] rounded-2xl rounded-br-md bg-foreground px-3.5 py-2 text-background" style={delay(0.1)}>
              {ragDemo.question}
            </p>
          </div>

          <div className="xp-anim xp-in rounded-xl border border-foreground/10 p-3" style={delay(0.45)}>
            <p className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
              <Search size={12} />
              {ragDemo.searching}
            </p>
            <ul className="space-y-1.5">
              {ragDemo.sources.map((src, i) => (
                <li key={src.name} className="xp-anim xp-in flex items-center gap-2" style={delay(0.6 + i * 0.15)}>
                  <FileText size={13} className="shrink-0 text-muted-foreground" />
                  <span className="w-28 truncate font-mono text-[11px] text-foreground/80 sm:w-32">{src.name}</span>
                  <span className="h-1 flex-1 overflow-hidden rounded-full bg-foreground/10">
                    <span
                      className="xp-anim xp-grow-x block h-full rounded-full bg-[hsl(var(--xp-accent))]"
                      style={{ width: `${src.score * 100}%`, ...delay(0.7 + i * 0.15) }}
                    />
                  </span>
                  <span className="w-8 text-right font-mono text-[11px] text-muted-foreground">{src.score.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="xp-anim xp-in flex gap-2.5" style={delay(1.3)}>
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--xp-accent)/0.15)]">
              <TechIcon name={model} size={13} />
            </span>
            <p className="text-foreground/90">
              {words.map((word, i) => (
                <span key={i} className="xp-anim xp-word" style={delay(1.45 + i * 0.045)}>
                  {word}{" "}
                </span>
              ))}
              {[1, 2].map((n) => (
                <sup
                  key={n}
                  className="xp-anim xp-in ml-0.5 rounded bg-[hsl(var(--xp-accent)/0.18)] px-1 text-[10px] text-[hsl(var(--xp-accent))]"
                  style={delay(1.45 + words.length * 0.045 + n * 0.12)}
                >
                  {n}
                </sup>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
