import { cnb } from 'cnbuilder';

export const root = 'group relative mx-auto';
export const grid = (textOnLeft: boolean) => cnb(
  'flex -mt-[40vw] sm:mt-0 sm:ml-0 w-[calc(100%_+_7rem)] sm:w-full sm:grid sm:grid-cols-12 sm:absolute sm:top-0 sm:bottom-[4vw] 3xl:bottom-70',
  textOnLeft ? '-mr-70' : '-ml-70',
);

export const bracket = (textOnLeft: boolean) => cnb(
  'z-10 w-[13rem] shrink-0 sm:col-span-2 sm:w-[120%]',
  textOnLeft ? 'order-2 sm:col-end-12 sm:justify-self-end' : 'sm:col-start-2',
);

export const contentCard = (textOnLeft: boolean) => cnb(
  'z-10 sm:col-span-9 border-b-2 border-white',
  textOnLeft ? 'order-1 sm:col-start-1' : 'sm:col-start-4',
);

export const imageGrid = (textOnLeft: boolean) => cnb(
  'sm:ml-0 sm:pt-[6vw] 3xl:pt-100',
  textOnLeft ? '-mr-20 sm:mr-0' : '-ml-20 sm:ml-0',
);
export const imageWrapper = (textOnLeft: boolean) => cnb(
  'relative w-[80vw] sm:w-full sm:col-span-7 overflow-hidden',
  textOnLeft ? 'mr-0 ml-auto sm:col-start-6' : '',
);
export const imageAspectRatio = 'aspect-w-6 aspect-h-5';
export const image = 'object-cover group-hocus-within:scale-105 transition-transform';
export const imageOverlay = (textOnLeft: boolean) => cnb(
  'hidden sm:block from-black-true/50 via-black-true/20 to-transparent via-20% sm:absolute w-full h-full sm:top-0 sm:left-0',
  textOnLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l',
);

export const bracketWrapper = 'sm:pt-108 border-b border-white';
export const contentWrapper = (textOnLeft: boolean, isSmallHeading: boolean) => cnb(
  'z-10 sm:h-full',
  textOnLeft ? 'sm:ml-0 sm:mr-auto' : 'sm:mr-0 sm:ml-auto',
  isSmallHeading ? 'sm:pt-[3.8vw] 3xl:pt-60' : 'sm:pt-[3vw] 3xl:pt-50',
);

// We need heading size to be finetuned and be smoothly responsive so we aren't using modular typography here
export const heading = (isSmallHeading: boolean) => cnb(
  'hidden sm:block text-shadow-lg sm:max-w-[85%] mb-0',
  isSmallHeading
    ? 'text-[3.6rem] sm:text-24 md:text-[clamp(3rem,5.36vw_-_1.11rem,4.2rem)] lg:text-[clamp(4.2rem,5.51vw_-_1.27rem,7rem)]'
    : 'text-[4.2rem] sm:text-28 md:text-[clamp(4rem,7.59vw_-_1.83rem,5.7rem)] lg:text-[clamp(5.7rem,6.1vw_-_.35rem,8.8rem)]',
);
export const headingMobile = (textOnLeft: boolean) => cnb(
  'sm:hidden mb-20 w-4/5',
  textOnLeft ? 'ml-0 mr-auto' : 'mr-0 ml-auto',
);

export const body = (textOnLeft: boolean) => cnb(
  'grow mb-48 sm:mb-0 sm:max-w-[55%] sm:text-14 md:text-15 lg:text-16 xl:leading-snug xl:text-20 2xl:text-23',
  textOnLeft ? 'sm:pr-20 xl:pr-30' : 'sm:pl-20 xl:pl-30',
);

export const textColors = {
  white: 'text-white',
  black: 'text-gc-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'mt-[50vw] mb-26 h-14 lg:h-16 xl:h-20 2xl:h-24 max-w-full w-200 xl:w-300 2xl:w-[35rem] sm:my-16 xl:my-36 2xl:my-48';

export const ctaLink = 'inline-block stretched-link w-fit rs-mt-0 -mb-2 text-current';
