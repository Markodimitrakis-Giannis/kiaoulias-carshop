import { cn } from "@/lib/cn";

import { SectionBackground } from "./SectionWrapper.types";
import type { SectionWrapperProps } from "./SectionWrapper.types";

const backgroundClasses: Record<SectionBackground, string> = {
  [SectionBackground.CHARCOAL]: "bg-charcoal",
  [SectionBackground.INK]: "bg-ink",
  [SectionBackground.NAVY]: "bg-navy",
};

export const SectionWrapper = ({
  id,
  labelledBy,
  variant = SectionBackground.CHARCOAL,
  className,
  children,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-12 md:py-20", backgroundClasses[variant], id && "anchor-offset", className)}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:px-6">{children}</div>
    </section>
  );
};
