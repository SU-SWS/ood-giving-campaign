export const rowGaps = {
  default: 'grid-gap',
  card: 'grid-gap gap-y-50 xl:gap-y-70',
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
};

export const rowJustifyContent = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const rowJustifyItems = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch',
};

export const rowAlignContent = {
  start: 'content-start',
  end: 'content-end',
  center: 'content-center',
  between: 'content-between',
  around: 'content-around',
  evenly: 'content-evenly',
};

export const rowAlignItems = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};
