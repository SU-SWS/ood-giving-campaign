import { cnb } from 'cnbuilder';

export const root = (hasBgColor: boolean) => cnb('relative overflow-hidden @container', hasBgColor ? 'text-gc-black backdrop-blur-sm' : '');

export const content = (
  isLightText: boolean,
  hasBgColor: boolean,
  hasBarColor: boolean,
  barOnRight: boolean,
) => cnb(isLightText ? 'text-white' : '', {
  'rs-py-1': hasBgColor,
  'rs-py-2': !hasBgColor,
  'pr-0': !hasBgColor && hasBarColor && !barOnRight,
  'pl-0': !hasBgColor && hasBarColor && barOnRight,
  'rs-pl-2 @sm:pl-48 @2xl:pl-95': hasBgColor && hasBarColor && barOnRight,
  'rs-pr-2 @sm:pr-48 @2xl:pr-95': hasBgColor && hasBarColor && !barOnRight,
  'border-l-[1.4rem] 2xl:border-l-[2rem] rs-pl-1 @2xl:pl-75': hasBarColor && !barOnRight,
  'border-r-[1.4rem] 2xl:border-r-[2rem] rs-pr-1 @2xl:pr-75': hasBarColor && barOnRight,
  'rs-px-2 @sm:px-48': !hasBarColor && hasBgColor,
  'px-0': !hasBarColor && !hasBgColor,
});

export const heading = 'rs-mb-3';
export const cta = 'rs-mt-3';
