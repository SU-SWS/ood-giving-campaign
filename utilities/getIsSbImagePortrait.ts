import { getSbImageSize } from './getSbImageSize';

/**
 * Returns a boolean indicating whether the image is in portrait orientation.
 * @param imageSrc The URL of the Storyblok image.
 * @returns a boolean indicating whether the image is in portrait orientation.
 */
export const getIsSbImagePortrait = (imageSrc: string) => {
  const { width, height } = getSbImageSize(imageSrc);
  return height > width;
};
