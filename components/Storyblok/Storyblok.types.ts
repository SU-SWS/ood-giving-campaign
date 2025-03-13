/* eslint-disable @typescript-eslint/no-explicit-any */
import { type SbBlokData } from '@storyblok/react/rsc';
import { type FontSizeType } from '@/components/Typography';
import { type TabItemHeadingSizeType } from '@/components/Tabs';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';

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

export type SbSliderType = {
  value?: number;
}

// Used for Annotated Image component
export type SbImageHotspotModalContentType = 'text-image' | 'fullwidth-image' | 'text' | 'component' | 'image-quote';
export type SbImageHotspotDescriptionSizeType = 'card' | 'default' | 'big';

export type SbImageHotspotType = {
  _uid: string;
  positionX: SbSliderType;
  positionY: SbSliderType;
  modalContentType: SbImageHotspotModalContentType;
  heading: string;
  ariaLabel: string;
  subhead: string;
  description: StoryblokRichtext;
  image: SbImageType;
  caption: StoryblokRichtext;
  alt: string;
  content: SbBlokData[];
  isVerticalCard: boolean;
  descriptionSize: SbImageHotspotDescriptionSizeType;
};

// Used for Image Slider component
export type SbSliderImageType = {
  _uid: string;
  image?: SbImageType;
  alt?: string;
  caption?: StoryblokRichtext;
};

// Used for SbTabGroup
export type SbTabItemType = {
  _uid: string;
  label: string;
  useLabelFor?: 'heading' | 'superhead';
  featuredMedia?: SbBlokData[];
  superhead?: string;
  heading?: string;
  body?: StoryblokRichtext;
  otherContent?: SbBlokData[];
  headingSize?: TabItemHeadingSizeType;
};
