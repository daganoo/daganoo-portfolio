import { useEffect, useRef } from "react";

const HOLD_MS = 2600;
const BLINK_MS = 530;
const DELETE_MS = 30;
const PAUSE_MS = 260;
const IDLE_MS = 500;

const typeDelay = () => 50 + Math.random() * 45;

interface TypewriterHeadlineProps {
  phrases: string[];
  className?: string;
}

export const TypewriterHeadline = ({ phrases, className = "" }: TypewriterHeadlineProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  // Writes to the DOM directly so typing never re-renders React, and blinks the caret on a
  // timer because an infinite CSS animation would keep the browser drawing at 60 fps.
  useEffect(() => {
    const heading = headingRef.current;
    const text = textRef.current;
    const caret = caretRef.current;
    if (!heading || !text || !caret) return;
    if (phrases.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number;
    let visible = true;
    let index = 0;

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(heading);

    const schedule = (step: () => void, ms: number) => {
      timer = window.setTimeout(() => {
        if (visible && !document.hidden) step();
        else schedule(step, IDLE_MS);
      }, ms);
    };

    const hold = (elapsed = 0) => {
      if (elapsed >= HOLD_MS) {
        erase();
        return;
      }
      caret.style.opacity = Math.round(elapsed / BLINK_MS) % 2 === 0 ? "1" : "0";
      schedule(() => hold(elapsed + BLINK_MS), BLINK_MS);
    };

    const erase = () => {
      caret.style.opacity = "1";
      const value = (text.textContent ?? "").slice(0, -1);
      text.textContent = value;
      if (value) {
        schedule(erase, DELETE_MS);
        return;
      }
      index = (index + 1) % phrases.length;
      schedule(() => type(1), PAUSE_MS);
    };

    const type = (length: number) => {
      const phrase = phrases[index];
      text.textContent = phrase.slice(0, length);
      if (length < phrase.length) schedule(() => type(length + 1), typeDelay());
      else hold();
    };

    hold();

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      text.textContent = phrases[0];
    };
  }, [phrases]);

  return (
    <h1 ref={headingRef} className={className}>
      <span className="sr-only">{phrases.join(". ")}</span>
      <span aria-hidden className="flex h-[1.1em] items-center justify-center">
        <span ref={textRef} className="whitespace-pre">
          {phrases[0]}
        </span>
        <span
          ref={caretRef}
          className="-mr-[0.13em] ml-[0.07em] h-[0.9em] w-[0.06em] rounded-full bg-violet-500 motion-reduce:hidden dark:bg-violet-300"
        />
      </span>
    </h1>
  );
};
