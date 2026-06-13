import { cn } from "@/lib/cn";

import { IconSize } from "./Icon.types";
import type { IconProps } from "./Icon.types";

const sizePx: Record<IconSize, number> = {
  [IconSize.SM]: 16,
  [IconSize.MD]: 20,
  [IconSize.LG]: 28,
};

export const Icon = ({
  icon: LucideIcon,
  size = IconSize.MD,
  label,
  className,
}: IconProps) => {
  const px = sizePx[size];
  const isDecorative = !label;

  return (
    <LucideIcon
      width={px}
      height={px}
      aria-hidden={isDecorative ? true : undefined}
      role={label ? "img" : undefined}
      aria-label={label}
      className={cn("shrink-0", className)}
    />
  );
};
