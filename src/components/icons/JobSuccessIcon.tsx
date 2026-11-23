import { Crown } from "lucide-react";

export const JobSuccessIcon = ({ size }: { size: number }) => (
  <div
    className="flex flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-600"
    style={{ width: size, height: size }}
  >
    <Crown size={size * 0.5} className="fill-blue-600 text-blue-600" />
  </div>
);
