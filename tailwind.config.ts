/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
import decanter from 'decanter';
import tailwindContainerQueries from '@tailwindcss/container-queries';

// Base imports
import { gcBase } from './tailwind/plugins/base/gc-base';

// Theme imports
import { gcColors } from './tailwind/plugins/theme/gc-colors';
import { gcScreens } from './tailwind/plugins/theme/gc-screens';
import { gcFontFamily } from './tailwind/plugins/theme/gc-fontFamily';
import { gcContainers } from './tailwind/plugins/theme/gc-containers';
import { gcKeyframes } from './tailwind/plugins/theme/gc-keyframes';
import { gcLineHeight } from './tailwind/plugins/theme/gc-lineHeight';

// Component imports
import { gcTypography } from './tailwind/plugins/components/gc-typography';
import { gcTextShadow } from './tailwind/plugins/components/gc-text-shadow';

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
    containers: gcContainers(),
    // Momentum themes extending our Decanter ones
    extend: {
      colors: gcColors(),
      fontFamily: gcFontFamily(),
      lineHeight: gcLineHeight(),
      keyframes: gcKeyframes(),
      screens: gcScreens(),
    },
  },
  plugins: [
    tailwindContainerQueries,
    gcBase(),
    gcTypography(),
    gcTextShadow(),
  ],
} satisfies Config;
