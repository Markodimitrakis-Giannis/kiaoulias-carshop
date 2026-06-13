import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { useTranslation } from "react-i18next";

import { ServiceCategory } from "@/constants/services";
import { TranslationNamespace } from "@/i18n/types";
import { LoadingState } from "@/types/common";

import type { BookingFormValues } from "./BookingForm.types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYRE_SIZE_KEY = "tyreSize";

const readAndClearTyreSize = (): string => {
  const size = sessionStorage.getItem(TYRE_SIZE_KEY) ?? "";
  if (size) sessionStorage.removeItem(TYRE_SIZE_KEY);
  return size;
};

export const useBookingForm = () => {
  const { t: tValidation } = useTranslation(TranslationNamespace.VALIDATION);
  const [submitState, setSubmitState] = useState<LoadingState>(LoadingState.IDLE);

  // Pre-fill vehicle field with tyre size passed from the hero finder
  const prefillSize = readAndClearTyreSize();

  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      vehicle: prefillSize ? `Tyre size: ${prefillSize}` : "",
      service: "" as BookingFormValues["service"],
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
