// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

// eslint-disable-next-line import/no-import-module-exports
import path from 'path';

exports.createPages = async ({ actions }) => {
  actions.createSlice({
    id: 'global-footer',
    component: path.resolve('./src/components/GlobalFooter/GlobalFooter.tsx'),
  });
};
