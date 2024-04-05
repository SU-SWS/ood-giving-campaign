import { cnb } from 'cnbuilder';
import { type BgColorType } from '@/components/Container';

export const root = 'relative overflow-hidden break-words';

export const grid = 'relative w-full';

export const contentWrapper = (imageOnLeft: boolean, isParallax: boolean) => cnb('relative px-20 sm:px-30 md:px-50 rs-py-6 lg:px-[6vw]', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
  // If no parallax, we don't need to match the thick vertical padding on the image frame on the content side
  'lg:py-[8vw]': !isParallax,
});

export const headingWrapper = '-mt-04em md:-mt-1em 2xl:mt-[-1.5em] rs-mb-5';

/**
 * The pb-03em class in heading and customHeading is to compensate for the line-height:1 in the heading which
 * causes the bottom of the heading not showing the background mask
 */
export const heading = (
  isSmallHeading: boolean,
  hasBgImage: boolean,
  isMaskedHeading: boolean,
  bgColor: BgColorType,
) => cnb(
  'mb-0 pb-03em fluid-type-8 hyphens-auto', {
  'lg:fluid-type-6 2xl:fluid-type-7 4xl:fluid-type-8': isSmallHeading,
  'md:fluid-type-9': !isSmallHeading,
  'bg-clip-text xl:bg-fixed bg-cover bg-center bg-no-repeat': hasBgImage && isMaskedHeading,
  'text-black/40': hasBgImage && isMaskedHeading && bgColor !== 'black',
  'text-white/20': hasBgImage && isMaskedHeading && bgColor === 'black',
});
export const customHeading = (hasBgImage: boolean, isMaskedHeading: boolean, bgColor: BgColorType) => cnb(
  'flex flex-col mb-0 pb-03em *:block', {
  'bg-clip-text xl:bg-fixed bg-cover bg-center bg-no-repeat': hasBgImage && isMaskedHeading,
  'text-black/40': hasBgImage && isMaskedHeading && bgColor !== 'black',
  'text-white/20': hasBgImage && isMaskedHeading && bgColor === 'black',
});
export const customHeadingText = (font: 'druk' | 'serif') => cnb('hyphens-auto first:ml-0 last:mr-0', {
  'mt-01em font-semibold md:font-normal': font === 'serif',
});

export const body = '*:*:leading-snug *:*:max-w-prose rs-mt-3 2xl:type-1 text-balance';
export const metadata = 'rs-mt-4 *:mx-auto';
export const date = 'block text-center';
export const cta = 'rs-mt-3';

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full bg-gc-black bg-no-repeat bg-cover bg-center px-[6vw] py-[8vw]', {
  'lg:order-first': imageOnLeft,
});
export const imageInnerWrapper = 'size-full';
export const image = 'size-full object-cover object-center hidden lg:block';
export const imageMobile = 'size-full object-cover object-center lg:hidden';

// Parallax enabled styles
export const parallaxWrapper = 'relative aspect-w-3 aspect-h-4';
export const parallaxBgImage = (prefersReducedMotion: boolean) => cnb('relative w-full object-cover', {
  'lg:h-[120%] lg:-mt-[10%]': !prefersReducedMotion, // No background image parallax for < LG
});
export const parallaxForegroundWrapper = 'absolute top-0 right-0 z-10';
export const parallaxImage = (prefersReducedMotion: boolean) => cnb('relative size-full object-cover', {
  //'mt-[7%] lg:mt-[3vw]': !prefersReducedMotion,
});
