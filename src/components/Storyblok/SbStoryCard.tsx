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
    storyPicker?: {
      content?: {
        title?: string;
        cardTitle?: string;
        topics?: string[];
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
    _uid,
    storyPicker: {
      content: {
        title,
        cardTitle,
        topics,
      },
      full_slug,
    } = {},
    heading,
    headingLevel,
    isSmallHeading,
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
    heading={cardTitle || title || heading}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    imageSrc={filename}
    imageFocus={focus}
    tabColor={paletteAccentColors[value] as AccentBgColorType}
    link={link}
    href={`/${full_slug}`}
    animation={animation}
    delay={delay}
    taxonomy={topics}
  />
);