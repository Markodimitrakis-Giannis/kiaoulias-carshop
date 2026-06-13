import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";

import { ServiceCategory } from "@/constants/services";
import { TYRE_SIZE_EVENT, TYRE_SIZE_STORAGE_KEY } from "@/constants/ui";
import { TranslationNamespace } from "@/i18n/types";
import { LoadingState } from "@/types/common";

import type { BookingFormValues } from "./BookingForm.types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readStoredSize = (): string => {
  try {
    return sessionStorage.getItem(TYRE_SIZE_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
};

export const useBookingForm = () => {
  const { t: tValidation } = useTranslation(TranslationNamespace.VALIDATION);
  const [submitState, setSubmitState] = useState<LoadingState>(LoadingState.IDLE);

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
      setSubmitState(LoadingState.LOADING);

      // Simulate async submission — no backend
      await new Promise<void>((resolve) => setTimeout(resolve, 800));

      // Validate cross-field: at least phone or email required
      const hasPhone = value.phone.trim().length > 0;
      const hasEmail = value.email.trim().length > 0;

      if (!hasPhone && !hasEmail) {
        setSubmitState(LoadingState.ERROR);
        return;
      }

      setSubmitState(LoadingState.SUCCESS);
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
    setSubmitState(LoadingState.IDLE);
  };

  // Derive whether the contact cross-field error should show (post-submit, no phone+email)
  const isContactError =
    submitState === LoadingState.ERROR;

  return {
    form,
    submitState,
    isContactError,
    contactErrorMsg: tValidation("err.contact"),
    validateName,
    validatePhone,
    validateEmail,
    validateConsent,
    handleReset,
    SERVICE_OPTIONS: [
      { value: ServiceCategory.TYRES, labelKey: "form.opt1" },
      { value: ServiceCategory.ALIGNMENT, labelKey: "form.opt2" },
      { value: ServiceCategory.BALANCING, labelKey: "form.opt3" },
      { value: ServiceCategory.OTHER, labelKey: "form.opt4" },
    ] as const,
  };
};
