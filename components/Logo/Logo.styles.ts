import { cnb } from 'cnbuilder';

export type LogoVariantType = 'horizontal' | 'stacked';

export const logoColors = {
  black: 'fill-gc-black',
  white: 'fill-white',
  current: 'fill-current',
};
export type LogoColorType = keyof typeof logoColors;

export const link = (color: LogoColorType) => cnb('group block no-underline focus-visible:ring-2', {
  'focus-visible:ring-gc-black': color === 'black',
  'focus-visible:ring-white': color === 'white',
});

// Giving Logo styles
export const root = 'lockup no-underline inline-block font-normal';
export const logo = 'text-[1.43em] leading-half mt-[0.27em]';
export const bar = 'w-1 h-1em mx-03em';
export const text = 'text-[0.95em] sm:text-[1.1em] mt-[0.25em]';
export const textColor = {
  default: 'text-gc-black',
  white: 'text-white',
};
export const barColor = {
  default: 'bg-gc-black',
  white: 'bg-white',
};
