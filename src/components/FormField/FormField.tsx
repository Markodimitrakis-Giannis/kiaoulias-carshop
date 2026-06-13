import { cn } from "@/lib/cn";

import { FormFieldTone } from "./FormField.types";
import type { FormFieldProps } from "./FormField.types";

export const FormField = ({
  label,
  htmlFor,
  error,
  hint,
  tone = FormFieldTone.DEFAULT,
  className,
  children,
}: FormFieldProps) => {
  const errorId = error ? `${htmlFor}-error` : undefined;
  const hintId = hint ? `${htmlFor}-hint` : undefined;
  const isInverse = tone === FormFieldTone.INVERSE;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-medium",
          isInverse ? "text-white" : "text-body",
        )}
      >
        {label}
      </label>

      {hint && (
        <p id={hintId} className={cn("text-sm", isInverse ? "text-white/70" : "text-muted")}>
          {hint}
        </p>
      )}

      {children}

      {error && (
        <p
          id={errorId}
          role="alert"
          className={cn("text-sm", isInverse ? "text-danger-on-dark" : "text-danger")}
        >
          {error}
        </p>
      )}
    </div>
  );
};
