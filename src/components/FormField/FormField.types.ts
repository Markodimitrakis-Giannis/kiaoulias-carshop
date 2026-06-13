export enum FormFieldTone {
  /** Default tone — label/hint use page-background text colors. */
  DEFAULT = "default",
  /** For fields on always-dark surfaces (e.g. navy bands) — light text. */
  INVERSE = "inverse",
}

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  tone?: FormFieldTone;
  className?: string;
  children: React.ReactNode;
}
