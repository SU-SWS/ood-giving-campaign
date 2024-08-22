import { cnb } from 'cnbuilder';

export const heading = (hasIntro: boolean) => cnb(!hasIntro ? 'mb-0' : '');
export const intro = '*:intro-text *:max-w-prose *:leading-snug md:*:leading-cozy';
export const latest = 'relative';
export const skiplink = 'hidden lg:block focus:block focus:w-fit focus:relative focus:bg-cardinal-red -top-60 focus:top-36 focus:mx-auto';
export const featuredGrid = 'gap-y-45 md:gap-y-90 2xl:gap-y-95';
export const otherGrid = 'gap-y-45 md:gap-y-90 2xl:gap-y-95';
export const showAllButton = 'rs-mt-6 w-fit mx-auto';
