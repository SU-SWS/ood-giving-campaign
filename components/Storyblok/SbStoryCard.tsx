import { storyblokEditable } from '@storyblok/react/rsc';
import { AnimationType } from '../Animate';
import { HeadingType } from '../Typography';
import { StoryCard } from '../VerticalCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType } from '@/utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';

export type SbStoryCardProps = {
  blok: {
    _uid: string;
    storyPicker?: {
      content?: {
        title?: string;
        cardTitle?: string;
        topics?: string[];
        heroImage?: SbImageType;
        mobileImage?: SbImageType;
      },
      full_slug?: string;
    };
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    image?: SbImageType;
    tabColor?: {
      value?: PaletteAccentColorType;
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
        topics = [],
        heroImage: { filename: heroFilename = '', focus: heroFocus = '' } = {},
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
    imageSrc={cardImage || mobileFilename || heroFilename}
    imageFocus={cardFocus || mobileFocus || heroFocus}
    tabColor={paletteAccentColors[value || ''] as AccentBgColorType}
    link={link}
    href={`/${full_slug}`}
    animation={animation}
    delay={delay}
    taxonomy={topics}
  />
);
