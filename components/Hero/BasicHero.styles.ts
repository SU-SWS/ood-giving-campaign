import { cnb } from 'cnbuilder';

export type HeroPaddingType = 'balance-sm' | 'balance-md' | 'balance-lg' | 'top';

export const root = (paddingType: HeroPaddingType, hasVideo: boolean) => cnb('relative break-words bg-black-70', {
  // No background video
  'pt-[45vw] pb-[15vw] sm:pt-[30vw] sm:pb-[12vw] xl:pt-[25vw] xl:pb-[8vw] 3xl:pt-[40rem] 3xl:pb-[14rem]': paddingType === 'top' && !hasVideo,
  'py-[34vw] sm:py-[24vw] xl:py-[16vw] 3xl:py-[26rem]': paddingType === 'balance-sm' && !hasVideo,
  'py-[36vw] sm:py-[26vw] xl:py-[17vw] 3xl:py-[30rem]': paddingType === 'balance-md' && !hasVideo,
  'py-[40vw] sm:py-[28vw] xl:py-[19vw] 3xl:py-[36rem]' : paddingType === 'balance-lg' && !hasVideo,

  // Has background video
  'rs-pb-2': hasVideo,
  'pt-[45vw] sm:pt-[30vw] xl:pt-[25vw] 3xl:pt-[40rem]': paddingType === 'top' && hasVideo,
  'pt-[34vw] sm:pt-[24vw] xl:pt-[16vw] 3xl:pt-[26rem]': paddingType === 'balance-sm' && hasVideo,
  'pt-[36vw] sm:pt-[26vw] xl:pt-[17vw] 3xl:pt-[30rem]': paddingType === 'balance-md' && hasVideo,
  'pt-[40vw] sm:pt-[28vw] xl:pt-[19vw] 3xl:pt-[36rem]': paddingType === 'balance-lg' && hasVideo,

});

export const bgMedia = 'absolute inset-0 size-full object-cover pointer-events-none';
export const overlay = (hasBgGradient?: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');
export const videoButton = (paddingType: HeroPaddingType) => cnb('relative block z-10 ml-auto mr-0', {
  'mt-[15vw] sm:mt-[12vw] xl:mt-[8vw] 3xl:mt-[14rem]': paddingType === 'top',
  'mt-[34vw] sm:mt-[24vw] xl:mt-[16vw] 3xl:mt-[26rem]': paddingType === 'balance-sm',
  'mt-[36vw] sm:mt-[26vw] xl:mt-[17vw] 3xl:mt-[30rem]': paddingType === 'balance-md',
  'mt-[40vw] sm:mt-[28vw] xl:mt-[19vw] 3xl:mt-[36rem]': paddingType === 'balance-lg',
});

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
