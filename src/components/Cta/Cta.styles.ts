export const cta = 'su-group hocus:su-underline su-transition-all';

export const ctaVariants = {
  primary: 'su-inline-block su-font-normal su-no-underline su-leading-display su-bg-cardinal-red hocus:su-bg-cardinal-red-dark su-text-white hocus:su-text-white su-border-2 su-border-cardinal-red hocus:su-border-cardinal-red-dark hocus:su-decoration-1 focus:su-outline-none su-underline-offset-4',
  secondary: 'su-inline-block su-font-normal su-no-underline su-leading-display su-bg-digital-red hocus:su-bg-digital-red-dark su-text-white hocus:su-text-white su-border-2 su-border-digital-red hocus:su-border-cardinal-red-dark hocus:su-decoration-1 focus:su-outline-none su-underline-offset-4',
  inline: 'su-inline su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  inlineDark: 'su-inline su-text-digital-red-xlight hocus:su-text-white su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  ghost: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current',
  /**
   * TODO: These ghost variants are just for giving Alexis and Kerri ideas. Will remove or update later.
   */
  ghostLeaf: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current su-rounded-tl-[1.4em] su-rounded-br-[1.4em]',
  ghostSwipe: 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-gradient-to-r after:su-from-fuchsia after:su-to-transparent after:su-transition-all after:su-z-[-1] hocus:after:su-w-full hocus:su-border-fuchsia',
  ghostSwipeDown: 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-right-0 after:su-h-[0] after:su-w-full after:su-bg-spirited after:su-transition-all after:su-z-[-1] hocus:after:su-h-full',
  chip: 'su-inline-block su-font-normal su-rounded-full su-text-white hover:su-shadow-md su-no-underline su-leading-display hocus:su-bg-periwinkle su-text-white hocus:su-text-white su-border su-border-white focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-40 active:su-ring-lagunita-40 focus:su-outline-none hocus:su-decoration-1',
  link: 'su-font-normal su-underline su-leading-display su-text-current hocus:su-text-current su-decoration-1 hocus:su-decoration-2 focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-outline-none focus-visible:su-rounded su-underline-offset-4',
  back: 'su-inline-block su-font-normal su-no-underline su-leading-none group-hocus:su-underline su-text-black hocus:su-text-lagunita focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  masthead: 'su-inline-block su-font-normal su-no-underline su-text-white hocus:su-text-white md:su-text-black md:hocus:su-text-black focus:su-outline-none',
  footer: 'su-inline-block su-font-normal su-leading-display su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  close: 'su-inline-block su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  'close-x': 'su-leading-none',
  dismiss: 'su-inline-block su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-saa-black hocus:su-text-saa-black focus:su-outline-none',
  unset: '',
};

export const ctaColors = {
  black: 'su-text-saa-black',
  white: 'su-text-white',
  // TODO: These are for ghost buttons and link variants. Will remove if we don't need.
  'digital-red': 'su-text-digital-red',
  'cardinal-red': 'su-text-cardinal-red',
};

export const ctaSizes = {
  default: 'su-pt-9 su-pb-10 su-pl-[2.4rem] su-pr-19 lg:su-pt-12 lg:su-pb-13 su-text-16 md:su-text-18 xl:su-text-20',
  small: 'su-px-13 su-pt-8 su-pb-9 lg:su-px-15 lg:su-pt-10 lg:su-pb-11 su-text-16',
  masthead: 'su-text-14 md:su-text-16',
  footer: '',
  'footer-featured': 'su-ma-intro',
  card: 'su-ma-card',
  chip: 'su-text-15 su-pt-3 su-pb-4 su-px-10',
  back: 'su-text-16',
  close: 'su-text-18 md:su-text-21',
  dismiss: 'su-text-17',
  unset: '',
};

export const ctaSizeMap = {
  primary: 'default',
  secondary: 'default',
  ghost: 'default',
  ghostLeaf: 'default',
  ghostSwipe: 'default',
  ghostSwipeDown: 'default',
  footer: 'footer',
  masthead: 'masthead',
  link: 'unset',
  dismiss: 'dismiss',
  close: 'close',
  back: 'back',
  chip: 'chip',
  unset: 'unset',
};

export const icon = 'su-inline-block su-shrink-0';

export const iconStyles = {
  masthead: 'su-text-white group-hocus:su-text-white md:su-text-digital-red md:group-hover:su-text-digital-red md:group-focus:su-text-digital-red',
  back: 'su-text-lagunita-light !su-w-[2.2rem]',
  close: 'su-text-lagunita-light group-hocus:su-text-lagunita-dark !su-w-[2.2rem] su--mt-4',
  'close-x': 'su-text-current hocus:su-text-current su-w-[2.2rem] group-hocus:su-underline',
  chip: 'su--mt-3',
  dismiss: 'su-text-saa-black !su-w-[2.2rem] su--mt-4',
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
// Only add to this map if right margin is different from default class su-mr-02em
export const iconRightMargin = {
  default: 'su-mr-03em',
  'arrow-left': 'su-mr-04em',
  back: 'su-mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class su-ml-02em
export const iconLeftMargin = {
  default: 'su-ml-03em',
  'arrow-right': 'su-ml-04em',
  back: 'su-ml-04em',
  'triangle-right': 'su-ml-04em',
  'triangle-down': 'su-ml-04em',
  'triangle-up': 'su-ml-04em',
};
