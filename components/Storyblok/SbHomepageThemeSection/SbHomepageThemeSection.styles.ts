import { cnb } from 'cnbuilder';

export const bgImage = 'absolute top-0 left-0 w-full h-full object-cover';
export const overlay = (addBgBlur?: boolean, addOverlay?: boolean) => cnb(
  'absolute top-0 left-0 w-full h-full z-10 backdrop-blur-sm bg-gradient-to-b from-black-true/5 to-gc-black', {
    'backdrop-blur-md': addBgBlur,
    'bg-black/70': addOverlay,
  },
);
