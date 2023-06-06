export const cta = 'su-group hocus:su-underline su-transition-all';

export const ctaVariants = {
  solid: 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-digital-red hocus:su-text-white su-border-2 su-border-digital-red-light focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-gradient-to-r after:su-from-cardinal-red after:su-to-cardinal-red-dark after:su-transition-all after:su-z-[-1] hocus:after:su-w-full su-overflow-hidden',
  inline: 'su-inline su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  inlineDark: 'su-inline su-text-digital-red-xlight hocus:su-text-white su-underline su-decoration-1 hocus:su-decoration-2 su-underline-offset-2',
  ghost: 'su-inline-block su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none su-underline-offset-4 su-decoration-transparent hocus:su-decoration-current',
  'ghost-swipe': 'su-relative su-z-[10] su-inline-block su-no-underline hocus:su-no-underline su-font-normal su-leading-display su-bg-transparent hocus:su-text-current su-border-2 su-border-current focus-visible:su-outline-none after:su-block after:su-content-[""] after:su-absolute after:su-top-0 after:su-left-0 after:su-w-[0] after:su-h-full after:su-bg-gradient-to-r after:su-from-digital-red after:su-to-transparent after:su-transition-all after:su-z-[-1] hocus:after:su-w-full',
  chip: 'su-inline-block su-font-normal su-rounded-full su-text-white hover:su-shadow-md su-no-underline su-leading-display hocus:su-bg-periwinkle su-text-white hocus:su-text-white su-border su-border-white focus:su-ring-2 active:su-ring-2 focus:su-ring-lagunita-40 active:su-ring-lagunita-40 focus:su-outline-none hocus:su-decoration-1',
  link: 'su-font-normal su-underline su-leading-display su-text-current hocus:su-text-current su-decoration-1 hocus:su-decoration-2 focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-outline-none focus-visible:su-rounded su-underline-offset-4',
  back: 'su-inline-block su-font-normal su-no-underline su-leading-none group-hocus:su-underline su-text-black hocus:su-text-lagunita focus-visible:su-ring-2 focus-visible:su-ring-lagunita-light focus-visible:su-ring-offset-4 focus:su-outline-none su-rounded-[1px]',
  masthead: 'su-inline-block su-font-normal su-no-underline su-text-white hocus:su-text-white md:su-text-black md:hocus:su-text-black focus:su-outline-none',
  footer: 'su-inline-block su-font-normal su-leading-display su-underline-offset-[3px] su-text-black-20 hocus:su-text-black-20 su-decoration-digital-red-xlight hocus:su-decoration-digital-red-xlight',
  close: 'su-inline-block su-font-semibold su-leading-none su-text-lagunita hocus:su-text-lagunita-dark focus:su-outline-none',
  'close-x': 'su-leading-none',
  dismiss: 'su-inline-block su-font-bold su-uppercase su-tracking-widest su-leading-none su-text-gc-black hocus:su-text-gc-black focus:su-outline-none',
  unset: '',
};

export const ctaColors = {
  black: 'su-text-gc-black',
  white: 'su-text-white',
  'digital-red': 'su-text-digital-red',
};

export const ctaCurves = {
  tl: 'su-rounded-tl-[1.6rem] xl:su-rounded-tl-[2rem]',
  'tl-large': 'su-rounded-tl-[2rem] xl:su-rounded-tl-[3rem]',
  tr: 'su-rounded-tr-[1.6rem] xl:su-rounded-tr-[2rem]',
  'tr-large': 'su-rounded-tr-[2rem] xl:su-rounded-tr-[3rem]',
  bl: 'su-rounded-bl-[1.6rem] xl:su-rounded-bl-[2rem]',
  'bl-large': 'su-rounded-bl-[2rem] xl:su-rounded-bl-[3rem]',
  br: 'su-rounded-br-[1.6rem] xl:su-rounded-br-[2rem]',
  'br-large': 'su-rounded-br-[2rem] xl:su-rounded-br-[3rem]',
};

export const ctaSizes = {
  default: 'su-pt-9 su-pb-10 su-pl-[2.4rem] su-pr-[2.2rem] lg:su-pt-12 lg:su-pb-13 su-text-16 md:su-text-18 xl:su-text-20',
  large: 'su-pl-[2.4rem] su-pr-[2.2rem] su-pt-12 su-pb-13 lg:su-pr-36 lg:su-pl-[4.2rem] lg:su-pt-[2.2rem] lg:su-pb-[2.4rem] su-text-18 md:su-text-20 xl:su-text-24',
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
  solid: 'default',
  ghost: 'default',
  'ghost-swipe': 'default',
  footer: 'footer',
  masthead: 'masthead',
  link: 'unset',
  dismiss: 'dismiss',
  close: 'close',
  back: 'back',
  chip: 'chip',
  unset: 'unset',
};

export const icon = 'su-inline-block su-shrink-0 su-will-change-transform';

export const iconStyles = {
  masthead: 'su-text-white group-hocus:su-text-white md:su-text-digital-red md:group-hover:su-text-digital-red md:group-focus:su-text-digital-red',
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
