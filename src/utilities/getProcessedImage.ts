import { config } from './config';

/**
 *
 * @param {string} image - The Storyblok URL of the image
 * @param {string} [crop] - The dimension of the image crop (eg., "600 x 400")
 * @param {string} [focus] - The focal point of the image provided by the Storyblok Asset field (eg, "348x414:349x415")
 * @param {string} [filters] - Additional filters to apply to the image (eg., "blur(10)").
 * To add multiple filters, separate them with a colon, eg., "blur(10):grayscale()"
 * @returns {string} The processed Storyblok image URL that is masked by our asset CDN
 * @see {@link https://www.storyblok.com/docs/image-service} for more info on the Storyblok image service
 */

export const getProcessedImage = (image, crop = '', focus = '', filters = '') => {
  const { imageService } = config;

  // Adding '/m' at the end of the URL to automatically convert the image to webp if the browser supports it.
  // Suppports jpg, png (including transparent ones). Animated GIFs will retain the GIF format automatically.
  let myParams = '/m';

  // Start off the filters with a default image quality of 70% - works for webp
  let myFilters = '/filters:quality(70)';

  if (crop) {
    myParams += `/${crop}`;
    /**
     * If the crop dimensions are provide, and if a focal point is provided, add the focal point to the filters
     * If no focal point is provided, activate the "smart" face detection feature
     */
    if (focus) {
      myFilters += `:focal(${focus})`;
    } else {
      myParams += '/smart';
    }
  }

  // Add any additional filters
  if (filters) {
    myFilters += `:${filters}`;
  }

  // The URL of the processed Stoeyblok image
  const processedSbUrl = `${image}${myParams}${myFilters}`;
  const maskedUrl = processedSbUrl.replace(imageService, `${config.assetCdn}a-us/`);

  return maskedUrl;
};
