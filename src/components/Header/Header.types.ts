export interface UseHeaderReturn {
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
}

export interface ThemeToggleProps {
  theme: "dark" | "light";
  onToggle: () => void;
}

export interface LanguageToggleProps {
  currentLanguage: string;
  onChangeLanguage: (lang: string) => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
