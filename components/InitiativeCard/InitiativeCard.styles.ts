import { cnb } from 'cnbuilder';

export type InitiativeCardImageAspectRatio = '3x4' | '1x1';

export const root = 'group relative size-full @container';

export const topWrapper = 'relative @320:text-18 @sm:text-21 @md:text-23';

export const imageWrapper = (imageAspectRatio: InitiativeCardImageAspectRatio) => cnb('bg-gc-black transition-all aspect-w-1 aspect-h-1 overflow-hidden', {
  'sm:aspect-w-3 sm:aspect-h-4': imageAspectRatio === '3x4',
});

export const image = 'object-cover backface-hidden size-full group-hocus-within:scale-105 transition-transform will-change-transform';

export const heading = 'absolute bottom-0 w-full bg-black-true/60 text-white rs-p-1 mb-0 group-hocus-within:bg-black-true/70 group-hocus-within:border-y-4 border-transparent group-hocus-within:border-white transition-all text-shadow-sm group-hocus-within:rs-py-2';

export const bodyWrapper = 'grow bg-gc-black text-black-10 rs-pt-2 rs-pr-1 @320:text-18 @sm:text-21 @md:text-23';

export const body = (hasTabColor: boolean) => cnb('rs-pl-1 text-current', {
  'border-l-[1.4rem] md:border-l-[2rem]': hasTabColor,
});

export const cta = 'group/cta inline-block bg-gc-black text-white hocus:text-white stretched-link no-underline hocus:no-underline rs-py-1 rs-pr-1';
export const linkText = 'text-19 md:text-25 mr-0 ml-auto last:children:underline';
export const lastword = 'underline decoration-digital-red-light underline-offset-4 group-hocus/cta:decoration-white';
export const icon = (hasLinkText?: boolean) => cnb('inline-block mb-0 mt-auto w-20 md:w-24 mr-0',
  hasLinkText? 'ml-10' : 'ml-auto',
);
