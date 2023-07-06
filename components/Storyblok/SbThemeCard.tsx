import { storyblokEditable } from '@storyblok/react/rsc';
import { ThemeCard } from '../VerticalCard';
import { SbStoryCardProps } from './SbStoryCard';
import { AccentBgColorType } from '@/utilities/datasource';
import { paletteAccentColors } from '@/utilities/colorPalettePlugin';

export type SbThemeCardProps = Omit<SbStoryCardProps, 'isSmallHeading'> & {
  blok: {
    body?: string;
    ctaLabel?: string;
    ctaSrText?: string;
  };
};

export const SbThemeCard = ({
  blok: {
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    tabColor: { value } = {},
    ctaLabel,
    ctaSrText,
    link,
    animation,
    delay,
  },
  blok,
}: SbThemeCardProps) => (
  <ThemeCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value || ''] as AccentBgColorType}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
