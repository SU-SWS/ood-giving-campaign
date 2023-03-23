import React from 'react';
import { StoryblokComponent, storyblokEditable } from 'gatsby-source-storyblok';

const Grid = ({ blok }) => (
  <ul {...storyblokEditable(blok)} key={blok._uid} className="su-grid su-grid-gap md:su-grid-cols-3">
    {blok.columns.map((columnBlok) => (
      <li key={columnBlok._uid}>
        <StoryblokComponent blok={columnBlok} />
      </li>
    ))}
  </ul>
);

export default Grid;
