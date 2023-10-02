import { cnb } from 'cnbuilder';

export const root = 'relative bg-no-repeat bg-cover bg-center overflow-hidden break-words';
export const blurWrapper = 'w-full h-full backdrop-blur-md';

export const grid = 'w-full rs-py-8';

export const contentWrapper = (imageOnLeft: boolean) => cnb('relative z-10', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
});

export const headingWrapper = (imageOnLeft: boolean) => cnb('lg:rs-mt-7 rs-mb-5', {
  'lg:w-[120%] lg:-ml-[20%] 3xl:w-auto 3xl:-ml-200 lg:mr-0' : imageOnLeft,
});
export const headingInnerWrapper = (imageOnLeft: boolean) => cnb('pl-10 pr-20 sm:pl-30 sm:pr-20 md:pl-30 md:pr-50', {
  'border-l-[1rem] md:border-l-[2rem] lg:border-l-0 lg:border-r-[3rem] xl:border-r-[4rem] lg:pl-0 lg:pr-50 xl:pr-60': imageOnLeft,
  'border-l-[1rem] md:border-l-[2rem] lg:border-l-[3rem] xl:border-l-[4rem] lg:pl-50 xl:pl-60 lg:pr-0 3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[120%]': !imageOnLeft,
});
export const heading = (imageOnLeft: boolean, isSmallHeading: boolean) => cnb('mb-0 -mt-01em fluid-type-7', {
  '3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[130%]': !imageOnLeft,
  'mt-01em md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]': isSmallHeading,
  'mt-01em md:fluid-type-9': !isSmallHeading,
});

export const customHeading = (imageOnLeft: boolean) => cnb('flex flex-wrap gap-x-[1em] items-center mb-0 -mt-05em lg:-mt-08em children:inline-block', {
  '3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[130%]': !imageOnLeft,
});
export const customHeadingText = (font: 'druk' | 'serif', isSmallHeading: boolean) => cnb('first:ml-0 last:mr-0', {
  'fluid-type-7': font === 'druk',
  'md:fluid-type-9' : font === 'druk' && !isSmallHeading,
  'md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]' : font === 'druk' && isSmallHeading,
  'mx-03em mt-01em fluid-type-5': font === 'serif',
  'md:type-4 3xl:fluid-type-5' : font === 'serif' && isSmallHeading,
});

export const bodyWrapper = (imageOnLeft: boolean) => cnb('cc w-full', {
  '3xl:pr-[calc(100%-750px)] lg:pl-60': imageOnLeft,
  '3xl:pl-[calc(100%-750px)] lg:pr-60': !imageOnLeft,
});

export const cta = 'rs-mt-4';

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full mt-30 md:mt-50 lg:mt-0 shrink-0 cc', {
  'lg:order-first 3xl:pl-[calc(100%-750px)] lg:pr-0': imageOnLeft,
  ' 3xl:pr-[calc(100%-750px)] lg:pl-0': !imageOnLeft,
});
export const image = 'h-full w-full object-cover object-center hidden lg:block';
export const imageMobile = 'h-full w-full object-cover object-center lg:hidden';
