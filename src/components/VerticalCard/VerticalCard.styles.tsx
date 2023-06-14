import { cnb } from 'cnbuilder';

export const root = 'su-relative su-z-10 sm:su-max-w-500 md:su-max-w-full su-mx-auto';

export const cardWrapper = 'su-relative su-group';

export const imageWrapper = 'su-transition-all su-aspect-w-1 su-aspect-h-1 su-rounded-none group-hover:su-rounded-br-[20rem] group-focus-within:su-rounded-br-[20rem] su-overflow-hidden';

export const image = 'su-object-cover su-w-full su-h-full';

export const heading = (tabColor) => cnb('su-rs-mt-1 su-pr-18 su-rs-mb-neg1 su-text-current', {
  'su-border-l-[1.8rem] su-px-18': tabColor,
});

export const headingLink = 'su-stretched-link su-no-underline !su-font-bold !su-leading-tight';

export const tab = 'su-h-[2.4rem] su-w-70 su-rs-my-0';

export const ctaLink = 'su-inline-block su-w-fit su-stretched-link su-rs-mt-1 hocus:su-bg-gradient-to-l hocus:su-from-transparent hocus:su-to-digital-red';

export const taxonomy = 'su-list-unstyled su-space-x-12 su-ml-36';

export const taxonomyItem = 'su-inline-block';
