import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { AnimationType } from '../Animate';
import { HeadingType } from '../Typography';
import { VerticalCard } from '../VerticalCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType } from '../../utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '../../utilities/colorPalettePlugin';

export type SbStoryCardProps = {
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
    link?: SbLinkType;
    animation?: AnimationType;
    delay?: number;
  };
};

export const SbStoryCard = ({
  blok: {
    _uid,
    heading,
    headingLevel,
    isSmallHeading,
    body,
    image: { filename, focus } = {},
    tabColor: { value } = {},
    link,
    animation,
    delay,
  },
  blok,
}: SbStoryCardProps) => (
  <VerticalCard
    {...storyblokEditable(blok)}
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value] as AccentBgColorType}
    link={link}
    animation={animation}
    delay={delay}
  />
);
