import { cnb } from 'cnbuilder';

export const heroPaddings = {
  'balance-sm': 'pt-[34vw] sm:pt-[24vw] xl:pt-[16vw] 3xl:pt-[26rem] rs-pb-1',
  'balance-md': 'pt-[36vw] sm:pt-[26vw] xl:pt-[17vw] 3xl:pt-[30rem] rs-pb-1',
  'balance-lg': 'pt-[40vw] sm:pt-[28vw] xl:pt-[19vw] 3xl:pt-[36rem] rs-pb-1',
  top: 'pt-[45vw] pb-[15vw] sm:pt-[30vw] sm:pb-[12vw] xl:pt-[25vw] xl:pb-[8vw] 3xl:pt-[40rem] 3xl:pb-[14rem] rs-pb-2',
};
export type HeroPaddingType = keyof typeof heroPaddings;

export const root = 'relative break-words bg-black-70';

export const bgMedia = 'absolute inset-0 size-full object-cover pointer-events-none';
export const overlay = (hasBgGradient?: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');

export const contentWrapper = '*:mx-auto';
export const superhead = 'relative z-10 xl:max-w-900 mx-auto rs-mb-0 text-shadow-sm';
export const heading = (isDrukHeading: boolean, isSmallHeading: boolean) => cnb('relative z-10 max-w-1200 mx-auto mb-0 text-balance', {
  'fluid-type-7 md:fluid-type-8': isDrukHeading && isSmallHeading,
  'fluid-type-7 md:gc-splash': isDrukHeading && !isSmallHeading,
  'fluid-type-6 md:fluid-type-7': !isDrukHeading && isSmallHeading,
  'fluid-type-6 md:fluid-type-8': !isDrukHeading && !isSmallHeading,
});
export const subhead = 'relative z-10 xl:max-w-900 mx-auto rs-mt-1 text-shadow-sm';
export const content = 'rs-mt-4 w-fit';
