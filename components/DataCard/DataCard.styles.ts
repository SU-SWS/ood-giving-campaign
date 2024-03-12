import { cnb } from 'cnbuilder';

export const animateWrapper = 'h-full';
// Use border-black-50/50 which works well on both light and dark backgrounds
export const root = 'relative overflow-hidden size-full break-words border-l-2 border-black-50/50';

export const flex = 'h-full';
export const content = (
  hasBarColor?: boolean,
) => cnb('rs-pl-2', {
  'border-l-[1.4rem] md:border-l-[2rem]': hasBarColor,
});

export const heading = 'rs-mb-3 ml-22 whitespace-pre-line mt-auto';
export const body = '*:*:leading-snug';
export const cta = 'rs-mt-2';
