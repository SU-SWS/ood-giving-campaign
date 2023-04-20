import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { HeadingType } from '../Typography';
import { VerticalCard, TextColorType } from '../VerticalCard';
import { SbImageType, SbLinkType } from './Storyblok.types';
import { AccentBgColorType } from '../../utilities/datasource';

type SbVerticalCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    isSmallHeading?: boolean;
    body?: string;
    image?: SbImageType;
    textColor?: TextColorType;
    tabColor?: AccentBgColorType;
    link?: SbLinkType;
  };
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
    textColor,
    tabColor,
    link,
  },
  blok,
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
    textColor={textColor}
    tabColor={tabColor}
    link={link}
  />
);
