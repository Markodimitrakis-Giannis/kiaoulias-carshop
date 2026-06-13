import { Minus, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

import { TranslationNamespace } from "@/i18n/types";

import type { FaqItemProps } from "./Faq.types";

export const FaqItem = ({ questionKey, answerKey }: FaqItemProps) => {
  const { t } = useTranslation(TranslationNamespace.FAQ);

  return (
    <details className="group rounded-md border border-border bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-display text-lg uppercase tracking-wide text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        <span>{t(questionKey)}</span>
        <span className="shrink-0 text-accent" aria-hidden="true">
          <Plus size={18} className="block group-open:hidden" />
          <Minus size={18} className="hidden group-open:block" />
        </span>
      </summary>
      <div className="px-6 pb-5 pt-2">
        <p className="text-sm leading-relaxed text-muted">{t(answerKey)}</p>
      </div>
    </details>
  );
};
