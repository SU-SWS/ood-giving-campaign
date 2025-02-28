import { cnb } from 'cnbuilder';

export const root = 'relative';

export const contentWrapper = (hasVideo: boolean) => cnb('mt-40 md:-mt-60 xl:mt-0', hasVideo && 'rs-pb-3');
export const superhead = (isLightHero: boolean) => cnb('cc mb-04em w-full', !isLightHero && 'text-shadow-sm');
export const heading = (
  isSmallHeading?: boolean,
  headingFont?: 'druk' | 'serif',
) => cnb('mb-0 text-balance mx-auto whitespace-pre-line', {
  'fluid-type-7 max-w-1400': headingFont === 'druk',
  'md:fluid-type-8': isSmallHeading && headingFont === 'druk',
  'md:fluid-type-9': !isSmallHeading && headingFont === 'druk',
  'fluid-type-5 md:fluid-type-7 max-w-1200': headingFont === 'serif',
  'xl:fluid-type-8 ': headingFont === 'serif' && !isSmallHeading,
});
export const dek = 'max-w-900 text-balance mx-auto rs-mt-3';
export const metadata = 'rs-mt-4';
export const taxonomy = 'gap-12 rs-mt-1 list-unstyled leading-display';
export const taxonomyItem = 'inline-block mb-0';
export const image = 'rs-mt-4 w-full';
export const mobileImage = 'size-full lg:hidden';
export const captionWrapper = 'mt-06em';
export const caption = 'caption *:leading-display mt-08em max-w-prose-wide';
