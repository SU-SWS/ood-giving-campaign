import React from 'react';
import { dcnb } from 'cnbuilder';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { Heading, Paragraph } from '../Typography';

/**
 * TODO: This is a temporary component that comes with the starter and will be deleted.
 */
const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <Heading
      as="h3"
      className={dcnb('su-text-periwinkle', blok.name.includes('2') ? 'su-bg-lavender' : 'su-bg-flamingo')}
    >
      {blok.name}
      <HeroIcon icon="external" title="(some svg title test)" className="su-inline-block su-ml-02em" />
    </Heading>
    <Paragraph noMargin className="su-underline">{blok.description}</Paragraph>
  </div>
);

export default Feature;
