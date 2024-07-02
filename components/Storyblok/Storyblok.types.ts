import { type FontSizeType } from '@/components/Typography';

/**
 * Generic types for Storyblok fields
 */
export type SbImageType = {
  id?: number,
  alt?: string,
  name?: string,
  focus?: string,
  title?: string,
  filename?: string,
  copyright?: string,
  fieldType?: string,
};

export type SbLinkType =
  | {
    cached_url?: string;
    linktype?: string;
    [k: string]: any;
  }
  | {
    id?: string;
    cached_url?: string;
    linktype?: 'story';
    [k: string]: any;
  }
  | {
    url?: string;
    cached_url?: string;
    linktype?: 'asset' | 'url';
    [k: string]: any;
  }
  | {
    email?: string;
    linktype?: 'email';
    [k: string]: any;
  };

/**
 * Reusable types for custom Storyblok components
 */
export type SbDateLocationProps = {
  _uid: string;
  date?: string;
  location?: string;
};

export type SbNavItemProps = {
  _uid: string;
  label?: string;
  link?: SbLinkType;
};

export type SbTypographyProps = {
  _uid: string;
  text?: string;
  font?: 'druk' | 'serif';
  size?: FontSizeType;
  italic?: boolean;
};

// Used for SbSection background color animation
export type SbColorStopProps = {
  _uid: string;
  stop: string;
  hexColor: string;
};

// Storyblok Native Color Picker
export type SbColorPickerType = {
  color?: string;
};
