import * as React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Heading } from '../Typography';
import { RichText } from '../RichText';
import { hasRichText } from '../../utilities/hasRichText';

const Teaser = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Heading as="h2" weight="normal">{blok.headline}</Heading>
    {hasRichText(blok.description) && <RichText wysiwyg={blok.description} />}
  </div>
);

export default Teaser;
