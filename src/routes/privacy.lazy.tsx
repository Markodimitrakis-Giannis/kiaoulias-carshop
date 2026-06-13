import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import { AppRoute } from "@/constants/routes";
import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

function PrivacyPage() {
  const { t } = useTranslation(TranslationNamespace.PRIVACY);
  const { t: tCommon } = useTranslation(TranslationNamespace.COMMON);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <nav aria-label={tCommon("nav.label")} className="mb-8">
        <Link
          to={AppRoute.HOME}

          className={cn(
            "font-display text-sm uppercase tracking-wider text-muted",
            "transition-colors duration-200 hover:text-accent-text",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm",
          )}
        >
          ← {t("back")}
        </Link>
      </nav>

      <article>
        <header className="flex flex-col gap-4">
          <h1 className="font-display text-4xl uppercase tracking-wide text-heading">
            {t("h")}
          </h1>
          <p className="text-sm text-muted italic">{t("updated")}</p>
        </header>

        <div className="mt-8 flex flex-col gap-10 text-body">
          <p className="text-base leading-relaxed">{t("intro")}</p>

          <section aria-labelledby="privacy-collect">
            <h2
              id="privacy-collect"
              className="mb-3 font-display text-xl uppercase tracking-wider text-heading"
            >
              {t("collect.h")}
            </h2>
            <p className="text-base leading-relaxed">{t("collect.b")}</p>
          </section>

          <section aria-labelledby="privacy-use">
            <h2
              id="privacy-use"
              className="mb-3 font-display text-xl uppercase tracking-wider text-heading"
            >
              {t("use.h")}
            </h2>
            <p className="text-base leading-relaxed">{t("use.b")}</p>
          </section>

          <section aria-labelledby="privacy-store">
            <h2
              id="privacy-store"
              className="mb-3 font-display text-xl uppercase tracking-wider text-heading"
            >
              {t("store.h")}
            </h2>
            <p className="text-base leading-relaxed">{t("store.b")}</p>
          </section>

          <section aria-labelledby="privacy-rights">
            <h2
              id="privacy-rights"
              className="mb-3 font-display text-xl uppercase tracking-wider text-heading"
            >
              {t("rights.h")}
            </h2>
            <p className="text-base leading-relaxed">{t("rights.b")}</p>
          </section>

          <section aria-labelledby="privacy-contact">
            <h2
              id="privacy-contact"
              className="mb-3 font-display text-xl uppercase tracking-wider text-heading"
            >
              {t("contact.h")}
            </h2>
            <p className="text-base leading-relaxed">{t("contact.b")}</p>
          </section>
        </div>
      </article>
    </div>
  );
}

export const Route = createLazyFileRoute("/privacy")({
  component: PrivacyPage,
});
