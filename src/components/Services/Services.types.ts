import type { ServiceCategory } from "@/constants/services";
import type { Service } from "@/types/services";

export interface ServicesProps {
  className?: string;
}

export interface ServiceCardProps {
  service: Service;
  activeCategory: ServiceCategory;
}
