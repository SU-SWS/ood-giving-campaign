import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CreateBloks } from '../CreateBloks';
import { Heading, HeadingType } from '../Typography';
import { Container, BgColorType, PaddingType } from '../Container';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: any[];
    heading?: string;
    headingLevel?: HeadingType;
    bgColor?: BgColorType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  };
};

export const SbSection = ({
  blok: {
    _uid,
    content,
    heading,
    headingLevel,
    bgColor,
    paddingTop,
    paddingBottom,
  },
  blok,
}: SbSectionProps) => (
  <Container
    {...storyblokEditable(blok)}
    key={_uid}
    bgColor={bgColor}
    pt={paddingTop}
    pb={paddingBottom}
    className="su-relative"
  >
    {heading && (
      <Heading as={headingLevel} size={9} leading="none" uppercase font="druk">
        {heading}
      </Heading>
    )}
    <CreateBloks blokSection={content} />
  </Container>
);
