import { cnb } from 'cnbuilder';

export type AlignType = 'left' | 'center' | 'right';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative overflow-hidden';

export const headerWrapper = (headerAlign?: AlignType) => cnb('relative z-10', headerAlign === 'right' ? 'mr-0 ml-auto' : 'ml-0');

export const heading = (isSerifHeader: boolean, isSmallHeading: boolean, headerAlign?: AlignType ) => cnb(
  'mb-0', {
  'text-balance mx-auto max-w-1000': headerAlign === 'center',
  'gc-splash': !isSerifHeader && !isSmallHeading,
  'fluid-type-8': !isSerifHeader && isSmallHeading,
  'fluid-type-7': isSerifHeader && !isSmallHeading,
  'fluid-type-6': isSerifHeader && isSmallHeading,
});
export const subhead = (headerAlign?: AlignType) => cnb('relative z-10 rs-mt-3 ', {
  'mr-0 ml-auto': headerAlign === 'right',
  //'ml-0 mr-auto': headerAlign === 'left',
  'mx-auto max-w-800': headerAlign === 'center',
  'max-w-prose': headerAlign !== 'center',
});

