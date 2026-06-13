import { cn } from "@/lib/cn";

import type { SpecChipProps } from "./SpecChip.types";

export const SpecChip = ({ className, children }: SpecChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-border bg-surface-raised px-3 py-1 font-mono text-sm text-body",
        className,
      )}
    >
      {children}
    </span>
  );
};
