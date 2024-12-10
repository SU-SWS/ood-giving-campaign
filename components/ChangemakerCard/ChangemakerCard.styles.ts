import { cnb } from 'cnbuilder';

/**
 * We originally used container query for this component, but removed it because Firefox didn't like it
 * when using that together with the Headless UI Dialog.
 * It caused a weird bug when you have the dialog open and click around sometimes
 * it will bring the body content under the dialog overlay to the front even though it is not focusable.
 */
export const root = (isHorizontal: boolean) => cnb('relative w-full mx-auto break-words max-w-[29rem] bg-black', {
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

export const button = 'group absolute size-full top-0 left-0';
export const icon = (isHorizontal: boolean) => cnb('absolute bottom-40 right-36 text-white size-65 border-2 border-white rounded-full p-16 group-hocus-visible:border-dashed group-aria-expanded:rotate-45 transition-transform group-hocus-visible:bg-gc-black/80 transition-color', {
  'md:bottom-58 2xl:bottom-61 md:right-45': isHorizontal,
});

// Modal styles
export const dialog = 'relative z-[100]';
export const dialogOverlay = 'fixed inset-0 bg-gc-black/60 backdrop-blur-lg w-screen';
export const dialogWrapper = 'fixed inset-0 sm:py-30 w-screen overflow-y-auto overscroll-contain overflow-x-hidden';
export const dialogPanel = 'relative sm:cc flex w-screen min-h-screen inset-0 break-words justify-center items-start sm:items-center';
export const dialogContentWrapper = 'relative flex flex-col items-center justify-center max-w-prose-wide text-white bg-black-true/60';

export const modalClose = 'block ml-auto rs-mb-4 mr-20 mt-20 p-9 border-2 border-digital-red-xlight rounded-full hocus-visible:border-dashed hocus-visible:border-white hocus-visible:rotate-90 transition-transform';
export const modalIcon = 'text-white size-26';
export const modalTextWrapper = 'rs-pr-4 rs-pb-6 w-[75ch] max-w-[100vw] md:max-w-full';
export const modalHeader = 'rs-mb-3 border-l-[1.2rem] md:border-l-[1.8rem] border-digital-red-light';
export const modalHeading = 'mb-02em leading-tight ml-22 md:ml-40 2xl:ml-43 type-3 font-serif';
export const modalSubhead = 'ml-22 md:ml-40 2xl:ml-43';
export const nestedBloksWrapper = 'rs-pl-4';
