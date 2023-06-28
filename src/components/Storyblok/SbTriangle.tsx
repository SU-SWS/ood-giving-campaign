import React from 'react';
import { storyblokEditable } from 'gatsby-source-storyblok';
import { Triangle } from '../Shapes';

type SbTriangleProps = {
  blok: {
    _uid: string;
  };
};

export const SbTriangle = ({
  blok: {
    _uid,
  },
  blok,
}: SbTriangleProps) => (
  <Triangle {...storyblokEditable(blok)} key={_uid} />
);
