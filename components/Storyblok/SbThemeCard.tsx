import { storyblokEditable } from '@storyblok/react/rsc';
import { ThemeCard } from '../VerticalCard';
import { type SbStoryCardProps } from './SbStoryCard';
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
    tabColor={paletteAccentColors[value]}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
