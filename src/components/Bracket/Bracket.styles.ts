import { dcnb } from 'cnbuilder';

// Bracket Curve styles
export const root = 'su-border-current';

export const corners = {
  tl: '',
  bl: 'su-scale-y-[-1]',
  tr: 'su-scale-x-[-1]',
  br: 'su-rotate-180',
};
export type CornerType = keyof typeof corners;

export const colors = {
  white: 'su-text-white',
  black: 'su-text-saa-black',
};
export type ColorType = keyof typeof colors;

export const curve = (isSolid: boolean) => dcnb(
  'su-w-[83%] su-h-[8em] su-border-t-2 su-border-l-2 su-rounded-tl-full',
  isSolid ? 'su-bg-current' : '',
);
export const rectangle = (isSolid: boolean) => dcnb(
  'su-w-[17%] su-h-[8em] su-border-r-2 su-border-y-2',
  isSolid ? 'su-bg-current' : '',
);

// Bracket styles
export const directions = (isClose: boolean) => (isClose ? 'su-rotate-180' : '');

export const middle = (isSolid: boolean) => dcnb(
  'su-grow su-border-l-2 su-border-r-2 su-border-current su-w-[calc(83%_+_0.2rem)]',
  isSolid ? 'su-bg-current' : '',
);
