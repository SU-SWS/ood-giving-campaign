import { cnb } from 'cnbuilder';

export const button = 'rounded-full flex items-center justify-center w-36 h-36 md:w-44 md:h-44 border-2 border-gc-black text-gc-black hocus-visible:border-digital-red-light hocus-visible:bg-digital-red-light hocus-visible:text-white transition-colors';

export const flexbox = (isTop?: boolean) => cnb('border-gc-black',
  isTop ? 'border-b-2 rs-pb-0' : 'border-t-2 rs-pt-0',
);

export const heading = 'mb-0';

export const buttonWrapper = 'gap-6 md:gap-12 list-unstyled *:mb-0';

export const copiedTextBubble = 'text-15 absolute -ml-36 aria-hidden:mt-0 -mt-34 py-6 px-12 rounded-full bg-gc-black transition-all aria-hidden:opacity-0 opacity-100 delay-300 pointer-events-none';
