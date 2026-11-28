import { useEffect, type RefObject } from "react";

export const STACK_QUERY = "(min-height: 520px)";
const EDGE = 4;
const SETTLE_MS = 900;
const QUIET_MS = 100;
const GAP_MS = 80;
const SWIPE_PX = 24;
const NEXT_KEYS = new Set(["ArrowDown", "PageDown", " "]);
const PREV_KEYS = new Set(["ArrowUp", "PageUp"]);

// Scroll positions at which each card sits in place: the top of the stack, then each sentinel
// in front of the next card. Measured from the page rather than from the window height, because
// mobile browsers resize the window as their address bar shows and hides.
export const cardStops = (stack: HTMLElement) => {
  const y = window.scrollY;
  const tops = [stack, ...Array.from(stack.querySelectorAll<HTMLElement>(".xp-sentinel"))];
  return tops.map((el) => Math.round(el.getBoundingClientRect().top + y));
};

// Steps through a stack of full-screen sticky cards one card per gesture. Outside the stack,
// scrolling stays native.
export const useCardSnap = (ref: RefObject<HTMLElement | null>, count: number) => {
  useEffect(() => {
    const stack = ref.current;
    if (!stack || count < 2) return;
    const media = window.matchMedia(STACK_QUERY);

    let moving = false;
    let settleTimer = 0;
    let quietTimer = 0;
    let blocked = false;
    let lastAbs = 0;
    let lastDir = 0;
    let lastWheelAt = 0;
    let touchY: number | null = null;

    const points = () => cardStops(stack);

    // Which card a gesture in `dir` should land on, or null to let the page scroll natively.
    const target = (dir: 1 | -1) => {
      const y = window.scrollY;
      const p = points();
      const vh = window.innerHeight;
      if (dir === 1) {
        if (y < p[0] - vh * 0.9 || y >= p[count - 1] - EDGE) return null;
        const i = p.findIndex((v) => v > y + EDGE);
        return i < 0 ? null : i;
      }
      if (y <= p[0] + EDGE || y > p[count - 1] + vh * 0.9) return null;
      for (let i = count - 1; i >= 0; i--) if (p[i] < y - EDGE) return i;
      return null;
    };

    const quiet = () => {
      blocked = true;
      window.clearTimeout(quietTimer);
      quietTimer = window.setTimeout(() => (blocked = false), QUIET_MS);
    };

    const finish = () => {
      moving = false;
      window.clearTimeout(settleTimer);
      window.removeEventListener("scrollend", finish);
      quiet();
    };

    const go = (index: number) => {
      moving = true;
      quiet();
      window.clearTimeout(settleTimer);
      window.removeEventListener("scrollend", finish);
      window.scrollTo({ top: points()[index], behavior: "smooth" });
      window.addEventListener("scrollend", finish, { once: true });
      settleTimer = window.setTimeout(finish, SETTLE_MS);
    };

    // A glide always finishes before the next one starts. Once it has, a deliberate new
    // gesture moves on straight away; only the trailing trackpad momentum is ignored.
    const step = (dir: 1 | -1, e: Event, fresh: boolean) => {
      if (!media.matches) return;
      if (moving) {
        e.preventDefault();
        return;
      }
      if (blocked && !fresh && target(dir) !== null) {
        e.preventDefault();
        quiet();
        return;
      }
      const index = target(dir);
      if (index === null) return;
      e.preventDefault();
      go(index);
    };

    const onWheel = (e: WheelEvent) => {
      if (!media.matches || e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const abs = Math.abs(e.deltaY);
      if (abs < 1) return;
      const dir = e.deltaY > 0 ? 1 : -1;
      const now = e.timeStamp;
      // Trackpad momentum is a steady stream of shrinking deltas; a pause, a direction change
      // or a sudden jump in strength means the visitor scrolled again.
      const fresh = now - lastWheelAt > GAP_MS || dir !== lastDir || (abs > lastAbs * 1.4 && abs > 10);
      lastWheelAt = now;
      lastAbs = abs;
      lastDir = dir;
      step(dir, e, fresh);
    };

    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(el.tagName))) return;
      if (NEXT_KEYS.has(e.key) && !e.shiftKey) step(1, e, true);
      else if (PREV_KEYS.has(e.key) || (e.key === " " && e.shiftKey)) step(-1, e, true);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchY === null || !media.matches) return;
      const dy = touchY - (e.touches[0]?.clientY ?? touchY);
      if (moving || (Math.abs(dy) > 4 && target(dy > 0 ? 1 : -1) !== null)) e.preventDefault();
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchY === null) return;
      const dy = touchY - (e.changedTouches[0]?.clientY ?? touchY);
      touchY = null;
      if (Math.abs(dy) >= SWIPE_PX) step(dy > 0 ? 1 : -1, e, true);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("scrollend", finish);
      window.clearTimeout(settleTimer);
      window.clearTimeout(quietTimer);
    };
  }, [ref, count]);
};
