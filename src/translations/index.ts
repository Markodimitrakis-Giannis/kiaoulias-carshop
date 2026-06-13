import enAbout from "./en/about.json";
import enBookingForm from "./en/bookingForm.json";
import enCommon from "./en/common.json";
import enContact from "./en/contact.json";
import enFaq from "./en/faq.json";
import enGallery from "./en/gallery.json";
import enHero from "./en/hero.json";
import enHowItWorks from "./en/howItWorks.json";
import enPrivacy from "./en/privacy.json";
import enServices from "./en/services.json";
import enTestimonials from "./en/testimonials.json";
import enValidation from "./en/validation.json";

// English ships in the initial bundle. Greek is loaded on demand (see
// loadGreekResources) so English-first visitors never download it.
export const enResources = {
  common: enCommon,
  hero: enHero,
  services: enServices,
  about: enAbout,
  contact: enContact,
  bookingForm: enBookingForm,
  validation: enValidation,
  privacy: enPrivacy,
  faq: enFaq,
  gallery: enGallery,
  howItWorks: enHowItWorks,
  testimonials: enTestimonials,
} as const;

export type TranslationResources = typeof enResources;

export const loadGreekResources = async (): Promise<TranslationResources> => {
  const [
    common,
    hero,
    services,
    about,
    contact,
    bookingForm,
    validation,
    privacy,
    faq,
    gallery,
    howItWorks,
    testimonials,
  ] = await Promise.all([
    import("./el/common.json"),
    import("./el/hero.json"),
    import("./el/services.json"),
    import("./el/about.json"),
    import("./el/contact.json"),
    import("./el/bookingForm.json"),
    import("./el/validation.json"),
    import("./el/privacy.json"),
    import("./el/faq.json"),
    import("./el/gallery.json"),
    import("./el/howItWorks.json"),
    import("./el/testimonials.json"),
  ]);

  return {
    common: common.default,
    hero: hero.default,
    services: services.default,
    about: about.default,
    contact: contact.default,
    bookingForm: bookingForm.default,
    validation: validation.default,
    privacy: privacy.default,
    faq: faq.default,
    gallery: gallery.default,
    howItWorks: howItWorks.default,
    testimonials: testimonials.default,
  };
};
