/**
 * Normalizes a search param from a string or string array to a comma separated string
 */
export default function normalizeSearchParam(searchParam: string | string[]) {
  if (typeof searchParam === 'string') {
    return searchParam;
  }

  return searchParam.join(',');
}