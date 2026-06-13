import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { TranslationNamespace } from "@/i18n/types";

import { FaqItem } from "./FaqItem";
import type { FaqProps } from "./Faq.types";

const FAQ_ITEMS = ["1", "2", "3"] as const;

export const Faq = ({ className }: FaqProps) => {
  const { t } = useTranslation(TranslationNamespace.FAQ);

  return (
    <SectionWrapper
      id="faq"
      labelledBy="faq-heading"
      variant={SectionBackground.CHARCOAL}
      className={className}
    >
      <div className="flex flex-col gap-2">
        <Eyebrow>{t("eyebrow")}</Eyebrow>
        <Heading level={2} id="faq-heading">
          {t("h")}
        </Heading>
      </div>

      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((n) => (
          <FaqItem key={n} questionKey={`${n}.q`} answerKey={`${n}.a`} />
        ))}
      </div>
    </SectionWrapper>
  );
};
