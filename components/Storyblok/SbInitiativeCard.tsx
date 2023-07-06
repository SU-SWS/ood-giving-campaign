import React from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import { AnimationType } from '../Animate';
import { InitiativeCard } from '../InitiativeCard';
import { HeadingType } from '../Typography';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType } from '@/utilities/datasource';
import { paletteAccentColors, PaletteAccentColorType } from '@/utilities/colorPalettePlugin';

type SbInitiativeCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
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

export const SbInitiativeCard = ({
  blok: {
    heading,
    headingLevel,
    body,
    image: { filename, focus } = {},
    tabColor: { value } = {},
    link,
    animation,
    delay,
  },
  blok,
}: SbInitiativeCardProps) => (
  <InitiativeCard
    {...storyblokEditable(blok)}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value || ''] as AccentBgColorType}
    link={link}
    animation={animation}
    delay={delay}
  />
);
