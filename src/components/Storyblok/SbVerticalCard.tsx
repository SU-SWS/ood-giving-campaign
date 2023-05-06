import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { AnimationType } from '../Animate';
import { HeadingType } from '../Typography';
import { VerticalCard } from '../VerticalCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType } from '../../utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '../../utilities/colorPalettePlugin';

export type SbVerticalCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    body?: string;
    image?: SbImageType;
    tabColor?: {
      value?: PaletteAccentColorType;
    }
    ctaLabel?: string;
    link?: SbLinkType;
    animation?: AnimationType;
    delay?: number;
  };
  isDarkTheme?: boolean;
};

export const SbVerticalCard = ({
  blok: {
    _uid,
    heading,
    headingLevel,
    isSmallHeading,
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
}: SbVerticalCardProps) => (
  <VerticalCard
    {...storyblokEditable(blok)}
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
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
