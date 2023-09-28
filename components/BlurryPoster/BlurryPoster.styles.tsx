import { cnb } from "cnbuilder";

export const root = 'relative bg-no-repeat bg-cover bg-center overflow-hidden';
export const blurWrapper = 'w-full h-full backdrop-blur-md';

export const heading = (imageOnLeft: boolean) => cnb('lg:rs-mt-7 rs-mb-5 lg:w-[140%]', {
  'lg:ml-[-40%]': imageOnLeft,
});

export const contentWrapper = (imageOnLeft: boolean) => cnb('z-10', {
  'order-last lg:rs-pl-4': imageOnLeft,
  'order-first lg:rs-pr-2': !imageOnLeft,
});

export const imageWrapper = (imageOnLeft: boolean) => cnb('', {
  'order-first': imageOnLeft,
});
