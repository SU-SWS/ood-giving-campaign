import { dcnb } from 'cnbuilder';

export type LogoVariantType = 'horizontal' | 'stacked';

export const link = 'su-no-underline focus-visible:su-outline-none focus-visible:su-ring-2 focus-visible:su-ring-white';

export const stanford = (variant: LogoVariantType) => dcnb('', {
  '': variant === 'stacked',
});

export const onPurpose = (variant: LogoVariantType) => dcnb('', {
  'su-text-[.92em] su-ml-[0.15em]': variant === 'horizontal',
  'su-text-[1.1em] su-ml-[0.15em]': variant === 'stacked',
});
