import { ArrowUp } from "lucide-react";

export const RisingTalentIcon = ({ size }: { size: number }) => (
  <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 60 64" fill="none">
      <polygon
        points="30,2 56,15 56,49 30,62 4,49 4,15"
        fill="#16a34a"
        stroke="#16a34a"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center" style={{ top: "1px" }}>
      <ArrowUp size={size * 0.58} color="white" strokeWidth={2.5} />
    </div>
  </div>
);
