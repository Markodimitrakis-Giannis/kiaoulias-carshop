export interface EyebrowProps {
  className?: string;
  /**
   * Render on an always-dark surface (e.g. navy sections). Uses the bright
   * accent instead of the light-mode-darkened accent text, which would
   * otherwise fail AA contrast against the dark background in light mode.
   */
  onDark?: boolean;
  children: React.ReactNode;
}
