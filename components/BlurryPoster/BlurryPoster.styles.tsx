import { cnb } from 'cnbuilder';

export const root = 'relative bg-no-repeat bg-cover bg-center overflow-hidden break-words';
export const blurWrapper = 'w-full h-full backdrop-blur-md';

export const contentWrapper = (imageOnLeft: boolean) => cnb('relative z-10', {
  'lg:order-last': imageOnLeft,
  'lg:order-first': !imageOnLeft,
});

export const headingWrapper = (imageOnLeft: boolean) => cnb('lg:rs-mt-7 rs-mb-5', {
  'lg:w-[120%] lg:-ml-[20%] 3xl:w-auto 3xl:-ml-100 lg:mr-0' : imageOnLeft,
});
export const headingInnerWrapper = (imageOnLeft: boolean) => cnb('', {
  '' : imageOnLeft,
  '' : !imageOnLeft,
});
export const heading = (imageOnLeft: boolean) => cnb('mb-0', {
  'border-r-[1rem] md:border-r-[2rem] lg:border-r-[3rem] xl:border-r-[4rem] pr-10 sm:pr-20 md:pr-30 lg:pr-50 xl:pr-60': imageOnLeft,
  'border-l-[1rem] md:border-l-[2rem] lg:border-l-[3rem] xl:border-l-[4rem] pl-10 pr-20 sm:pl-20 sm:pl-30 md:pl-30 md:pr-50 lg:pl-50 xl:pl-60 lg:pr-0 3xl:pl-[calc(100%-750px-40px)] lg:w-[140%] xl:w-[120%]': !imageOnLeft,
});

export const bodyWrapper = (imageOnLeft: boolean) => cnb('cc', {
  '3xl:pr-[calc(100%-750px)] lg:pl-60': imageOnLeft,
  '3xl:pl-[calc(100%-750px)] lg:pr-60': !imageOnLeft,
});

export const imageWrapper = (imageOnLeft: boolean) => cnb('w-full mt-30 md:mt-50 lg:mt-0 shrink-0 cc', {
  'lg:order-first 3xl:pl-[calc(100%-750px)] lg:pr-0': imageOnLeft,
  ' 3xl:pr-[calc(100%-750px)] lg:pl-0': !imageOnLeft,
});
