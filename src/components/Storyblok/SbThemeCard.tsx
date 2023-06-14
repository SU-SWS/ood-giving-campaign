import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { ThemeCard } from '../VerticalCard';
import { SbVerticalCardProps } from './SbVerticalCard';
import { AccentBgColorType } from '../../utilities/datasource';
import { paletteAccentColors } from '../../utilities/colorPalettePlugin';

export type SbThemeCardProps = Omit<SbVerticalCardProps, 'isSmallHeading'>;

export const SbThemeCard = ({
  blok: {
    _uid,
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
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value] as AccentBgColorType}
    ctaLabel={ctaLabel}
    ctaSrText={ctaSrText}
    link={link}
    animation={animation}
    delay={delay}
  />
);
