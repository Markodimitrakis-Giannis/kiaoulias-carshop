import { cn } from "@/lib/cn";

import type { EyebrowProps } from "./Eyebrow.types";

export const Eyebrow = ({ className, onDark = false, children }: EyebrowProps) => {
  return (
    <p
      className={cn(
        "font-mono text-sm uppercase tracking-wider",
        onDark ? "text-accent" : "text-accent-text",
        className,
      )}
    >
      {children}
    </p>
  );
};
