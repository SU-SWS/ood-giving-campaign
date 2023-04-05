import React from 'react';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';
import { Heading, HeadingType } from '../Typography';
import { Section } from '../Section';

type SbSectionProps = {
  blok: {
    _uid: string;
    content: any[];
    heading: string;
    headingLevel: HeadingType;
  };
};

const SbSection = ({
  blok: {
    _uid,
    content,
    heading,
    headingLevel,
  },
  blok,
}: SbSectionProps) => (
  <Section {...storyblokEditable(blok)} key={_uid}>
    {heading && <Heading as={headingLevel} size={6}>{heading}</Heading>}
    {content.map((contentBlok) => (
      <StoryblokComponent blok={contentBlok} key={contentBlok._uid} />
    ))}
  </Section>
);

export default SbSection;
