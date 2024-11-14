import { cnb } from 'cnbuilder';

export const root = (color: 'black' | 'white', isMessageMinimal: boolean) => cnb(
  'flex gap-10',
  color === 'white' ? '*:bg-white' : '*:bg-gc-black',
  isMessageMinimal && 'pt-16 md:pt-20',
);
export const dot = 'size-10 lg:size-14 rounded-full opacity-20 scale-75 animate-[ellipsis_1s_.5s_linear_alternate_infinite] first:[animation-delay:.25s] last:[animation-delay:.75s]';
