export type HeadingLevel = 1 | 2 | 3 | 4;

export interface HeadingProps {
  level: HeadingLevel;
  id?: string;
  className?: string;
  children: React.ReactNode;
}
