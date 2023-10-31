import { cnb } from 'cnbuilder';

export const flexbox = (isTop?: boolean) => cnb('border-gc-black',
  isTop ? 'border-b-2 rs-pb-0' : 'border-t-2 rs-pt-0',
);
