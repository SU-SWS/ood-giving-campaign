import { dcnb } from 'cnbuilder';

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
  black: 'su-text-black',
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
