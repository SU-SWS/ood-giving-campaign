import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden break-words';

export const grid = 'w-full';

export const contentWrapper = (imageOnLeft: boolean) => cnb('relative px-20 sm:px-30 md:px-50 rs-py-6 lg:px-[6vw] lg:py-[8vw]', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
});

export const headingWrapper = '-mt-1em 2xl:mt-[-1.5em] rs-mb-5';

/**
 * The pb-03em class in heading and customHeading is to compensate for the line-height:1 in the heading which
 * causes the bottom of the heading not showing the background mask
 */
export const heading = (isSmallHeading: boolean, hasBgImage: boolean) => cnb(
  'mb-0 pb-03em fluid-type-8 xl:bg-fixed bg-cover bg-center bg-no-repeat hyphens-auto', {
  'lg:fluid-type-6 2xl:fluid-type-7 4xl:fluid-type-8': isSmallHeading,
  'md:fluid-type-9': !isSmallHeading,
  'bg-clip-text text-black/40': hasBgImage,
});
export const customHeading = (hasBgImage: boolean) => cnb(
  'flex flex-col mb-0 pb-03em *:block xl:bg-fixed bg-cover bg-center bg-no-repeat', {
  'bg-clip-text text-black/40': hasBgImage,
});
export const customHeadingText = (font: 'druk' | 'serif', isSmallHeading: boolean) => cnb('hyphens-auto first:ml-0 last:mr-0', {
  'fluid-type-8': font === 'druk',
  'md:fluid-type-9 lg:fluid-type-8 2xl:fluid-type-9 4xl:fluid-type-10' : font === 'druk' && !isSmallHeading,
  'lg:fluid-type-6 2xl:fluid-type-7 4xl:fluid-type-8' : font === 'druk' && isSmallHeading,
  'mt-01em fluid-type-4 md:fluid-type-5 4xl:fluid-type-6 font-semibold md:font-normal': font === 'serif',
  'md:fluid-type-4 3xl:fluid-type-5' : font === 'serif' && isSmallHeading,
});

export const body = '*:*:leading-snug rs-mt-3 type-1 text-balance';
export const metadata = 'rs-mt-4 *:mx-auto';
export const date = 'block text-center';
export const cta = 'rs-mt-3';

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full bg-gc-black bg-no-repeat bg-cover bg-center px-[6vw] py-[8vw]', {
  'lg:order-first': imageOnLeft,
});
export const imageInnerWrapper = 'h-full w-full';
export const image = '';
export const imageMobile = 'h-full w-full object-cover object-center lg:hidden';
