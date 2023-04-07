import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { CreateBloks } from '../CreateBloks';
import { Heading, HeadingType } from '../Typography';
import { Section, BgColorType } from '../Section';

type SbSectionProps = {
  blok: {
    _uid: string;
    content?: any[];
    heading?: string;
    headingLevel?: HeadingType;
    bgColor?: BgColorType;
  };
};

export const SbSection = ({
  blok: {
    _uid,
    content,
    heading,
    headingLevel,
    bgColor,
  },
  blok,
}: SbSectionProps) => (
  <Section {...storyblokEditable(blok)} key={_uid} bgColor={bgColor}>
    {heading && <Heading as={headingLevel} size={9} uppercase font="druk">{heading}</Heading>}
    <CreateBloks blokSection={content} />
  </Section>
);
