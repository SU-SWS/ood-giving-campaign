import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative w-full z-10';

export const bgImage = 'absolute top-0 left-0 w-full h-full object-cover';
export const overlay = (hasBgGradient?: boolean) => cnb('absolute top-0 left-0 w-full h-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');

export const contentWrapper = 'lg:rs-pr-9 ml-0';

export const heading = 'max-w-1000 mx-auto rs-mb-1';
export const headingWrapper = 'mx-auto w-fit gap-02em';

export const thumbnailWrapper = 'inline-block';
export const thumbnail = 'size-[0.75em]';

export const body = 'max-w-prose mx-auto rs-mt-3 *:*:text-center text-balance mb-0 *:*:text-shadow-sm';

export const cta = (isStackedCtas: boolean) => cnb(
  'gap-27 mx-auto w-fit *:mx-auto rs-mt-4', !isStackedCtas && 'md:flex-row',
);
