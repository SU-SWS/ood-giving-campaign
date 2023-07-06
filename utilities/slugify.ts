/**
 * @param str Any string
 * @returns A string that can be used as a URL slug or id
 */
export const slugify = (str = '') => str
  .toLowerCase()
  .replace(/[^a-z0-9]+/i, '-')
  .replace(/^-/, '')
  .replace(/-$/, '');
