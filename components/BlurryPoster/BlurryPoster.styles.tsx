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
  'order-last lg:rs-pl-4': imageOnLeft,
  'order-first lg:rs-pr-2': !imageOnLeft,
});

export const bodyWrapper = (imageOnLeft: boolean) => imageOnLeft ? 'cc-right' : 'cc-left';

export const imageWrapper = (imageOnLeft: boolean) => cnb('', {
  'order-first cc-left': imageOnLeft,
  'cc-right': !imageOnLeft,
});
