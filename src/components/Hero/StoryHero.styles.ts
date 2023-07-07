import { cnb } from 'cnbuilder';

export const imageWrapper = (isVerticalHero: boolean, isLeftImage: boolean) => cnb('su-rounded-br-[16vw] su-overflow-hidden', {
  'su-aspect-w-2 su-aspect-h-1': !isVerticalHero,
  'su-aspect-w-1 su-aspect-h-1 lg:su-aspect-w-5 lg:su-aspect-h-8': isVerticalHero,
  'md:su-order-2': !isLeftImage && isVerticalHero,
});

export const image = 'su-object-cover su-w-full su-h-full';

export const content = (hasHeroImage: boolean, isVerticalHero: boolean, isLeftImage: boolean) => cnb({
  'su-rs-mt-10 xl:su-mt-[32.7rem]': !hasHeroImage,
  'md:su-order-1': !isLeftImage && isVerticalHero && hasHeroImage,
  'su-mt-40 xl:su-rs-mt-8': isVerticalHero && hasHeroImage,
  'su-mls-0 su-rs-mt-8': !isVerticalHero && hasHeroImage,
});

export const tabSection = (hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  hasTabColor ? 'su-border-l-[1rem] sm:su-border-l-[1.8rem] lg:su-border-l-[2.6rem]' : '',
  isVerticalHero ? 'su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:su-px-100' : 'su-cc',
);

export const heading = (hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  'su-rs-mb-1',
  hasTabColor ? 'su--ml-10 sm:su--ml-18 lg:su--ml-26' : '',
  isVerticalHero ? 'xl:su-max-w-700' : 'xl:su-max-w-1200',
);

export const body = (isVerticalHero: boolean) => cnb(
  'su-rs-mt-4 su-mb-0',
  isVerticalHero ? 'xl:su-max-w-[56rem]' : 'su-max-w-prose',
);
