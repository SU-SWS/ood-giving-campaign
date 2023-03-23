import React from 'react';
import { dcnb } from 'cnbuilder';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { HeroIcon } from './HeroIcon/HeroIcon';

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <h2
      className={dcnb('su-text-gc-electric-blue', blok.name.includes('2') ? 'su-bg-illuminating' : 'su-bg-spirited')}
    >
      {blok.name}
      <HeroIcon icon="external" title="(some svg title test)" className="su-inline-block su-ml-02em" />
    </h2>
    <p>{blok.description}</p>
  </div>
);

export default Feature;
