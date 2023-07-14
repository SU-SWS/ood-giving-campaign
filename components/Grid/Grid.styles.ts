// Add options as needed
export const gridNumCols = {
  xs: {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  },
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    6: 'sm:grid-cols-6',
    12: 'sm:grid-cols-12',
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-6',
    12: 'md:grid-cols-12',
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
    12: 'lg:grid-cols-12',
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    6: 'xl:grid-cols-6',
    12: 'xl:grid-cols-12',
  },
  xxl: {
    1: '2xl:grid-cols-1',
    2: '2xl:grid-cols-2',
    3: '2xl:grid-cols-3',
    4: '2xl:grid-cols-4',
    6: '2xl:grid-cols-6',
    12: '2xl:grid-cols-12',
  },
};

export const gridGaps = {
  default: 'grid-gap',
  card: 'grid-gap gap-y-[5rem] xl:gap-y-[7rem]',
  split: 'md:gap-x-[6rem] lg:gap-x-[10rem] xl:gap-x-[20rem] 2xl:gap-x-[28rem]',
  xs: 'gap-[0.4rem]',
  'xs-horizontal': 'gap-x-[0.4rem] gap-y-[5rem] xl:gap-y-[7rem]',
};

export const gridJustifyContent = {
  start: 'justify-start',
  end: 'justify-end',
  center: 'justify-center',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

export const gridJustifyItems = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch',
};

export const gridAlignContent = {
  start: 'content-start',
  end: 'content-end',
  center: 'content-center',
  between: 'content-between',
  around: 'content-around',
  evenly: 'content-evenly',
};

export const gridAlignItems = {
  start: 'items-start',
  end: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
};

// Styles for the alternating grid
export const alternatingGridWrapper = 'relative mx-auto';

export const centerline = 'hidden md:block w-2 absolute top-0 left-1/2 -ml-1 h-full origin-top bg-current';

export const gridWidths = {
  full: 'w-full',
  // This is for the overview text and theme cards in the alternating grid
  inset: 'w-full 2xl:w-[95%] 3xl:w-[85%]',
};

// Some sections have negative spacing between cards, i.e., the items are shifted upwards
export const negativeSpacing = {
  theme: 'md:-mb-140 lg:-mb-171',
};

export const cellWithContent = 'last:!mb-0';
