import { useLocation } from '@reach/router';

/**
 * @returns A string with a selected set of query params from the current page's URL
 */
export const useFilteredUtmParams = () => {
  const paramsToKeep = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
  ];
  // Get the query params from the current page's URL
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const filteredParams = {};

  queryParams.forEach((value, param) => {
    if (paramsToKeep.includes(param)) {
      filteredParams[param] = value;
    }
  });

  const newQueryParams = new URLSearchParams(filteredParams).toString();

  return newQueryParams;
};
