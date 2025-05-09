import { cnb } from 'cnbuilder';

export type InitiativeCardImageAspectRatio = '3x4' | '1x1';

export const root = (isHorizontal: boolean) => cnb('group relative size-full max-w-600 mx-auto', {
  'xl:flex-row xl:max-w-[124.2rem]': isHorizontal, // 1242px is the width of 10 of 12 columns at 2XL
  '2xl:max-w-700': !isHorizontal,
});

export const topWrapper = (isHorizontal: boolean) => cnb('relative @320:text-18 @sm:text-21 @md:text-23', {
  'xl:basis-1/2': isHorizontal,
});

export const imageWrapper = (imageAspectRatio: InitiativeCardImageAspectRatio) => cnb('bg-gc-black aspect-w-1 aspect-h-1 size-full overflow-hidden', {
  'sm:aspect-w-3 sm:aspect-h-4': imageAspectRatio === '3x4',
});

export const image = 'object-cover backface-hidden size-full group-hocus-within:scale-105 transition-transform will-change-transform';

export const heading = (isHorizontal: boolean) => cnb('absolute bottom-0 w-full bg-black-true/60 text-white mb-0 group-hocus-within:bg-black-true/60 border-transparent group-hocus-within:border-white transition-all text-shadow-sm rs-p-1 group-hocus-within:rs-py-2', {
  'group-hocus-within:border-y-4': !isHorizontal,
  'xl:rs-px-3 xl:rs-py-2 xl:group-hocus-within:rs-py-3 group-hocus-within:border-y-4 xl:group-hocus-within:border-b-0': isHorizontal,
});

export const bodyWrapper = (isHorizontal: boolean) => cnb('@container grow bg-gc-black text-black-10 rs-pt-2 rs-pr-1 @320:text-18 @sm:text-21 @md:text-23', {
  'xl:basis-1/2 flex flex-col justify-center': isHorizontal,
});

export const body = (hasTabColor: boolean) => cnb('rs-pl-1 text-current', {
  'border-l-[1.4rem] md:border-l-[2rem]': hasTabColor,
});

export const cta = (isHorizontal: boolean) => cnb('group/cta inline-block bg-gc-black text-white hocus:text-white stretched-link no-underline hocus:no-underline rs-py-1 rs-pr-1 hocus-visible:no-underline', {
  'xl:hidden': isHorizontal,
});
export const linkText = 'text-19 md:text-25 mr-0 ml-auto last:children:underline';
export const lastword = 'underline decoration-digital-red-light underline-offset-4 group-hover/cta:decoration-white group-focus-visible/cta:decoration-white';
export const icon = (hasLinkText?: boolean) => cnb('inline-block mb-0 mt-auto w-20 md:w-24 mr-0',
  hasLinkText? 'ml-10' : 'ml-auto',
);

export const horizontalCta = 'stretched-link mx-auto rs-mt-2 hidden xl:block';
