import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

import { useReducedMotion } from "./useReducedMotion";

export interface ScrollSlider<T extends HTMLElement> {
  trackRef: RefObject<T | null>;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

/**
 * Drives a horizontal scroll-snap slider: arrow scrolling + edge detection.
 * Generic over the track element type so it works for any scrollable list.
 */
export const useScrollSlider = <T extends HTMLElement>(): ScrollSlider<T> => {
  const trackRef = useRef<T | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollPrev(el.scrollLeft > 8);
    setCanScrollNext(el.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByDirection = useCallback(
    (direction: 1 | -1) => {
      const el = trackRef.current;
      if (!el) return;
      const amount = el.clientWidth * 0.8 * direction;
      el.scrollBy({ left: amount, behavior: prefersReducedMotion ? "auto" : "smooth" });
    },
    [prefersReducedMotion],
  );

  return {
    trackRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev: () => scrollByDirection(-1),
    scrollNext: () => scrollByDirection(1),
  };
};
