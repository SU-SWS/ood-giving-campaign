import { cnb } from 'cnbuilder';

export const thumbButton = (active: boolean, isPortrait: boolean) => cnb(
  'inline-block  hocus-visible:opacity-100 hocus-visible:border-b-digital-red-light hocus-visible:-translate-y-9 transition-all border-b-[3px] pb-6 pt-9',
  active ? 'opacity-100 border-b-[3px] border-b-digital-red-light -translate-y-8' : 'opacity-70 border-b-transparent',
  isPortrait ? 'w-50 md:w-65' : 'w-80 md:w-100',
);
export const expandButton = (isLightText: boolean) => cnb(
  'group font-semibold leading-none gc-card hocus-visible:underline',
  isLightText ? 'text-digital-red-xlight hocus-visible:text-white' : 'text-digital-red-light hocus-visible:text-gc-black',
);

export const thumbWindowOverlay = (isLightText: boolean) => cnb(
  'absolute inset-0 bg-gradient-to-l via-5% via-transparent pointer-events-none',
  isLightText ? 'from-gc-black' : 'from-white',
);

// Modal styles
export const dialog = 'relative z-[150]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 bg-gc-black/90 backdrop-blur-lg w-screen';
export const dialogWrapper = 'fixed inset-0 w-screen overflow-y-auto overscroll-contain overflow-x-hidden';
export const dialogPanel = 'relative cc flex flex-col w-screen min-h-screen inset-0 break-words justify-start text-white';
export const modalClose = 'absolute top-20 z-[200] right-0 block mr-0 ml-auto rs-mb-2 p-9 border-2 border-digital-red-xlight bg-black-true rounded-full hocus-visible:border-dashed hocus-visible:border-white transition-transform hocus-visible:rotate-90';
export const modalIcon = 'text-white size-26';

export const contentWrapper = 'relative w-full';
