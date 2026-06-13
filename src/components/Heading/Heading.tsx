import { cn } from "@/lib/cn";

import type { HeadingLevel, HeadingProps } from "./Heading.types";

const sizeClasses: Record<HeadingLevel, string> = {
  1: "text-3xl md:text-4xl leading-tight",
  2: "text-2xl md:text-3xl leading-tight",
  3: "text-xl leading-snug",
  4: "text-lg leading-snug",
};

export const Heading = ({ level, id, className, children }: HeadingProps) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return (
    <Tag
      id={id}
      className={cn(
        "font-display uppercase tracking-wide text-heading",
        sizeClasses[level],
        className,
      )}
    >
      {children}
    </Tag>
  );
};
