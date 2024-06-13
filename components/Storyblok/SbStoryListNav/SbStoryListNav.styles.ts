import { cnb } from 'cnbuilder';

export const root = 'rs-pt-5 rs-pb-8 bg-gc-black';
export const heading = 'rs-mb-1';
export const list = 'list-unstyled flex flex-col max-w-[36rem] lg:flex-row lg:flex-wrap gap-16 lg:gap-14 justify-center lg:max-w-1200 mx-auto';
export const listItem = 'block lg:inline-block mb-0';
export const cta = (isCurrentPage: boolean) => cnb('w-full lg:w-auto', {
  '!bg-digital-red-light !text-white lg:!underline': isCurrentPage,
});

// Mobile styles
export const filterButton = 'block sm:w-500 text-left text-18 sm:text-21 w-fit border-2 border-gc-black-80 text-gc-black-40 rounded-full px-24 py-14 md:px-34 md:py-14 mx-auto';
export const dialog = 'relative z-[100]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 w-screen bg-gc-black';
export const dialogWrapper = 'fixed inset-0 w-screen overflow-y-auto overscroll-contain';
export const dialogPanel = 'relative cc w-screen min-h-screen inset-0 pt-20 pb-60 text-white';
export const modalClose = 'block mr-0 ml-auto rs-mb-2 p-9';
export const closeIcon = 'text-white size-26';
