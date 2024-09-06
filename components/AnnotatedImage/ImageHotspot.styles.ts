import { cnb } from 'cnbuilder';

export const button = (open: boolean) => cnb('absolute group/popoverbutton flex items-center justify-center text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full z-[150] hocus-visible:bg-digital-red-dark transition-colors focus:outline-none',
  open ? 'bg-black-true' : 'bg-gc-black',
);
export const menuIcon = (open: boolean) => cnb('text-white w-20 sm:w-22 md:w-26 transition-transform',
  open ? 'group-hover/popoverbutton:rotate-90' : 'group-hover/popoverbutton:scale-y-125',
);

// Inside the popover panel
export const panel = 'absolute inset-0 z-[140]';
export const panelWrapper = 'bg-black-true pt-61 sm:pt-68 md:pt-[7.4rem] lg:pt-[8.8rem] rs-pb-7';
export const panelOuterGrid = 'gap-y-45 gap-x-30 sm:gap-x-50 rs-pt-6 px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] mx-auto relative';
export const linkList = 'list-unstyled';

