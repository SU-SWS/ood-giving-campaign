import { cnb } from 'cnbuilder';

/**
 * We originally used container query for this component, but removed it because Firefox didn't like it
 * when using that together with the Headless UI Dialog. It caused a weird bug when you have the dialog open and click
 * around sometimes it will bring the body content under the dialog overlay to the front even though it is no focusable.
 */
export const root = (isHorizontal: boolean) => cnb('relative w-full mx-auto break-words max-w-[29rem]', {
  'sm:max-w-300 lg:max-w-[35rem]': !isHorizontal,
  'sm:max-w-550 md:max-w-600 xl:max-w-1000 2xl:max-w-1200': isHorizontal,
});
export const cardInner = (isHorizontal: boolean) => cnb('relative size-full aspect-w-1 aspect-h-2', {
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});

export const cardFront = 'absolute size-full top-0 left-0';
export const imageWrapper = (isHorizontal: boolean) => cnb('overflow-hidden aspect-w-1 aspect-h-2', {
  'sm:aspect-w-2 sm:aspect-h-3 xl:aspect-w-3 xl:aspect-h-2': isHorizontal,
});
export const image = 'w-full h-full object-cover';
export const overlay = 'absolute top-0 left-0 size-full bg-gradient-to-t via-black-true/20 from-black-true/90';

export const info = (isHorizontal: boolean) => cnb('rs-px-1 pb-150 absolute size-full bottom-0 left-0 mb-0', {
  'px-20 md:px-45 sm:pb-200 xl:pb-130': isHorizontal,
});
export const heading = (isHorizontal: boolean) => cnb('mb-02em mt-auto text-30 whitespace-pre-line', {
  '2xl:text-[3.6rem]': !isHorizontal,
  'sm:fluid-type-4 xl:max-w-[30ch] mx-auto': isHorizontal,
});
export const subhead = 'text-19 md:text-21 xl:max-w-prose mx-auto whitespace-pre-line';

export const cardContent = (isHorizontal: boolean) => cnb('hidden sm:block absolute size-full top-0 left-0 aria-hidden:opacity-0 opacity-100 backdrop-blur-sm transition-opacity duration-500 bg-gradient-to-b from-gc-black/60 to-gc-black/90 *:*:*:!mb-1em', {
  'px-20 py-30 pb-120 3xl:pt-48 3xl:px-36' : !isHorizontal,
  'rs-pt-3 rs-px-3 pb-150': isHorizontal,
});
export const contentWrapper = (isHorizontal: boolean) => isHorizontal && 'xl:columns-2 gap-x-38 xl:first:*:*:*:mt-0';

export const button = 'group absolute size-full top-0 left-0';
export const icon = (isHorizontal: boolean) => cnb('absolute bottom-40 right-36 text-white size-65 border-2 border-white rounded-full p-16 group-hocus-visible:border-dashed group-aria-expanded:rotate-45 transition-transform group-hocus-visible:bg-gc-black/80 transition-color', {
  'md:bottom-58 2xl:bottom-61 md:right-45': isHorizontal,
});

// Modal styles
export const dialog = 'relative z-[100]';
export const srOnly = 'sr-only';
export const dialogOverlay = 'fixed inset-0 bg-gc-black/80 backdrop-blur-md w-screen';
export const dialogWrapper = 'fixed inset-0 w-screen overflow-y-auto overscroll-contain';
export const dialogPanel = 'relative cc w-screen min-h-screen inset-0 pt-20 pb-60 text-white';
export const modalClose = 'block mr-0 ml-auto rs-mb-2 p-9 border-2 border-white rounded-full hocus:border-dashed transition-transform';
export const modalIcon = 'text-white size-26';
