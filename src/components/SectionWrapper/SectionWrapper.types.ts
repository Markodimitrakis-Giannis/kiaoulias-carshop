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
  children: React.ReactNode;
}
