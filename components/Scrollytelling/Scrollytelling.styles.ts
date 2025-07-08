import { cnb } from 'cnbuilder';

export type ImageAlignType = 'left' | 'right' | 'center';
export type imageWidthType = '100%' | '50%' | '60%' | '40%';

export const contentAligns = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};
export type ContentAlignType = keyof typeof contentAligns;

export const overlays = {
  none: 'bg-black-true/50 lg:bg-transparent',
  'black-20': 'bg-black-true/50 lg:bg-black-true/20',
  'black-30': 'bg-black-true/50 lg:bg-black-true/30',
  'black-40': 'bg-black-true/50 lg:bg-black-true/40',
  'black-50': 'bg-black-true/50',
  'black-60': 'bg-black-true/60',
  'black-70': 'bg-black-true/70',
  'black-80': 'bg-black-true/80',
  'black-gradient-to-r': 'bg-black-true/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-black-true/70',
  'black-gradient-to-l': 'bg-black-true/50 lg:bg-transparent lg:bg-gradient-to-l lg:from-black-true/70',
};
export type OverlayType = keyof typeof overlays;

export const imageEntrances = {
  none: '',
  'zoom-in': '',
  'zoom-out': '',
  blur: 'backdrop-blur',
  grayscale: 'backdrop-saturate-0',
  sepia: 'backdrop-sepia',
};
export type ImageEntranceType = keyof typeof imageEntrances;

export const wrapper = 'relative overflow-clip';
export const imageWrapper = 'sticky top-0 h-screen w-full z-0';
export const image = (imageAlign: ImageAlignType) => cnb(
  'absolute w-full h-screen object-cover object-top z-0 mx-auto', {
    'right-0': imageAlign === 'right',
    'left-0': imageAlign === 'left',
    'inset-0': imageAlign === 'center',
  },
);

export const overlayBase = 'absolute size-full top-0 left-0 z-0';
export const imageOverlay = (overlay?: OverlayType) => cnb(overlayBase, overlays[overlay]);
export const filterOverlay = (imageEntrance: ImageEntranceType) => cnb(overlayBase, imageEntrances[imageEntrance]);

export const content = 'relative z-10 cc text-white rs-py-10';
export const contentWrapper = (contentAlign: ContentAlignType) => cnb('w-full mx-auto md:w-2/3 xl:w-1/2', {
  'lg:ml-0 lg:mr-auto': contentAlign === 'left',
  'lg:mr-0 lg:ml-auto': contentAlign === 'right',
});
export const header = 'rs-mb-6';
export const heading = 'relative z-10 mb-02em whitespace-pre-line';
export const subhead = 'sm:max-w-[40ch] mx-auto';
export const children = (addContentSpacing: boolean) => cnb(
  'grid gap-y-30 md:gap-y-40 xl:gap-y-60',
  addContentSpacing && 'mb-[120vh]',
);

export const caption = 'relative *:*:leading-display first:*:*:mt-0 gc-caption mt-06em *:max-w-prose-wide ml-0';
