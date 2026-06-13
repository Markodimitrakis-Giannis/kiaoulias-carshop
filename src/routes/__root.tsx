import { createRootRoute, HeadContent, Outlet, ScrollRestoration } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBookCTA } from "@/components/MobileBookCTA";
import { TranslationNamespace } from "@/i18n/types";

function RootLayout() {
  const { t } = useTranslation(TranslationNamespace.COMMON);

  return (
    <>
      <HeadContent />
      <ScrollRestoration />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
      >
        {t("skip")}
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <MobileBookCTA />
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
