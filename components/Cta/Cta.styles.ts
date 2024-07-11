import {
  type CtaSizeObjectType,
  type CtaSizeMapType,
  type CtaIconStyleType,
  type CtaIconMapType,
  type CtaIconRightMarginType,
  type CtaIconLeftMarginType,
} from './Cta.types';

export const cta = 'group/cta hocus:underline transition-all';

const ghostSwipeBase = 'relative z-10 block w-fit decoration-2 decoration-transparent underline-offset-4 hocus:decoration-white/80 font-normal leading-display hocus:text-white border-2 border-current hocus:border-digital-red-light focus-visible:outline-none after:block after:content-[""] after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-gradient-to-r after:from-digital-red after:to-cardinal-red after:transition-all after:z-[-1] hocus:after:w-full overflow-hidden';

const mastheadGivingBase = 'inline-block w-fit font-normal no-underline leading-display hocus:decoration-2 focus-visible:ring-2 focus-visible:ring-digital-red-xlight ring-offset-4 focus-visible:outline-none focus-visible:rounded underline-offset-4';
const mastheadGivingWhite = 'text-white hocus:text-white hocus:decoration-white focus-visible:ring-offset-black';
const mastheadGivingDark = 'text-gc-black hocus:text-gc-black hocus:decoration-gc-black focus-visible:ring-offset-white';

const brochureBase = 'inline-block font-bold font-serif no-underline hocus:no-underline leading-none text-current hocus:!text-current bg-gradient-to-b bg-no-repeat bg-[0_100%] bg-[length:0_5px] hocus:bg-[length:calc(100%-1.3em)_5px]';
const brochureIlluminating = 'from-illuminating to-illuminating';
const brochurePoppy = 'from-poppy to-poppy';

const chipBase = 'relative inline-block leading-display rounded-full font-normal no-underline underline-offset-4 hocus:underline decoration-1 hocus:bg-digital-red-light hocus:text-white';
const chipLight = 'border border-gc-black/10 bg-gc-black-10 text-gc-black-80 hocus:border-digital-red-xlight';
const chipDark = 'border border-gc-black-80 bg-gc-black-90 text-gc-black-40 hocus:border-digital-red-xlight';
const chipNav = 'bg-gc-black-90 text-gc-black-40 hocus-visible:bg-gradient-to-r hocus-visible:from-digital-red hocus-visible:to-cardinal-red-dark border-2 border-gc-black-90 hocus-visible:border-digital-red-xlight';

export const ctaVariants = {
  solid: 'block w-fit relative z-10 font-normal decoration-2 decoration-transparent underline-offset-4 hocus:decoration-white/80 leading-display bg-digital-red text-white hocus:text-white border-2 border-digital-red-light focus-visible:outline-none after:block after:content-[""] after:absolute after:top-0 after:left-0 after:w-0 after:h-full after:bg-gradient-to-r after:from-cardinal-red after:to-cardinal-red-dark after:transition-all after:z-[-1] hocus:after:w-full overflow-hidden',
  inline: 'inline underline decoration-1 hocus:decoration-2 underline-offset-2', // inline links in WYSIWYG for example
  ghost: 'block w-fit font-normal leading-display bg-transparent border-2 border-current focus-visible:outline-none underline-offset-4 decoration-transparent hocus:decoration-current',
  'ghost-swipe': `${ghostSwipeBase} bg-transparent`,
  'ghost-swipe-overlay': `${ghostSwipeBase} bg-black-true/40`, // Use for split poster over images
  link: '!p-0 inline-block w-fit font-normal leading-display text-current hocus:text-current no-underline decoration-2 underline-offset-4 focus-visible:ring-2 focus-visible:ring-digital-red-light focus-visible:outline-none focus-visible:rounded',
  mainNavFeatured: 'inline-block font-druk-wide uppercase leading-cozy text-white hocus:text-white underline decoration-2 decoration-black-50 underline-offset-4 xl:underline-offset-[6px] hocus-visible:decoration-digital-red-xlight hocus-visible:decoration-4',
  mainNavLink: 'inline-block font-normal leading-display text-white hocus:text-white underline decoration-2 decoration-black-50 underline-offset-4 hocus-visible:decoration-digital-red-xlight hocus-visible:decoration-4',
  mastheadGiving: `${mastheadGivingBase} ${mastheadGivingWhite}`, // Giving link regular dark pages
  mastheadGivingBlack: `${mastheadGivingBase} ${mastheadGivingDark}`, // Giving link light mode story pages
  close: 'inline-block font-semibold leading-none text-digital-red-light hocus:text-digital-red-xlight focus:outline-none',
  'close-x': 'leading-none',
  chip: 'inline-block leading-display no-underline text-current rounded-full border-2 border-current hocus:text-current font-normal underline-offset-4 decoration-transparent hocus-visible:decoration-current hocus-visible:decoration-2',
  storyCardChip: `${chipBase} ${chipLight}`,
  storyCardChipDark: `${chipBase} ${chipDark}`,
  storyListNav: `${chipBase} ${chipNav}`,
  brochure: `${brochureBase} ${brochureIlluminating}`,
  brochurePoppy: `${brochureBase} ${brochurePoppy}`,
  unset: '',
};

export const ctaColors = {
  black: 'text-gc-black hocus:text-gc-black',
  white: 'text-white hocus:text-white',
  'digital-red': 'text-digital-red hocus:text-digital-red',
  'digital-red-xlight': 'text-digital-red-xlight hocus:text-white',
  current: 'text-current hocus:text-current',
  unset: '',
};

