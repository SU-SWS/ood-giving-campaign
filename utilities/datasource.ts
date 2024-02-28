export const accentBgColors = {
  flamingo: 'bg-flamingo',
  fuchsia: 'bg-fuchsia',
  lavender: 'bg-lavender',
  lime: 'bg-lime',
  'palo-alto': 'bg-palo-alto',
  periwinkle: 'bg-periwinkle',
  poppy: 'bg-poppy',
  'robins-egg': 'bg-robins-egg',
  sapphire: 'bg-sapphire',
  spirited: 'bg-spirited',
  white: 'bg-white',
  'cardinal-red': 'bg-cardinal-red',
  'digital-red': 'bg-digital-red',
  'digital-red-light': 'bg-digital-red-light',
  'digital-red-xlight': 'bg-digital-red-xlight',
  'black-50': 'bg-black-true/50',
};
export type AccentColorType = keyof typeof accentBgColors;

export const accentBorderColors = {
  flamingo: 'border-flamingo',
  fuchsia: 'border-fuchsia',
  lavender: 'border-lavender',
  lime: 'border-lime',
  'palo-alto': 'border-palo-alto',
  periwinkle: 'border-periwinkle',
  poppy: 'border-poppy',
  'robins-egg': 'border-robins-egg',
  sapphire: 'border-sapphire',
  spirited: 'border-spirited',
  white: 'border-white',
  'cardinal-red': 'border-cardinal-red',
  'digital-red': 'border-digital-red',
  'digital-red-light': 'border-digital-red-light',
  'digital-red-xlight': 'border-digital-red-xlight',
  'black-50': 'border-black-true/50',
};
export type AccentBorderColorType = AccentColorType;

export const accentTextColors = {
  flamingo: 'text-flamingo',
  fuchsia: 'text-fuchsia',
  lavender: 'text-lavender',
  lime: 'text-lime',
  'palo-alto': 'text-palo-alto',
  periwinkle: 'text-periwinkle',
  poppy: 'text-poppy',
  'robins-egg': 'text-robins-egg',
  sapphire: 'text-sapphire',
  spirited: 'text-spirited',
  white: 'text-white',
  'cardinal-red': 'text-cardinal-red',
  'digital-red': 'text-digital-red',
  'digital-red-light': 'text-digital-red-light',
  'digital-red-xlight': 'text-digital-red-xlight',
  'black-50': 'text-black-true/50',
};
export type AccentTextColorType = AccentColorType;

export const bgBlurs = {
  none: '',
  4: 'backdrop-blur-sm',
  8: 'backdrop-blur',
  12: 'backdrop-blur-md',
  16: 'backdrop-blur-lg',
};
export type BgBlurType = keyof typeof bgBlurs;

export const gradientTos = {
  transparent: '',
  'black-10': 'to-black-true/10',
  'black-20': 'to-black-true/20',
  'black-30': 'to-black-true/30',
  'black-40': 'to-black-true/40',
  'black-50': 'to-black-true/50',
  'black-60': 'to-black-true/60',
  'black-70': 'to-black-true/70',
};
export type GradientToType = keyof typeof gradientTos;

export const gradientFroms = {
  'black-10': 'from-black-true/10',
  'black-20': 'from-black-true/20',
  'black-30': 'from-black-true/30',
  'black-40': 'from-black-true/40',
  'black-50': 'from-black-true/50',
  'black-60': 'from-black-true/60',
  'black-70': 'from-black-true/70',
  'black-80': 'from-black-true/80',
  'black-90': 'from-black-true/90',
  'gc-black': 'from-gc-black',
};
export type GradientFromType = keyof typeof gradientFroms;

export const gradientVias = {
  'transparent': 'via-transparent',
  'black-10': 'via-black-true/10',
  'black-20': 'via-black-true/20',
  'black-30': 'via-black-true/30',
  'black-40': 'via-black-true/40',
  'black-50': 'via-black-true/50',
  'black-60': 'via-black-true/60',
  'black-70': 'via-black-true/70',
  'black-80': 'via-black-true/80',
  'black-90': 'via-black-true/90',
  'gc-black': 'via-gc-black',
};
export type GradientViaType = keyof typeof gradientVias;

