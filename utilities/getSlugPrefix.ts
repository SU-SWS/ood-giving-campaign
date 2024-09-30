export const getSlugPrefix = (): string => {
  const prefix = process.env.STORYBLOK_SLUG_PREFIX || 'momentum/'; // The ending slash is important.
  // Ensure there is a trailing slash.
  if (prefix.slice(-1) !== '/') {
    return prefix + '/';
  }
  return prefix;
};
