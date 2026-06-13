import { BadgeEuro, Timer, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TranslationNamespace } from "@/i18n/types";
import { IconSize } from "@/components/Icon/Icon.types";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";

import type { TrustCardsProps } from "./TrustCards.types";

export const TrustCards = ({ className }: TrustCardsProps) => {
  const { t } = useTranslation(TranslationNamespace.HERO);

  const cards = [
    { icon: BadgeEuro, titleKey: "trust.1.t", bodyKey: "trust.1.b" },
    { icon: Timer, titleKey: "trust.2.t", bodyKey: "trust.2.b" },
    { icon: ShieldCheck, titleKey: "trust.3.t", bodyKey: "trust.3.b" },
  ] as const;

  return (
    <SectionWrapper
      id="trust"
      labelledBy="trust-heading"
      variant={SectionBackground.INK}
      className={className}
    >
      <h2 id="trust-heading" className="sr-only">
        {t("trust.h")}
      </h2>

      <div className="flex flex-col gap-6 sm:flex-row">
        {cards.map(({ icon, titleKey, bodyKey }) => (
          <Card key={titleKey} className="flex flex-1 flex-col gap-4">
            <Icon icon={icon} size={IconSize.LG} className="text-accent" />
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-xl uppercase tracking-wide text-heading">
                {t(titleKey)}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{t(bodyKey)}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
