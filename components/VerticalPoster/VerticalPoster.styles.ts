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
export const heading = (isSmallHeading: boolean, hasBgImage: boolean, isMaskedHeading: boolean) => cnb(
  'mb-0 pb-03em fluid-type-8 hyphens-auto', {
  'lg:fluid-type-6 2xl:fluid-type-7 4xl:fluid-type-8': isSmallHeading,
  'md:fluid-type-9': !isSmallHeading,
  'bg-clip-text text-black/40 xl:bg-fixed bg-cover bg-center bg-no-repeat': hasBgImage && isMaskedHeading,
});
export const customHeading = (hasBgImage: boolean, isMaskedHeading: boolean) => cnb(
  'flex flex-col mb-0 pb-03em *:block', {
  'bg-clip-text text-black/40 xl:bg-fixed bg-cover bg-center bg-no-repeat': hasBgImage && isMaskedHeading,
});
export const customHeadingText = (font: 'druk' | 'serif') => cnb('hyphens-auto first:ml-0 last:mr-0', {
  'mt-01em font-semibold md:font-normal': font === 'serif',
});

export const body = '*:*:leading-snug rs-mt-3 type-1 text-balance';
export const metadata = 'rs-mt-4 *:mx-auto';
export const date = 'block text-center';
export const cta = 'rs-mt-3';

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full bg-gc-black bg-no-repeat bg-cover bg-center px-[6vw] py-[8vw]', {
  'lg:order-first': imageOnLeft,
});
export const imageInnerWrapper = 'size-full';
export const image = 'size-full object-cover object-center hidden lg:block';
export const imageMobile = 'size-full object-cover object-center lg:hidden';
