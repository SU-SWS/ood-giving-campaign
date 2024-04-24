import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean, isListView: boolean) => cnb(
  '@container relative z-10 mx-auto', {
  'max-w-300 sm:max-w-400 md:max-w-full': !isHorizontal,
  'max-w-600 lg:max-w-none': isHorizontal && !isListView,
  'max-w-300 sm:max-w-none': isListView,
  },
);

export const cardWrapper = (isHorizontal: boolean, isListView: boolean) => cnb(
  'relative group', {
  'grid lg:grid-cols-2 bg-black-true/50': isHorizontal && !isListView,
  'grid sm:grid-cols-[3fr_5fr] lg:grid-cols-[3fr_7fr] 2xl:grid-cols-[1fr_3fr] items-start': isHorizontal && isListView,
  '@200:text-15 @250:text-17 @280:!type-0 @md:!text-26': !isHorizontal,
  },
);

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover size-full group-hocus-within:scale-105 transition-transform';

export const contentWrapper = (isHorizontal: boolean, isListView: boolean) => cnb({
  'rs-pr-4 rs-py-4': isHorizontal && !isListView,
  'pt-20 md:pt-30 xl:pt-45 2xl:pt-48': isHorizontal && isListView,
});
export const heading = (hasTabColor: boolean, isHorizontal: boolean, isSmallHeading: boolean, isListView: boolean) => cnb('text-current', {
  'border-l-[1.2rem] xl:border-l-[1.8rem] @200:border-l-[1.2rem] @xs:border-l-[1.8rem]': hasTabColor && !isListView,
  'border-l-[1.2rem] xl:border-l-[1.8rem]': hasTabColor && isListView,
  '@200:pl-12 @xs:pl-21 @200:pr-08em @320:pr-1em': hasTabColor && !isHorizontal,
  'mt-06em rs-mb-neg1 pr-08em xl:pr-1em pl-12 xl:pl-21': !isHorizontal,
  'rs-pb-2 mb-0 rs-pl-2': isHorizontal && !isListView,
  'rs-pb-0 mb-0 pl-20 xl:pl-38': isHorizontal && isListView,
  'type-3': !isHorizontal && !isSmallHeading,
  'type-2': !isHorizontal && isSmallHeading,
  'fluid-type-4 2xl:fluid-type-5': isHorizontal && !isSmallHeading && !isListView,
  'fluid-type-3 2xl:fluid-type-4': (isHorizontal && isSmallHeading && !isListView) || isListView,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight';

export const taxonomy = (hasTabColor: boolean) => cnb('list-unstyled leading-display *:mr-12 last:*:ml-0 mr-18 ml-36', {
  '@200:ml-24 @xs:ml-36': hasTabColor,
});

export const taxonomyItem = 'inline-block mb-0';

export const body = (isHorizontal: boolean, isListView: boolean) => cnb('max-w-prose', {
  'big-paragraph leading-snug border-l-[1.2rem] xl:border-l-[1.8rem] @200:border-l-[1.2rem] @xs:border-l-[1.8rem] rs-pl-2' : isHorizontal && !isListView,
  'text-09em md:type-0 2xl:text-26 leading-display 2xl:leading-snug border-l-[1.2rem] xl:border-l-[1.8rem] pl-20 xl:pl-38': isListView,
  'gc-card leading-display pl-12 xl:pl-21 @200:pl-12 @xs:pl-21 pr-08em xl:pr-1em @200:pr-08em @320:pr-1em ml-12 xl:ml-18 @200:ml-12 @xs:ml-18': !isHorizontal && !isListView,
});
