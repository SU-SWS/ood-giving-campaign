import { cnb } from 'cnbuilder';

export const root = 'relative';

export const image = (renderTwoImages: boolean) => cnb(
  'size-full',
  renderTwoImages ? 'hidden lg:block' : '',
);
export const mobileImage = 'size-full lg:hidden';
export const captionWrapper = 'mt-06em';
export const caption = 'caption *:leading-display mt-08em max-w-prose-wide';
