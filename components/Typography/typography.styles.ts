export const fontFamilies = {
  sans: 'font-sans',
  serif: 'font-serif',
  druk: 'font-druk',
  'druk-wide': 'font-druk-wide',
};

export const fontWeights = {
  normal: 'font-normal',
  semibold: 'font-semibold',
  bold: 'font-bold',
  black: 'font-black', // 900, needed for Druk font
};

// Modular typography - already includes responsive font sizes
export const fontSizes = {
  base: 'type-0',
  1: 'type-1',
  2: 'type-2',
  3: 'type-3',
  4: 'type-4',
  5: 'type-5',
  6: 'type-6',
  7: 'type-7',
  8: 'type-8',
  9: 'type-9',
  f4: 'fluid-type-4',
  f5: 'fluid-type-5',
  f6: 'fluid-type-6',
  f7: 'fluid-type-7',
  f8: 'fluid-type-8',
  f9: 'fluid-type-9',
  // Curated font size for homepage hero slightly smaller than f9
  splash: 'gc-splash',
  hero: 'hero',
};

// Line heights
export const fontLeadings = {
  none: 'leading-none', // 1
  tight: 'leading-tight', // 1.1
  display: 'leading-display', // 1.2
  snug: 'leading-snug', // 1.3
  cozy: 'leading-cozy', // 1.4
  normal: 'leading', // 1.5
  trim: 'leading-trim', // 0.75
  druk: 'leading-druk', // 0.9
};

export const textAligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const textColors = {
  default: '', // Interit from the base
  black: 'text-gc-black',
  'cool-grey': 'text-cool-grey',
  white: 'text-white',
  'black-20': 'text-black-20',
  'black-40': 'text-black-40',
  'black-60': 'text-black-60',
  'black-70': 'text-black-70',
  'black-80': 'text-black-80',
  'black-90': 'text-black-90',
};

export const textVariants = {
  none: '', // Default base style
  /**
   * Decanter typography styles
   */
  big: 'big-paragraph',
  subheading: 'subheading',
  /**
   * Momentum typography styles
   * (-gc ones are Decanter styles with Momentum modifications)
   */
  caption: 'gc-caption',
  card: 'gc-card',
  changemaker: 'text-18 sm:text-15 3xl:text-16 leading-snug 3xl:leading-cozy',
  changemakerHorizontal: 'leading-cozy 2xl:leading text-18 sm:text-15 md:text-17 xl:text-19 2xl:text-22',
  intro: 'gc-intro-text',
  /**
   * Momentum only styles
   * No gc- prefix because no Decanter equivalent
   */
  overview: 'overview',
};

export const iconStyle = 'inline-block shrink-0 w-09em ml-03em -mt-01em';
