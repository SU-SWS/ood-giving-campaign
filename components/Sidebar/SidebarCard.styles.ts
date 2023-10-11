import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';

export const content = (
  hasBgColor?: boolean,
  hasBarColor?: boolean,
  barOnRight?: boolean,
) => cnb('', {
  'rs-py-1': hasBgColor,
  'rs-py-0': !hasBgColor,
  'rs-pr-1 rs-pl-3 border-r-[1.4rem] xl:border-r-[2rem]': hasBarColor && barOnRight,
  'rs-pl-1 rs-pr-3 border-l-[1.4rem] xl:border-l-[2rem]': hasBarColor && !barOnRight,
  'rs-px-3': !hasBarColor,
});
