import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} key={blok._uid}>
    <h2 className="su-text-gc-electric-blue su-bg-spirited">{blok.name}</h2>
    <p>{blok.description}</p>
  </div>
);

export default Feature;
