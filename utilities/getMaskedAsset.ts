import { siteConfig } from '@/utilities/siteConfig';

/**
 * @param mediaSrc - The Storyblok URL of the asset
 * @returns The processed Storyblok asset URL that is masked by our asset CDN
 */

export const getMaskedAsset = (mediaSrc: string): string => {
  if (!mediaSrc) {
    return '';
  }

  const { assetCdn, imageService } = siteConfig;
  const maskedUrl = mediaSrc.replace(imageService, `${assetCdn}a-us/`);

  return maskedUrl;
};
