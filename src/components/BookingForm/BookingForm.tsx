import { Clock, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

import { Button, ButtonVariant, ButtonSize } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { FormField, FormFieldTone } from "@/components/FormField";
import { Heading } from "@/components/Heading";
import { SectionWrapper } from "@/components/SectionWrapper";
import { SectionBackground } from "@/components/SectionWrapper/SectionWrapper.types";
import { AppRoute } from "@/constants/routes";
import { PHONE_NUMBER, PHONE_TEL } from "@/constants/content";
import { TranslationNamespace } from "@/i18n/types";
import { LoadingState } from "@/types/common";

import type { BookingFormProps, BookingFormValues } from "./BookingForm.types";
import { useBookingForm } from "./useBookingForm";

export const BookingForm = ({ className }: BookingFormProps) => {
  const { t } = useTranslation(TranslationNamespace.BOOKING_FORM);
  const {
    form,
    submitState,
    isContactError,
    contactErrorMsg,
    validateName,
    validateEmail,
    validateConsent,
    handleReset,
    SERVICE_OPTIONS,
  } = useBookingForm();

  const isSuccess = submitState === LoadingState.SUCCESS;
  const isLoading = submitState === LoadingState.LOADING;

  return (
    <SectionWrapper
      id="book"
      labelledBy="booking-heading"
      variant={SectionBackground.NAVY}
      className={className}
    >
      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Left column: copy + contact details */}
        <div className="flex flex-col gap-6 lg:w-2/5">
          <div className="flex flex-col gap-2">
            <Eyebrow onDark>{t("eyebrow")}</Eyebrow>
            <Heading level={2} id="booking-heading" className="text-white">
              {t("h")}
            </Heading>
            <p className="text-base text-white/70">{t("sub")}</p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Phone size={18} className="text-accent" aria-hidden="true" />
              <span className="font-mono text-base">{PHONE_NUMBER}</span>
            </a>

            <div className="flex items-center gap-3 text-white/80">
              <MapPin size={18} className="text-accent" aria-hidden="true" />
              <span className="text-base">{t("addr")}</span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <Clock size={18} className="text-accent" aria-hidden="true" />
              <span className="text-base">{t("hours")}</span>
            </div>
          </div>
        </div>

        {/* Right column: booking form */}
        <div className="flex flex-1 flex-col gap-6">
          {isSuccess ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-col gap-4 rounded-md border border-success/30 bg-success/10 p-6"
            >
              <p className="font-display text-lg uppercase tracking-wide text-success">
                {t("form.success")}
              </p>
              <Button
                variant={ButtonVariant.SECONDARY}
                size={ButtonSize.SM}
                onClick={handleReset}
                className="self-start border-white/30 text-white hover:border-white hover:text-white"
              >
                {t("form.submit")}
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <form.Field
                name="name"
                validators={{ onBlur: validateName, onSubmit: validateName }}
              >
                {(field) => (
                  <FormField
                    label={t("form.name")}
                    htmlFor="booking-name"
                    tone={FormFieldTone.INVERSE}
                    error={field.state.meta.errors[0] ?? undefined}
                  >
                    <input
                      id="booking-name"
                      type="text"
                      autoComplete="name"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      aria-invalid={field.state.meta.errors.length > 0}
                      aria-describedby={
                        field.state.meta.errors.length > 0 ? "booking-name-error" : undefined
                      }
                      className="rounded-sm border border-border bg-surface-raised px-4 py-3 text-base text-body placeholder:text-faint focus-visible:border-accent focus-visible:outline-none"
                    />
                  </FormField>
                )}
              </form.Field>

              {/* Phone + contact error */}
              <form.Field name="phone">
                {(field) => (
                  <FormField
                    label={t("form.phone")}
                    htmlFor="booking-phone"
                    tone={FormFieldTone.INVERSE}
                    hint={t("form.hint")}
                    error={isContactError ? contactErrorMsg : undefined}
                  >
                    <input
                      id="booking-phone"
                      type="tel"
                      autoComplete="tel"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      aria-invalid={isContactError}
                      aria-describedby={
                        isContactError ? "booking-phone-error" : "booking-phone-hint"
                      }
                      className="rounded-sm border border-border bg-surface-raised px-4 py-3 text-base text-body placeholder:text-faint focus-visible:border-accent focus-visible:outline-none"
                    />
                  </FormField>
                )}
              </form.Field>

              {/* Email */}
              <form.Field
                name="email"
                validators={{ onBlur: validateEmail, onChange: validateEmail }}
              >
                {(field) => (
                  <FormField
                    label={t("form.email")}
                    htmlFor="booking-email"
                    tone={FormFieldTone.INVERSE}
                    error={field.state.meta.errors[0] ?? undefined}
                  >
                    <input
                      id="booking-email"
                      type="email"
                      autoComplete="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      aria-invalid={
                        field.state.meta.errors.length > 0 || isContactError
                      }
                      aria-describedby={
                        field.state.meta.errors.length > 0 ? "booking-email-error" : undefined
                      }
                      className="rounded-sm border border-border bg-surface-raised px-4 py-3 text-base text-body placeholder:text-faint focus-visible:border-accent focus-visible:outline-none"
                    />
                  </FormField>
                )}
              </form.Field>

              {/* Vehicle (optional) */}
              <form.Field name="vehicle">
                {(field) => (
                  <FormField
                    label={t("form.car")}
                    htmlFor="booking-vehicle"
                    tone={FormFieldTone.INVERSE}
                  >
                    <input
                      id="booking-vehicle"
                      type="text"
                      autoComplete="off"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={field.handleBlur}
                      className="rounded-sm border border-border bg-surface-raised px-4 py-3 text-base text-body placeholder:text-faint focus-visible:border-accent focus-visible:outline-none"
                    />
                  </FormField>
                )}
              </form.Field>

              {/* Service select */}
              <form.Field name="service">
                {(field) => (
                  <FormField
                    label={t("form.service")}
                    htmlFor="booking-service"
                    tone={FormFieldTone.INVERSE}
                  >
                    <select
                      id="booking-service"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(e.target.value as BookingFormValues["service"])
                      }
                      onBlur={field.handleBlur}
                      className="rounded-sm border border-border bg-surface-raised px-4 py-3 text-base text-body focus-visible:border-accent focus-visible:outline-none"
                    >
                      <option value="" />
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {t(opt.labelKey)}
                        </option>
                      ))}
                    </select>
                  </FormField>
                )}
              </form.Field>

              {/* Consent checkbox */}
              <form.Field
                name="consent"
                validators={{ onChange: validateConsent, onSubmit: validateConsent }}
              >
                {(field) => (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <input
                        id="booking-consent"
                        type="checkbox"
                        checked={field.state.value}
                        onChange={(e) => field.handleChange(e.target.checked)}
                        onBlur={field.handleBlur}
                        aria-invalid={field.state.meta.errors.length > 0}
                        aria-describedby={
                          field.state.meta.errors.length > 0
                            ? "booking-consent-error"
                            : undefined
                        }
                        className="size-5 rounded-sm border-border accent-accent"
                      />
                      <label
                        htmlFor="booking-consent"
                        className="text-sm text-white/80"
                      >
                        {t("form.consent1")}{" "}
                        <Link
                          to={AppRoute.PRIVACY}
                          className="text-accent-hover underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {t("form.consentLink")}
                        </Link>
                      </label>
                    </div>
                    {field.state.meta.errors.length > 0 && (
                      <p
                        id="booking-consent-error"
                        role="alert"
                        className="text-sm text-danger-on-dark"
                      >
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              {/* Submit */}
              <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
                {([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    variant={ButtonVariant.PRIMARY}
                    size={ButtonSize.LG}
                    isLoading={isLoading || isSubmitting}
                    disabled={!canSubmit}
                    className="self-start"
                  >
                    {t("form.submit")}
                  </Button>
                )}
              </form.Subscribe>

              {/* Contact cross-field status region */}
              <div aria-live="polite" className="sr-only">
                {isContactError ? contactErrorMsg : ""}
              </div>
            </form>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
