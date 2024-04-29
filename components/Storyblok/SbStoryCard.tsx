import { storyblokEditable } from '@storyblok/react/rsc';
import { type AnimationType } from '@/components/Animate';
import { type HeadingType } from '@/components/Typography';
import { StoryCard } from '@/components/StoryCard';
import { type SbImageType, type SbLinkType } from './Storyblok.types';
import { type InitiativesType } from '@/utilities/taxonomyMaps';
import { paletteAccentColors, type PaletteAccentHexColorType } from '@/utilities/colorPalettePlugin';

export type SbStoryCardProps = {
  blok: {
    _uid: string;
    storyPicker?: {
      content?: {
        title?: string;
        dek?: string;
        initiatives?: InitiativesType[];
        heroImage?: SbImageType;
        bgImage?: SbImageType;
        cardTitle?: string;
        cardTeaser?: string;
        cardImage?: SbImageType;
        tabColor?: {
          value?: PaletteAccentHexColorType;
        }
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
    isListView?: boolean;
  };
};

export const SbStoryCard = ({
  blok: {
    storyPicker: {
      content: {
        title = '',
        dek = '',
        initiatives = [],
        heroImage: { filename: heroFilename = '', focus: heroFocus = '' } = {},
        bgImage: { filename: bgFilename = '', focus: bgFocus = '' } = {},
        cardTitle = '',
        cardTeaser = '',
        cardImage: { filename: storyCardFilename = '', focus: storyCardFocus = '' } = {},
        tabColor: { value: storyTabColorValue } = {},
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
    isListView,
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
    tabColor={paletteAccentColors[value || storyTabColorValue]}
    link={link}
    href={`/${full_slug}`}
    animation={animation}
    delay={delay}
    taxonomy={initiatives}
    isHorizontal={isHorizontal}
    isListView={isListView}
  />
);
