import { cnb } from 'cnbuilder';

export const videoWrapper = 'bg-gc-black';
export const video = 'size-full object-cover pointer-events-none';
export const videoButton = (isFullScreen: boolean) => cnb(
  'absolute block z-10 bottom-10 md:bottom-20',
  isFullScreen ?
  'right-20 sm:right-30 md:right-50 lg:right-80 xl:right-100 4xl:right-[calc((100%-1800px)/2)]'
  : 'right-10 md:right-20',
);
