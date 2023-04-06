import * as React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Heading } from '../Typography';
import { RichText } from '../RichText';
import { hasRichText } from '../../utilities/hasRichText';

/**
 * TODO: This is a temporary component that comes with the starter and will be deleted.
 */
const Teaser = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <Heading as="h2" size={5} font="druk-wide">{blok.headline}</Heading>
    {hasRichText(blok.description) && <RichText wysiwyg={blok.description} />}
  </div>
);

export default Teaser;
