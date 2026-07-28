import { Wrench, Navigation, RotateCw, Gauge, Disc, CircleDot } from "lucide-react";

import { ServiceCategory } from "@/constants/services";
import type { Service } from "@/types/services";

export const SERVICES_DATA: Service[] = [
  {
    id: "tyres",
    category: ServiceCategory.TYRES,
    icon: CircleDot,
    translationKey: "tyres",
    image: "tyre-fitting",
  },
  {
    id: "alignment",
    category: ServiceCategory.ALIGNMENT,
    icon: Navigation,
    translationKey: "align",
    image: "alignment",
  },
  {
    id: "balancing",
    category: ServiceCategory.BALANCING,
    icon: RotateCw,
    translationKey: "bal",
    image: "balancing",
  },
  {
    id: "tpms",
    category: ServiceCategory.OTHER,
    icon: Gauge,
    translationKey: "tpms",
    image: "torque",
  },
  {
    id: "rims",
    category: ServiceCategory.OTHER,
    icon: Disc,
    translationKey: "rims",
    image: "align-low",
  },
  {
    id: "repair",
    category: ServiceCategory.OTHER,
    icon: Wrench,
    translationKey: "repair",
    image: "torque",
  },
];
