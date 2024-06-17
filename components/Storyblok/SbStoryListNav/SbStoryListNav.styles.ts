import { cnb } from 'cnbuilder';

export const root = 'rs-pt-5 rs-pb-8 bg-gc-black';
export const heading = 'rs-mb-1';
export const list = 'list-unstyled flex flex-col mt-28 max-w-[36rem] lg:flex-row lg:flex-wrap gap-16 lg:gap-14 justify-center lg:max-w-1200 mx-auto';
export const listItem = 'block lg:inline-block mb-0';
export const cta = (isCurrentPage: boolean) => cnb('w-full lg:w-auto', {
  '!bg-digital-red-light !border-digital-red-light !text-white lg:!underline': isCurrentPage,
});
export const ctaInner = 'gap-20 w-full';
export const checkIcon = 'shrink-0 lg:hidden w-[1.2em]';

// Mobile styles
export const filterButton = 'group/filterBtn block w-[28rem] sm:w-[48rem] text-left text-18 sm:text-21 w-fit border-2 border-gc-black-80 text-gc-black-40 rounded-full px-20 py-9 sm:px-30 sm:py-14 mx-auto hocus-visible:bg-gradient-to-r hocus-visible:from-digital-red hocus-visible:to-cardinal-red-dark hocus-visible:border-digital-red-xlight hocus-visible:text-white hocus-visible:underline underline-offset-4 decoration-1 transition-colors';
export const filterBtnInner = 'gap-20';
export const filterBtnLabel = 'grow leading-display';
export const filterChevron = 'shrink-0 text-white group-hover/filterBtn:-rotate-90 transition-transform';
export const dialog = 'relative z-[100]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 w-screen bg-gc-black';
export const dialogWrapper = 'fixed inset-0 w-screen overflow-y-auto overscroll-contain';
export const dialogPanel = 'relative w-screen min-h-screen inset-0 pt-11 pb-60 text-white';
export const dialogHeader = 'flex flex-col-reverse w-full';
export const dialogHeading = 'w-full type-0 rs-pb-2 mb-0 -mt-11 font-serif text-center border-b border-black-80 lg:border-b-0';
export const modalClose = 'group/close block mr-0 ml-auto p-9 -mt-9 mr-70 sm:mr-21 md:mr-41';
export const closeIcon = 'text-gc-black-40 size-26 group-hover/close:text-digital-red-xlight group-focus-visible/close:text-digital-red-xlight transition-all group-hover/close:rotate-90 group-focus-visible/close:rotate-90';

// Common styles
export const desktop = 'hidden lg:block';
export const mobile = 'block lg:hidden';
