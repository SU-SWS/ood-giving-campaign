/**
 *
 * @param {string} imageUrl - The URL of the Storyblok image.
 * @returns {object} The dimensions (width and height) of the image.
 */
export const getSbImageSize = (imageUrl) => {
  if (imageUrl.startsWith('http')) {
    const imageSize = {
      width: imageUrl.split('/')[5].split('x')[0],
      height: imageUrl.split('/')[5].split('x')[1],
    };

    return imageSize;
  }

  return null;
};
