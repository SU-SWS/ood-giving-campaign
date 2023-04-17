import { useFilteredUtmParams } from './useFilteredUtmParams';

/**
 *
 * @param url The URL to which UTM parameters should be added.
 * @returns A new URL string with the specified UTM parameters appended to it.
 */
export const useAddUtmParams = (url: string) => {
  const utmParamsToKeep = useFilteredUtmParams();

  if (utmParamsToKeep) {
    return `${url}${url.includes('?') ? '&' : '?'}${utmParamsToKeep}`;
  }

  return url;
};
