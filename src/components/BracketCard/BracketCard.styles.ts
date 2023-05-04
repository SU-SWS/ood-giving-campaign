import { dcnb } from 'cnbuilder';

export const root = 'su-relative su-mx-auto';
export const grid = 'su-absolute su-top-0 lg:su-bottom-[4vw] 3xl:su-bottom-70 su-w-full';
export const bracket = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-col-span-2 su-w-[120%]',
  textOnLeft ? 'lg:su-order-2 lg:su-col-end-12 lg:su-justify-self-end' : 'lg:su-col-start-2',
);

export const contentCard = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-col-span-9 su-border-b-2 su-border-white',
  textOnLeft ? 'lg:su-order-1 lg:su-col-start-1' : 'lg:su-col-start-4',
);

export const imageGrid = 'lg:su-pt-[6vw] 3xl:su-pt-100';
export const imageWrapper = (textOnLeft: boolean) => dcnb(
  'su-relative lg:su-col-span-7',
  textOnLeft ? 'lg:su-col-start-6' : '',
);
export const imageAspectRatio = 'su-aspect-w-6 su-aspect-h-5';
export const image = 'su-object-cover';
export const imageOverlay = (textOnLeft: boolean) => dcnb(
  'su-from-black-true/50 su-via-black-true/20 su-to-transparent su-via-20% su-absolute su-w-full su-h-full su-top-0 su-left-0',
  textOnLeft ? 'su-bg-gradient-to-r' : 'su-bg-gradient-to-l',
);

export const bracketWrapper = 'lg:su-pt-108 su-border-b su-border-white';
export const contentWrapper = (textOnLeft: boolean, isSmallHeading: boolean) => dcnb(
  'su-relative su-z-10 lg:su-h-full',
  textOnLeft ? 'lg:su-ml-0 lg:su-mr-auto' : 'lg:su-mr-0 lg:su-ml-auto',
  isSmallHeading ? 'lg:su-pt-[3.8vw] 3xl:su-pt-60' : 'lg:su-pt-[3vw] 3xl:su-pt-50',
);

// We need heading size to be finetuned and be smoothly responsive so we aren't using modular typography here
export const heading = (isSmallHeading) => dcnb(
  'su-text-shadow-lg lg:su-max-w-[80%] su-mb-0',
  isSmallHeading
    ? 'lg:su-text-[clamp(4.2rem,5.51vw_-_1.27rem,7rem)]'
    : 'lg:su-text-[clamp(5.7rem,6.1vw_-_.35rem,8.8rem)]',
);

export const body = (textOnLeft: boolean) => dcnb(
  'su-grow lg:su-max-w-[55%] lg:su-text-16 xl:su-text-20 2xl:su-text-23',
  textOnLeft ? 'lg:su-pr-20 xl:su-pr-30' : 'lg:su-pl-20 xl:su-pl-30',
);

export const textColors = {
  white: 'su-text-white',
  black: 'su-text-saa-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'su-h-16 su-w-200 su-max-w-full xl:su-h-20 2xl:su-h-[2.4rem] xl:su-w-300 2xl:su-w-[35rem] lg:su-my-16 xl:su-my-36 2xl:su-my-48';

export const ctaLink = 'su-inline-block su-w-fit su-rs-mt-0 su-relative su-top-2';
