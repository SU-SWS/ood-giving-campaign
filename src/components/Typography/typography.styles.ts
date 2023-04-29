export const fontFamilies = {
  sans: 'su-font-sans',
  serif: 'su-font-serif',
  druk: 'su-font-druk',
  'druk-wide': 'su-font-druk-wide',
};

export const fontWeights = {
  normal: 'su-font-normal',
  semibold: 'su-font-semibold',
  bold: 'su-font-bold',
  black: 'su-font-black', // 900, needed for Druk font
};

// Modular typography - already includes responsive font sizes
export const fontSizes = {
  base: 'su-type-0',
  1: 'su-type-1',
  2: 'su-type-2',
  3: 'su-type-3',
  4: 'su-type-4',
  5: 'su-type-5',
  6: 'su-type-6',
  7: 'su-type-7',
  8: 'su-type-8',
  9: 'su-type-9',
};

// Line heights
export const fontLeadings = {
  none: 'su-leading-none', // 1
  tight: 'su-leading-tight', // 1.1
  display: 'su-leading-display', // 1.2
  snug: 'su-leading-snug', // 1.3
  cozy: 'su-leading-cozy', // 1.4
  normal: 'su-leading-normal', // 1.5
  trim: 'su-leading-trim', // 0.75
};

export const textAligns = {
  left: 'su-text-left',
  center: 'su-text-center',
  right: 'su-text-right',
};

export const textColors = {
  default: '', // Interit from the base
  black: 'su-text-black',
  white: 'su-text-white',
  'off-white': 'su-text-black-10',
  'soft-black': 'su-text-black-90',
};

export const textVariants = {
  none: '', // Default base style
  /**
   * Decanter typography styles
   */
  big: 'su-big-paragraph',
  caption: 'su-caption',
  card: 'su-card-paragraph',
  intro: 'su-intro-text',
  subheading: 'su-subheading',
  /**
   * Campaign typography styles
   */
  overview: 'su-overview',
};

export const iconStyle = 'su-inline-block su-shrink-0 su-w-[1.2em] su-mr-04em';
