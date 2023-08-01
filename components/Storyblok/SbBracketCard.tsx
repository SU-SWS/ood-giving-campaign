import { storyblokEditable } from '@storyblok/react/rsc';
import { HeadingType } from '../Typography';
import { BracketCard } from '../BracketCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType, MarginType } from '@/utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';

export type SbBracketCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    textOnLeft?: boolean;
    body?: string;
    image?: SbImageType;
    tabColor?: {
      value?: PaletteAccentColorType;
    }
    ctaLabel?: string;
    link?: SbLinkType;
    spacingBottom?: MarginType;
  };
  isDarkTheme?: boolean;
};

export const SbBracketCard = ({
  blok: {
    heading,
    headingLevel,
    isSmallHeading,
    textOnLeft,
    body,
    image: { filename, focus } = {},
    tabColor: { value } = {},
    ctaLabel,
    link,
    spacingBottom,
  },
  blok,
  isDarkTheme,
}: SbBracketCardProps) => (
  <BracketCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    textOnLeft={textOnLeft}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    textColor={isDarkTheme ? 'white' : 'black'}
    tabColor={paletteAccentColors[value] as AccentBgColorType}
    ctaLabel={ctaLabel}
    link={link}
    spacingBottom={spacingBottom}
  />
);
