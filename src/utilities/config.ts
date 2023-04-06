/**
 * Global variables for this project.
 */
export const config = {
  basePath:
    process.env.GATSBY_BASE_PATH === undefined
      ? '/'
      : process.env.GATSBY_BASE_PATH,
  assetCdn: process.env.GATSBY_ASSET_CDN ?? 'https://assets.stanford.edu/',
};
