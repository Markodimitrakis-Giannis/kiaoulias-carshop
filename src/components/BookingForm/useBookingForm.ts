import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";

import { ServiceCategory } from "@/constants/services";
import {
  BOOKING_FORM_NAME,
  BOOKING_HONEYPOT_FIELD,
  TYRE_SIZE_EVENT,
  TYRE_SIZE_STORAGE_KEY,
} from "@/constants/ui";
import { TranslationNamespace } from "@/i18n/types";
import { LoadingState } from "@/types/common";

import type { BookingFormValues } from "./BookingForm.types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_OPTIONS = [
  { value: ServiceCategory.TYRES, labelKey: "form.opt1" },
  { value: ServiceCategory.ALIGNMENT, labelKey: "form.opt2" },
  { value: ServiceCategory.BALANCING, labelKey: "form.opt3" },
  { value: ServiceCategory.OTHER, labelKey: "form.opt4" },
] as const;

/** Empty optional fields arrive as "-" so the notification email stays scannable. */
const orDash = (value: string): string => value.trim() || "-";

/** Netlify Forms expects url-encoded bodies posted to the page path. */
const submitToNetlify = async (
  values: BookingFormValues,
  botField: string,
  serviceLabel: string,
): Promise<boolean> => {
  // Vite's dev server has no Netlify endpoint — pretend success locally.
  if (import.meta.env.DEV) {
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    return true;
  }
  const body = new URLSearchParams({
    "form-name": BOOKING_FORM_NAME,
    [BOOKING_HONEYPOT_FIELD]: botField,
    name: values.name,
    phone: orDash(values.phone),
    email: orDash(values.email),
    vehicle: orDash(values.vehicle),
    tyreSize: orDash(values.tyreSize),
    service: serviceLabel,
  }).toString();
  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    return res.ok;
  } catch {
    return false;
  }
};

const readStoredSize = (): string => {
  try {
    return sessionStorage.getItem(TYRE_SIZE_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
};

export const useBookingForm = () => {
  const { t: tValidation } = useTranslation(TranslationNamespace.VALIDATION);
  const { t: tBooking } = useTranslation(TranslationNamespace.BOOKING_FORM);
  const [submitState, setSubmitState] = useState<LoadingState>(LoadingState.IDLE);
  const [errorKind, setErrorKind] = useState<"contact" | "submit" | null>(null);
  const botFieldRef = useRef<HTMLInputElement>(null);

  const initialSize = readStoredSize();

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicle: "",
      tyreSize: initialSize,
      service: (initialSize
        ? ServiceCategory.TYRES
        : "") as BookingFormValues["service"],
      consent: false,
    },
    onSubmit: async ({ value }) => {
      // Validate cross-field: at least phone or email required
      const hasPhone = value.phone.trim().length > 0;
      const hasEmail = value.email.trim().length > 0;

      if (!hasPhone && !hasEmail) {
        setErrorKind("contact");
        setSubmitState(LoadingState.ERROR);
        return;
      }

      setErrorKind(null);
      setSubmitState(LoadingState.LOADING);

      const serviceOption = SERVICE_OPTIONS.find((option) => option.value === value.service);
      const serviceLabel = serviceOption ? tBooking(serviceOption.labelKey) : "-";
      const sent = await submitToNetlify(value, botFieldRef.current?.value ?? "", serviceLabel);
      if (sent) {
        setSubmitState(LoadingState.SUCCESS);
      } else {
        setErrorKind("submit");
        setSubmitState(LoadingState.ERROR);
      }
    },
  });

  // The hero tyre finder lives on the same page, so the booking form is already
  // mounted when a size is chosen — update live via the window event.
  useEffect(() => {
    const handler = (event: Event) => {
      const size = (event as CustomEvent<string>).detail;
      if (!size) return;
      form.setFieldValue("tyreSize", size);
      form.setFieldValue("service", ServiceCategory.TYRES);
    };
    window.addEventListener(TYRE_SIZE_EVENT, handler);
    return () => window.removeEventListener(TYRE_SIZE_EVENT, handler);
  }, [form]);

  const validateName = ({ value }: { value: string }) => {
    if (!value.trim()) return tValidation("err.name");
    return undefined;
  };

  const validatePhone = () => {
    // Phone alone is only required if email is also blank — checked cross-field in onSubmit
    return undefined;
  };

  const validateEmail = ({ value }: { value: string }) => {
    if (value.trim() && !EMAIL_RE.test(value.trim())) {
      return tValidation("err.email");
    }
    return undefined;
  };

  const validateConsent = ({ value }: { value: boolean }) => {
    if (!value) return tValidation("err.consent");
    return undefined;
  };

  const handleReset = () => {
    form.reset();
    setErrorKind(null);
    setSubmitState(LoadingState.IDLE);
  };

  // Derive whether the contact cross-field error should show (post-submit, no phone+email)
  const isContactError = submitState === LoadingState.ERROR && errorKind === "contact";
  const isSubmitError = submitState === LoadingState.ERROR && errorKind === "submit";

  return {
    form,
    submitState,
    isContactError,
    isSubmitError,
    contactErrorMsg: tValidation("err.contact"),
    submitErrorMsg: tValidation("err.submit"),
    botFieldRef,
    validateName,
    validatePhone,
    validateEmail,
    validateConsent,
    handleReset,
    SERVICE_OPTIONS,
  };
};
