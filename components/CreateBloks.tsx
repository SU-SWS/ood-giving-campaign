import React from 'react';
import { StoryblokComponent } from '@storyblok/react/rsc';

export const CreateBloks = ({ blokSection, ...props }) => {
  if (blokSection) {
    return blokSection.map((blok) => <StoryblokComponent blok={blok} key={blok._uid} {...props} />);
  }

  // Return null if no content provided.
  return null;
};
