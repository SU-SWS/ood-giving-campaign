export const cta = 'group hocus:underline transition-all';

const ghostSwipeBase = 'relative z-[10] inline-block decoration-2 decoration-transparent underline-offset-4 hocus:decoration-white/80 font-normal leading-display hocus:text-white border-2 border-current hocus:border-digital-red-light focus-visible:outline-none after:block after:content-[""] after:absolute after:top-0 after:left-0 after:w-[0] after:h-full after:bg-gradient-to-r after:from-digital-red after:to-cardinal-red after:transition-all after:z-[-1] hocus:after:w-full overflow-hidden';

const mainNavBase = 'group bg-clip-padding inline-block border-2 font-normal decoration-transparent decoration-1 underline-offset-4  hocus:ring-1 hocus:ring-inset';
const mainNavWhite = 'text-white border-white hocus:text-white hocus:decoration-white hocus:ring-white';
const mainNavDark = 'text-gc-black border-gc-black hocus:text-gc-black hocus:decoration-gc-black hocus:ring-gc-black';

export const ctaVariants = {
  solid: 'relative z-[10] font-normal inline-block decoration-2 decoration-transparent underline-offset-4 hocus:decoration-white/80 leading-display bg-digital-red text-white hocus:text-white border-2 border-digital-red-light focus-visible:outline-none  after:block after:content-[""] after:absolute after:top-0 after:left-0 after:w-[0] after:h-full after:bg-gradient-to-r after:from-cardinal-red after:to-cardinal-red-dark after:transition-all after:z-[-1] hocus:after:w-full overflow-hidden',
  inline: 'inline underline decoration-1 hocus:decoration-2 underline-offset-2',
  inlineDark: 'inline text-digital-red-xlight hocus:text-white underline decoration-1 hocus:decoration-2 underline-offset-2',
  ghost: 'inline-block font-normal leading-display bg-transparent hocus:text-current border-2 border-current focus-visible:outline-none underline-offset-4 decoration-transparent hocus:decoration-current',
  'ghost-swipe': `${ghostSwipeBase} bg-transparent`,
  'ghost-swipe-overlay': `${ghostSwipeBase} bg-black-true/40`, // Use for split poster over images
  link: 'font-normal decoration-transparent hocus:decoration-current leading-display text-current hocus:text-current hocus:decoration-2 focus-visible:ring-2 focus-visible:ring-lagunita-light focus-visible:outline-none focus-visible:rounded underline-offset-4',
  back: 'inline-block font-normal no-underline leading-none group-hocus:underline text-black hocus:text-lagunita focus-visible:ring-2 focus-visible:ring-lagunita-light focus-visible:ring-offset-4 focus:outline-none rounded-[1px]',
  mainNav: `${mainNavBase} ${mainNavWhite} hocus-visible:bg-sapphire/50`, // Main nav buttons at the top of the page
  mainNavUp: `${mainNavBase} ${mainNavWhite} hocus-visible:bg-digital-red`, // Main nav buttons when scrolling up
  mainNavBlack: `${mainNavBase} ${mainNavDark} hocus-visible:bg-lime`, // Main nav buttons when scrolling up
  close: 'inline-block font-semibold leading-none text-lagunita hocus:text-lagunita-dark focus:outline-none',
  'close-x': 'leading-none',
  dismiss: 'inline-block font-bold uppercase tracking-widest leading-none text-gc-black hocus:text-gc-black focus:outline-none',
  chip: 'inline-block leading-display no-underline text-current rounded-full border-2 border-current hocus:text-current font-normal underline-offset-4 decoration-transparent hocus-visible:decoration-current hocus-visible:decoration-2',
  storyCardTag: 'inline-block text-current hocus:text-current font-normal decoration-2 underline-offset-4 decoration-black-50 hocus:decoration-current hocus:decoration-4',
  unset: '',
};

export const ctaColors = {
  black: 'text-gc-black',
  white: 'text-white',
  'digital-red': 'text-digital-red',
  current: 'text-current',
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

export const ctaSizes = {
  default: 'pt-9 pb-10 pl-22 pr-20 lg:pt-10 lg:pb-11 text-16 md:text-18 xl:text-20',
  large: 'pl-22 pr-20 pt-10 pb-11 lg:pr-34 lg:pl-40 lg:pt-20 lg:pb-22 text-18 md:text-20 xl:text-24',
  mainNav: 'text-14 px-10 pt-8 pb-9 lg:px-24 lg:pt-18 lg:pb-19 lg:text-20',
  'footer-featured': 'ma-intro',
  card: 'ma-card',
  back: 'text-16',
  close: 'text-18 md:text-21',
  dismiss: 'text-17',
  chip: 'py-7 px-22 text-18',
  storyCardTag: 'text-16 lg:text-18',
  unset: '',
};

export const ctaSizeMap = {
  solid: 'default',
  ghost: 'default',
  'ghost-swipe': 'default',
  'ghost-swipe-overlay': 'default',
  mainNav: 'mainNav',
  mainNavUp: 'mainNav',
  mainNavBlack: 'mainNav',
  link: 'unset',
  dismiss: 'dismiss',
  close: 'close',
  back: 'back',
  chip: 'chip',
  storyCardTag: 'storyCardTag',
  unset: 'unset',
};

export const icon = 'inline-block shrink-0 will-change-transform transition-transform';

export const iconStyles = {
  'ghost-swipe': 'group-hocus:text-white',
  back: 'text-lagunita-light !w-22',
  close: 'text-lagunita-light group-hocus:text-lagunita-dark !w-22 -mt-4',
  'close-x': 'text-current hocus:text-current w-22 group-hocus:underline',
  dismiss: 'text-gc-black !w-22 -mt-4',
};

export const ctaIconMap = {
  dismiss: 'dismiss',
  close: 'close',
  'close-x': 'close',
  back: 'back',
};

export const iconAnimation = {
  'top-right': 'group-hocus:translate-x-01em group-hocus:-translate-y-01em',
  down: 'group-hocus:translate-y-02em',
  up: 'group-hocus:-translate-y-02em',
  right: 'group-hocus:translate-x-02em',
  left: 'group-hocus:-translate-x-02em',
};

// Leading icons have right margins
// Only add to this map if right margin is different from default class mr-03em
export const iconRightMargin = {
  default: 'mr-03em',
  'arrow-left': 'mr-04em',
  back: 'mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class ml-03em
export const iconLeftMargin = {
  default: 'ml-03em',
  'arrow-right': 'ml-04em',
  back: 'ml-04em',
  'triangle-right': 'ml-04em',
  'triangle-down': 'ml-04em',
  'triangle-up': 'ml-04em',
};
