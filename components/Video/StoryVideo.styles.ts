import { cnb } from 'cnbuilder';

export const captionBgColors = {
  black: 'bg-gc-black',
  'black-60': 'bg-black-true/60',
  white: 'bg-white',
  transparent: '',
};
export type CaptionBgColorType = keyof typeof captionBgColors;

export const root = (isFullHeight?: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const animateWrapper = (isFullHeight?: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const figure = (isFullHeight: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const imageWrapper = (isFullHeight: boolean, isParallax: boolean) => cnb('relative',
  isFullHeight ? 'h-full' : '',
  isParallax ? 'overflow-hidden' : '',
);
export const image = (isParallax: boolean) => cnb('w-full object-cover', isParallax ? 'h-[calc(100%_+_12rem)] -mt-60' : 'h-full');
export const captionWrapper = 'mt-0';
export const caption = (captionBgColor: CaptionBgColorType) => cnb(
  '*:*:leading-display max-w-prose-wide first:*:*:mt-0',
  !!captionBgColor && captionBgColor !== 'transparent' ? 'px-1em py-08em' : 'pt-06em',
);
export const video = 'h-full w-full object-cover object-center pointer-events-none';
export const videoButton = 'absolute block z-10 bottom-10 right-10 md:bottom-20 md:right-20';
