import { cnb } from 'cnbuilder';

export const contentAligns = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};
export type ContentAlignType = keyof typeof contentAligns;

export const overlays = {
  none: 'lg:bg-transparent',
  'black-20': 'lg:bg-black-true/20',
  'black-30': 'lg:bg-black-true/30',
  'black-40': 'lg:bg-black-true/40',
  'black-50': 'lg:bg-black-true/50',
  'black-60': 'lg:bg-black-true/60',
  'black-70': 'lg:bg-black-true/70',
  'black-gradient-to-r': 'lg:bg-transparent lg:bg-gradient-to-r lg:from-black-true/70 lg:to-transparent',
  'black-gradient-to-l': 'lg:bg-transparent lg:bg-gradient-to-l lg:from-black-true/70 lg:to-transparent',
};
export type OverlayType = keyof typeof overlays;

export const wrapper = 'relative';
export const imageWrapper = 'sticky top-0 h-screen w-full z-0';
export const image = 'hidden md:block absolute w-full h-full object-cover top-0 left-0 z-0';
export const imageMobile = 'md:hidden absolute w-full h-full object-cover top-0 left-0 z-0';
export const imageOverlay = (overlay?: OverlayType) => cnb('absolute w-full h-full top-0 left-0 z-0 bg-black-true/50', overlays[overlay]);

export const content = 'relative z-10 cc text-white rs-py-10';
export const contentWrapper = (contentAlign: ContentAlignType) => cnb('w-full md:w-2/3 xl:w-1/2', {
  'mx-auto': contentAlign === 'center',
  'ml-0 mr-auto': contentAlign === 'left',
  'mr-0 ml-auto': contentAlign === 'right',
});
export const header = 'rs-mb-6';
export const heading = 'relative z-10 mb-02em whitespace-pre-line';
export const subhead = 'sm:max-w-[40ch] mx-auto'
export const children = 'grid gap-y-30 md:gap-y-40 xl:gap-y-60';

export const caption = 'relative children:children:leading-display caption mt-07em children:max-w-prose-wide ml-0';
