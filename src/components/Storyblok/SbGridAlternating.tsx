import React from 'react';
import { storyblokEditable, StoryblokComponent } from 'gatsby-source-storyblok';
import { GridAlternating } from '../Grid';
import { PaddingType } from '../../utilities/datasource';

type SbGridAlternatingProps = {
  blok: {
    _uid: string;
    items: any[];
    startOnRight?: boolean;
    addCenterLine?: boolean;
    paddingTop?: PaddingType;
    paddingBottom?: PaddingType;
  };
};

export const SbGridAlternating = ({
  blok: {
    _uid,
    items,
    startOnRight,
    addCenterLine,
    paddingTop,
    paddingBottom,
  },
  blok,
}: SbGridAlternatingProps) => (
  <GridAlternating
    {...storyblokEditable(blok)}
    key={_uid}
    startOnRight={startOnRight}
    addCenterLine={addCenterLine}
    pt={paddingTop}
    pb={paddingBottom}
  >
    {items.map((item) => <StoryblokComponent blok={item} key={item._uid} />)}
  </GridAlternating>
);
