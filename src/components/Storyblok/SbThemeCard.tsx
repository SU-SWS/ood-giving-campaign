import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { ThemeCard } from '../VerticalCard';
import { SbVerticalCardProps } from './SbVerticalCard';
import { AccentBgColorType } from '../../utilities/datasource';
import { paletteAccentColors } from '../../utilities/colorPalettePlugin';

type SbThemeCardProps = Omit<SbVerticalCardProps, 'isSmallHeading'>;

export const SbThemeCard = ({
  blok: {
    _uid,
    heading,
    headingLevel,
    body,
    // TODO: seperate alt as separate field
    image: { filename, focus, alt } = {},
    tabColor: { value } = {},
    ctaLabel,
    link,
    animation,
    delay,
  },
  blok,
  isDarkTheme,
}: SbThemeCardProps) => (
  <ThemeCard
    {...storyblokEditable(blok)}
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    alt={alt}
    textColor={isDarkTheme ? 'white' : 'black'}
    tabColor={paletteAccentColors[value] as AccentBgColorType}
    ctaLabel={ctaLabel}
    link={link}
    animation={animation}
    delay={delay}
  />
);
