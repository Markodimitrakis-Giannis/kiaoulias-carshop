import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Final numeric target value */
  target: number;
  /** Animation duration in milliseconds */
  durationMs?: number;
  /** Whether the element is visible (from IntersectionObserver) */
  isVisible: boolean;
  /** Whether the user prefers reduced motion */
  prefersReduced: boolean;
}

/**
 * Animates a number from 0 to `target` once `isVisible` becomes true.
 * Returns the final value immediately if `prefersReduced` is true.
 */
export const useCountUp = ({
  target,
  durationMs = 1200,
  isVisible,
  prefersReduced,
}: UseCountUpOptions): number => {
  const [current, setCurrent] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Reduced motion: skip the animation entirely
    if (prefersReduced || !isVisible) {
      return;
    }

    const step = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(eased * target);

      setCurrent(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      startTimeRef.current = null;
    };
  }, [isVisible, prefersReduced, target, durationMs]);

  // When reduced motion is on, return the target directly (no animation)
  return prefersReduced ? target : current;
};
