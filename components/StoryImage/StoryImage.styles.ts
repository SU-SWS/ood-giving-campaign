import { cnb } from 'cnbuilder';

export const imageCrops = {
  '1x1': '1400x1400',
  '1x2': '1000x2000',
  '2x1': '2000x1000',
  '2x3': '1200x1800',
  '3x2': '2100x1400',
  '3x4': '1500x2000',
  '4x3': '2000x1500',
  '5x8': '1000x1600',
  '8x5': '2000x1250',
  '9x16': '900x1600',
  '16x9': '2000x1125',
  'free': '2000x0',
};
export type ImageCropType = keyof typeof imageCrops;

export const root = (isFullHeight?: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const animateWrapper = (isFullHeight?: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const figure = (isFullHeight: boolean) => cnb(isFullHeight ? 'h-full' : '');
export const imageWrapper = (isFullHeight: boolean, isParallax: boolean) => cnb(
  isFullHeight ? 'h-full' : '',
  isParallax ? 'overflow-hidden' : '',
);
export const image = (isParallax: boolean) => cnb('w-full object-cover', isParallax ? 'h-[calc(100%_+_12rem)] -mt-60' : 'h-full');
export const caption = '*:*:leading-display caption mt-1em max-w-prose-wide';
