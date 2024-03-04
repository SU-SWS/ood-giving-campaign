import { cnb } from 'cnbuilder';

export const root = (hasBgColor?: boolean) => cnb('relative overflow-hidden @container', hasBgColor ? 'text-gc-black backdrop-blur-sm' : '');

export const content = (
  hasBarColor?: boolean,
) => cnb('', {

});

export const heading = 'rs-mb-3';
export const cta = 'rs-mt-3';
