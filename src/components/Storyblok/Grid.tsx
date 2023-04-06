import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Grid } from '../Grid';
import { CreateBloks } from '../CreateBloks';

/**
 * TODO: This is a temporary component that comes with the starter and the file will be renamed.
 */
const SbGrid = ({ blok: { columns }, blok }) => (
  <Grid {...storyblokEditable(blok)} key={blok._uid} gap className="md:su-grid-cols-3">
    <CreateBloks blokSection={columns} />
  </Grid>
);

export default SbGrid;
