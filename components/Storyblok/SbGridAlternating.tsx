import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { GridAlternating, GridWidthType } from '../Grid';
import { PaddingType } from '@/utilities/datasource';

type SbGridAlternatingProps = {
  blok: {
    _uid: string;
    items: any[];
    startOnRight?: boolean;
    addCenterLine?: boolean;
    width?: GridWidthType;
    spacing?: PaddingType;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  },
  isDarkTheme: boolean;
};

export const SbGridAlternating = ({
  blok: {
    items,
    startOnRight,
    addCenterLine,
    width,
    spacing,
    paddingTop,
    paddingBottom,
  },
  isDarkTheme,
  blok,
}: SbGridAlternatingProps) => (
  <GridAlternating
    {...storyblokEditable(blok)}
    startOnRight={startOnRight}
    addCenterLine={addCenterLine}
    width={width}
    spacing={spacing}
    pt={paddingTop}
    pb={paddingBottom}
  >
    {items.map((item) => <StoryblokComponent blok={item} key={item._uid} isDarkTheme={isDarkTheme} />)}
  </GridAlternating>
);
