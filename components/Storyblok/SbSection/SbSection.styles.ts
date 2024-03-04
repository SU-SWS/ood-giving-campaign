import { cnb } from 'cnbuilder';

export type AlignType = 'left' | 'center' | 'right';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative overflow-hidden';

export const headerWrapper = (headerAlign?: AlignType) => cnb('relative z-10', headerAlign === 'right' ? 'mr-0 ml-auto' : 'ml-0');
export const bar = (headerAlign?: AlignType) => cnb(
  'block w-10 sm:w-14 md:w-20 lg:w-30 xl:w-40', {
  'order-first': headerAlign === 'left',
  'order-last': headerAlign === 'right',
  },
);
export const headerContent = (hasBarColor: boolean, hasSuperhead: boolean, headerAlign?: AlignType) => cnb(
  'cc whitespace-pre-line w-full 3xl:max-w-[90%]', {
  '-ml-10 sm:-ml-14 md:-ml-20 lg:-ml-30 xl:-ml-40': hasBarColor && headerAlign !== 'right' && headerAlign !== 'center',
  '-mr-10 sm:-mr-14 md:-mr-20 lg:-mr-30 xl:-mr-40': hasBarColor && headerAlign === 'right',
  'ml-0': !hasBarColor && headerAlign === 'left',
  'mr-0': !hasBarColor && headerAlign === 'right',
  '-mt-05em' : !hasSuperhead,
});
export const heading = (isSerifHeader: boolean, isSmallHeading: boolean, headerAlign?: AlignType ) => cnb(
  'mb-0', {
  'text-balance mx-auto max-w-1000': headerAlign === 'center',
  'fluid-type-6': isSerifHeader,
  'md:fluid-type-7': isSerifHeader && !isSmallHeading,
  'fluid-type-7': !isSerifHeader,
  'md:gc-splash': !isSerifHeader && !isSmallHeading,
});
export const subhead = (headerAlign?: AlignType) => cnb('relative z-10 rs-mt-3 ', {
  'mr-0 ml-auto': headerAlign === 'right',
  'mx-auto max-w-800': headerAlign === 'center',
  'max-w-prose': headerAlign !== 'center',
});
export const contentWrapper = 'relative z-10';
export const cta = 'cc md:flex-row *:mx-auto rs-mt-3 gap-20 lg:gap-27 w-fit';
export const caption = 'caption *:leading-display mt-08em max-w-prose-wide';
