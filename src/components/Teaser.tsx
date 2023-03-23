import * as React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Heading } from './Typography';

const Teaser = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Heading as="h2" weight="normal">{blok.headline}</Heading>
  </div>
);

export default Teaser;
