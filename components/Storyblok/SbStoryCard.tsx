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
        dek?: string;
        topics?: string[];
        heroImage?: SbImageType;
        bgImage?: SbImageType;
        cardTitle?: string;
        cardTeaser?: string;
        cardImage?: SbImageType;
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
    isHorizontal?: boolean;
  };
};

export const SbStoryCard = ({
  blok: {
    storyPicker: {
      content: {
        title = '',
        dek = '',
        topics = [],
        heroImage: { filename: heroFilename = '', focus: heroFocus = '' } = {},
        bgImage: { filename: bgFilename = '', focus: bgFocus = '' } = {},
        cardTitle = '',
        cardTeaser = '',
        cardImage: { filename: storyCardFilename = '', focus: storyCardFocus = '' } = {},
      } = {},
      full_slug,
    } = {},
    heading,
    headingLevel,
    isSmallHeading,
    // This is the manual image field in Story Card that overrides any storypicker images
    image: { filename: cardImage, focus: cardFocus } = {},
    tabColor: { value } = {},
    link,
    animation,
    delay,
    isHorizontal,
  },
  blok,
}: SbStoryCardProps) => (
  <StoryCard
    {...storyblokEditable(blok)}
    heading={heading || cardTitle || title}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    body={cardTeaser || dek}
    imageSrc={cardImage || storyCardFilename || heroFilename || bgFilename }
    imageFocus={cardFocus || storyCardFocus || heroFocus || bgFocus}
    tabColor={paletteAccentColors[value]}
    link={link}
    href={`/${full_slug}`}
    animation={animation}
    delay={delay}
    taxonomy={topics}
    isHorizontal={isHorizontal}
  />
);
