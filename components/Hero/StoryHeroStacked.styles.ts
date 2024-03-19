import { cnb } from 'cnbuilder';

export const root = 'relative';

export const superhead = 'cc mb-04em w-full text-shadow-sm';
export const heading = (
  isSmallHeading?: boolean,
  headingFont?: 'druk' | 'serif',
) => cnb('mb-0 text-balance mx-auto whitespace-pre-line', {
  'fluid-type-7': headingFont === 'druk',
  'md:fluid-type-8': isSmallHeading && headingFont === 'druk',
  'md:fluid-type-9': !isSmallHeading && headingFont === 'druk',
  'fluid-type-5 md:fluid-type-7 xl:max-w-1200 xl:mx-auto': headingFont === 'serif',
  'xl:fluid-type-8 ': headingFont === 'serif' && !isSmallHeading,
});


export const image = (renderTwoImages: boolean) => cnb(
  'size-full',
  renderTwoImages ? 'hidden lg:block' : '',
);
export const mobileImage = 'size-full lg:hidden';
export const captionWrapper = 'mt-06em';
export const caption = 'caption *:leading-display mt-08em max-w-prose-wide';
