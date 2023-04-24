import { dcnb } from 'cnbuilder';

export const root = 'su-bg-white su-bg-no-repeat su-bg-cover su-bg-top';

export const panel = 'su-border-white su-bg-no-repeat su-bg-cover su-bg-top';
export const panelLeft = dcnb(panel, 'su-border-b xl:su-border-b-0 xl:su-border-r su-pt-60');
export const panelRight = dcnb(panel, 'su-border-t xl:su-border-t-0 xl:su-border-l su-pb-60');

export const posterContentRoot = (hasImage: boolean) => dcnb(
  'su-relative su-overflow-hidden su-border-white sm:su-max-w-[53rem] md:su-max-w-[60rem] lg:su-max-w-[75rem] su-px-20 sm:su-px-60 2xl:su-px-126 su-min-h-[45rem] md:su-min-h-[60rem] xl:su-min-h-[75rem] su-pb-60 md:su-pb-100 su-rs-pt-6',
  hasImage ? 'su-text-white' : '',
);
export const posterContentLeft = 'su-rounded-tl-[12rem] sm:su-rounded-tl-[20rem] lg:su-rounded-tl-[30rem] su-border-t-2 su-border-l-2 su-ml-20 sm:su-ml-auto xl:su-ml-100 3xl:su-ml-auto xl:su-pb-[18rem]';
export const posterContentRight = 'su-rounded-br-[12rem] sm:su-rounded-br-[20rem] lg:su-rounded-br-[30rem] su-border-r-2 su-border-b-2 su-mr-20 sm:su-mr-auto xl:su-mr-100 3xl:su-mr-auto xl:su-pb-[11.8rem]';

export const content = 'su-relative su-w-full su-break-words su-z-10';

export const heading = (hasImage: boolean) => dcnb('su-rs-mb-3 su-max-w-400', hasImage ? 'su-text-shadow-sm' : '');

export const body = 'su-rs-mb-2 last:su-mb-0';

export const ctaWrapper = 'children:su-rs-mb-1 last:children:su-mb-0 su-mr-0';
