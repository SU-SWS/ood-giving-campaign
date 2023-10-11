import { cnb } from "cnbuilder";

export const root = 'relative overflow-hidden';

export const content = (hasBgColor: boolean) => cnb('', {
  'rs-py-1 rs-pl-1 rs-pr-3 border-l-[2rem]': hasBgColor,
});
