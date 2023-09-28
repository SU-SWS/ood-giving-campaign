import { cnb } from 'cnbuilder';

export const root = 'relative bg-no-repeat bg-cover bg-center overflow-hidden';
export const blurWrapper = 'w-full h-full backdrop-blur-md';

export const headingWrapper = (imageOnLeft: boolean) => cnb('lg:rs-mt-7 rs-mb-5', {
  'flex-row-reverse' : imageOnLeft,
});
export const heading = (imageOnLeft: boolean) => cnb('mb-0 -mt-01em', {
  'cc-right': imageOnLeft,
  'cc-left -ml-8 md:-ml-20 lg:-ml-40 w-full': !imageOnLeft,
});

export const contentWrapper = (imageOnLeft: boolean) => cnb('relative z-10', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
});

export const bodyWrapper = (imageOnLeft: boolean) => imageOnLeft ? 'cc 3xl:pr-[calc(100%-750px)] lg:rs-pl-4' : 'cc 3xl:pl-[calc(100%-750px)] lg:rs-pr-2';

export const imageWrapper = (imageOnLeft: boolean) => cnb('mt-30 md:mt-50 lg:mt-0 shrink-0 cc', {
  'lg:order-first 3xl:pl-[calc(100%-750px)]': imageOnLeft,
  ' 3xl:pr-[calc(100%-750px)]': !imageOnLeft,
});
