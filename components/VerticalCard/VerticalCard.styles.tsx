import { cnb } from 'cnbuilder';

export const root = 'relative z-10 sm:max-w-500 md:max-w-full mx-auto';

export const cardWrapper = 'relative group';

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover w-full h-full group-hocus-within:scale-105 transition-transform';

export const heading = (hasTabColor: boolean) => cnb('rs-mt-1 pr-18 rs-mb-neg1 text-current', {
  'border-l-[1.8rem] px-18': hasTabColor,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const tab = 'h-24 w-70 rs-my-0';

export const ctaLink = 'inline-block w-fit stretched-link rs-mt-1 hocus:bg-gradient-to-l hocus:from-transparent hocus:to-digital-red';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display children:mr-12 last:children:ml-0 pr-18', {
  'ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';
