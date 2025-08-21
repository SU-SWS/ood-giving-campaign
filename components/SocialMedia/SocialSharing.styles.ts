import { cnb } from 'cnbuilder';

export const button = (isDark: boolean) => cnb('rounded-full flex items-center justify-center w-36 h-36 md:w-44 md:h-44 border-2 hocus-visible:border-digital-red-light hocus-visible:bg-digital-red-light hocus-visible:text-white transition-colors',
  isDark ? 'border-white text-white' : 'border-gc-black text-gc-black',
);

export const flexbox = (isTop: boolean, isDark: boolean) => cnb(
  isTop ? 'border-b-2 rs-pb-0' : 'border-t-2 rs-pt-0',
  isDark ? 'border-white' : 'border-gc-black',
);

export const heading = 'mb-0';

export const buttonWrapper = 'gap-6 md:gap-12 list-unstyled *:mb-0';

export const copiedTextBubble = (isDark: boolean) => cnb('text-15 absolute -ml-36 aria-hidden:mt-0 -mt-80 py-6 px-12 rounded-full transition-all aria-hidden:opacity-0 opacity-100 delay-300 pointer-events-none',
  isDark ? 'bg-white' : 'bg-gc-black',
);
