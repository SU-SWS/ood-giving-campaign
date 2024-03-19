import { cnb } from 'cnbuilder';

export const root = 'relative';

export const superhead = 'cc rs-mb-1 w-full text-shadow-sm';
export const heading = (
  isSmallHeading?: boolean,
  headingFont?: 'druk' | 'serif',
) => cnb('mb-0 -mt-01em', {
  'fluid-type-7 md:fluid-type-8 lg:fluid-type-7 3xl:fluid-type-8 4xl:text-[17.1rem]': isSmallHeading && headingFont === 'druk',
  'fluid-type-7 md:fluid-type-9': !isSmallHeading && headingFont === 'druk',
  'fluid-type-5 lg:fluid-type-4 xl:fluid-type-5 2xl:fluid-type-6 xl:max-w-1200 lg:hyphens-auto 3xl:hyphens-none' : headingFont === 'serif' && !isSmallHeading,
  'fluid-type-5 lg:fluid-type-4 xl:fluid-type-5 xl:max-w-1200 lg:hyphens-auto 3xl:hyphens-none' : headingFont === 'serif' && isSmallHeading,
});


export const image = (renderTwoImages: boolean) => cnb(
  'size-full',
  renderTwoImages ? 'hidden lg:block' : '',
);
export const mobileImage = 'size-full lg:hidden';
export const captionWrapper = 'mt-06em';
export const caption = 'caption *:leading-display mt-08em max-w-prose-wide';
