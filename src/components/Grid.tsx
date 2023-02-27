import React from 'react';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid}>
    {blok.columns.map((columnBlok) => (
      <li key={columnBlok._uid}>
        <StoryblokComponent blok={columnBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
