import * as React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';

const Teaser = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <h1 className="su-font-normal">{blok.headline}</h1>
  </div>
);

export default Teaser;
