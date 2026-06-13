import { cn } from "@/lib/cn";

import { BadgeVariant } from "./Badge.types";
import type { BadgeProps } from "./Badge.types";

const variantClasses: Record<BadgeVariant, string> = {
  [BadgeVariant.SUCCESS]: "bg-success/15 text-success border border-success/30",
  [BadgeVariant.WARNING]: "bg-warning/15 text-warning border border-warning/30",
  [BadgeVariant.DANGER]: "bg-danger/15 text-danger border border-danger/30",
  [BadgeVariant.NEUTRAL]: "bg-surface-raised text-muted border border-border",
};

export const Badge = ({
  variant = BadgeVariant.NEUTRAL,
  className,
  children,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm px-2 py-0.5 text-xs uppercase tracking-wider",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};
