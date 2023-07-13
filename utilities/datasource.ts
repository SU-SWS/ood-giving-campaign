export const accentBgColors = {
  flamingo: 'su-bg-flamingo',
  fuchsia: 'su-bg-fuchsia',
  lavender: 'su-bg-lavender',
  lime: 'su-bg-lime',
  'palo-alto': 'su-bg-palo-alto',
  periwinkle: 'su-bg-periwinkle',
  poppy: 'su-bg-poppy',
  'robins-egg': 'su-bg-robins-egg',
  sapphire: 'su-bg-sapphire',
  spirited: 'su-bg-spirited',
  'cardinal-red': 'su-bg-cardinal-red',
  'digital-red': 'su-bg-digital-red',
  'digital-red-light': 'su-bg-digital-red-light',
};
export type AccentBgColorType = keyof typeof accentBgColors;

export const accentBorderColors = {
  flamingo: 'su-border-flamingo',
  fuchsia: 'su-border-fuchsia',
  lavender: 'su-border-lavender',
  lime: 'su-border-lime',
  'palo-alto': 'su-border-palo-alto',
  periwinkle: 'su-border-periwinkle',
  poppy: 'su-border-poppy',
  'robins-egg': 'su-border-robins-egg',
  sapphire: 'su-border-sapphire',
  spirited: 'su-border-spirited',
  'cardinal-red': 'su-border-cardinal-red',
  'digital-red': 'su-border-digital-red',
  'digital-red-light': 'su-border-digital-red-light',
};
export type AccentBorderColorType = keyof typeof accentBorderColors;

// Many components have dark and light themes - these are the basic options
export const bgTextColorPairsBlackWhite = {
  black: 'su-bg-gc-black su-text-white',
  white: 'su-bg-white su-text-gc-black',
};
export type BgTextColorPairBlackWhiteType = keyof typeof bgTextColorPairsBlackWhite;

// Some components, eg, Split Posters, have additional options
export const bgTextColorPairsAdditional = {
  'black-70': 'su-bg-black-true/70 su-text-white',
  'white-80': 'su-bg-white/80 su-text-gc-black',
};

export const bgTextColorPairs = {
  ...bgTextColorPairsBlackWhite,
  ...bgTextColorPairsAdditional,
};
export type BgTextColorPairType = keyof typeof bgTextColorPairs;

export const paddingTops = {
  none: '',
  base: 'su-rs-pt-0',
  1: 'su-rs-pt-1',
  2: 'su-rs-pt-2',
  3: 'su-rs-pt-3',
  4: 'su-rs-pt-4',
  5: 'su-rs-pt-5',
  6: 'su-rs-pt-6',
  7: 'su-rs-pt-7',
  8: 'su-rs-pt-8',
  9: 'su-rs-pt-9',
  10: 'su-rs-pt-10',
};

export const paddingBottoms = {
  none: '',
  base: 'su-rs-pb-0',
  1: 'su-rs-pb-1',
  2: 'su-rs-pb-2',
  3: 'su-rs-pb-3',
  4: 'su-rs-pb-4',
  5: 'su-rs-pb-5',
  6: 'su-rs-pb-6',
  7: 'su-rs-pb-7',
  8: 'su-rs-pb-8',
  9: 'su-rs-pb-9',
  10: 'su-rs-pb-10',
};

export const paddingVerticals = {
  none: '',
  base: 'su-rs-py-0',
  1: 'su-rs-py-1',
  2: 'su-rs-py-2',
  3: 'su-rs-py-3',
  4: 'su-rs-py-4',
  5: 'su-rs-py-5',
  6: 'su-rs-py-6',
  7: 'su-rs-py-7',
  8: 'su-rs-py-8',
  9: 'su-rs-py-9',
  10: 'su-rs-py-10',
};
export type PaddingType = keyof typeof paddingTops;

// Add other margins as needed. Used for spacing between elements.
export const marginBottoms = {
  none: '',
  base: 'su-rs-mb-0',
  1: 'su-rs-mb-1',
  2: 'su-rs-mb-2',
  3: 'su-rs-mb-3',
  4: 'su-rs-mb-4',
  5: 'su-rs-mb-5',
  6: 'su-rs-mb-6',
  7: 'su-rs-mb-7',
  8: 'su-rs-mb-8',
  9: 'su-rs-mb-9',
  10: 'su-rs-mb-10',
};
export type MarginType = keyof typeof marginBottoms;