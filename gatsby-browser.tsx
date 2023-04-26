import React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import { LazyMotion, domAnimation } from 'framer-motion';
// Note: For some reason this set up doesn't like the file name global.css so we use index.css instead
import './src/styles/index.css';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => (
  <LazyMotion features={domAnimation} strict>{element}</LazyMotion>
);
