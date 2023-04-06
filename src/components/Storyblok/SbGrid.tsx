import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Grid } from '../Grid';
import { CreateBloks } from '../CreateBloks';

const SbGrid = ({ blok: { columns }, blok }) => (
  <Grid {...storyblokEditable(blok)} key={blok._uid} gap className="md:su-grid-cols-3">
    <CreateBloks blokSection={columns} />
  </Grid>
);

export default SbGrid;
