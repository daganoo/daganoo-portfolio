import { useEffect, useState } from "react";

// Counts scene replays while `live`. The first time a scene comes into view it starts from the
// top; when a visitor returns to it, the finished scene stays put until the next replay.
export const useLoop = (live: boolean, ms: number) => {
  const [round, setRound] = useState(0);
  useEffect(() => {
    if (!live) return;
    setRound((r) => (r === 0 ? 1 : r));
    const id = setInterval(() => setRound((r) => r + 1), ms);
    return () => clearInterval(id);
  }, [live, ms]);
  return round;
};
