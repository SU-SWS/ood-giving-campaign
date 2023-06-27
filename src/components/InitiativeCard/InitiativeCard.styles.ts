import { cnb } from 'cnbuilder';

export const root = 'su-group su-relative su-w-full su-h-full';

export const topWrapper = 'su-relative';

export const imageWrapper = 'su-transition-all su-aspect-w-1 su-aspect-h-1 sm:su-aspect-w-3 sm:su-aspect-h-4 su-overflow-hidden';

export const image = 'su-object-cover su-w-full su-h-full group-hover:su-scale-105 group-focus-within:su-scale-105 su-transition-transform';

export const heading = 'su-absolute su-bottom-0 su-w-full su-bg-black-true/60 su-text-white su-rs-p-1 su-mb-0 group-hover:su-bg-black-true/70 su-transition-all su-text-shadow-sm group-hover:su-rs-py-2 group-focus-within:su-rs-py-2';

export const bodyWrapper = 'su-grow su-bg-gc-black su-text-black-10 su-rs-pt-2 su-rs-pr-1';

export const body = (hasTabColor: boolean) => cnb('su-rs-pl-2 su-text-current', {
  'su-border-l-[1.4rem] md:su-border-l-[2rem]': hasTabColor,
});

export const cta = 'su-inline-block su-bg-gc-black su-text-white hocus:su-text-white su-stretched-link su-no-underline su-rs-py-1 su-rs-pr-1';

export const arrowIcon = 'su-inline-block su-mb-0 su-mt-auto su-w-34 su-ml-auto su-mr-0  group-hover:su-translate-x-03em';
