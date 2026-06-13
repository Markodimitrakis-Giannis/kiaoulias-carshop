export enum SectionBackground {
  CHARCOAL = "charcoal",
  INK = "ink",
  NAVY = "navy",
}

export interface SectionWrapperProps {
  id?: string;
  labelledBy?: string;
  variant?: SectionBackground;
  className?: string;
  /** Opt out of the scroll-reveal entrance (e.g. always-visible above-fold content). */
  disableReveal?: boolean;
  children: React.ReactNode;
}
