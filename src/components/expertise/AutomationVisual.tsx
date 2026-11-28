import { type CSSProperties } from "react";
import { Check, Webhook } from "lucide-react";
import { SiGmail, SiGooglesheets, SiN8N, SiTelegram } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FlowDiagram, type FlowNode } from "./FlowDiagram";
import { useLoop } from "../../hooks/useLoop";
import { workflowDemo } from "../../data/expertise";

const LOOP_MS = 7000;
const BASE_EXECUTIONS = 1284;
const ICON = "h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-7 lg:w-7";
const appTile: CSSProperties = { background: "linear-gradient(hsl(var(--foreground) / 0.07), hsl(var(--foreground) / 0.07)), hsl(var(--background))", border: "1px solid hsl(var(--foreground) / 0.1)" };
const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;
const labels = workflowDemo.nodes;

const nodes: FlowNode[] = [
  { id: "trigger", x: 60, y: 170, label: labels.trigger, icon: <Webhook className={ICON} />, tile: { background: "linear-gradient(145deg, #EA4B71, #EA4B71bb)", color: "white" }, at: 0 },
  { id: "agent", x: 250, y: 170, label: labels.agent, icon: <>{SiN8N({ className: ICON, color: "#EA4B71" })}</>, tile: appTile, at: 1.5 },
  { id: "gmail", x: 470, y: 45, label: labels.gmail, icon: <>{SiGmail({ className: ICON, color: "#EA4335" })}</>, tile: appTile, at: 3 },
  { id: "sheets", x: 470, y: 170, label: labels.sheets, icon: <>{SiGooglesheets({ className: ICON, color: "#34A853" })}</>, tile: appTile, at: 3 },
  { id: "telegram", x: 470, y: 295, label: labels.telegram, icon: <>{SiTelegram({ className: ICON, color: "#26A5E4" })}</>, tile: appTile, at: 3 },
];

export const AutomationVisual = ({ live, animate }: { live: boolean; animate: boolean }) => {
  const round = useLoop(live, LOOP_MS);
  const stages = workflowDemo.pipeline;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 sm:p-8">
      <div className="w-full max-w-[540px] rounded-2xl border border-foreground/10 bg-[radial-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px)] px-4 pb-8 pt-4 [background-size:18px_18px] sm:px-6">
        <div className="mb-2 flex justify-start">
          <span className="rounded-full bg-[hsl(var(--xp-accent)/0.12)] px-2.5 py-1 font-mono text-[11px] text-[hsl(var(--xp-accent))]">
            {(BASE_EXECUTIONS + round).toLocaleString("en-US")} {workflowDemo.executions}
          </span>
        </div>
        <FlowDiagram
          width={540}
          height={340}
          nodes={nodes}
          trunk={[[60, 170], [250, 170]]}
          branches={[[470, 45], [470, 170], [470, 295]]}
          cycle={3}
          animate={animate}
        />
      </div>

      <div key={round} className="flex w-full max-w-[540px] flex-wrap items-center gap-x-1 gap-y-2 rounded-2xl border border-foreground/10 bg-background/60 p-3 sm:flex-nowrap sm:gap-2 md:flex-wrap md:gap-x-1 lg:flex-nowrap lg:gap-2">
        {FaGithub({ className: "h-5 w-5 shrink-0 text-foreground" })}
        {stages.map((stage, i) => (
          <div key={stage} className="contents">
            <div className={`relative h-px min-w-[6px] flex-1 overflow-hidden bg-foreground/15 ${i === 0 ? "hidden sm:block md:hidden lg:block" : ""}`}>
              <span className="xp-anim xp-grow-x absolute inset-0 bg-[hsl(var(--xp-accent))]" style={delay(0.2 + i * 0.7)} />
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-foreground/80">
              <span className="xp-anim xp-pop flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white" style={delay(0.6 + i * 0.7)}>
                <Check size={10} strokeWidth={3} />
              </span>
              <span className="text-[10px] sm:text-[11px]">{stage}</span>
            </span>
          </div>
        ))}
        <span
          className="xp-anim xp-in w-full shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-center text-[11px] font-medium text-emerald-600 dark:text-emerald-400 sm:ml-1 sm:w-auto md:ml-0 md:w-full lg:ml-1 lg:w-auto"
          style={delay(0.6 + stages.length * 0.7)}
        >
          {workflowDemo.deployed}
        </span>
      </div>
    </div>
  );
};
