import { cnb } from 'cnbuilder';

// Bracket Curve styles
export const root = '*:border-current backface-hidden';

export type CornerType = 'tl' | 'bl' | 'tr' | 'br';

export const colors = {
  white: 'text-white',
  black: 'text-gc-black',
};
export type ColorType = keyof typeof colors;

export const curve = (corner: CornerType, isSolid: boolean) => cnb(
  'w-[83%] h-full',
  {
    'bg-current': isSolid,
    'rounded-tl-full': corner === 'tl',
    'rounded-bl-full': corner === 'bl',
    'rounded-tr-full': corner === 'tr',
    'rounded-br-full': corner === 'br',
    'border-t-2': corner === 'tl' || corner === 'tr',
    'border-l-2': corner === 'tl' || corner === 'bl',
    'border-b-2': corner === 'bl' || corner === 'br',
    'border-r-2 order-2': corner === 'tr' || corner === 'br',
  },
);
export const rectangle = (corner: CornerType, isSolid: boolean) => cnb(
  'h-full w-[17%] border-y-2',
  {
    'bg-current': isSolid,
    'border-r-2': corner === 'tl' || corner === 'bl',
    'border-l-2 order-1': corner === 'tr' || corner === 'br',
  },
);

// Bracket styles
export const middle = (isClose: boolean, isSolid: boolean) => cnb(
  'grow border-x-2 border-current w-[calc(83%_+_0.2rem)]',
  {
    'self-end': isClose,
    'bg-current': isSolid,
  },
);
