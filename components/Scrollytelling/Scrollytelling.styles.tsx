import { cnb } from 'cnbuilder';

const contentAligns = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};
export type ContentAlignType = keyof typeof contentAligns;

export const wrapper = 'relative';
export const imageWrapper = 'sticky top-0 h-screen w-full z-0';
export const image = 'absolute w-full h-full object-cover top-0 left-0';
export const imageOverlay = 'absolute w-full h-full top-0 left-0 bg-black-true/50';

export const content = 'relative z-10 cc text-white rs-py-10';
export const contentWrapper = (contentAlign: ContentAlignType) => cnb('w-full sm:w-2/3 xl:w-1/2', {
  'mx-auto': contentAlign === 'center',
  'ml-0 mr-auto': contentAlign === 'left',
  'mr-0 ml-auto': contentAlign === 'right',
});
export const heading = 'mb-02em whitespace-pre-line';
export const children = 'rs-mt-6 grid gap-y-30 md:gap-y-40 xl:gap-y-60';

export const caption = 'relative children:children:leading-display caption mt-07em children:max-w-prose-wide ml-0';
