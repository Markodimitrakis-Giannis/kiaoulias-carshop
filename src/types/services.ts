import type { LucideIcon } from "lucide-react";

import type { ServiceCategory } from "@/constants/services";

export interface Service {
  id: string;
  category: ServiceCategory;
  icon: LucideIcon;
  translationKey: string;
  /** Base name for the photo (e.g. "tyre-fitting"). Two widths must exist: {base}-480.webp and {base}-960.webp, OR {base}-640.webp and {base}-1280.webp */
  image?: string;
}
