export const rowGaps = {
  default: 'grid-gap',
  card: 'grid-gap gap-y-50 xl:gap-y-70',
  'lg-horizontal': 'gap-y-40 md:gap-y-50 gap-x-40 lg:gap-x-50 xl:gap-x-80 2xl:gap-x-100 3xl:gap-x-120',
  xs: 'gap-4',
  'xs-horizontal': 'gap-x-4 gap-y-50 xl:gap-y-70',
};

export const rowColumnRatios = {
  '1:1': '*:basis-1/2',
  '1:2': 'first:*:basis-1/3 last:*:basis-2/3',
  '2:1': 'first:*:basis-2/3 last:*:basis-1/3',
  '2:3': 'first:*:basis-2/5 last:*:basis-3/5',
  '3:2': 'first:*:basis-3/5 last:*:basis-2/5',
  '3:4': 'first:*:basis-[42.86%] last:*:basis-[57.14%]',
  '4:3': 'first:*:basis-[57.14%] last:*:basis-[42.86%]',
  '5:7': 'first:*:basis-5/12 last:*:basis-7/12',
  '7:5': 'first:*:basis-7/12 last:*:basis-5/12',
  '1:1:1': '*:basis-1/3',
  '1:1:2': 'first:*:basis-1/4 even:*:basis-1/4 last:*:basis-1/2',
  '1:2:1' : 'first:*:basis-1/4 even:*:basis-1/2 last:*:basis-1/4',
  '1:2:2': 'first:*:basis-1/5 even:*:basis-2/5 last:*:basis-2/5',
  '2:1:1': 'first:*:basis-1/2 even:*:basis-1/4 last:*:basis-1/4',
  '2:2:1': 'first:*:basis-2/5 even:*:basis-2/5 last:*:basis-1/5',
  '2:1:2': 'first:*:basis-2/5 even:*:basis-1/5 last:*:basis-2/5',
};

export const displayRowAts = {
  sm: 'sm:flex-row',
  md: 'md:flex-row',
  lg: 'lg:flex-row',
  xl: 'xl:flex-row',
};

export const verticalAligns = {
  top: 'items-start',
  center: 'items-center',
  bottom: 'items-end',
  stretch: 'items-stretch',
};

export const root = 'flex-col *:grow-0 *:w-full';
