import { cnb } from 'cnbuilder';

export const root = 'su-relative su-mx-auto';
export const grid = (textOnLeft: boolean) => cnb(
  'su-flex su--mt-[40vw] sm:su-mt-0 sm:su-ml-0 su-w-[calc(100%_+_7rem)] sm:su-w-full sm:su-grid sm:su-grid-cols-12 sm:su-absolute sm:su-top-0 sm:su-bottom-[4vw] 3xl:su-bottom-70',
  textOnLeft ? 'su--mr-70' : 'su--ml-70',
);

export const bracket = (textOnLeft: boolean) => cnb(
  'su-z-10 su-w-[13rem] su-shrink-0 sm:su-col-span-2 sm:su-w-[120%]',
  textOnLeft ? 'su-order-2 sm:su-col-end-12 sm:su-justify-self-end' : 'sm:su-col-start-2',
);

export const contentCard = (textOnLeft: boolean) => cnb(
  'su-z-10 sm:su-col-span-9 su-border-b-2 su-border-white',
  textOnLeft ? 'su-order-1 sm:su-col-start-1' : 'sm:su-col-start-4',
);

export const imageGrid = (textOnLeft: boolean) => cnb(
  'sm:su-ml-0 sm:su-pt-[6vw] 3xl:su-pt-100',
  textOnLeft ? 'su--mr-20' : 'su--ml-20',
);
export const imageWrapper = (textOnLeft: boolean) => cnb(
  'su-relative su-w-[80vw] sm:su-w-full sm:su-col-span-7',
  textOnLeft ? 'su-mr-0 su-ml-auto sm:su-col-start-6' : '',
);
export const imageAspectRatio = 'su-aspect-w-6 su-aspect-h-5';
export const image = 'su-object-cover';
export const imageOverlay = (textOnLeft: boolean) => cnb(
  'su-hidden sm:su-block su-from-black-true/50 su-via-black-true/20 su-to-transparent su-via-20% sm:su-absolute su-w-full su-h-full sm:su-top-0 sm:su-left-0',
  textOnLeft ? 'su-bg-gradient-to-r' : 'su-bg-gradient-to-l',
);

export const bracketWrapper = 'sm:su-pt-108 su-border-b su-border-white';
export const contentWrapper = (textOnLeft: boolean, isSmallHeading: boolean) => cnb(
  'su-z-10 sm:su-h-full',
  textOnLeft ? 'sm:su-ml-0 sm:su-mr-auto' : 'sm:su-mr-0 sm:su-ml-auto',
  isSmallHeading ? 'sm:su-pt-[3.8vw] 3xl:su-pt-60' : 'sm:su-pt-[3vw] 3xl:su-pt-50',
);

// We need heading size to be finetuned and be smoothly responsive so we aren't using modular typography here
export const heading = (isSmallHeading: boolean) => cnb(
  'su-hidden sm:su-block su-text-shadow-lg sm:su-max-w-[85%] su-mb-0',
  isSmallHeading
    ? 'su-text-[3.6rem] sm:su-text-24 md:su-text-[clamp(3rem,5.36vw_-_1.11rem,4.2rem)] lg:su-text-[clamp(4.2rem,5.51vw_-_1.27rem,7rem)]'
    : 'su-text-[4.2rem] sm:su-text-[2.8rem] md:su-text-[clamp(4rem,7.59vw_-_1.83rem,5.7rem)] lg:su-text-[clamp(5.7rem,6.1vw_-_.35rem,8.8rem)]',
);
export const headingMobile = (textOnLeft: boolean) => cnb(
  'sm:su-hidden su-mb-20 su-w-4/5',
  textOnLeft ? 'su-ml-0 su-mr-auto' : 'su-mr-0 su-ml-auto',
);

export const body = (textOnLeft: boolean) => cnb(
  'su-grow su-mb-48 sm:su-mb-0 sm:su-max-w-[55%] sm:su-text-14 md:su-text-15 lg:su-text-16 xl:su-leading-snug xl:su-text-20 2xl:su-text-23',
  textOnLeft ? 'sm:su-pr-20 xl:su-pr-30' : 'sm:su-pl-20 xl:su-pl-30',
);

export const textColors = {
  white: 'su-text-white',
  black: 'su-text-gc-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'su-mt-[50vw] su-mb-26 su-h-14 lg:su-h-16 xl:su-h-20 2xl:su-h-[2.4rem] su-max-w-full su-w-200 xl:su-w-300 2xl:su-w-[35rem] sm:su-my-16 xl:su-my-36 2xl:su-my-48';

export const ctaLink = 'su-inline-block su-stretched-link su-w-fit su-rs-mt-0 su--mb-2 su-text-current';
