import { cnb } from 'cnbuilder';

export const button = (isClicked: boolean) => cnb('group flex items-center justify-center absolute z-[100] size-50 bg-black-true/50 rounded-full border-2 border-white hocus-visible:bg-black-true/70 hocus-visible:border-dashed group-aria-expanded:rotate-45 transition-transform hocus-visible:bg-gc-black/80 transition-colors hocus-visible:outline-none focus-visible:ring-4 focus-visible:ring-digital-red-xlight',
  !isClicked && 'before:content-[""] before:size-50 before:black before:absolute before:bg-digital-red-xlight before:z-[90] before:animate-[hotspot_2s_cubic-bezier(0,0,0.2,1)_infinite] before:rounded-full');
export const icon = 'z-[100] will-change text-white group-hocus-visible:scale-125 group-aria-expanded:rotate-45 transition-transform w-30';

// Modal styles
export const dialog = 'relative z-[150]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 bg-gc-black/50 backdrop-blur-md w-screen';
export const dialogWrapper = 'fixed inset-0 w-screen overflow-y-auto overscroll-contain';
export const dialogPanel = 'relative md:cc flex items-center w-screen min-h-screen inset-0 text-white text-white';
export const modalClose = 'absolute top-20 z-[200] right-20 block mr-0 ml-auto rs-mb-2 p-9 border-2 border-digital-red-xlight bg-black-true rounded-full hocus-visible:border-dashed hocus-visible:border-white transition-transform';
export const modalIcon = 'text-white size-26';
