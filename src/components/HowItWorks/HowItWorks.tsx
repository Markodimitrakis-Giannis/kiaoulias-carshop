import { CalendarCheck, Gauge, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { TranslationNamespace } from "@/i18n/types";

import type { HowItWorksProps } from "./HowItWorks.types";

interface Step {
  numKey: "1" | "2" | "3";
  icon: LucideIcon;
}

const STEPS: Step[] = [
  { numKey: "1", icon: CalendarCheck },
  { numKey: "2", icon: Gauge },
  { numKey: "3", icon: CheckCircle2 },
];

export const HowItWorks = ({ className }: HowItWorksProps) => {
  const { t } = useTranslation(TranslationNamespace.HOW_IT_WORKS);

  return (
    <SectionWrapper
      id="how-it-works"
      labelledBy="how-heading"
      variant={SectionBackground.INK}
      className={className}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <Heading level={2} id="how-heading">
          {t("h")}
        </Heading>
      </div>

      <ol
        className="grid gap-8 md:grid-cols-3 md:gap-6"
        aria-label={t("h")}
      >
        {STEPS.map(({ numKey, icon: Icon }) => (
          <li key={numKey} className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              {/* Accent number badge */}
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-accent/40 bg-accent-subtle font-mono text-sm font-bold text-accent"
                aria-hidden="true"
              >
                {t(`${numKey}.num`)}
              </span>
              <Icon
                size={22}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl uppercase tracking-wide text-heading">
                {t(`${numKey}.title`)}
              </h3>
              <p className="text-base leading-relaxed text-muted">
                {t(`${numKey}.body`)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
};
