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
export const teaser = 'rs-mb-0 grow-0 w-fit max-w-[25ch]';
export const body = (isLargeBody?: boolean) => cnb('mt-02em first:mt-0', {
  'max-w-[55ch]': !isLargeBody,
  'max-w-[40ch]': isLargeBody,
});
export const source = 'rs-mt-1 whitespace-pre-line';
