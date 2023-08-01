import { StoryblokComponent } from '@storyblok/react/rsc';
import { SbBlokData } from '@storyblok/react/rsc';

type CreateBloksProps = {
  blokSection: SbBlokData[];
  [k: string]: any;
};

export const CreateBloks = ({ blokSection, ...props }: CreateBloksProps) => {
  if (blokSection) {
    return blokSection.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} {...props} />);
  }

  // Return null if no content provided.
  return null;
};
