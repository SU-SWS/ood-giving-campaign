import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Grid } from '../Grid';
import { CreateBloks } from '../CreateBloks';

type SbGridProps = {
  blok: {
    _uid: string;
    columns: any[];
  };
};

export const SbGrid = ({ blok: { columns }, blok }: SbGridProps) => (
  <Grid md={2} xl={3} gap="card" {...storyblokEditable(blok)} key={blok._uid}>
    <CreateBloks blokSection={columns} />
  </Grid>
);
