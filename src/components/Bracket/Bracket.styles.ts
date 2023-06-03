import { dcnb } from 'cnbuilder';

// Bracket Curve styles
export const root = 'su-border-current su-backface-hidden';

export type CornerType = 'tl' | 'bl' | 'tr' | 'br';

export const colors = {
  white: 'su-text-white',
  black: 'su-text-gc-black',
};
export type ColorType = keyof typeof colors;

export const curve = (corner: CornerType, isSolid: boolean) => dcnb(
  'su-w-[83%] su-h-full su-border-t-2 su-border-l-2 su-rounded-tl-full',
  {
    'su-bg-current': isSolid,
    'su-rounded-tl-full': corner === 'tl',
    'su-rounded-bl-full': corner === 'bl',
    'su-rounded-tr-full': corner === 'tr',
    'su-rounded-br-full': corner === 'br',
    'su-border-t-2': corner === 'tl' || corner === 'tr',
    'su-border-l-2': corner === 'tl' || corner === 'bl',
    'su-border-b-2': corner === 'bl' || corner === 'br',
    'su-border-r-2 su-order-2': corner === 'tr' || corner === 'br',
  },
);
export const rectangle = (corner: CornerType, isSolid: boolean) => dcnb(
  'su-h-full su-w-[17%] su-border-y-2',
  {
    'su-bg-current': isSolid,
    'su-border-r-2': corner === 'tl' || corner === 'bl',
    'su-border-l-2 su-order-1': corner === 'tr' || corner === 'br',
  },
);

// Bracket styles
export const middle = (isClose: boolean, isSolid: boolean) => dcnb(
  'su-grow su-border-x-2 su-border-current su-w-[calc(83%_+_0.2rem)]',
  {
    'su-self-end': isClose,
    'su-bg-current': isSolid,
  },
);
