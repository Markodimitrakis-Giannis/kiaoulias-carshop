import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { TranslationNamespace } from "@/i18n/types";

import type { WhyUsProps } from "./WhyUs.types";

const WHY_ITEMS = ["1", "2", "3", "4"] as const;

export const WhyUs = ({ className }: WhyUsProps) => {
  const { t } = useTranslation(TranslationNamespace.SERVICES);

  return (
    <SectionWrapper
      id="why"
      labelledBy="why-heading"
      variant={SectionBackground.INK}
      className={className}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{t("why.eyebrow")}</Eyebrow>
        <Heading level={2} id="why-heading">
          {t("why.h")}
        </Heading>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {WHY_ITEMS.map((n) => (
          <div key={n} className="flex gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle">
              <Check size={14} className="text-accent" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-display text-lg uppercase tracking-wide text-heading">
                {t(`why.${n}.t`)}
              </p>
              <p className="text-sm leading-relaxed text-muted">{t(`why.${n}.b`)}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
