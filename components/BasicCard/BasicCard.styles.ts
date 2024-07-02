import { cnb } from 'cnbuilder';
import { type ImageAspectRatioType } from '@/utilities/datasource';
export const root = 'relative overflow-hidden size-full break-words';

//export const animateWrapper = 'h-full';
export const animateWrapper = '';

//export const flex = 'h-full';
export const flex = '';
export const imageWrapper = (imageAspectRatio: ImageAspectRatioType) => cnb('bg-gc-black', {
  'sm:aspect-w-3 sm:aspect-h-4': imageAspectRatio === '3x4',
});

export const content = 'rs-px-2 rs-pt-2 rs-pb-3 grow';
export const heading = 'whitespace-pre-line mt-10 mb-0';
export const body = 'rs-mt-0';
export const cta = 'rs-mt-1';
export const texture = '*:h-20 *:md:h-20 *:lg:h-20';

export const imageCrops = {
  '1x1': '600x600',
  '1x2': '600x1200',
  '2x1': '600x300',
  '2x3': '600x900',
  '3x2': '600x400',
  '3x4': '600x800',
  '4x3': '600x450',
  '5x8': '600x960',
  '8x5': '640x400',
  '9x16': '630x1120',
  '16x9': '640x360',
  'free': '600x0',
};
