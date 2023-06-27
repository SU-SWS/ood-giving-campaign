import { cnb } from 'cnbuilder';

export const root = 'su-relative su-z-10 sm:su-max-w-500 md:su-max-w-full su-mx-auto';

export const cardWrapper = 'su-relative su-group';

export const imageWrapper = 'su-transition-all su-aspect-w-3 su-aspect-h-4 su-overflow-hidden';

export const image = 'su-object-cover su-w-full su-h-full group-hover:su-scale-105 group-focus-within:su-scale-105 su-transition-transform';

export const heading = '';

export const bodyWrapper = 'su-bg-gc-black su-text-black-10 su-rs-pt-2';

export const body = (hasTabColor: boolean) => cnb('su-pr-30 su-rs-mb-neg1 su-text-current', {
  'su-border-l-[1.8rem] su-pl-38': hasTabColor,
});

export const headingLink = 'su-stretched-link su-no-underline !su-font-bold !su-leading-tight';

export const tab = 'su-h-24 su-w-70 su-rs-my-0';

export const ctaLink = 'su-inline-block su-w-fit su-stretched-link su-rs-mt-1 hocus:su-bg-gradient-to-l hocus:su-from-transparent hocus:su-to-digital-red';

export const taxonomy = (hasTabColor: boolean) => cnb('su-list-unstyled su-leading-display children:su-mr-12 last:children:su-ml-0 su-pr-18', {
  'su-ml-36': hasTabColor,
});

export const taxonomyItem = 'su-inline-block su-mb-0';