const tlBase = 'rounded-tl-[1.6rem] lg:rounded-tl-[2rem]';
const trBase = 'rounded-tr-[1.6rem] lg:rounded-tr-[2rem]';
const blBase = 'rounded-bl-[1.6rem] lg:rounded-bl-[2rem]';
const brBase = 'rounded-br-[1.6rem] lg:rounded-br-[2rem]';
const tlLargeBase = 'rounded-tl-[2rem] lg:rounded-tl-[3rem]';
const trLargeBase = 'rounded-tr-[2rem] lg:rounded-tr-[3rem]';
const blLargeBase = 'rounded-bl-[2rem] lg:rounded-bl-[3rem]';
const brLargeBase = 'rounded-br-[2rem] lg:rounded-br-[3rem]';

export const ctaCurves = {
  tl: tlBase,
  'tl-large': tlLargeBase,
  tr: trBase,
  'tr-large': trLargeBase,
  bl: blBase,
  'bl-large': blLargeBase,
  br: brBase,
  'br-large': brLargeBase,
  tlbr: `${tlBase} ${brBase}`,
  'tlbr-large': `${tlLargeBase} ${brLargeBase}`,
  trbl: `${trBase} ${blBase}`,
  'trbl-large': `${trLargeBase} ${blLargeBase}`,
};

export const ctaSizes: CtaSizeObjectType = {
  default: 'pt-9 pb-10 pl-18 pr-16 lg:pl-22 lg:pr-20 lg:pt-10 lg:pb-11 text-16 lg:text-20',
  large: 'pl-28 pr-26 pt-16 pb-17 lg:pr-40 lg:pl-44 lg:pt-20 lg:pb-22 text-18 lg:text-24',
  link: 'text-16 lg:text-20',
  mainNavLink: 'text-19 md:text-20 2xl:text-24',
  mastheadGiving: 'text-14 sm:text-15 md:text-16 lg:text-19',
  close: 'text-18 md:text-21',
  chip: 'py-7 px-22 text-18',
  storyCardChip: 'text-15 py-6 px-16 lg:text-17 lg:pt-8 lg:pb-7 lg:px-18',
  storyListNav: 'text-16 py-12 px-24 lg:text-20 lg:pt-15 lg:pb-16 lg:px-34',
  brochure: 'text-20 xl:text-30 py-12',
  unset: '',
};

export const ctaSizeMap: CtaSizeMapType = {
  solid: 'default',
  ghost: 'default',
  inline: 'unset',
  'ghost-swipe': 'default',
  'ghost-swipe-overlay': 'default',
  mainNavFeatured: 'unset',
  mainNavLink: 'mainNavLink',
  mastheadGiving: 'mastheadGiving',
  mastheadGivingBlack: 'mastheadGiving',
  link: 'unset',
  close: 'close',
  'close-x': 'unset',
  chip: 'chip',
  storyCardChip: 'storyCardChip',
  storyCardChipDark: 'storyCardChip',
  storyListNav: 'storyListNav',
  brochure: 'brochure',
  brochurePoppy: 'brochure',
  unset: 'unset',
};

export const icon = 'inline-block shrink-0 will-change-transform transition-transform stroke-2';

export const iconStyles: CtaIconStyleType = {
  'ghost-swipe': 'group-hover/cta:text-white group-focus-visible/cta:text-white',
  close: 'text-lagunita-light group-hover/cta:text-lagunita-dark group-focus-visible/cta:text-lagunita-dark !w-22 -mt-4',
  'close-x': 'text-current hocus:text-current w-22 group-hover/cta:underline group-focus-visible/cta:underline',
  mainNavFeatured: '!w-1em text-digital-red-xlight stroke-[3]',
};

export const iconColors = {
  default: '',
  'red-xlight-hocus-white': '!text-digital-red-xlight group-hover/cta:!text-white group-focus-visible/cta:!text-white',
};

export const ctaIconMap: CtaIconMapType = {
  close: 'close',
  'close-x': 'close',
};

export const iconAnimation = {
  none: '',
  'top-right': 'group-hover/cta:translate-x-01em group-focus-visible/cta:translate-x-01em group-hover/cta:-translate-y-01em group-focus-visible/cta:-translate-y-01em',
  down: 'group-hover/cta:translate-y-02em group-focus-visible/cta:translate-y-02em',
  up: 'group-hover/cta:-translate-y-02em group-focus-visible/cta:-translate-y-02em',
  right: 'group-hover/cta:translate-x-02em group-focus-visible/cta:translate-x-02em',
  left: 'group-hover/cta:-translate-x-02em group-focus-visible/cta:-translate-x-02em',
};

// Leading icons have right margins
// Only add to this map if right margin is different from default class mr-03em
export const iconRightMarginDefault = 'mr-03em';
export const iconRightMargin: CtaIconRightMarginType = {
  'arrow-left': 'mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class ml-03em
export const iconLeftMarginDefault = 'ml-03em';
export const iconLeftMargin: CtaIconLeftMarginType = {
  'arrow-right': 'ml-04em',
  email: 'ml-05em',
  external: 'ml-04em',
  link: 'ml-05em',
  'triangle-right': 'ml-04em',
  'triangle-down': 'ml-04em',
  'triangle-up': 'ml-04em',
};
