import { cnb } from 'cnbuilder';

export const root = 'relative';

export const content = (hasHeroImage: boolean, isVerticalHero: boolean, isLeftImage: boolean) => cnb({
  'rs-mt-10 xl:mt-[32.7rem]': !hasHeroImage,
  'lg:order-2': isLeftImage && isVerticalHero && hasHeroImage,
  'mt-40 lg:mb-0 xl:rs-mt-8': isVerticalHero && hasHeroImage,
  'rs-mb-6': hasHeroImage,
  'ml-0 rs-mt-9': !isVerticalHero && hasHeroImage,
});

export const tabSection = (hasTabColor: boolean, isVerticalHero: boolean, isLeftImage: boolean) => cnb(
  'rs-mb-0 cc', {
    'border-l-[1rem] sm:border-l-[1.4rem] md:border-l-[2rem] lg:border-l-[2.6rem]': hasTabColor,
    '3xl:pl-0 3xl:pr-[calc(100%-75rem)]': isVerticalHero && isLeftImage,
    '3xl:pr-0 3xl:pl-[calc(100%-75rem)]': isVerticalHero && !isLeftImage,
  },
);

export const heading = (
  hasHeroImage: boolean,
  hasTabColor: boolean,
  isVerticalHero: boolean,
  isLeftImage: boolean,
) => cnb(
  'mb-0',
  isVerticalHero && hasHeroImage ? 'xl:max-w-700 type-5 lg:fluid-type-5' : 'xl:max-w-1200 type-5 lg:fluid-type-6', {
    '-ml-10 sm:-ml-18 lg:-ml-26': hasTabColor,
    '3xl:ml-[7.4rem]': isVerticalHero && hasHeroImage && isLeftImage && hasTabColor,
    '3xl:ml-100': isVerticalHero && hasHeroImage && isLeftImage && !hasTabColor,
  },
);

export const storyInfo = (
  hasHeroImage: boolean,
  hasTabColor: boolean,
  isVerticalHero: boolean,
  isLeftImage: boolean,
) => cnb(
  'rs-mt-1 gc-card',
  isVerticalHero && hasHeroImage ? 'xl:max-w-700' : 'xl:max-w-1200', {
    '-ml-10 sm:-ml-18 lg:-ml-26': hasTabColor,
    '3xl:ml-[7.4rem]': isVerticalHero && hasHeroImage && isLeftImage && hasTabColor,
    '3xl:ml-100': isVerticalHero && hasHeroImage && isLeftImage && !hasTabColor,
  },
);

export const chipDek = (hasHeroImage: boolean, isVerticalHero: boolean, isLeftImage: boolean) => cnb(
  'cc', {
    '3xl:ml-100 3xl:pl-0 3xl:pr-[calc(100%-75rem)]': isVerticalHero && hasHeroImage && isLeftImage,
    '3xl:pr-0 3xl:pl-[calc(100%-75rem)]': isVerticalHero && hasHeroImage && !isLeftImage,
  },
);

export const body = (hasHeroImage: boolean, isVerticalHero: boolean) => cnb(
  'rs-mt-4 mb-0',
  isVerticalHero && hasHeroImage ? 'xl:max-w-[56rem]' : 'max-w-prose',
);

export const taxonomy = 'list-unstyled leading-display gap-x-19 gap-y-8';
export const taxonomyItem = 'inline-block';

export const imageCrops = {
  '1x1': '1200x1200',
  '2x1': '2000x1000',
  '3x2': '2100x1400',
  '5x8': '1000x1600',
  '16x9': '2000x1125',
  'free': '2000x0',
};
export type ImageCropType = keyof typeof imageCrops;

export const mobileImageCrops = {
  '1x1': '1000x1000',
  '2x1': '1000x500',
  '3x2': '1200x800',
  '5x8': '1000x1600',
  '16x9': '1600x900',
  'free': '1000x0',
};

export const imageWrapper = (isVerticalHero: boolean, isLeftImage: boolean) => cnb('rounded-br-[16vw] overflow-hidden', {
  'lg:order-1': isLeftImage && isVerticalHero,
});

export const image = (renderTwoImages: boolean) => cnb(
  'w-full h-full',
  renderTwoImages ? 'hidden lg:block' : '',
);
export const mobileImage = 'w-full h-full lg:hidden';

export const caption = (isVerticalHero: boolean, isLeftImage: boolean) => cnb('text-current rs-mt-0 cc type-0', {
  'lg:pr-0': isVerticalHero && isLeftImage,
  'lg:pl-0': isVerticalHero && !isLeftImage,
});
export const captionText = (isVerticalHero: boolean, isLeftImage: boolean) => cnb(isVerticalHero ? 'max-w-prose-wide' : 'max-w-900', {
  '3xl:pl-100 mr-auto': isVerticalHero && isLeftImage,
  'text-right 3xl:pr-100 ml-auto ': isVerticalHero && !isLeftImage,
});
