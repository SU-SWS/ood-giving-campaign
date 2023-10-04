import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden break-words';
export const blurWrapper = 'w-full h-full backdrop-blur-md';

export const grid = 'w-full';

export const contentWrapper = (imageOnLeft: boolean) => cnb('relative px-[6vw] py-[8vw]', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
});

export const headingWrapper = '-mt-1em rs-mb-5';
export const heading = (isSmallHeading: boolean) => cnb('mb-0 fluid-type-7', {
  'mt-01em md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]': isSmallHeading,
  'mt-01em md:fluid-type-9': !isSmallHeading,
});

export const customHeading = 'flex flex-col mb-0 children:block';
export const customHeadingText = (font: 'druk' | 'serif', isSmallHeading: boolean) => cnb('hyphens-auto first:ml-0 last:mr-0', {
  'fluid-type-7': font === 'druk',
  'md:fluid-type-9' : font === 'druk' && !isSmallHeading,
  'md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]' : font === 'druk' && isSmallHeading,
  'mx-01em md:mx-03em mt-01em fluid-type-4 md:fluid-type-5 font-semibold md:font-normal': font === 'serif',
  'md:type-4 3xl:fluid-type-5' : font === 'serif' && isSmallHeading,
});

export const cta = 'rs-mt-4';

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full bg-gc-black bg-no-repeat bg-cover bg-center px-[6vw] py-[8vw] mt-30 md:mt-50 lg:mt-0 shrink-0', {
  'lg:order-first': imageOnLeft,
  '': !imageOnLeft,
});
export const imageInnerWrapper = 'h-full w-full';
export const image = 'h-full w-full max-h-[100rem] object-cover object-center hidden lg:block';
export const imageMobile = 'h-full w-full object-cover object-center lg:hidden';
