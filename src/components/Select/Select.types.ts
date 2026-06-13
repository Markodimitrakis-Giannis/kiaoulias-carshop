export enum SelectTone {
  DEFAULT = "default",
  INVERSE = "inverse",
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** id applied to the trigger button — pair with the field <label htmlFor>. */
  id: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  /** Called when focus leaves the control (tab away / click outside) — marks the field touched. */
  onBlur?: () => void;
  /** Shown on the trigger when nothing is selected, and as the listbox aria-label. */
  placeholder: string;
  tone?: SelectTone;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}
