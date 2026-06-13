import { useInView } from "@/hooks/useInView";
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
  disableReveal = false,
  children,
}: SectionWrapperProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const revealed = disableReveal || inView;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-12 md:py-20", backgroundClasses[variant], id && "anchor-offset", className)}
    >
      <div
        ref={ref}
        className={cn(
          // mx-auto centers the container (margin auto for centering is the one allowed case)
          "mx-auto flex max-w-7xl flex-col gap-8 px-4 transition duration-300 ease-out md:px-6",
          // motion-safe so reduced-motion users always see fully-visible content
          !revealed && "motion-safe:translate-y-4 motion-safe:opacity-0",
        )}
      >
        {children}
      </div>
    </section>
  );
};
