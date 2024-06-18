import { cnb } from 'cnbuilder';

export const root = 'relative bg-no-repeat bg-cover overflow-hidden break-words';

export const bgImage = 'absolute top-0 left-0 size-full object-cover';

export const blurWrapper = (
  addBgBlur?: boolean,
  addDarkOverlay?: boolean,
  type?: 'hero' | 'poster',
  bgColor?: 'black' | 'white',
) => cnb(
  'relative size-full z-10', {
    'backdrop-blur-md' : addBgBlur,
    'lg:from-black-true/20 lg:to-black-true/70': type === 'poster' && addDarkOverlay && bgColor === 'black',
    'lg:bg-none': type === 'poster' && bgColor === 'black' && !addDarkOverlay,
    'bg-white/80' : type === 'hero' && bgColor === 'white',
  },
);

export const grid = 'w-full';

export const contentWrapper = (
  type?: 'hero' | 'poster',
  hasHeroImage?: boolean, // Hero image is the foreground image
  imageOnLeft?: boolean,
  isTwoCol?: boolean,
) => cnb('relative z-10', {
  'rs-mt-10': !hasHeroImage && !isTwoCol && type === 'hero',
  'rs-mt-5': !hasHeroImage && isTwoCol && type === 'hero',
  'rs-mt-7': hasHeroImage && type === 'hero',
  'lg:rs-mt-6': type === 'poster',
  'lg:order-last': imageOnLeft && isTwoCol,
  'lg:order-first': !imageOnLeft && isTwoCol,
});

export const superhead = (imageOnLeft?: boolean, isTwoCol?: boolean) => cnb('cc rs-mb-1 w-full text-shadow-sm', {
  'lg:pl-40 2xl:pl-60 3xl:pr-[calc(100%-750px)]': imageOnLeft && isTwoCol,
  'lg:pr-40 2xl:pr-60 3xl:pl-[calc(100%-750px)]': !imageOnLeft && isTwoCol,
});

export const headingWrapper = (
  imageOnLeft?: boolean,
  headingFont?: 'druk' | 'serif',
  isTwoCol?: boolean,
) => cnb('rs-mb-7', {
  'lg:mr-0 lg:w-[120%] lg:-ml-[20%] 3xl:w-auto 3xl:-ml-200': imageOnLeft && headingFont === 'druk' && isTwoCol,
});
export const headingInnerWrapper = (
  imageOnLeft?: boolean,
  headingFont?: 'druk' | 'serif',
  isTwoCol?: boolean,
) => cnb('w-full border-l-[1rem] sm:border-l-[1.4rem] md:border-l-[2rem]', {
  'lg:border-l-0 lg:border-r-[3rem] xl:border-r-[4rem] lg:pl-0 lg:pr-50 xl:pr-60': imageOnLeft && isTwoCol,
  'pl-10 pr-20 sm:pl-16 sm:pr-30 md:pl-30 md:pr-50': isTwoCol,
  'lg:border-l-[3rem] xl:border-l-[4rem] cc pl-10 sm:pl-16 md:pl-30 lg:pl-50 xl:pl-60 3xl:pl-[calc(50%-750px-40px)]' : !isTwoCol,
  'lg:border-l-[3rem] xl:border-l-[4rem] lg:pl-50 xl:pl-60 lg:pr-0 3xl:pl-[calc(100%-750px-40px)]': !imageOnLeft && isTwoCol,
  'lg:w-[140%] xl:w-[120%]': !imageOnLeft && headingFont === 'druk' && isTwoCol,
  'lg:pl-40 2xl:pl-60': imageOnLeft && headingFont === 'serif',
  'lg:pr-40 2xl:pr-60': !imageOnLeft && headingFont === 'serif',
});
export const heading = (
  imageOnLeft?: boolean,
  isSmallHeading?: boolean,
  headingFont?: 'druk' | 'serif',
  isTwoCol?: boolean,
) => cnb('mb-0 -mt-01em', {
  '3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[130%]': !imageOnLeft && headingFont === 'druk' && isTwoCol,
  'fluid-type-7 md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]': isSmallHeading && headingFont === 'druk',
  'fluid-type-7 md:fluid-type-9': !isSmallHeading && headingFont === 'druk',
  'fluid-type-5 lg:fluid-type-4 xl:fluid-type-5 2xl:fluid-type-6 xl:max-w-1200 lg:hyphens-auto 3xl:hyphens-none' : headingFont === 'serif' && !isSmallHeading,
  'fluid-type-5 lg:fluid-type-4 xl:fluid-type-5 xl:max-w-1200 lg:hyphens-auto 3xl:hyphens-none' : headingFont === 'serif' && isSmallHeading,
});

export const customHeading = (
  imageOnLeft?: boolean,
  headingFont?: 'druk' | 'serif',
  isTwoCol?: boolean,
) => cnb('flex flex-wrap gap-x-[0.6em] md:gap-x-[1em] items-center mb-0 -mt-02em md:-mt-05em lg:-mt-08em *:inline-block', {
  '3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[130%]': !imageOnLeft && headingFont === 'druk' && isTwoCol,
});
export const customHeadingText = (font?: 'druk' | 'serif', isSmallHeading?: boolean) => cnb('hyphens-auto first:ml-0 last:mr-0', {
  'fluid-type-7': font === 'druk',
  'md:fluid-type-9' : font === 'druk' && !isSmallHeading,
  'md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]' : font === 'druk' && isSmallHeading,
  'mx-01em mt-01em fluid-type-4 md:fluid-type-5 font-semibold md:font-normal': font === 'serif',
  'md:type-4 3xl:fluid-type-5' : font === 'serif' && isSmallHeading,
});

export const bodyWrapper = (imageOnLeft?: boolean, isTwoCol?: boolean) => cnb('cc w-full', {
  '3xl:pr-[calc(100%-750px)] lg:pl-40 2xl:pl-60': imageOnLeft && isTwoCol,
  '3xl:pl-[calc(100%-750px)] lg:pr-40 2xl:pr-60': !imageOnLeft && isTwoCol,
  '*:max-w-[50ch]': !isTwoCol,
});
export const dek = 'text-shadow-sm';
export const metadata = 'rs-mt-4';
export const taxonomy = 'flex flex-col gap-12 rs-mt-1 list-unstyled leading-display';
export const taxonomyItem = 'inline-block mb-0';
export const cta = 'rs-mt-4';

export const imageWrapper = (imageOnLeft?: boolean, isTwoCol?: boolean, hasImage?: boolean) => cnb('w-full cc', {
  'lg:order-first 3xl:pl-[calc(100%-750px)] lg:pr-0': imageOnLeft && isTwoCol,
  '3xl:pr-[calc(100%-750px)] lg:pl-0': !imageOnLeft && isTwoCol,
  'lg:mt-0' : isTwoCol,
  'rs-mt-6' : hasImage,
});
export const imageInnerWrapper = 'h-full w-full';
export const image = 'h-full w-full object-cover object-center';
