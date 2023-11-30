import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '../Animate';
import { type HeadingType } from '../Typography';
import { StoryCard } from '../StoryCard';
import { type SbImageType, type SbLinkType } from './Storyblok.types';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

export type SbStoryCardProps = {
  blok: {
    _uid: string;
    storyPicker?: {
      content?: {
        title?: string;
        cardTitle?: string;
        dek?: string;
        topics?: string[];
        heroImage?: SbImageType;
        bgImage?: SbImageType;
        mobileImage?: SbImageType;
      },
      full_slug?: string;
    };
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    image?: SbImageType;
    tabColor?: {
      value?: PaletteAccentHexColorType;
    }
    link?: SbLinkType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbStoryCard = ({
  blok: {
    storyPicker: {
      content: {
        title = '',
        cardTitle = '',
        dek = '',
        topics = [],
        heroImage: { filename: heroFilename = '', focus: heroFocus = '' } = {},
        bgImage: { filename: bgFilename = '', focus: bgFocus = '' } = {},
        mobileImage: { filename: mobileFilename = '', focus: mobileFocus = '' } = {},
      } = {},
      full_slug,
    } = {},
    heading,
    headingLevel,
    isSmallHeading,
    image: { filename: cardImage, focus: cardFocus } = {},
    tabColor: { value } = {},
    link,
    animation,
    delay,
  },
  blok,
}: SbStoryCardProps) => (
  <StoryCard
    {...storyblokEditable(blok)}
    heading={heading || cardTitle || title}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    body={dek}
    imageSrc={cardImage || mobileFilename || heroFilename || bgFilename }
    imageFocus={cardFocus || mobileFocus || heroFocus || bgFocus}
    tabColor={paletteAccentColors[value]}
    link={link}
    href={`/${full_slug}`}
    animation={animation}
    delay={delay}
    taxonomy={topics}
  />
);
