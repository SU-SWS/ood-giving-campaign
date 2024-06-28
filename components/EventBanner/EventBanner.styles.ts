import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';
export const content = 'relative z-10';

export const bgImage = 'absolute top-0 left-0 size-full object-cover';
export const overlay = (hasBgGradient: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');

export const contentWrapper = 'lg:rs-pr-9 ml-0';

export const heading = 'max-w-1000 rs-mb-1';

export const thumbnailWrapper = 'inline-block';
export const thumbnail = 'size-80 sm:size-100 md:size-150 2xl:size-180';

export const body = (isDarktheme: boolean) => cnb('max-w-prose mx-auto rs-mt-4 *:*:leading-snug text-balance mb-0', isDarktheme && 'text-shadow-sm');

export const cta = 'w-fit rs-mt-4';
