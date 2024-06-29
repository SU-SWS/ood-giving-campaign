import { cnb } from 'cnbuilder';
import { type EventBannerHeadingSizeType } from './EventBanner';

export const root = 'relative overflow-hidden';
export const content = 'relative z-10';

export const bgImage = 'absolute top-0 left-0 size-full object-cover';
export const overlay = (hasBgGradient: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b via-50%' : '');

export const contentWrapper = 'lg:rs-pr-9 ml-0';

export const heading = (headingSize: EventBannerHeadingSizeType, isSerifHeading: boolean) => cnb('rs-mb-1', {
  'fluid-type-5 font-bold leading-tight -mt-02em': isSerifHeading,
  'fluid-type-6 -mt-01em': !isSerifHeading,
  'md:fluid-type-7': (headingSize === 'small' && !isSerifHeading) || (headingSize === 'medium' && isSerifHeading),
  'md:fluid-type-8': (headingSize === 'medium' && !isSerifHeading) || (headingSize === 'large' && isSerifHeading),
  'md:gc-splash': headingSize === 'large' && !isSerifHeading,
});

export const thumbnailWrapper = 'inline-block';
export const thumbnail = 'size-80 sm:size-100 md:size-130 xl:size-150 2xl:size-180';

export const body = (isDarktheme: boolean) => cnb('max-w-prose rs-mt-4 *:*:leading-snug text-balance mb-0', isDarktheme && 'text-shadow-sm');

export const cta = 'w-fit rs-mt-4';
