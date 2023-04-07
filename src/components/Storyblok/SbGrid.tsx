import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Grid } from '../Grid';
import { CreateBloks } from '../CreateBloks';

export const SbGrid = ({ blok: { columns }, blok }) => (
  <Grid md={2} xl={3} gap {...storyblokEditable(blok)} key={blok._uid}>
    <CreateBloks blokSection={columns} />
  </Grid>
);
