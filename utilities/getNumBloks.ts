import { type SbBlokData } from '@storyblok/react/rsc';
/**
 * Returns the number of nested bloks when we use the CreateBloks utility.
 *
 * @param {object} section - The section to count bloks in.
 * @returns {number} The number of bloks in the section.
 */

export const getNumBloks = (section: SbBlokData[]) => {
  if (section) {
    return Object.keys(section).length;
  }

  return 0;
};
