import { cnb } from 'cnbuilder';

export const imageWrapper = (isVerticalHero: boolean) => cnb('su-transition-all su-rounded-br-[16vw] su-overflow-hidden', {
  'su-aspect-w-2 su-aspect-h-1': !isVerticalHero,
  'su-aspect-w-5 su-aspect-h-8': isVerticalHero,
});

export const image = 'su-object-cover su-w-full su-h-full';

export const tabSection = (hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  hasTabColor ? 'su-border-l-[1rem] sm:su-border-l-[1.8rem] lg:su-border-l-[2.6rem]' : '',
  isVerticalHero ? 'su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:su-px-100' : 'su-cc',
);

export const heading = (hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  'su-mb-02em',
  hasTabColor ? 'su--ml-10 sm:su--ml-18 lg:su--ml-26' : '',
  isVerticalHero ? 'xl:su-max-w-700' : 'xl:su-max-w-1200',
);

export const body = (isVerticalHero: boolean) => cnb(
  'su-rs-mt-4 su-mb-0',
  isVerticalHero ? 'xl:su-max-w-[56rem]' : 'su-max-w-prose',
);
