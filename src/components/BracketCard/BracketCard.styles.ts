import { dcnb } from 'cnbuilder';

export const root = 'su-group su-relative lg:su-h-calc[100%_-_10rem] su-mx-auto';
export const grid = 'su-absolute su-top-0 lg:su-bottom-[4vw] 3xl:su-bottom-70 su-w-full';
export const bracket = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-col-span-2 su-w-[120%]',
  textOnLeft ? 'lg:su-col-start-10' : 'lg:su-col-start-2',
);

export const contentCard = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-col-span-9 su-border-b-2 su-border-white',
  textOnLeft ? 'lg:su-col-start-1' : 'lg:su-col-start-4',
);

export const imageGrid = 'lg:su-pt-[6vw] 3xl:su-pt-100';
export const imageWrapper = (textOnLeft: boolean) => dcnb(
  'su-relative lg:su-col-span-7',
  textOnLeft ? 'lg:su-col-start-6' : '',
);
export const imageAspectRatio = 'su-aspect-w-6 su-aspect-h-5';
export const image = 'su-object-cover';

export const bracketWrapper = 'lg:su-pt-108 su-border-b su-border-white';
export const contentWrapper = (textOnLeft: boolean) => dcnb(
  'su-relative su-z-10 lg:su-pt-[3.8vw] 3xl:su-pt-60 lg:su-h-full',
  textOnLeft ? 'lg:su-ml-0 lg:su-mr-auto' : 'lg:su-mr-0 lg:su-ml-auto',
);

export const heading = 'lg:su-text-[clamp(4.2rem,4vw,7rem)] su-mb-0 su-text-shadow-lg lg:su-max-w-[80%]';
export const headingLink = 'su-stretched-link su-no-underline !su-font-bold';

export const body = (textOnLeft: boolean) => dcnb(
  'su-grow lg:su-max-w-[55%] lg:su-text-16 xl:su-text-20 2xl:su-text-23',
  textOnLeft ? 'lg:su-pr-20 xl:su-pr-30' : 'lg:su-pl-20 xl:su-pl-30',
);

export const textColors = {
  white: 'su-text-white',
  black: 'su-text-saa-black',
};
export type TextColorType = keyof typeof textColors;

export const tab = 'su-h-16 su-w-200 su-max-w-full xl:su-h-20 2xl:su-h-[2.4rem] xl:su-w-300 2xl:su-w-[35rem] lg:su-my-16 xl:su-my-36 2xl:su-my-48';

export const ctaLink = 'su-inline-block su-w-fit su-stretched-link su-rs-mt-0 su-relative su-top-2';
