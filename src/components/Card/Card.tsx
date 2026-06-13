import { cn } from "@/lib/cn";

import type { CardProps } from "./Card.types";

export const Card = ({ interactive = false, className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-md border border-border bg-surface p-6",
        interactive &&
          "cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 hover:border-border-strong",
        className,
      )}
    >
      {children}
    </div>
  );
};
