import { cnb } from 'cnbuilder';

export type LogoVariantType = 'horizontal' | 'stacked';

export const logoColors = {
  black: 'su-fill-gc-black',
  white: 'su-fill-white',
};
export type LogoColorType = keyof typeof logoColors;

export const link = (color: LogoColorType) => cnb('su-group su-block su-no-underline focus-visible:su-ring-2', {
  'focus-visible:su-ring-gc-black': color === 'black',
  'focus-visible:su-ring-white': color === 'white',
});
