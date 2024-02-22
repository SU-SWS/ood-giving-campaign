import { cnb } from 'cnbuilder';

export type AlignType = 'left' | 'center' | 'right';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative overflow-hidden';

export const headerWrapper = (headerAlign?: AlignType) => cnb('relative z-10', headerAlign === 'right' ? 'mr-0 ml-auto' : 'ml-0');
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
  'fluid-type-8 md:gc-splash': !isSerifHeader && !isSmallHeading,
  'fluid-type-8': !isSerifHeader && isSmallHeading,
  'fluid-type-6 md:fluid-type-7': isSerifHeader && !isSmallHeading,
  'fluid-type-6': isSerifHeader && isSmallHeading,
});
export const subhead = (headerAlign?: AlignType) => cnb('relative z-10 rs-mt-3 ', {
  'mr-0 ml-auto': headerAlign === 'right',
  //'ml-0 mr-auto': headerAlign === 'left',
  'mx-auto max-w-800': headerAlign === 'center',
  'max-w-prose': headerAlign !== 'center',
});

