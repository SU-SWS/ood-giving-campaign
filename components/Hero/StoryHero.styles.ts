import { cnb } from 'cnbuilder';

export const root = 'pt-80 md:pt-120 lg:pt-150 relative';

export const content = (hasHeroImage: boolean, isVerticalHero: boolean, isLeftImage: boolean) => cnb({
  'rs-mt-10 xl:mt-[32.7rem]': !hasHeroImage,
  'lg:order-2': isLeftImage && isVerticalHero && hasHeroImage,
  'mt-40 lg:mb-0 xl:rs-mt-8': isVerticalHero && hasHeroImage,
  'rs-mb-6': hasHeroImage,
  'ml-0 rs-mt-9': !isVerticalHero && hasHeroImage,
});

export const tabSection = (hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  'rs-mb-0',
  hasTabColor ? 'border-l-[1rem] sm:border-l-[1.4rem] md:border-l-[2rem] lg:border-l-[2.6rem]' : '',
  isVerticalHero ? 'px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100' : 'cc',
);

export const heading = (hasHeroImage: boolean, hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  'mb-0',
  hasTabColor ? '-ml-10 sm:-ml-18 lg:-ml-26' : '',
  isVerticalHero && hasHeroImage ? 'xl:max-w-700' : 'xl:max-w-1200',
);

export const byline = (hasHeroImage: boolean, hasTabColor: boolean, isVerticalHero: boolean) => cnb(
  'rs-mt-1',
  hasTabColor ? '-ml-10 sm:-ml-18 lg:-ml-26' : '',
  isVerticalHero && hasHeroImage ? 'xl:max-w-700' : 'xl:max-w-1200',
);

export const body = (hasHeroImage: boolean, isVerticalHero: boolean) => cnb(
  'rs-mt-4 mb-0',
  isVerticalHero && hasHeroImage ? 'xl:max-w-[56rem]' : 'max-w-prose',
);

export const taxonomy = 'list-unstyled leading-display gap-x-19 gap-y-8';
export const taxonomyItem = 'inline-block';

export const imageWrapper = (isVerticalHero: boolean, isLeftImage: boolean) => cnb('rounded-br-[16vw] overflow-hidden', {
  'aspect-w-2 aspect-h-1': !isVerticalHero,
  'aspect-w-1 aspect-h-1 lg:aspect-w-5 lg:aspect-h-8': isVerticalHero,
  'lg:order-1': isLeftImage && isVerticalHero,
});

export const image = 'object-cover w-full h-full';

export const caption = (isVerticalHero: boolean, isLeftImage: boolean) => cnb('text-current rs-mt-0 cc', {
  'pr-0': isVerticalHero && isLeftImage,
  'pl-0': isVerticalHero && !isLeftImage,
});
export const captionText = (isVerticalHero: boolean, isLeftImage: boolean) => cnb(isVerticalHero ? 'max-w-prose-wide' : 'max-w-900', {
  '3xl:pl-100 mr-auto': isVerticalHero && isLeftImage,
  'text-right 3xl:pr-100 ml-auto ': isVerticalHero && !isLeftImage,
});
