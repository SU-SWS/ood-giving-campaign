import { cnb } from 'cnbuilder';

export const bgColors = {
  white: 'bg-white',
  black: 'bg-gc-black',
}
export type BgColorType = keyof typeof bgColors;

export const textColors = {
  white: 'text-white',
  black: 'text-gc-black',
};
export type TextColorType = keyof typeof textColors;

export const borderColors = {
  white: 'border-white',
  black: 'border-gc-black',
}

export const root = (textColor: TextColorType) => cnb(
  'rs-px-4 rs-py-2 border-[0.5em]',
  borderColors[textColor],
);
