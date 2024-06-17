import { cnb } from 'cnbuilder';

export const button = (open: boolean) => cnb('relative group/popoverbutton flex items-center justify-center text-white size-36 sm:size-42 md:size-48 border-2 border-digital-red-light rounded-full z-[150] hocus-visible:bg-digital-red-dark transition-colors focus:outline-none',
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

// Featured links
export const featuredItem = 'mb-26 md:mb-32';

// The only CTA where we want the arrow to follow the last word instead of
// vertically center aligned with the whole link text
export const featuredCta = '*:block';

// Theme links
export const themeHeading = 'rs-mt-5 rs-mb-0';
export const themeItems = 'rs-mb-0';

export const group2 = '2xl:col-span-2';
export const col2 = 'gap-45 md:gap-90 2xl:gap-95 3xl:pl-200';

// Initiative links
export const initiativeHeading = 'mb-18 md:mb-22 xl:mb-24';
export const initiativeItems = 'rs-mb-0';

export const col3 = 'gap-y-45 md:gap-y-90 2xl:gap-y-95';
