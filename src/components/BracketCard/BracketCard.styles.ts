import { dcnb } from 'cnbuilder';

export const root = 'su-group su-relative lg:su-h-calc[100%_-_10rem] su-mx-auto';

export const imageWrapper = 'su-relative lg:su-col-span-7';
export const imageAspectRatio = 'su-aspect-w-6 su-aspect-h-5';
export const image = 'su-object-cover';

export const bracketWrapper = 'lg:su-pt-108 su-border-b su-border-white';
export const contentWrapper = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-pt-[4vw] lg:su-h-full',
  textOnLeft ? 'lg:su-ml-0 lg:su-mr-auto' : 'su-text-right lg:su-mr-0 lg:su-ml-auto',
);

export const heading = 'lg:su-text-[clamp(4.7rem,4vw,7rem)] su-mb-0 su-text-shadow-lg lg:su-max-w-[80%]';
export const headingLink = 'su-stretched-link su-no-underline !su-font-bold';

export const textColors = {
  white: 'su-text-white',
  black: 'su-text-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'su-h-16 su-w-200 su-max-w-full xl:su-h-20 2xl:su-h-[2.4rem] xl:su-w-300 2xl:su-w-[35rem] su-rs-my-2';

export const ctaLink = 'su-inline-block su-w-fit su-stretched-link su-rs-mt-0 su-relative su-top-2';
