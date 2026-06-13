import { cn } from "@/lib/cn";

import type { TreadDividerProps } from "./TreadDivider.types";
import "./TreadDivider.styles.css";

export const TreadDivider = ({ className }: TreadDividerProps) => (
  <div
    role="presentation"
    aria-hidden="true"
    className={cn("tread-divider w-full", className)}
  />
);
