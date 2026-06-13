import { useState, useMemo } from "react";

import { ServiceCategory } from "@/constants/services";
import { SERVICES_DATA } from "@/data/services";
import type { Service } from "@/types/services";

interface UseServicesReturn {
  activeCategory: ServiceCategory;
  filteredServices: Service[];
  handleCategoryChange: (category: ServiceCategory) => void;
}

export const useServices = (): UseServicesReturn => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(ServiceCategory.ALL);

  const filteredServices = useMemo(
    () =>
      activeCategory === ServiceCategory.ALL
        ? SERVICES_DATA
        : SERVICES_DATA.filter((s) => s.category === activeCategory),
    [activeCategory],
  );

  return {
    activeCategory,
    filteredServices,
    handleCategoryChange: setActiveCategory,
  };
};
