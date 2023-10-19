import { cnb } from 'cnbuilder';

export const root = (isAtTop?: boolean, isScrollingBack?: boolean) => cnb(
  'w-full fixed top-0 z-50 transition-colors will-change-transform',
  !isAtTop && isScrollingBack ?
  'bg-gc-black border-b border-b-black-80 h-60 lg:h-[6.8rem]'
  : 'bg-transparent border-b-transparent h-[7.6rem]',
);

// Use a wider centered container (1800px wide at 4XL (2000px) breakpoint)
export const wrapper = (isAtTop?: boolean) => cnb(
  'cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] py-12 transition',
  isAtTop ? 'sm:py-13 lg:py-20' : 'lg:py-11',
);

// Pass in a root style for the lock up to scale everything within proportionally
export const lockup = 'sm:-mt-02em shrink-0 sm:text-17 md:text-22 lg:text-28';
export const ctaWrapper = 'gap-12 xl:gap-20';
