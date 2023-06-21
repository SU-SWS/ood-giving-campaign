export const cta = 'su-group hocus:su-underline su-transition-all';

const ghostSwipeBase = 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display hocus:su-text-white su-border-2 su-border-current hocus:su-border-digital-red-light focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-gradient-to-r after:su-from-digital-red after:su-to-cardinal-red after:su-transition-all after:su-z-[-1] hocus:after:su-w-full su-overflow-hidden';

const mainNavBase = 'su-group su-bg-clip-padding su-inline-block su-border-2 su-border-white su-font-normal su-decoration-transparent su-decoration-1 su-underline-offset-4 su-text-white hocus:su-text-white hocus:su-decoration-white hocus:su-ring-1 hocus:su-ring-inset hocus:su-ring-white';

export const ctaVariants = {
  solid: 'su-relative su-z-[10] su-font-normal su-inline-block su-decoration-2 su-decoration-transparent su-underline-offset-4 su-leading-display su-bg-digital-red su-text-white hocus:su-text-white su-border-2 su-border-digital-red-light focus-visible:su-outline-none hocus:su-decoration-white/80 after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-gradient-to-r after:su-from-cardinal-red after:su-to-cardinal-red-dark after:su-transition-all after:su-z-[-1] hocus:after:su-w-full su-overflow-hidden',
  inline: 'su-inline su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  inlineDark: 'su-inline su-text-digital-red-xlight hocus:su-text-white su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  ghost: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current',
  'ghost-swipe': `${ghostSwipeBase} su-bg-transparent`,
  'ghost-swipe-overlay': `${ghostSwipeBase} su-bg-black/60`, // Use for split poster over images
  link: 'su-font-normal su-decoration-transparent hocus:su-decoration-current su-leading-display su-text-current hocus:su-text-current hocus:su-decoration-2 focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-outline-none focus-visible:su-rounded su-underline-offset-4',
  back: 'su-inline-block su-font-normal su-no-underline su-leading-none group-hocus:su-underline su-text-black hocus:su-text-lagunita focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  mainNav: `${mainNavBase} hocus-visible:su-bg-sapphire/50`, // Main nav buttons at the top of the page
  mainNavBlack: `${mainNavBase} su-bg-gc-black hocus-visible:su-bg-digital-red`, // Main nav buttons when scrolling up
  close: 'su-inline-block su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  'close-x': 'su-leading-none',
  dismiss: 'su-inline-block su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-gc-black hocus:su-text-gc-black focus:su-outline-none',
  storyCardTag: 'su-inline-block su-text-current hocus:su-text-current su-font-normal su-decoration-2 su-underline-offset-4 su-decoration-black-50 hocus:su-decoration-current hocus:su-decoration-4',
  unset: '',
};

export const ctaColors = {
  black: 'su-text-gc-black',
  white: 'su-text-white',
  'digital-red': 'su-text-digital-red',
};

const tlBase = 'su-rounded-tl-[1.6rem] lg:su-rounded-tl-[2rem]';
const trBase = 'su-rounded-tr-[1.6rem] lg:su-rounded-tr-[2rem]';
const blBase = 'su-rounded-bl-[1.6rem] lg:su-rounded-bl-[2rem]';
const brBase = 'su-rounded-br-[1.6rem] lg:su-rounded-br-[2rem]';
const tlLargeBase = 'su-rounded-tl-[2rem] lg:su-rounded-tl-[3rem]';
const trLargeBase = 'su-rounded-tr-[2rem] lg:su-rounded-tr-[3rem]';
const blLargeBase = 'su-rounded-bl-[2rem] lg:su-rounded-bl-[3rem]';
const brLargeBase = 'su-rounded-br-[2rem] lg:su-rounded-br-[3rem]';

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
  default: 'su-pt-9 su-pb-10 su-pl-[2.2rem] su-pr-20 lg:su-pt-10 lg:su-pb-11 su-text-16 md:su-text-18 xl:su-text-20',
  large: 'su-pl-[2.2rem] su-pr-20 su-pt-10 su-pb-11 lg:su-pr-[3.4rem] lg:su-pl-40 lg:su-pt-20 lg:su-pb-[2.2rem] su-text-18 md:su-text-20 xl:su-text-24',
  mainNav: 'su-text-14 su-px-10 su-pt-8 su-pb-9 lg:su-px-[2.4rem] lg:su-pt-18 lg:su-pb-19 lg:su-text-20',
  'footer-featured': 'su-ma-intro',
  card: 'su-ma-card',
  back: 'su-text-16',
  close: 'su-text-18 md:su-text-21',
  dismiss: 'su-text-17',
  storyCardTag: 'su-text-16 lg:su-text-18',
  unset: '',
};

export const ctaSizeMap = {
  solid: 'default',
  ghost: 'default',
  'ghost-swipe': 'default',
  'ghost-swipe-overlay': 'default',
  mainNav: 'mainNav',
  mainNavBlack: 'mainNav',
  link: 'unset',
  dismiss: 'dismiss',
  close: 'close',
  back: 'back',
  chip: 'chip',
  storyCardTag: 'storyCardTag',
  unset: 'unset',
};

export const icon = 'su-inline-block su-shrink-0 su-will-change-transform su-transition-transform';

export const iconStyles = {
  'ghost-swipe': 'group-hocus:su-text-white',
  back: 'su-text-lagunita-light !su-w-[2.2rem]',
  close: 'su-text-lagunita-light group-hocus:su-text-lagunita-dark !su-w-[2.2rem] su--mt-4',
  'close-x': 'su-text-current hocus:su-text-current su-w-[2.2rem] group-hocus:su-underline',
  chip: 'su--mt-3',
  dismiss: 'su-text-gc-black !su-w-[2.2rem] su--mt-4',
};

export const ctaIconMap = {
  dismiss: 'dismiss',
  close: 'close',
  'close-x': 'close',
  back: 'back',
};

export const iconAnimation = {
  'top-right': 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em',
  down: 'group-hocus:su-translate-y-02em',
  up: 'group-hocus:su--translate-y-02em',
  right: 'group-hocus:su-translate-x-02em',
  left: 'group-hocus:su--translate-x-02em',
};

// Leading icons have right margins
// Only add to this map if right margin is different from default class su-mr-03em
export const iconRightMargin = {
  default: 'su-mr-03em',
  'arrow-left': 'su-mr-04em',
  back: 'su-mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class su-ml-03em
export const iconLeftMargin = {
  default: 'su-ml-03em',
  'arrow-right': 'su-ml-04em',
  back: 'su-ml-04em',
  'triangle-right': 'su-ml-04em',
  'triangle-down': 'su-ml-04em',
  'triangle-up': 'su-ml-04em',
};
