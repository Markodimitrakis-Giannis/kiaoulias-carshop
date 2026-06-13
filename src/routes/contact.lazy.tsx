import { createLazyFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

import { BookingForm } from "@/components/BookingForm";
import { Eyebrow } from "@/components/Eyebrow";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { ADDRESS, PHONE_NUMBER, PHONE_TEL } from "@/constants/content";
import { TranslationNamespace } from "@/i18n/types";
import { assetPath, assetSrcSet } from "@/lib/asset";


function ContactPage() {
  const { t } = useTranslation(TranslationNamespace.CONTACT);
  const { t: tGallery } = useTranslation(TranslationNamespace.GALLERY);

  return (
    <>
      {/* Contact details section */}
      <SectionWrapper
        id="contact"
        labelledBy="contact-heading"
        variant={SectionBackground.INK}
      >
        <div className="flex flex-col gap-3">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <Heading level={1} id="contact-heading">
            {t("h")}
          </Heading>
          <p className="max-w-2xl text-base text-body">{t("intro")}</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-2/5">
            <address className="not-italic">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-body">
                  <Phone size={18} className="shrink-0 text-accent" aria-hidden="true" />
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="font-mono text-base transition-colors duration-200 hover:text-accent-text focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {PHONE_NUMBER}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-body">
                  <MapPin size={18} className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-base">{ADDRESS}</span>
                </li>
                <li className="flex items-center gap-3 text-body">
                  <Clock size={18} className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-base">{t("details.hoursValue")}</span>
                </li>
              </ul>
            </address>

            {/* Keyless Google Maps embed pinned to the shop address */}
            <iframe
              title={t("map.label", { address: ADDRESS })}
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full rounded-md border border-border"
            />
          </div>

          {/* Workshop photo as "find us" visual */}
          <div className="overflow-hidden rounded-lg lg:w-3/5">
            <figure className="flex flex-col gap-2">
              <img
                src={assetPath("/photos/workshop-1280.webp")}
                srcSet={assetSrcSet([
                  ["/photos/workshop-640.webp", "640w"],
                  ["/photos/workshop-1280.webp", "1280w"],
                  ["/photos/workshop-1600.webp", "1600w"],
                ])}
                sizes="(min-width:1024px) 60vw, 100vw"
                loading="lazy"
                alt={tGallery("contact.workshop")}
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <figcaption className="text-sm text-muted">{ADDRESS}</figcaption>
            </figure>
          </div>
        </div>
      </SectionWrapper>

      {/* Booking form */}
      <BookingForm />
    </>
  );
}

export const Route = createLazyFileRoute("/contact")({
  component: ContactPage,
});
