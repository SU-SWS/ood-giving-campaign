import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden @container';

export const content = (
  hasBgColor?: boolean,
  hasBarColor?: boolean,
  barOnRight?: boolean,
) => cnb('', {
  'rs-py-1': hasBgColor,
  'rs-py-0': !hasBgColor,
  'pr-0': !hasBgColor && hasBarColor && !barOnRight,
  'pl-0': !hasBgColor && hasBarColor && barOnRight,
  'rs-pl-3 @2xl:pl-95': hasBgColor && hasBarColor && barOnRight,
  'rs-pr-3 @2xl:pr-95': hasBgColor && hasBarColor && !barOnRight,
  'border-l-[1.4rem] xl:border-l-[2rem] rs-pl-2 @2xl:pl-75': hasBarColor && !barOnRight,
  'border-r-[1.4rem] xl:border-r-[2rem] rs-pr-2 @2xl:pr-75': hasBarColor && barOnRight,
  'rs-px-3': !hasBarColor && hasBgColor,
  'px-0': !hasBarColor && !hasBgColor,
});
