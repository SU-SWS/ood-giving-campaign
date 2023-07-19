import { cnb } from 'cnbuilder';

export const root = '@container relative z-10 sm:max-w-500 md:max-w-full mx-auto';

export const cardWrapper = 'relative group @200:text-15 @xs:!type-0';

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover w-full h-full group-hocus-within:scale-105 transition-transform';

export const heading = (hasTabColor: boolean) => cnb('rs-mt-1 pr-18 rs-mb-neg1 text-current', {
  '@200:border-l-[1.2rem] @xs:border-l-[1.8rem] @200:px-12 @xs:px-18': hasTabColor,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const ctaLink = 'inline-block w-fit stretched-link rs-mt-1 hocus:bg-gradient-to-l hocus:from-transparent hocus:to-digital-red';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display children:mr-12 last:children:ml-0 pr-18', {
  'ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';