export const imageAspectRatios = {
  '1x1': 'aspect-w-1 aspect-h-1',
  '1x2': 'aspect-w-1 aspect-h-2',
  '2x1': 'aspect-w-2 aspect-h-1',
  '2x3': 'aspect-w-2 aspect-h-3',
  '3x2': 'aspect-w-3 aspect-h-2',
  '3x4': 'aspect-w-3 aspect-h-4',
  '4x3': 'aspect-w-4 aspect-h-3',
  '5x8': 'aspect-w-5 aspect-h-8',
  '8x5': 'aspect-w-8 aspect-h-5',
  '9x16': 'aspect-w-9 aspect-h-16',
  '16x9': 'aspect-w-16 aspect-h-9',
  free: '',
};
export type ImageAspectRatioType = keyof typeof imageAspectRatios;

// TODO: We might be not need this
export const storyHeroAspectRatios = {
  '1x1': 'aspect-w-1 aspect-h-1',
  '2x1': 'aspect-w-2 aspect-h-1',
  '5x8': 'aspect-w-5 aspect-h-8',
  '16x9': 'aspect-w-16 aspect-h-9',
  'free': '',
};
export type StoryHeroAspectRatioType = keyof typeof storyHeroAspectRatios;

export const storyHeroAspectRatiosDesktop = {
  '1x1': 'lg:aspect-w-1 lg:aspect-h-1',
  '2x1': 'lg:aspect-w-2 lg:aspect-h-1',
  '5x8': 'lg:aspect-w-5 lg:aspect-h-8',
  '16x9': 'lg:aspect-w-16 lg:aspect-h-9',
  'free': '',
};

export const mediaAspectRatios = {
  '1x1': 'aspect-w-1 aspect-h-1',
  '3x1': 'aspect-w-3 aspect-h-1',
  '3x2': 'aspect-w-3 aspect-h-2',
  '4x1': 'aspect-w-4 aspect-h-1',
  '4x2.77': 'aspect-w-4 aspect-h-[2.77]', // Videos shot by agency
  '4x3': 'aspect-w-4 aspect-h-3',
  '4x5': 'aspect-w-4 aspect-h-5',
  '5x2': 'aspect-w-5 aspect-h-2',
  '9x16': 'aspect-w-9 aspect-h-16',
  '16x9': 'aspect-w-16 aspect-h-9',
};
export type MediaAspectRatioType = keyof typeof mediaAspectRatios;

// Many components have dark and light themes - these are the basic options
export const bgTextColorPairsBlackWhite = {
  black: 'bg-gc-black text-white',
  white: 'bg-white text-gc-black',
};
export type BgTextColorPairBlackWhiteType = keyof typeof bgTextColorPairsBlackWhite;

// Some components, eg, Split Posters, have additional options
export const bgTextColorPairsAdditional = {
  'black-70': 'bg-black-true/70 text-white',
  'white-80': 'bg-white/80 text-gc-black',
};

export const bgTextColorPairs = {
  ...bgTextColorPairsBlackWhite,
  ...bgTextColorPairsAdditional,
};
export type BgTextColorPairType = keyof typeof bgTextColorPairs;

export const heroOverlays = {
  none: 'bg-black-true/20 lg:bg-transparent',
  'black-10': 'bg-black-true/10',
  'black-20': 'bg-black-true/20',
  'black-30': 'bg-black-true/30',
  'black-40': 'bg-black-true/40',
  'black-50': 'bg-black-true/50',
  'black-60': 'bg-black-true/60',
  'black-70': 'bg-black-true/70',
  'black-80': 'bg-black-true/80',
  'black-90': 'bg-black-true/90',
  'black-gradient-to-r': 'bg-black-true/40 lg:bg-transparent lg:bg-gradient-to-r lg:from-black-true/70',
  'black-gradient-to-l': 'bg-black-true/40 lg:bg-transparent lg:bg-gradient-to-l lg:from-black-true/70',
  'black-gradient-to-b': 'bg-black-true/40 lg:bg-transparent lg:bg-gradient-to-b lg:from-black-true/70',
  'black-gradient-to-t': 'bg-black-true/40 lg:bg-transparent lg:bg-gradient-to-t lg:from-black-true/70',
  'black-gradient-masthead': 'bg-black-true/40 lg:bg-transparent lg:bg-gradient-to-b lg:from-black-true/50 lg:via-20% lg:via-transparent',
};
export type HeroOverlayType = keyof typeof heroOverlays;

