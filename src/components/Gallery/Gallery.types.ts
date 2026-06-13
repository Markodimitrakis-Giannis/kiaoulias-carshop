export interface GalleryImage {
  /** Translation key within gallery.images.* */
  altKey: string;
  /** src value for the img element (largest width) */
  src: string;
  /** Full srcset string */
  srcSet: string;
}

export interface GalleryProps {
  className?: string;
}

