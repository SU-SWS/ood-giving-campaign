import { cnb } from 'cnbuilder';

export const root = '@container relative z-10 max-w-[32rem] sm:max-w-400 md:max-w-full mx-auto';

export const cardWrapper = 'relative group @200:text-15 @250:text-17 @280:!type-0 @md:!text-26';

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover w-full h-full group-hocus-within:scale-105 transition-transform';

export const heading = (hasTabColor: boolean) => cnb('mt-06em pr-08em pl-1em rs-mb-neg1 text-current', {
  '@200:border-l-[1.2rem] @xs:border-l-[1.8rem] @200:pl-05em @200:pr-08em @320:pr-1em': hasTabColor,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const ctaLink = 'inline-block w-fit stretched-link rs-mt-1 hocus:bg-gradient-to-l hocus:from-transparent hocus:to-digital-red';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display children:mr-12 last:children:ml-0 mr-18', {
  '@200:ml-24 @xs:ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';
