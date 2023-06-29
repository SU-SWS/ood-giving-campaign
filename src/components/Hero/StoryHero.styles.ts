import { cnb } from 'cnbuilder';

export const imageWrapper = (isVerticalHero: boolean) => cnb('su-transition-all su-rounded-br-[20vw] su-overflow-hidden', {
  'su-aspect-w-2 su-aspect-h-1': !isVerticalHero,
  'su-aspect-w-5 su-aspect-h-8': isVerticalHero,
});

export const image = 'su-object-cover su-w-full su-h-full';

export const tabSection = (hasTabColor: boolean) => cnb(
  'su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:su-px-100',
  hasTabColor ? 'su-border-l-[1.8rem] lg:su-border-l-[2.6rem]' : '',
);

export const heading = (hasTabColor: boolean) => cnb(
  'su-mb-02em xl:su-max-w-700',
  hasTabColor ? 'su--ml-18 lg:su--ml-26' : '',
);