export const paddingTops = {
  none: '',
  base: 'rs-pt-0',
  1: 'rs-pt-1',
  2: 'rs-pt-2',
  3: 'rs-pt-3',
  4: 'rs-pt-4',
  5: 'rs-pt-5',
  6: 'rs-pt-6',
  7: 'rs-pt-7',
  8: 'rs-pt-8',
  9: 'rs-pt-9',
  10: 'rs-pt-10',
};

export const paddingBottoms = {
  none: '',
  base: 'rs-pb-0',
  1: 'rs-pb-1',
  2: 'rs-pb-2',
  3: 'rs-pb-3',
  4: 'rs-pb-4',
  5: 'rs-pb-5',
  6: 'rs-pb-6',
  7: 'rs-pb-7',
  8: 'rs-pb-8',
  9: 'rs-pb-9',
  10: 'rs-pb-10',
};

export const paddingVerticals = {
  none: '',
  base: 'rs-py-0',
  1: 'rs-py-1',
  2: 'rs-py-2',
  3: 'rs-py-3',
  4: 'rs-py-4',
  5: 'rs-py-5',
  6: 'rs-py-6',
  7: 'rs-py-7',
  8: 'rs-py-8',
  9: 'rs-py-9',
  10: 'rs-py-10',
};
export type PaddingType = keyof typeof paddingTops;

// Add other margins as needed. Used for spacing between elements.
export const marginVerticals = {
  none: 'my-0',
  '01em': 'my-01em',
  '02em': 'my-02em',
  '03em': 'my-03em',
  '04em': 'my-04em',
  '05em': 'my-05em',
  '06em': 'my-06em',
  '07em': 'my-07em',
  '08em': 'my-08em',
  '09em': 'my-09em',
  '1em': 'my-1em',
  base: 'rs-my-0',
  1: 'rs-my-1',
  2: 'rs-my-2',
  3: 'rs-my-3',
  4: 'rs-my-4',
  5: 'rs-my-5',
  6: 'rs-my-6',
  7: 'rs-my-7',
  8: 'rs-my-8',
  9: 'rs-my-9',
  10: 'rs-my-10',
};

export const marginTops = {
  none: 'mt-0',
  '01em': 'mt-01em',
  '02em': 'mt-02em',
  '03em': 'mt-03em',
  '04em': 'mt-04em',
  '05em': 'mt-05em',
  '06em': 'mt-06em',
  '07em': 'mt-07em',
  '08em': 'mt-08em',
  '09em': 'mt-09em',
  '1em': 'mt-1em',
  base: 'rs-mt-0',
  1: 'rs-mt-1',
  2: 'rs-mt-2',
  3: 'rs-mt-3',
  4: 'rs-mt-4',
  5: 'rs-mt-5',
  6: 'rs-mt-6',
  7: 'rs-mt-7',
  8: 'rs-mt-8',
  9: 'rs-mt-9',
  10: 'rs-mt-10',
};

export const marginBottoms = {
  none: 'mb-0',
  '01em': 'mb-01em',
  '02em': 'mb-02em',
  '03em': 'mb-03em',
  '04em': 'mb-04em',
  '05em': 'mb-05em',
  '06em': 'mb-06em',
  '07em': 'mb-07em',
  '08em': 'mb-08em',
  '09em': 'mb-09em',
  '1em': 'mb-1em',
  base: 'rs-mb-0',
  1: 'rs-mb-1',
  2: 'rs-mb-2',
  3: 'rs-mb-3',
  4: 'rs-mb-4',
  5: 'rs-mb-5',
  6: 'rs-mb-6',
  7: 'rs-mb-7',
  8: 'rs-mb-8',
  9: 'rs-mb-9',
  10: 'rs-mb-10',
};
export type MarginType = keyof typeof marginBottoms;
