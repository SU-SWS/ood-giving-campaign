/**
 * Returns the dimensions (width and height) of a Storyblok image.
 * @param imageSrc The URL of the Storyblok image.
 * @returns An object containing the width and height of the image, or null if the URL is invalid.
 */
export const getSbImageSize = (imageSrc: string): { width: string, height: string } | null => {
  if (imageSrc.startsWith('http')) {
    const imageSize = {
      width: imageSrc.split('/')[5].split('x')[0],
      height: imageSrc.split('/')[5].split('x')[1],
    };

    return imageSize;
  }

  return null;
};
