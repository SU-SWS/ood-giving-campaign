import { dcnb } from 'cnbuilder';

export const root = 'su-relative su-mx-auto';
export const grid = 'su-absolute su-top-0 md:su-bottom-[4vw] 3xl:su-bottom-70 su-w-full';
export const bracket = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 md:su-col-span-2 su-w-[120%]',
  textOnLeft ? 'md:su-order-2 md:su-col-end-12 md:su-justify-self-end' : 'md:su-col-start-2',
);

export const contentCard = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 md:su-col-span-9 su-border-b-2 su-border-white',
  textOnLeft ? 'md:su-order-1 md:su-col-start-1' : 'md:su-col-start-4',
);

export const imageGrid = 'md:su-pt-[6vw] 3xl:su-pt-100';
export const imageWrapper = (textOnLeft: boolean) => dcnb(
  'su-relative md:su-col-span-7',
  textOnLeft ? 'md:su-col-start-6' : '',
);
export const imageAspectRatio = 'su-aspect-w-6 su-aspect-h-5';
export const image = 'su-object-cover';
export const imageOverlay = (textOnLeft: boolean) => dcnb(
  'su-from-black-true/50 su-via-black-true/20 su-to-transparent su-via-20% su-absolute su-w-full su-h-full su-top-0 su-left-0',
  textOnLeft ? 'su-bg-gradient-to-r' : 'su-bg-gradient-to-l',
);

export const bracketWrapper = 'md:su-pt-108 su-border-b su-border-white';
export const contentWrapper = (textOnLeft: boolean, isSmallHeading: boolean) => dcnb(
  'su-relative su-z-10 md:su-h-full',
  textOnLeft ? 'md:su-ml-0 md:su-mr-auto' : 'md:su-mr-0 md:su-ml-auto',
  isSmallHeading ? 'md:su-pt-[3.8vw] 3xl:su-pt-60' : 'md:su-pt-[3vw] 3xl:su-pt-50',
);

// We need heading size to be finetuned and be smoothly responsive so we aren't using modular typography here
export const heading = (isSmallHeading) => dcnb(
  'su-text-shadow-lg md:su-max-w-[80%] su-mb-0',
  isSmallHeading
    ? 'md:su-text-[clamp(3rem,5.36vw_-_1.11rem,4.2rem)] lg:su-text-[clamp(4.2rem,5.51vw_-_1.27rem,7rem)]'
    : 'md:su-text-[clamp(4rem,7.59vw_-_1.83rem,5.7rem)] lg:su-text-[clamp(5.7rem,6.1vw_-_.35rem,8.8rem)]',
);

export const body = (textOnLeft: boolean) => dcnb(
  'su-grow md:su-max-w-[55%] md:su-text-15 lg:su-text-16 xl:su-text-20 2xl:su-text-23',
  textOnLeft ? 'md:su-pr-20 xl:su-pr-30' : 'md:su-pl-20 xl:su-pl-30',
);

export const textColors = {
  white: 'su-text-white',
  black: 'su-text-saa-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'su-h-16 su-w-200 su-max-w-full xl:su-h-20 2xl:su-h-[2.4rem] xl:su-w-300 2xl:su-w-[35rem] md:su-my-16 xl:su-my-36 2xl:su-my-48';

export const ctaLink = 'su-inline-block su-w-fit su-rs-mt-0 su-relative su-top-2';
