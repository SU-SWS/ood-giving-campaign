import { storyblokEditable, type SbBlokData } from '@storyblok/react/rsc';
import { Grid, type GridGapType, type GridNumColsType } from '@/components/Grid';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { CreateBloks } from '@/components/CreateBloks';
import { type PaddingType, type MarginType } from '@/utilities/datasource';

type SbGridProps = {
  blok: {
    _uid: string;
    // Turn grid into <ul> and items into <li>
    isList?: boolean;
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
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  };
};

export const SbGrid = ({
  blok: {
    isList,
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
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbGridProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <WidthBox
      {...storyblokEditable(blok)}
      boundingWidth={boundingWidth}
      width={width}
      align={align}
      mt={marginTop}
      mb={marginBottom}
      pt={paddingTop}
      pb={paddingBottom}
    >
      <Grid
        isList={isList}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xxl={xxl}
        gap={gap}
        rtl={rtl}
      >
        <CreateBloks blokSection={items} isListItems={isList} />
      </Grid>
    </WidthBox>
  );
};
