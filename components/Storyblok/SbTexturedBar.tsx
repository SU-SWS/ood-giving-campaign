import { storyblokEditable } from '@storyblok/react/rsc';
import { TexturedBar } from '@/components/TexturedBar';
import { type SbImageType } from './Storyblok.types';

type SbTexturedBarProps = {
  blok: {
    _uid: string;
    image?: SbImageType;
  };
};

export const SbTexturedBar = ({
  blok: {
    image: { filename } = {},
  },
  blok,
}: SbTexturedBarProps) => (
  <TexturedBar
    {...storyblokEditable(blok)}
    imageSrc={filename}
  />
);
