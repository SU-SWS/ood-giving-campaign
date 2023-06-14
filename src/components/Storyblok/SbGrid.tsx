import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Grid } from '../Grid';
import { CreateBloks } from '../CreateBloks';

type SbGridProps = {
  blok: {
    _uid: string;
    gap?: 'default' | 'card' | 'xs'
    items: any[];
  };
};

export const SbGrid = ({
  blok: {
    items,
    gap,
  },
  blok,
}: SbGridProps) => (
  <Grid md={2} xl={3} gap={gap} {...storyblokEditable(blok)} key={blok._uid}>
    <CreateBloks blokSection={items} />
  </Grid>
);
