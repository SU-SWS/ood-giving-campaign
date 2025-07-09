import { cnb } from 'cnbuilder';

export const root = 'group z-10 size-36 md:size-44 bg-black-true/60 border-2 rounded-full border-black-10/70 transition-colors hocus-visible:bg-cardinal-red hocus-visible:border-white hocus-visible:text-white shrink-0 aria-disabled:pointer-events-none aria-disabled:opacity-10';
export const icon = (isPause: boolean) => cnb(
  'text-black-20 size-16 md:size-20 group-hocus-within:scale-110 group-hocus-within:text-white',
  !isPause && 'ml-1',
);
