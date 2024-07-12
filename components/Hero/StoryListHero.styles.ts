import { cnb } from 'cnbuilder';
export const root = 'relative break-words bg-black-70';

export const contentWrapper = 'relative z-20 top-0 left-0 size-full *:mx-auto pt-61 sm:pt-68 md:pt-[7.4rem]';
export const heading = (hasSubhead: boolean) => cnb('mb-0', {
  '3xl:odd:*:text-[20rem] 3xl:even:*:text-[14rem]': !hasSubhead,
});
export const subhead = 'block text-balance xl:max-w-1100 mx-auto rs-mt-4';

export const image = 'absolute top-0 left-0 size-full object-cover';
export const overlay = 'absolute top-0 left-0 size-full z-10 bg-black-true/60';
