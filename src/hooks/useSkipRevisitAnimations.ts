import { useLocation } from "react-router-dom";
import { MotionGlobalConfig } from "framer-motion";

const firstVisitKey = new Map<string, string>();
let resetTimer: number | undefined;

// Entrance animations play on a page's first visit only; on revisits the content
// above the fold appears instantly. Keyed by location.key so StrictMode's double
// render isn't mistaken for a revisit.
export const useSkipRevisitAnimations = () => {
  const { pathname, key } = useLocation();
  const first = firstVisitKey.get(pathname);
  if (first === undefined) firstVisitKey.set(pathname, key);
  const revisit = first !== undefined && first !== key;

  MotionGlobalConfig.skipAnimations = revisit;
  if (revisit) {
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      MotionGlobalConfig.skipAnimations = false;
    }, 400);
  }
};
