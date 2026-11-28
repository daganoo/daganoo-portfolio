import { type CSSProperties, type ReactNode } from "react";

export interface FlowNode {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: ReactNode;
  tile: CSSProperties;
  at: number;
}

export type Point = [number, number];

interface FlowDiagramProps {
  width: number;
  height: number;
  nodes: FlowNode[];
  trunk: [Point, Point];
  branches: Point[];
  cycle: number;
  animate: boolean;
}

// Packets ride straight segments using only transform and opacity, so they animate on the
// compositor. Each segment uses half the cycle: the trunk first, then every branch at once.
const Segment = ({ from, to, width, height, delay, cycle }: { from: Point; to: Point; width: number; height: number; delay: number; cycle: number }) => {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  return (
    <div
      aria-hidden
      className="absolute h-0 origin-top-left"
      style={{
        left: `${(from[0] / width) * 100}%`,
        top: `${(from[1] / height) * 100}%`,
        width: `${(Math.hypot(dx, dy) / width) * 100}%`,
        transform: `rotate(${Math.atan2(dy, dx)}rad)`,
      }}
    >
      <div className="xp-anim xp-seg absolute inset-x-0 top-0" style={{ animationDuration: `${cycle}s`, animationDelay: `${delay}s` }}>
        <span className="absolute left-0 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--xp-accent)/0.25)]" />
        <span className="absolute left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[hsl(var(--xp-accent))]" />
      </div>
    </div>
  );
};

export const FlowDiagram = ({ width, height, nodes, trunk, branches, cycle, animate }: FlowDiagramProps) => {
  const [start, hub] = trunk;
  const wires: [Point, Point][] = [trunk, ...branches.map((b): [Point, Point] => [hub, b])];

  return (
    <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
      <svg viewBox={`0 0 ${width} ${height}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        {wires.map(([a, b]) => (
          <g key={`${a}-${b}`} strokeLinecap="round">
            <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className="stroke-foreground/15" strokeWidth={1.5} />
            <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="hsl(var(--xp-accent))" strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray="3 9" />
          </g>
        ))}
      </svg>
      {animate && (
        <>
          <Segment from={start} to={hub} width={width} height={height} delay={0} cycle={cycle} />
          {branches.map((b) => (
            <Segment key={`${b}`} from={hub} to={b} width={width} height={height} delay={cycle / 2} cycle={cycle} />
          ))}
        </>
      )}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(node.x / width) * 100}%`, top: `${(node.y / height) * 100}%` }}
        >
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 md:h-10 md:w-10 lg:h-14 lg:w-14 lg:rounded-2xl"
            style={node.tile}
          >
            <span
              className="xp-anim xp-ping absolute -inset-1 rounded-[inherit] border-2 opacity-0"
              style={{ borderColor: "hsl(var(--xp-accent))", animationDuration: `${cycle}s`, animationDelay: `${node.at}s` }}
            />
            {node.icon}
          </div>
          <p className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap text-[9px] font-medium text-muted-foreground sm:text-[10px] md:text-[9px] lg:mt-2 lg:text-[11px]">
            {node.label}
          </p>
        </div>
      ))}
    </div>
  );
};
