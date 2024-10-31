export const getSlugPrefix = (): string => {
  const prefix = process.env.STORYBLOK_SLUG_PREFIX || 'momentum';
  // Ensure there is no trailing slash.
  if (prefix.slice(-1) === '/') {
    return prefix.slice(-1);
  }
  return prefix;
};
