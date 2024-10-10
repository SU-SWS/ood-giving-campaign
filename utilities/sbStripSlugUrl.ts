import { getSlugPrefix } from './getSlugPrefix';
import { type SbLinkType } from '@/components/Storyblok/Storyblok.types';

// Remove the slug prefix from a SbLinkType.
export const sbStripSlugLinkType = (link:SbLinkType): SbLinkType => {
  const prefix = getSlugPrefix();
  let linkCopy = { ...link };
  const {
    linkType,
    cached_url,
  } = link;

  if (linkType == 'story' && cached_url) {
    linkCopy.cached_url.replace(prefix, '');
  }

  return linkCopy;
};

// Remove the slug prefix from a URL string.
export const sbStripSlugURL = (url:string): string => {
  const prefix = getSlugPrefix();

  // If not a string return the original URL.
  if (typeof url !== 'string') {
    return url;
  }

  // If the URL is empty, return an empty string.
  if (!url) {
    return '';
  }

  const parts = url.split('/');
  if (parts[0] === prefix) {
    parts.shift();
  }
  return parts.join('/');
};
