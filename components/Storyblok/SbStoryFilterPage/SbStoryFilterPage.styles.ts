import { cnb } from 'cnbuilder';

export const heading = (hasIntro: boolean) => cnb(!hasIntro ? 'mb-0' : '');
export const intro = '*:intro-text *:max-w-prose';
export const latest = 'relative bg-gc-black';
export const skiplink = 'hidden lg:block focus:block focus:w-fit focus:relative focus:bg-cardinal-red -top-60 focus:top-36 focus:mx-auto';
