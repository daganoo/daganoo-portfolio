import { Archive, Database, Globe, Network, Sparkles, Users } from "lucide-react";
import { TbLambda } from "react-icons/tb";
import { FlowDiagram, type FlowNode } from "./FlowDiagram";
import { cloudDemo } from "../../data/expertise";

const awsTile = (hex: string) => ({ background: `linear-gradient(145deg, ${hex}, ${hex}bb)`, color: "white" });

const ICON = "h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-7 lg:w-7";
const labels = cloudDemo.nodes;

const nodes: FlowNode[] = [
  { id: "users", x: 50, y: 200, label: labels.users, icon: <Users className={ICON} />, tile: { background: "linear-gradient(hsl(var(--foreground) / 0.08), hsl(var(--foreground) / 0.08)), hsl(var(--background))", color: "hsl(var(--foreground))" }, at: 0 },
  { id: "cdn", x: 165, y: 200, label: labels.cdn, icon: <Globe className={ICON} />, tile: awsTile("#8C4FFF"), at: 0.53 },
  { id: "api", x: 280, y: 200, label: labels.api, icon: <Network className={ICON} />, tile: awsTile("#E7157B"), at: 1.07 },
  { id: "lambda", x: 395, y: 200, label: labels.lambda, icon: <>{TbLambda({ className: ICON })}</>, tile: awsTile("#ED7100"), at: 1.6 },
  { id: "db", x: 530, y: 60, label: labels.db, icon: <Database className={ICON} />, tile: awsTile("#4D27A8"), at: 3.2 },
  { id: "s3", x: 530, y: 200, label: labels.s3, icon: <Archive className={ICON} />, tile: awsTile("#3F8624"), at: 3.2 },
  { id: "ai", x: 530, y: 340, label: labels.ai, icon: <Sparkles className={ICON} />, tile: awsTile("#01A88D"), at: 3.2 },
];

export const CloudVisual = ({ animate }: { animate: boolean }) => (
  <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-3 py-6 sm:px-8 sm:py-10">
    <div className="flex w-full justify-between gap-3 sm:contents">
      {cloudDemo.stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`xp-anim xp-bob rounded-2xl border border-foreground/10 bg-background/70 px-3 py-2 sm:absolute ${
            i === 0 ? "sm:left-5 sm:top-5" : "sm:bottom-5 sm:right-5"
          }`}
          style={{ animationDelay: `${i * -3}s` }}
        >
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
          <p className="font-mono text-sm font-semibold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="w-full max-w-[560px] pb-4 sm:pb-0">
      <FlowDiagram
        width={600}
        height={400}
        nodes={nodes}
        trunk={[[50, 200], [395, 200]]}
        branches={[[530, 60], [530, 200], [530, 340]]}
        cycle={3.2}
        animate={animate}
      />
    </div>
  </div>
);
