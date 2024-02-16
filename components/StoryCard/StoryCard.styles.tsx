import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean) => cnb(
  '@container relative z-10 mx-auto', {
  'max-w-300 sm:max-w-400 md:max-w-full': !isHorizontal,
  'max-w-700 lg:max-w-none': isHorizontal,
  },
);

export const cardWrapper = (isHorizontal: boolean) => cnb(
  'relative group', {
  'grid lg:grid-cols-2 bg-black-true/50': isHorizontal,
  '@200:text-15 @250:text-17 @280:!type-0 @md:!text-26': !isHorizontal,
  },
);

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover w-full h-full group-hocus-within:scale-105 transition-transform';

export const contentWrapper = (isHorizontal: boolean) => cnb({
  'rs-pr-4 rs-py-4': isHorizontal,
});
export const heading = (hasTabColor: boolean, isHorizontal: boolean, isSmallHeading: boolean) => cnb('text-current', {
  'border-l-[1.2rem] xl:border-l-[1.8rem] @200:border-l-[1.2rem] @xs:border-l-[1.8rem]': hasTabColor,
  '@200:pl-12 @xs:pl-21 @200:pr-08em @320:pr-1em': hasTabColor && !isHorizontal,
  'mt-06em rs-mb-neg1 pr-08em xl:pr-1em pl-12 xl:pl-21': !isHorizontal,
  'rs-pb-2 mb-0 rs-pl-2': isHorizontal,
  'type-3': !isHorizontal && !isSmallHeading,
  'type-2': !isHorizontal && isSmallHeading,
  'fluid-type-4 xl:fluid-type-5': isHorizontal && !isSmallHeading,
  'fluid-type-3 xl:fluid-type-4': isHorizontal && isSmallHeading,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display *:mr-12 last:*:ml-0 mr-18 ml-36', {
  '@200:ml-24 @xs:ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';

export const body = (isHorizontal: boolean) => cnb('', {
  'border-l-[1.2rem] xl:border-l-[1.8rem] @200:border-l-[1.2rem] @xs:border-l-[1.8rem] rs-pl-2' : isHorizontal,
  'pl-12 xl:pl-21 @200:pl-12 @xs:pl-21 pr-08em xl:pr-1em @200:pr-08em @320:pr-1em ml-12 xl:ml-18 @200:ml-12 @xs:ml-18': !isHorizontal,
});
