import { cnb } from 'cnbuilder';

export const root = 'su-relative su-w-full su-group su-h-full';

export const cardWrapper = 'su-group';

export const topWrapper = 'su-relative';

export const imageWrapper = 'su-transition-all su-aspect-w-3 su-aspect-h-4 su-overflow-hidden';

export const image = 'su-object-cover su-w-full su-h-full group-hover:su-scale-105 group-focus-within:su-scale-105 su-transition-transform';

export const heading = 'su-absolute su-bottom-0 su-bg-black-true/60 su-text-white su-rs-p-1 su-mb-0 group-hover:su-bg-black-true/70 su-transition-colors su-text-shadow-sm';

export const bodyWrapper = 'su-grow su-bg-gc-black su-text-black-10 su-rs-pt-2 su-rs-pr-1';

export const body = (hasTabColor: boolean) => cnb('su-pl-38 su-text-current', {
  'su-border-l-[1.8rem]': hasTabColor,
});

export const cta = 'su-bg-gc-black su-text-white hocus:su-text-white su-stretched-link su-no-underline su-rs-py-1 su-rs-pr-1';

export const arrowIcon = 'su-block su-mb-0 su-mt-auto su-w-34 su-ml-auto su-mr-0  group-hover:su-translate-x-03em group-focus-within:su-translate-x-03em su-will-change-transform';
