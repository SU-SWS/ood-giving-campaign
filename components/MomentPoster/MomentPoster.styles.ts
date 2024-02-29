import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative w-full z-10';
export const contentWrapper = 'lg:rs-pr-9 ml-0';
export const heading = '2xl:whitespace-pre-line -mt-01em rs-mb-2 xl:max-w-1200';
export const body = 'max-w-prose mx-auto rs-mt-3 *:*:text-center text-balance mb-0';
export const imageWrapper = 'self-end lg:self-start shrink-0';
export const image = 'rs-mt-3 lg:mt-0 w-250 xl:w-[36rem]';
export const bgImage = 'absolute top-0 left-0 w-full h-full object-cover';
export const overlay = (hasBgGradient?: boolean) => cnb('absolute top-0 left-0 w-full h-full z-10', hasBgGradient ? 'bg-gradient-to-t via-50%' : '');
