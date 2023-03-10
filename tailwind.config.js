/** @type {import('tailwindcss').Config} */

const path = require('path');

// Path to custom Tailwind plugins for Directory
const dir = path.resolve(__dirname, 'src/tailwind/plugins');

module.exports = {
  presets: [
    require('decanter'),
  ],
  content: [
    /**
     * We use GraphQL Typegen which generates a file at src/gatsby-types.d.ts
     * Writing out the subdirectories in src/ here to prevent an infinite loop
     * https://www.gatsbyjs.com/docs/how-to/styling/tailwind-css/#installing-and-configuring-tailwind
     */
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // Campaign themes extending our Decanter ones
    extend: {
      colors: require(`${dir}/theme/gc-colors.js`)(),
    },
  },
  plugins: [
    require(`${dir}/base/gc-base.js`)(),
    require(`${dir}/components/gc-typography.js`)(),
  ],
};
