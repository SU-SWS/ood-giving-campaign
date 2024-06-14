import { cnb } from 'cnbuilder';
export const root = (hasBgColor: boolean) => cnb('relative overflow-hidden size-full break-words', hasBgColor);

export const animateWrapper = 'h-full';

export type BasicCardImageAspectRatio = '4x3' | '1x1';

export const flex = 'h-full';
export const content = (
  hasBarColor?: boolean,
) => cnb('rs-pl-2', {
  'border-l-[1.4rem] md:border-l-[2rem]': hasBarColor,
});

export const subhead = 'rs-mx-2 rs-my-1';
export const heading = 'rs-m-2 whitespace-pre-line';
export const body = '*:*:leading-snug rs-m-2';
export const cta = 'rs-mx-2 rs-my-4';
export const texture = 'mt-auto'
