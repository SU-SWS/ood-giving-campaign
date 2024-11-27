import { StoryblokComponent, type SbBlokData } from '@storyblok/react/rsc';

type CreateBloksProps = {
  blokSection: SbBlokData[];
  isListItems?: boolean;
  [k: string]: unknown;
};

export const CreateBloks = ({ blokSection, isListItems, ...props }: CreateBloksProps) => {
  if (blokSection && isListItems) {
    return blokSection.map((blok) => <li key={blok._uid}><StoryblokComponent blok={blok} {...props} /></li>);
  } else if (blokSection) {
    return blokSection.map((blok) => <StoryblokComponent key={blok._uid} blok={blok} {...props} />);
  }

  // Return null if no content provided.
  return null;
};
