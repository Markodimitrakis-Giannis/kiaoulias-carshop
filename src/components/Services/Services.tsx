import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { ServiceCategory } from "@/constants/services";
import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

import { ServiceCard } from "./ServiceCard";
import type { ServicesProps } from "./Services.types";
import { useServices } from "./useServices";

const FILTER_TABS: { label: string; value: ServiceCategory }[] = [
  { label: "filter.all", value: ServiceCategory.ALL },
  { label: "filter.tyres", value: ServiceCategory.TYRES },
  { label: "filter.align", value: ServiceCategory.ALIGNMENT },
  { label: "filter.more", value: ServiceCategory.OTHER },
];

export const Services = ({ className }: ServicesProps) => {
  const { t } = useTranslation(TranslationNamespace.SERVICES);
  const { activeCategory, filteredServices, handleCategoryChange } = useServices();

  return (
    <SectionWrapper
      id="services"
      labelledBy="services-heading"
      variant={SectionBackground.CHARCOAL}
      className={className}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <Heading level={2} id="services-heading">
          {t("h")}
        </Heading>
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label={t("h")}>
        {FILTER_TABS.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleCategoryChange(value)}
            className={cn(
              "rounded-pill border px-4 py-2 font-display text-sm uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              activeCategory === value
                ? "border-accent bg-accent text-on-accent"
                : "border-border text-muted hover:border-border-strong hover:text-body",
            )}
            aria-pressed={activeCategory === value}
          >
            {t(label)}
          </button>
        ))}
      </div>

      {/* Service cards grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} activeCategory={activeCategory} />
        ))}
      </div>
    </SectionWrapper>
  );
};
