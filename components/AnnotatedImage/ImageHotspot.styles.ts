import { cnb } from 'cnbuilder';
import { type SbImageHotspotModalContentType } from '@/components/Storyblok/Storyblok.types';

// To center hotspot on the coordinates, it needs to be offset by half of the hotspot width and height
export const hotspotWrapper = 'absolute -mt-20 -ml-20 @2xl:-mt-25 @2xl:-ml-25';
export const button = 'group flex relative z-[100] items-center justify-center size-40 @2xl:size-50 bg-black-true/50 rounded-full border-2 border-white hocus-visible:bg-black-true/70 hocus-visible:border-dashed transition-transform hocus-visible:bg-gc-black/80 transition-colors hocus-visible:outline-none focus-visible:ring-4 focus-visible:ring-digital-red-xlight';
export const icon = 'z-[100] will-change w-24 @2xl:w-30 text-white group-hocus-visible:scale-125 group-aria-expanded:rotate-45 transition-transform';
export const hotspotRing = 'absolute top-6 left-6 content-[""] size-28 @2xl:size-38 bg-transparent ring-[10px] ring-offset-0 ring-white border-white z-[80] animate-[hotspot_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full';

// Modal styles
export const dialog = 'relative z-[150]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 bg-gc-black/60 backdrop-blur-lg w-screen';
export const dialogWrapper = 'fixed inset-0 sm:py-30 w-screen overflow-y-auto overscroll-contain overflow-x-hidden';
export const dialogPanel  = (modalContentType: SbImageHotspotModalContentType) => cnb(
  'relative sm:cc flex w-screen min-h-screen inset-0 break-words justify-center',
  (modalContentType === 'text-image' || modalContentType === 'text') ? 'items-start sm:items-center' : 'items-center text-white',
);
export const modalClose = 'absolute top-20 z-[200] right-20 block mr-0 ml-auto rs-mb-2 p-9 border-2 border-digital-red-xlight bg-black-true rounded-full hocus-visible:border-dashed hocus-visible:border-white transition-transform hocus-visible:rotate-90';
export const modalIcon = 'text-white size-26';

export const contentWrapper = (modalContentType: SbImageHotspotModalContentType) => cnb('relative flex items-center justify-center', {
  'min-h-screen sm:min-h-0': modalContentType !== 'text-image' && modalContentType !== 'text',
  'bg-white text-black': modalContentType === 'text-image' || modalContentType === 'text',
  'bg-black-true/70 text-white': modalContentType !== 'text-image' && modalContentType !== 'text',
  'w-full 2xl:aspect-[16/9] 3xl:aspect-2': modalContentType !== 'text' && modalContentType !== 'fullwidth-image',
});
