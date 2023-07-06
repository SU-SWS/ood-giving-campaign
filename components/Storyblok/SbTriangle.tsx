import { storyblokEditable } from '@storyblok/react/rsc';
import { Triangle } from '../Shapes';

type SbTriangleProps = {
  blok: {
    _uid: string;
  };
};

export const SbTriangle = ({
  blok,
}: SbTriangleProps) => (
  <Triangle {...storyblokEditable(blok)} />
);
