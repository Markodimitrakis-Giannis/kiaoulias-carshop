import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element the first time it scrolls into view, then disconnects.
 * Falls back to "in view" when IntersectionObserver is unavailable so content
 * never stays hidden. Reduced-motion is handled at the CSS layer by the caller.
 */
export const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
};
