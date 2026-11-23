import { Star } from "lucide-react";

export const TopRatedIcon = ({ size }: { size: number }) => (
  <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
    <svg width={size} height={size} viewBox="0 0 60 64" fill="none">
      <polygon
        points="30,2 56,15 56,49 30,62 4,49 4,15"
        fill="#1f57c3"
        stroke="#1f57c3"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <Star size={size * 0.55} color="white" strokeWidth={2.5} />
    </div>
  </div>
);
