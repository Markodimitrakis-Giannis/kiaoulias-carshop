import { createFileRoute } from "@tanstack/react-router";

import i18n from "@/i18n";
import { absoluteAssetUrl, siteUrl } from "@/lib/asset";

export const Route = createFileRoute("/contact")({

  head: () => {
    const t = (key: string) => i18n.t(key, { ns: "contact" });
    return {
      meta: [
        { title: t("meta.title") || "Contact | Kiaoulias Tyres" },
        {
          name: "description",
          content:
            t("meta.description") ||
            "Book a tyre or alignment appointment at Kiaoulias Tyres in central Heraklion. Call us or use the online booking form.",
        },
        { property: "og:title", content: t("meta.title") || "Contact | Kiaoulias Tyres" },
        {
          property: "og:description",
          content:
            t("meta.description") ||
            "Book a tyre or alignment appointment at Kiaoulias Tyres in central Heraklion. Call us or use the online booking form.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: siteUrl("/contact") },
        { property: "og:image", content: absoluteAssetUrl("/photos/workshop-1280.webp") },
      ],
      links: [{ rel: "canonical", href: siteUrl("/contact") }],
    };
  },
});
