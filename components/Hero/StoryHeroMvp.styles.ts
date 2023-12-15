import { cnb } from 'cnbuilder';

export const root = 'relative';

export const imageCrops = {
  '1x1': '1200x1200',
  '2x1': '2000x1000',
  '3x2': '2100x1400',
  '5x8': '1000x1600',
  '16x9': '2000x1125',
  'free': '2000x0',
};
export type ImageCropType = keyof typeof imageCrops;

export const mobileImageCrops = {
  '1x1': '1000x1000',
  '2x1': '1000x500',
  '3x2': '1200x800',
  '5x8': '1000x1600',
  '16x9': '1600x900',
  'free': '1000x0',
};

export const image = (renderTwoImages: boolean) => cnb(
  'w-full h-full',
  renderTwoImages ? 'hidden lg:block' : '',
);
export const mobileImage = 'w-full h-full lg:hidden';
export const captionWrapper = 'mt-06em';
export const caption = 'children:leading-display mt-08em max-w-prose-wide';
