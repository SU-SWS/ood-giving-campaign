import { cnb } from 'cnbuilder';

export const root = (
  isMinimal?: boolean,
  addDarkOverlay?: boolean,
  quoteOnRight?: boolean,
  hasBar?: boolean,
) => cnb('relative break-words', {
  'max-w-[90%] sm:max-w-[80%] mx-auto md:max-w-full': isMinimal && !addDarkOverlay,
  'bg-gc-black/50 backdrop-blur-sm': addDarkOverlay && !isMinimal,
  'rs-pl-4': !quoteOnRight && (!isMinimal || addDarkOverlay),
  'rs-pr-4': quoteOnRight && (!isMinimal || addDarkOverlay),
  'rs-px-4': addDarkOverlay && !hasBar,
});
export const content = (hasBar?: boolean, quoteOnRight?: boolean) => cnb('', {
  '' : !hasBar,
  'border-r-[1.4rem] 2xl:border-r-[2rem] rs-pr-2' : hasBar && !quoteOnRight,
  'border-l-[1.4rem] 2xl:border-l-[2rem] rs-pl-2' : hasBar && quoteOnRight,
});
export const teaserWrapper = 'w-fit gap-9';
export const quoteMark = (isLargeTeaser?: boolean) => cnb('shrink-0 leading-[0]', {
  'text-[clamp(16rem,7.46vw+13.31rem,26rem)] mt-[clamp(5.7rem,2.61vw+4.76rem,9.2rem)]': !isLargeTeaser,
  'text-[clamp(17rem,11.19vw+12.97rem,32rem)] mt-[clamp(6rem,4.03vw+4.55rem,11.4rem)]': isLargeTeaser,
});
export const teaser = 'rs-mb-0 grow-0 w-fit max-w-[25ch]';
export const body = (isLargeBody?: boolean) => cnb('mt-02em first:mt-0', {
  'max-w-[55ch]': !isLargeBody,
  'max-w-[40ch]': isLargeBody,
});
export const source = 'rs-mt-1 whitespace-pre-line';
