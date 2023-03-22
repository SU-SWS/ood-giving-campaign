import React from 'react';
import { dcnb } from 'cnbuilder';
import { storyblokEditable } from 'gatsby-source-storyblok';

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <h2
      className={dcnb('su-text-gc-electric-blue', blok.name.includes('2') ? 'su-bg-illuminating' : 'su-bg-spirited')}
    >
      {blok.name}
    </h2>
    <p>{blok.description}</p>
  </div>
);

export default Feature;
