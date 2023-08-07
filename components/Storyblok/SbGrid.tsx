import { storyblokEditable } from '@storyblok/react/rsc';
import { Grid, type GridGapType, type GridNumColsType } from '../Grid';
import { CreateBloks } from '../CreateBloks';

type SbGridProps = {
  blok: {
    _uid: string;
    gap?: GridGapType;
    items: any[];
    /**
     * Currently we're only providing 1-4 columns in Storyblok even though GridNumColsType also supports 6 and 12
     * We could add support for 6 and 12 in the future if needed
     */
    xs?: GridNumColsType
    sm?: GridNumColsType
    md?: GridNumColsType
    lg?: GridNumColsType
    xl?: GridNumColsType
    xxl?: GridNumColsType
  };
};

export const SbGrid = ({
  blok: {
    gap,
    items,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
  },
  blok,
}: SbGridProps) => (
  <Grid
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    xxl={xxl}
    gap={gap}
    {...storyblokEditable(blok)}
  >
    <CreateBloks blokSection={items} />
  </Grid>
);
