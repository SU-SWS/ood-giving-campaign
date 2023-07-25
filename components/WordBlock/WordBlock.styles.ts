import { cnb } from 'cnbuilder';

export const bgColors = {
  white: 'bg-white',
  black: 'bg-gc-black',
};
export type BgColorType = keyof typeof bgColors;

export const textColors = {
  white: 'text-white',
  black: 'text-gc-black',
};
export type TextColorType = keyof typeof textColors;

export const borderColors = {
  white: 'border-white',
  black: 'border-gc-black',
};

export const text = (textColor: TextColorType, isLarge: boolean) => cnb(
  'w-fit rs-px-4 rs-py-1 border-6 md:border-8 lg:border-[1.2rem] type-1 sm:type-3',
  borderColors[textColor],
  isLarge ? 'md:fluid-type-5' : '',
);
