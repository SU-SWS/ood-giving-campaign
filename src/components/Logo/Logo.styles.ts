export type LogoVariantType = 'horizontal' | 'stacked';

export const logoColors = {
  black: 'su-fill-gc-black',
  white: 'su-fill-white',
};
export type LogoColorType = keyof typeof logoColors;

export const link = 'su-block su-no-underline focus-visible:su-outline-none focus-visible:su-ring-2 focus-visible:su-ring-white';
