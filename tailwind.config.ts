/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

const path = require('path');
const decanter = require('decanter');

// Path to custom Tailwind plugins for Directory
const dir = path.resolve(__dirname, 'tailwind/plugins');

export default {
  presets: [
    decanter,
  ],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './utilities/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    containers: require(`${dir}/theme/gc-containers.js`)(),
    // Campaign themes extending our Decanter ones
    extend: {
      colors: require(`${dir}/theme/gc-colors.js`)(),
      fontFamily: require(`${dir}/theme/gc-fontFamily.js`)(),
      screens: require(`${dir}/theme/gc-screens.js`)(),
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require(`${dir}/base/gc-base.js`)(),
    require(`${dir}/components/gc-typography.js`)(),
  ],
} satisfies Config;
