import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean) => cnb('@container relative w-full mx-auto break-words max-w-[29rem]', {
  'sm:max-w-300 lg:max-w-[35rem]': !isHorizontal,
  'sm:max-w-550 md:max-w-600 xl:max-w-1000 2xl:max-w-1200': isHorizontal,
});
export const cardInner = (isHorizontal: boolean) => cnb('relative size-full aspect-w-1 aspect-h-2', {
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});

export const cardFront = 'absolute size-full top-0 left-0';
export const imageWrapper = (isHorizontal: boolean) => cnb('overflow-hidden aspect-w-1 aspect-h-2', {
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});
export const image = 'w-full h-full object-cover';
export const overlay = 'absolute top-0 left-0 size-full bg-gradient-to-t via-black-true/20 from-black-true/90';

export const info = (isHorizontal: boolean) => cnb('rs-px-1 pb-150 absolute size-full bottom-0 left-0 mb-0', {
  'sm:pb-200 xl:pb-120': isHorizontal,
});
export const heading = (isHorizontal: boolean) => cnb('mb-02em mt-auto text-30', {
  '2xl:text-[3.6rem]': !isHorizontal,
  'sm:fluid-type-4': isHorizontal,
});
export const subhead = 'text-19 md:text-21';

export const cardContent = (isHorizontal: boolean) => cnb('absolute size-full top-0 left-0 aria-hidden:opacity-0 opacity-100 backdrop-blur-sm transition-opacity duration-500 bg-gradient-to-b from-gc-black/60 to-gc-black/90 *:*:*:!mb-1em', {
  'px-20 py-30 @330:py-48 @330:px-36' : !isHorizontal,
  'rs-pt-3 rs-px-3': isHorizontal,
});
export const contentWrapper = (isHorizontal: boolean) => cnb('', {
  'xl:columns-2 gap-x-38 xl:first:*:*:*:mt-0': isHorizontal,
});

export const button = 'group absolute size-full top-0 left-0';
export const icon = (isHorizontal: boolean) => cnb('absolute bottom-40 right-36 text-white w-65 h-65 border-2 border-white rounded-full p-16 group-hocus-visible:border-dashed group-aria-expanded:rotate-45 transition-transform', {
  'md:bottom-58 2xl:bottom-61 md:right-45': isHorizontal,
});
