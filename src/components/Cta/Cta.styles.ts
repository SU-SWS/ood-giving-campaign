export const cta = 'su-group hocus:su-underline su-transition-all';

export const ctaVariants = {
  primary: 'su-inline-block su-font-normal su-no-underline su-leading-display su-bg-cardinal-red hocus:su-bg-cardinal-red-dark su-text-white hocus:su-text-white su-border su-border-cardinal-red hocus:su-border-cardinal-red-dark hocus:su-decoration-1 focus:su-outline-none',
  secondary: 'su-inline-block su-font-normal su-no-underline su-leading-display su-bg-digital-red hocus:su-bg-digital-red-dark su-text-white hocus:su-text-white su-border su-border-digital-red hocus:su-border-cardinal-red-dark hocus:su-decoration-1 focus:su-outline-none',
  ghost: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current',
  ghostLeaf: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current su-rounded-tl-[26px] su-rounded-br-[26px]',
  ghostSwipe: 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-fuchsia after:su-transition-all after:su-z-[-1] hocus:after:su-w-full',
  ghostSwipeDown: 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-right-0 after:su-h-[0] after:su-w-full after:su-bg-spirited after:su-transition-all after:su-z-[-1] hocus:after:su-h-full',
  chip: 'su-inline-block su-font-normal su-rounded-full su-text-white hover:su-shadow-md su-no-underline su-leading-display hocus:su-bg-periwinkle su-text-white hocus:su-text-white su-border su-border-white focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-40 active:su-ring-lagunita-40 focus:su-outline-none hocus:su-decoration-1',
  link: 'su-font-normal su-underline su-leading-display su-text-white hocus:su-text-lime su-decoration-1 hocus:su-decoration-2 focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-outline-none focus-visible:su-rounded su-underline-offset-4',
  back: 'su-inline-block su-font-normal su-no-underline su-leading-none group-hocus:su-underline su-text-black hocus:su-text-lagunita focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  masthead: 'su-inline-block su-font-normal su-no-underline su-text-white hocus:su-text-white md:su-text-black md:hocus:su-text-black focus:su-outline-none',
  footer: 'su-inline-block su-font-normal su-leading-display su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  close: 'su-inline-block su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  'close-x': 'su-leading-none',
  dismiss: 'su-inline-block su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-black hocus:su-text-black focus:su-outline-none',
  unset: '',
};
export type CtaVariantType = keyof typeof ctaVariants;

export const ctaColors = {
  black: 'su-text-black',
  white: 'su-text-white',
  'digital-red': 'su-text-digital-red',
  'cardinal-red': 'su-text-cardinal-red',
};
export type CtaColorType = keyof typeof ctaColors;

export const ctaSizes = {
  default: 'su-px-20 su-py-12 md:su-px-30 xl:su-px-40 md:su-py-14 su-text-16 md:su-text-20',
  small: 'su-px-13 su-py-9 md:su-px-15 md:su-py-10 su-text-16',
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
export type CtaSizeType = keyof typeof ctaSizes;

export const icon = 'su-inline-block su-shrink-0';

export const iconStyles = {
  masthead: 'su-text-white group-hocus:su-text-white md:su-text-digital-red md:group-hover:su-text-digital-red md:group-focus:su-text-digital-red',
  back: 'su-text-lagunita-light !su-w-[2.2rem]',
  close: 'su-text-lagunita-light group-hocus:su-text-lagunita-dark !su-w-[2.2rem] su--mt-4',
  'close-x': 'su-text-current hocus:su-text-current su-w-[2.2rem] group-hocus:su-underline',
  chip: 'su--mt-3',
  dismiss: 'su-text-black !su-w-[2.2rem] su--mt-4',
};

export const iconAnimation = {
  'top-right': 'group-hocus:su-translate-x-01em group-hocus:su--translate-y-01em',
  down: 'group-hocus:su-translate-y-02em',
  up: 'group-hocus:su--translate-y-02em',
  right: 'group-hocus:su-translate-x-02em',
  left: 'group-hocus:su--translate-x-02em',
};
export type IconAnimationType = keyof typeof iconAnimation;

// Leading icons have right margins
// Only add to this map if right margin is different from default class su-mr-02em
export const iconRightMargin = {
  default: 'su-mr-02em',
  'arrow-left': 'su-mr-03em',
  back: 'su-mr-03em',
  camera: 'su-mr-03em',
  'user-circle': 'su-mr-04em',
};

// Trailing icons have left margins
// Only add to this map if left margin is different from default class su-ml-02em
export const iconLeftMargin = {
  default: 'su-ml-02em',
  'arrow-right': 'su-ml-03em',
  back: 'su-ml-03em',
  'back-external': 'su-ml-03em',
};
