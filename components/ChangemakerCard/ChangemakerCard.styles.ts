import { cnb } from 'cnbuilder';

export const root = (isHorizontal: boolean) => cnb('relative w-full mx-auto break-words', {
  'max-w-[29rem] sm:max-w-300 lg:max-w-[35rem]': !isHorizontal,
  'max-w-[29rem] sm:max-w-full xl:max-w-1000 2xl:max-w-1200': isHorizontal,
});
export const cardInner = (isHorizontal: boolean) => cnb('relative size-full aspect-w-1 aspect-h-2', {
  '': !isHorizontal,
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});

export const cardFront = 'absolute size-full top-0 left-0';
export const imageWrapper = (isHorizontal: boolean) => cnb('overflow-hidden aspect-w-1 aspect-h-2', {
  '': !isHorizontal,
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});
export const info = 'rs-px-1 pb-150 absolute size-full bottom-0 left-0 mb-0';
export const heading = 'mb-02em mt-auto';

export const cardContent = 'absolute size-full top-0 left-0 px-20 py-30 3xl:py-48 3xl:px-36 aria-hidden:opacity-0 opacity-100 backdrop-blur-sm transition-opacity duration-500 bg-gradient-to-b from-gc-black/60 to-gc-black/90 gc-changemaker *:*:*:!mb-1em';

export const button = 'group absolute size-full top-0 left-0';
export const icon = 'absolute bottom-40 right-36 text-white w-65 h-65 border-2 border-white rounded-full p-16 group-hocus-visible:border-dashed group-aria-expanded:rotate-45 transition-transform';
