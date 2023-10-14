import { cnb } from 'cnbuilder';

export const root = 'relative max-w-[60ch]';
export const content = (hasBarColor?: boolean, quoteOnRight?: boolean) => cnb('', {
  '' : !hasBarColor,
  'border-r-[1.4rem] 2xl:border-r-[2rem] rs-pr-2' : hasBarColor && !quoteOnRight,
  'border-l-[1.4rem] 2xl:border-l-[2rem] rs-pl-2' : hasBarColor && quoteOnRight,
});
