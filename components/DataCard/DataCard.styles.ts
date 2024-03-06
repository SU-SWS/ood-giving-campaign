import { cnb } from 'cnbuilder';

// Use border-black-50/50 which works well on both light and dark backgrounds
export const root = 'relative overflow-hidden break-words @container border-l-2 border-black-50/50';

export const content = (
  hasBarColor?: boolean,
) => cnb('rs-ml-2', {

});

export const heading = 'rs-mb-3 ml-22';
export const body = '*:*:leading-snug';
export const cta = 'rs-mt-2';
