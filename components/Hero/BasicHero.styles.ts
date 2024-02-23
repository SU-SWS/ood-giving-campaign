import { cnb } from 'cnbuilder';

export const heroPaddings = {
  'balance-sm': 'py-[34vw] sm:py-[24vw] xl:py-[16vw] 3xl:py-[26rem]',
  'balance-md': 'py-[36vw] sm:py-[26vw] xl:py-[17vw] 3xl:py-[30rem]',
  'balance-lg': 'py-[40vw] sm:py-[28vw] xl:py-[19vw] 3xl:py-[36rem]',
  top: 'pt-[45vw] pb-[15vw] sm:pt-[30vw] sm:pb-[12vw] xl:pt-[25vw] xl:pb-[8vw] 3xl:pt-[40rem] 3xl:pb-[14rem]',
};
export type HeroPaddingType = keyof typeof heroPaddings;

export const root = 'relative break-words bg-black-70';
export const contentWrapper = '*:mx-auto';
export const superhead = 'relative z-10 xl:max-w-900 mx-auto rs-mb-0';
export const heading = (isDrukHeading: boolean, isSmallHeading: boolean) => cnb('relative z-10 max-w-1200 mx-auto mb-0 text-balance', {
  'fluid-type-7 md:fluid-type-8': isDrukHeading && isSmallHeading,
  'fluid-type-7 md:gc-splash': isDrukHeading && !isSmallHeading,
  'fluid-type-6 md:fluid-type-7': !isDrukHeading && isSmallHeading,
  'fluid-type-6 md:fluid-type-8': !isDrukHeading && !isSmallHeading,
});
export const subhead = 'relative z-10 xl:max-w-900 mx-auto rs-mt-1 text-shadow-sm';
export const content = 'rs-mt-4 w-fit';
