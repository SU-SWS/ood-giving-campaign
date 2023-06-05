import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CreateBloks } from '../CreateBloks';
import { Heading, HeadingType, Text } from '../Typography';
import { Container, BgColorType } from '../Container';
import { PaddingType } from '../../utilities/datasource';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: any[];
    superhead?: string;
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
    superhead,
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
    className="su-relative su-overflow-hidden"
  >
    {superhead && (
      <Text size={2} leading="tight" font="serif">
        {superhead}
      </Text>
    )}
    {heading && (
      <Heading
        as={headingLevel}
        size="splash"
        leading="none"
        uppercase
        font="druk"
        className="su-whitespace-pre-line su-max-w-1000"
      >
        {heading}
      </Heading>
    )}
    <CreateBloks blokSection={content} isDarkTheme={bgColor === 'black'} />
  </Container>
);
