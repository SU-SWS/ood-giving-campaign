import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { HeadingType } from '../Typography';
import { VerticalCard, TextColorType } from '../VerticalCard';
import { SbImageType } from './Storyblok.types';

type SbVerticalCardProps = {
  blok: {
    _uid: string;
    heading?: string;
    headingLevel?: HeadingType;
    body?: string;
    image?: SbImageType;
    textColor?: TextColorType;
  };
};

const SbVerticalCard = ({
  blok: {
    _uid,
    heading,
    headingLevel,
    body,
    // TODO: seperate alt as separate field
    image: { filename, focus, alt } = {},
    textColor,
  },
  blok,
}: SbVerticalCardProps) => (
  <VerticalCard
    {...storyblokEditable(blok)}
    key={_uid}
    heading={heading}
    headingLevel={headingLevel}
    body={body}
    imageSrc={filename}
    imageFocus={focus}
    alt={alt}
    textColor={textColor}
  />
);

export default SbVerticalCard;
