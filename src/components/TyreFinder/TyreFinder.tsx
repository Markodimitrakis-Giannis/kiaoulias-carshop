import { useTranslation } from "react-i18next";

import { Button, ButtonVariant, ButtonSize } from "@/components/Button";
import { FormField } from "@/components/FormField";
import { Select } from "@/components/Select";
import { TranslationNamespace } from "@/i18n/types";
import { cn } from "@/lib/cn";

import type { TyreFinderProps } from "./TyreFinder.types";
import { useTyreFinder } from "./useTyreFinder";
import "./TyreFinder.styles.css";

export const TyreFinder = ({ className }: TyreFinderProps) => {
  const { t } = useTranslation(TranslationNamespace.HERO);
  const {
    width,
    profile,
    rim,
    setWidth,
    setProfile,
    setRim,
    widthOptions,
    profileOptions,
    rimOptions,
    size,
    canSubmit,
    handleSubmit,
  } = useTyreFinder();

  return (
    <div
      className={cn(
        "tyre-finder relative flex flex-col gap-5 overflow-hidden rounded-lg border border-border p-6",
        className,
      )}
    >
      <p className="font-mono text-sm uppercase tracking-wider text-accent-text">
        {t("finder.label")}
      </p>

      {/* Live spec readout — decorative summary of the selects below */}
      <p aria-hidden="true" className="font-mono text-3xl text-heading">
        <span className={cn(width ? "text-heading" : "text-faint")}>{width || "—"}</span>
        <span className="text-faint"> / </span>
        <span className={cn(profile ? "text-heading" : "text-faint")}>{profile || "—"}</span>
        <span className="text-faint"> </span>
        <span className={cn(rim ? "text-accent-text" : "text-faint")}>R{rim || "—"}</span>
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <FormField label={t("finder.width")} htmlFor="finder-width" className="flex-1">
          <Select
            id="finder-width"
            placeholder="—"
            value={width}
            onChange={setWidth}
            options={widthOptions}
          />
        </FormField>
        <FormField label={t("finder.profile")} htmlFor="finder-profile" className="flex-1">
          <Select
            id="finder-profile"
            placeholder="—"
            value={profile}
            onChange={setProfile}
            options={profileOptions}
          />
        </FormField>
        <FormField label={t("finder.rim")} htmlFor="finder-rim" className="flex-1">
          <Select
            id="finder-rim"
            placeholder="—"
            value={rim}
            onChange={setRim}
            options={rimOptions}
          />
        </FormField>
      </div>

      <Button
        variant={ButtonVariant.PRIMARY}
        size={ButtonSize.LG}
        onClick={handleSubmit}
        disabled={!canSubmit}
        className="w-full justify-center"
        aria-label={size ? `${t("finder.submit")} — ${size}` : t("finder.submit")}
      >
        {t("finder.submit")}
      </Button>

      <p className="text-sm text-muted">{t("finder.hint")}</p>
    </div>
  );
};
