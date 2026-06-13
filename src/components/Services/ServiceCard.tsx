import { useTranslation } from "react-i18next";

import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { IconSize } from "@/components/Icon/Icon.types";
import { TranslationNamespace } from "@/i18n/types";

import type { ServiceCardProps } from "./Services.types";

/** Portrait photos have 480/960 widths; landscape photos have 640/1280 widths */
const PORTRAIT_BASES = new Set(["tyre-fitting", "balancing"]);

interface ImgAttrs {
  src: string;
  srcSet: string;
}

function buildSrcSet(base: string): ImgAttrs {
  if (PORTRAIT_BASES.has(base)) {
    return {
      src: `/photos/${base}-960.webp`,
      srcSet: `/photos/${base}-480.webp 480w, /photos/${base}-960.webp 960w`,
    };
  }
  return {
    src: `/photos/${base}-1280.webp`,
    srcSet: `/photos/${base}-640.webp 640w, /photos/${base}-1280.webp 1280w`,
  };
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { t } = useTranslation(TranslationNamespace.SERVICES);
  const { t: tGallery } = useTranslation(TranslationNamespace.GALLERY);
  const key = service.translationKey;
  const imgAttrs = service.image != null ? buildSrcSet(service.image) : null;

  return (
    <Card interactive className="flex flex-col gap-0 p-0 overflow-hidden">
      {imgAttrs != null && (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imgAttrs.src}
            srcSet={imgAttrs.srcSet}
            sizes="(min-width:1024px) 360px, (min-width:640px) 45vw, 90vw"
            loading="lazy"
            alt={tGallery(`services.${service.id}`)}
            className="h-full w-full object-cover transition-transform duration-300 motion-safe:hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6">
        {/* Icon accent: small and secondary when photo is present, larger when not */}
        <Icon
          icon={service.icon}
          size={imgAttrs != null ? IconSize.SM : IconSize.LG}
          className="text-accent"
        />

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl uppercase tracking-wide text-heading">
            {t(`${key}.t`)}
          </h3>
          <p className="text-sm leading-relaxed text-muted">{t(`${key}.b`)}</p>
        </div>

        <p className="font-mono text-sm text-accent-text">{t(`${key}.p`)}</p>
      </div>
    </Card>
  );
};
