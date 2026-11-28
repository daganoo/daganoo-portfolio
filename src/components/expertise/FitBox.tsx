import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Shrinks a scene to fit its panel when the panel is shorter than the scene (small phones),
// using a transform so the layout inside stays exactly as designed.
export const FitBox = ({ children }: { children: ReactNode }) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const fit = () => {
      const next = Math.min(1, outer.clientHeight / Math.max(1, inner.offsetHeight));
      setScale((prev) => (Math.abs(prev - next) < 0.01 ? prev : next));
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={outerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div ref={innerRef} className="w-full shrink-0" style={scale < 1 ? { transform: `scale(${scale})` } : undefined}>
        {children}
      </div>
    </div>
  );
};
