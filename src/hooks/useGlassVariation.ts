import { useEffect } from "react";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const vary = (el: HTMLElement) => {
  const s = el.style;
  s.setProperty("--glass-angle", `${rand(150, 210).toFixed(0)}deg`);
  s.setProperty("--sheen-x", `${rand(0, 100).toFixed(0)}%`);
  s.setProperty("--sheen-y", `${rand(-25, 10).toFixed(0)}%`);
  s.setProperty("--sheen-size", `${rand(40, 80).toFixed(0)}%`);
  el.dataset.glass = "";
};

const varyAll = (root: ParentNode) => {
  root.querySelectorAll<HTMLElement>(".glass-card:not([data-glass])").forEach(vary);
};

// Gives every glass card its own random reflection, including cards added later
// (route changes, project filters, pagination).
export const useGlassVariation = () => {
  useEffect(() => {
    varyAll(document);
    const observer = new MutationObserver(() => varyAll(document));
    observer.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);
};
