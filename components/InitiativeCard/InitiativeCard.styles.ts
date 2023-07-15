import { cnb } from 'cnbuilder';

export const root = 'group relative w-full h-full @container';

export const topWrapper = 'relative @xs:text-18 @sm:text-21 @md:text-23';

export const imageWrapper = 'bg-gc-black transition-all aspect-w-1 aspect-h-1 sm:aspect-w-3 sm:aspect-h-4 overflow-hidden';

export const image = 'object-cover backface-hidden w-full h-full group-hocus-within:scale-105 transition-transform will-change-transform';

export const heading = 'absolute bottom-0 w-full bg-black-true/60 text-white rs-p-1 mb-0 group-hocus-within:bg-black-true/70 group-hocus-within:border-y-4 border-transparent group-hocus-within:border-white transition-all text-shadow-sm group-hocus-within:rs-py-2';

export const bodyWrapper = 'grow bg-gc-black text-black-10 rs-pt-2 rs-pr-1 @xs:text-18 @sm:text-21 @md:text-23';

export const body = (hasTabColor: boolean) => cnb('rs-pl-1 text-current', {
  'border-l-[1.4rem] md:border-l-[2rem]': hasTabColor,
});

export const cta = 'inline-block bg-gc-black text-white hocus:text-white stretched-link no-underline rs-py-1 rs-pr-1';

export const arrowIcon = 'inline-block mb-0 mt-auto w-34 ml-auto mr-0  group-hover:translate-x-03em';
