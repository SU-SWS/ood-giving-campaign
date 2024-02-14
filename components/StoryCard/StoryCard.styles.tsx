import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean) => cnb(
  'relative z-10 mx-auto', {
  '@container max-w-[32rem] sm:max-w-400 md:max-w-full': !isHorizontal,
  },
);

export const cardWrapper = (isHorizontal: boolean) => cnb(
  'relative group @200:text-15 @250:text-17 @280:!type-0 @md:!text-26', {
  'grid lg:grid-cols-2 bg-black-true/50': isHorizontal,
  },
);

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover w-full h-full group-hocus-within:scale-105 transition-transform';

export const contentWrapper = '';
export const heading = (hasTabColor: boolean, isHorizontal: boolean) => cnb(' text-current pr-08em xl:pr-1em pl-12 xl:pl-21 border-l-[1.2rem] xl:border-l-[1.8rem]', {
  '@200:border-l-[1.2rem] @xs:border-l-[1.8rem] @200:pl-12 @xs:pl-21 @200:pr-08em @320:pr-1em': hasTabColor,
  'mt-06em rs-mb-neg1': !isHorizontal,
  'rs-mb-2': isHorizontal,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display *:mr-12 last:*:ml-0 mr-18 ml-36', {
  '@200:ml-24 @xs:ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';

export const body = 'pl-12 xl:pl-21 @200:pl-12 @xs:pl-21 pr-08em xl:pr-1em @200:pr-08em @320:pr-1em ml-12 xl:ml-18 @200:ml-12 @xs:ml-18';
