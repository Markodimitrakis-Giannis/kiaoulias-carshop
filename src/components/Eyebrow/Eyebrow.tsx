import { cn } from "@/lib/cn";

import type { EyebrowProps } from "./Eyebrow.types";

export const Eyebrow = ({ className, children }: EyebrowProps) => {
  return (
    <p className={cn("font-mono text-sm uppercase tracking-wider text-accent-text", className)}>
      {children}
    </p>
  );
};
