import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden @container';

export const content = (
  hasBgColor?: boolean,
  hasBarColor?: boolean,
  barOnRight?: boolean,
) => cnb('', {
  'rs-py-1': hasBgColor,
  'rs-py-0': !hasBgColor,
  'rs-pr-2 rs-pl-3 border-r-[1.4rem] xl:border-r-[2rem] @2xl:pr-75 @2xl:pl-95': hasBarColor && barOnRight,
  'rs-pl-2 rs-pr-3 border-l-[1.4rem] xl:border-l-[2rem] @2xl:pl-75 @2xl:pr-95': hasBarColor && !barOnRight,
  'rs-px-3': !hasBarColor,
});
