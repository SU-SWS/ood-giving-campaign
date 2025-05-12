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
export const figure = (isFullHeight: boolean, captionBgColor: CaptionBgColorType) => cnb(
  isFullHeight ? 'h-full' : '',
  !!captionBgColor ? captionBgColors[captionBgColor] : '',
);
export const mediaWrapper = (isFullHeight: boolean, isParallax: boolean) => cnb('relative',
  isFullHeight ? 'h-full' : '',
  isParallax ? 'overflow-hidden' : '',
);

// Caption component styles
export const captionWrapper = 'mt-0 gc-caption';
export const caption = (captionBgColor: CaptionBgColorType) => cnb(
  '*:*:leading-display *:*:xl:leading-snug max-w-prose-wide first:*:*:mt-0',
  !!captionBgColor && captionBgColor !== 'transparent' ? 'px-1em py-08em' : 'pt-06em',
);
