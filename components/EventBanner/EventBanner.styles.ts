import { cnb } from 'cnbuilder';
import { type EventBannerHeadingSizeType } from './EventBanner';

export const root = 'relative overflow-hidden';
export const wrapper = 'relative z-10';
export const contentWrapper = 'sm:flex-row gap-26 sm:gap-30 md:gap-36 xl:gap-60 2xl:gap-95 rs-mt-8';

export const dateWrapper = 'sm:flex-col shrink-0 gap-26 md:gap-36';
export const time = 'flex flex-col items-center';

export const bgImage = 'absolute top-0 left-0 size-full object-cover';
export const overlay = (hasBgGradient: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');



export const heading = (headingSize: EventBannerHeadingSizeType, isSerifHeading: boolean) => cnb('rs-mb-1', {
  'fluid-type-5 font-bold leading-tight -mt-02em': isSerifHeading,
  'fluid-type-6 -mt-01em': !isSerifHeading,
  'md:fluid-type-7': (headingSize === 'small' && !isSerifHeading) || (headingSize === 'medium' && isSerifHeading),
  'md:fluid-type-8': (headingSize === 'medium' && !isSerifHeading) || (headingSize === 'large' && isSerifHeading),
  'md:gc-splash': headingSize === 'large' && !isSerifHeading,
});

export const featuredPerson = 'rs-mt-3';
export const featuring = 'block mb-03em md:fluid-type-4';
export const thumbnailWrapper = 'inline-block';
export const thumbnail = 'size-80 sm:size-100 md:size-130 xl:size-150 2xl:size-180';
export const featuredName = 'md:fluid-type-5';

export const body = (isDarktheme: boolean) => cnb('max-w-prose rs-mt-4 *:*:leading-snug text-balance mb-0', isDarktheme && 'text-shadow-sm');

export const dateLocationList = 'gap-9 md:gap-12 rs-mt-3 list-unstyled';
export const dateLocationListItem = 'flex gap-18 lg:gap-38 mb-0';
export const date = 'block shrink-0 w-[3em]';
export const locationWrapper = 'gap-03em';
export const singleLocationWrapper = 'flex items-start gap-03em rs-mt-3';
export const locationIcon = 'shrink-0 mt-[.05em]';

export const cta = 'w-fit rs-mt-4';
