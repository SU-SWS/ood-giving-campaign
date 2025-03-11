import { cnb } from 'cnbuilder';

export const verticalAlignments = {
  top: 'justify-start',
  center: 'justify-center',
  bottom: 'justify-end',
};
export type QuoteVerticalAlignType = keyof typeof verticalAlignments;

export const root = (
  isMinimal: boolean,
  addDarkOverlay: boolean,
  barOnLeft: boolean,
  hasBar: boolean,
) => cnb('relative break-words flex flex-col lg:max-w-prose-wide lg:ml-0', {
  'max-w-[90%] sm:max-w-4/5 mx-auto md:max-w-full h-full': isMinimal && !addDarkOverlay,
  'bg-gc-black/50 backdrop-blur-sm h-full *:mb-0 text-white': addDarkOverlay && !isMinimal,
  'rs-pl-4': !barOnLeft && (!isMinimal || addDarkOverlay),
  'rs-pr-4': barOnLeft && (!isMinimal || addDarkOverlay),
  'rs-px-4': addDarkOverlay && !hasBar,
});
export const content = (hasBar: boolean, barOnLeft: boolean) => cnb({
  'border-r-[1.4rem] 2xl:border-r-[2rem] pr-20 md:pr-36 2xl:pr-38' : hasBar && !barOnLeft,
  'border-l-[1.4rem] 2xl:border-l-[2rem] pl-20 md:pl-36 2xl:pl-38' : hasBar && barOnLeft,
});
export const quoteMark = (isLargeTeaser: boolean) => cnb('leading-[0]', {
  'text-[clamp(16rem,7.46vw+13.31rem,26rem)] mt-[clamp(5.7rem,2.61vw+4.76rem,9.2rem)]': !isLargeTeaser,
  'text-[clamp(17rem,11.19vw+12.97rem,32rem)] mt-[clamp(6rem,4.03vw+4.55rem,11.4rem)]': isLargeTeaser,
});
export const teaser = 'rs-mb-0 grow-0 w-fit';
export const body = (hasTeaser: boolean) => cnb('whitespace-pre-line', hasTeaser && 'mt-02em');
export const source = 'rs-mt-1 whitespace-pre-line';
