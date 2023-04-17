import { useFilteredUtmParams } from './useFilteredUtmParams';

export const useAddUtmParams = (url: string) => {
  const utmParamsToKeep = useFilteredUtmParams();

  if (utmParamsToKeep) {
    return `${url}${url.includes('?') ? '&' : '?'}${utmParamsToKeep}`;
  }

  return url;
};
