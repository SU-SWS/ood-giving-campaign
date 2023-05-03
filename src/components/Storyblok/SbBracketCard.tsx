import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { HeadingType } from '../Typography';
import { BracketCard } from '../BracketCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType, MarginType } from '../../utilities/datasource';

export type SbBracketCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    textOnLeft?: boolean;
    body?: string;
    image?: SbImageType;
    tabColor?: AccentBgColorType;
    ctaLabel?: string;
    link?: SbLinkType;
    spacingBottom?: MarginType;
  };
  isDarkTheme?: boolean;
};

export const SbBracketCard = ({
  blok: {
    _uid,
    heading,
    headingLevel,
    isSmallHeading,
    textOnLeft,
    body,
    // TODO: seperate alt as separate field
    image: { filename, focus, alt } = {},
    tabColor,
    ctaLabel,
    link,
    spacingBottom,
  },
  blok,
  isDarkTheme,
}: SbBracketCardProps) => (
  <BracketCard
    {...storyblokEditable(blok)}
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    isSmallHeading={isSmallHeading}
    textOnLeft={textOnLeft}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    alt={alt}
    textColor={isDarkTheme ? 'white' : 'black'}
    tabColor={tabColor}
    ctaLabel={ctaLabel}
    link={link}
    spacingBottom={spacingBottom}
  />
);
