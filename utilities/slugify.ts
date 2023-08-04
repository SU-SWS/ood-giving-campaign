/**
 * @param {string} str Any string
 * @returns A string that can be used as a URL slug or id
 */
export const slugify = (str: string = '') => str
  .toLowerCase()
  .replace(/[^a-z0-9]+/i, '-')
  .replace(/^-/, '')
  .replace(/-$/, '');
