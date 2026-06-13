import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";
import { useScrollSlider } from "@/hooks/useScrollSlider";

import type { GalleryImage, GalleryProps } from "./Gallery.types";
import "./Gallery.styles.css";

const GALLERY_IMAGES: GalleryImage[] = [
  { altKey: "hero", src: "/photos/hero-1280.webp", srcSet: "/photos/hero-640.webp 640w, /photos/hero-1280.webp 1280w" },
  { altKey: "tyreFitting", src: "/photos/tyre-fitting-960.webp", srcSet: "/photos/tyre-fitting-480.webp 480w, /photos/tyre-fitting-960.webp 960w" },
  { altKey: "balancing", src: "/photos/balancing-960.webp", srcSet: "/photos/balancing-480.webp 480w, /photos/balancing-960.webp 960w" },
  { altKey: "alignment", src: "/photos/alignment-1280.webp", srcSet: "/photos/alignment-640.webp 640w, /photos/alignment-1280.webp 1280w" },
  { altKey: "alignPortrait", src: "/photos/align-portrait-960.webp", srcSet: "/photos/align-portrait-480.webp 480w, /photos/align-portrait-960.webp 960w" },
  { altKey: "alignLow", src: "/photos/align-low-1280.webp", srcSet: "/photos/align-low-640.webp 640w, /photos/align-low-1280.webp 1280w" },
  { altKey: "torque", src: "/photos/torque-1280.webp", srcSet: "/photos/torque-640.webp 640w, /photos/torque-1280.webp 1280w" },
  { altKey: "workshop", src: "/photos/workshop-1280.webp", srcSet: "/photos/workshop-640.webp 640w, /photos/workshop-1280.webp 1280w, /photos/workshop-1600.webp 1600w" },
];

export const Gallery = ({ className }: GalleryProps) => {
  const { t } = useTranslation(TranslationNamespace.GALLERY);
  const { trackRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext } =
    useScrollSlider<HTMLUListElement>();

  const arrowClass =
    "grid h-11 w-11 place-items-center rounded-md border border-border-strong text-body transition-colors duration-200 hover:border-accent hover:text-accent-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <SectionWrapper
      id="gallery"
      labelledBy="gallery-heading"
      variant={SectionBackground.INK}
      className={className}
    >
      {/* Header row: copy left, slider controls right (controls hidden on touch — swipe instead) */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <Heading level={2} id="gallery-heading">
            {t("h")}
          </Heading>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={scrollPrev} disabled={!canScrollPrev} aria-label={t("prev")} className={arrowClass}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" onClick={scrollNext} disabled={!canScrollNext} aria-label={t("next")} className={arrowClass}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Scroll-snap slider — swipe on touch, arrow keys when focused, buttons on desktop */}
      <ul
        ref={trackRef}
        aria-label={t("regionLabel")}
        className="gallery-track flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 md:gap-4"
      >
        {GALLERY_IMAGES.map((img) => (
          <li key={img.altKey} className={cn("w-4/5 shrink-0 snap-start sm:w-1/2 lg:w-1/3")}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 80vw"
                loading="lazy"
                alt={t(`images.${img.altKey}`)}
                className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.03]"
              />
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};
