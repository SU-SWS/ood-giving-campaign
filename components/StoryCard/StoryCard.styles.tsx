import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean, isListView: boolean) => cnb(
  '@container relative z-10 mx-auto', {
  'max-w-300 sm:max-w-400 md:max-w-full': !isHorizontal && !isListView,
  'max-w-600 lg:max-w-none': isHorizontal && !isListView,
  'max-w-300 sm:max-w-none': isListView,
  },
);

export const cardWrapper = (isHorizontal: boolean, isListView: boolean) => cnb(
  'relative group', {
  'grid lg:grid-cols-2 bg-black-true/50': isHorizontal && !isListView,
  'grid sm:grid-cols-[3fr_5fr] lg:grid-cols-[3fr_7fr] 2xl:grid-cols-[1fr_3fr] items-start': isListView,
  '@200:text-15 @250:text-17 @280:!type-0 @md:!text-26': !isHorizontal && !isListView,
  },
);

export const imageWrapper = 'transition-all aspect-w-1 aspect-h-1 overflow-hidden';

export const image = 'object-cover size-full group-hocus-within:scale-105 transition-transform';

export const contentWrapper = (isHorizontal: boolean, isListView: boolean) => cnb({
  'rs-pr-4 rs-pt-4 pb-50 md:rs-py-4': isHorizontal && !isListView,
  'pt-20 md:pt-30 xl:pt-45 2xl:pt-48': isListView,
});
export const heading = (isHorizontal: boolean, isSmallHeading: boolean, isListView: boolean) => cnb('text-current', {
  'mt-06em rs-mb-neg1 pr-20 xl:pr-24 pl-12 xl:pl-21 @200:pl-12 @xs:pl-21 @200:pr-08em @320:pr-1em border-l-[1.2rem] xl:border-l-[1.8rem] @200:border-l-[1.2rem] @xs:border-l-[1.8rem]': !isHorizontal && !isListView, // Vertical card
  'rs-pb-2 mb-0 rs-pl-1 xl:rs-pl-2 border-l-[1.2rem] sm:border-l-[1.8rem]': isHorizontal && !isListView, // Horizontal card
  'rs-pb-0 mb-0 pl-20 xl:pl-38 border-l-[1.2rem] xl:border-l-[1.8rem]': isListView, // List card
  'type-3': !isHorizontal && !isListView && !isSmallHeading, // Vertical + regular heading
  'type-2': !isHorizontal && !isListView && isSmallHeading, // Vertical + small heading
  'fluid-type-4 lg:type-3 xl:fluid-type-4 2xl:fluid-type-5': isHorizontal && !isSmallHeading && !isListView, // Horizontal + regular heading
  'type-3 2xl:fluid-type-4': (isHorizontal && isSmallHeading && !isListView) || isListView, // Horizontal + small heading or list view
  'xl:max-w-[30ch]': isListView,
});

export const headingLink = 'stretched-link no-underline !font-bold !leading-tight focus-visible:after:outline focus-visible:after:outline-offset-2';

export const body = (isHorizontal: boolean, isListView: boolean) => cnb('max-w-prose', {
  'big-paragraph leading-snug border-l-[1.2rem] sm:border-l-[1.8rem] rs-pl-1 xl:rs-pl-2' : isHorizontal && !isListView,
  'text-09em md:type-0 2xl:text-26 leading-display 2xl:leading-snug border-l-[1.2rem] xl:border-l-[1.8rem] pl-20 xl:pl-38': isListView,
  'gc-card leading-display pl-12 xl:pl-21 @200:pl-12 @xs:pl-21 pr-20 xl:pr-24 @200:pr-20 @320:pr-24 ml-12 xl:ml-18 @200:ml-12 @xs:ml-18': !isHorizontal && !isListView,
});

export const taxonomy = (isHorizontal: boolean, isListView: boolean) => cnb('flex flex-wrap gap-10 list-unstyled leading-display', {
  'rs-mt-2 xl:rs-mt-4 ml-32 sm:ml-38 md:ml-44 xl:ml-[5.4rem] 2xl:ml-[5.6rem]': isHorizontal && !isListView,
  'mt-18 lg:mt-36 2xl:mt-38 ml-32 xl:ml-[5.6rem]': isListView,
  'rs-mt-0 mr-20 sm:ml-24': !isHorizontal && !isListView,
});
export const taxonomyItem = 'inline-block mb-0';
export const taxonomyLink = 'relative z-20';
