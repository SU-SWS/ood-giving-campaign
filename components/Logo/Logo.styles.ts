import { cnb } from 'cnbuilder';

export type LogoVariantType = 'horizontal' | 'stacked';

export const logoColors = {
  black: 'fill-gc-black',
  white: 'fill-white',
};
export type LogoColorType = keyof typeof logoColors;

export const link = (color: LogoColorType) => cnb('group block no-underline focus-visible:ring-2', {
  'focus-visible:ring-gc-black': color === 'black',
  'focus-visible:ring-white': color === 'white',
});
