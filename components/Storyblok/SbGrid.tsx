import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { Grid, type GridGapType, type GridNumColsType } from '../Grid';
import { WidthBox, type WidthType } from '../WidthBox';
import { CreateBloks } from '../CreateBloks';

type SbGridProps = {
  blok: {
    _uid: string;
    gap?: GridGapType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    align?: 'left' | 'center';
    rtl?: boolean;
    items: SbBlokData[];
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
    boundingWidth = 'full',
    width,
    align,
    rtl,
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
  <WidthBox
    {...storyblokEditable(blok)}
    boundingWidth={boundingWidth}
    width={width}
    align={align}
  >
    <Grid
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      gap={gap}
      rtl={rtl}
    >
      <CreateBloks blokSection={items} />
    </Grid>
  </WidthBox>
);
