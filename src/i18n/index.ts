import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { enResources, loadGreekResources } from "@/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: enResources },
    fallbackLng: "en",
    supportedLngs: ["en", "el"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "lang",
    },
  });

// Keep <html lang> in sync with the active language. Required so the browser
// applies Greek casing rules (CSS uppercase drops the tonos on capitals) and
// for correct a11y/SEO language signalling.
const syncHtmlLang = (language: string): void => {
  document.documentElement.lang = language.split("-")[0];
};
syncHtmlLang(i18n.language ?? "en");
i18n.on("languageChanged", syncHtmlLang);

/**
 * Loads a language's resources if they aren't bundled yet. English is bundled
 * eagerly; Greek is fetched on demand. Call before switching to a language.
 */
export const ensureLanguageLoaded = async (language: string): Promise<void> => {
  const lng = language.split("-")[0];
  if (lng === "el" && !i18n.hasResourceBundle("el", "common")) {
    const greek = await loadGreekResources();
    Object.entries(greek).forEach(([namespace, resource]) => {
      i18n.addResourceBundle("el", namespace, resource, true, true);
    });
  }
};

// If the detected/persisted language is Greek, load it so the UI doesn't fall
// back to English on first load.
void ensureLanguageLoaded(i18n.language ?? "en");

export default i18n;
