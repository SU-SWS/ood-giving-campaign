import { dcnb } from 'cnbuilder';

export type LogoVariantType = 'horizontal' | 'stacked';

export type LogoColorType = 'black' | 'white';

export const link = 'su-no-underline focus-visible:su-outline-none focus-visible:su-ring-2 focus-visible:su-ring-spirited';

export const textWrapper = (variant: LogoVariantType) => dcnb('su-flex', {
  'su-h-[.82em]': variant === 'horizontal',
});

export const stanford = (variant: LogoVariantType) => dcnb('su-leading-none', {
  'su-text-vertical-lr su-rotate-180 su-text-[.46em] su-relative su-mt-01em': variant === 'stacked',
  'su-text-[1.08em]': variant === 'horizontal',
});

export const onPurpose = (variant: LogoVariantType) => dcnb('!su-tracking-normal', {
  'su-ml-[0.15em] su-leading-[.7]': variant === 'horizontal',
});

export const iBefore = (variant: LogoVariantType) => (variant === 'stacked' ? 'su--ml-[0.025em]' : '');

export const o = (variant: LogoVariantType) => (variant === 'stacked' ? 'su-inline-block su-scale-x-95 su-origin-left' : '');

export const iAfter = 'su-inline-block su--ml-[0.28em] su-scale-x-75';

export const n = 'su-inline-block su-scale-x-[0.65] su-origin-left su--ml-[0.148em]';

export const onSpace = (variant: LogoVariantType) => (variant === 'horizontal' ? 'su-hidden' : '');

export const purpose = (variant: LogoVariantType) => (variant === 'horizontal' ? 'su-ml-[0.14em]' : 'su-block su-mt-[.02em]');
