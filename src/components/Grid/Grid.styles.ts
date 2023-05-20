// Add options as needed
export const gridNumCols = {
  xs: {
    1: 'su-grid-cols-1',
    2: 'su-grid-cols-2',
    3: 'su-grid-cols-3',
    4: 'su-grid-cols-4',
    6: 'su-grid-cols-6',
    12: 'su-grid-cols-12',
  },
  sm: {
    1: 'sm:su-grid-cols-1',
    2: 'sm:su-grid-cols-2',
    3: 'sm:su-grid-cols-3',
    4: 'sm:su-grid-cols-4',
    6: 'sm:su-grid-cols-6',
    12: 'sm:su-grid-cols-12',
  },
  md: {
    1: 'md:su-grid-cols-1',
    2: 'md:su-grid-cols-2',
    3: 'md:su-grid-cols-3',
    4: 'md:su-grid-cols-4',
    6: 'md:su-grid-cols-6',
    12: 'md:su-grid-cols-12',
  },
  lg: {
    1: 'lg:su-grid-cols-1',
    2: 'lg:su-grid-cols-2',
    3: 'lg:su-grid-cols-3',
    4: 'lg:su-grid-cols-4',
    6: 'lg:su-grid-cols-6',
    12: 'lg:su-grid-cols-12',
  },
  xl: {
    1: 'xl:su-grid-cols-1',
    2: 'xl:su-grid-cols-2',
    3: 'xl:su-grid-cols-3',
    4: 'xl:su-grid-cols-4',
    6: 'xl:su-grid-cols-6',
    12: 'xl:su-grid-cols-12',
  },
  xxl: {
    1: '2xl:su-grid-cols-1',
    2: '2xl:su-grid-cols-2',
    3: '2xl:su-grid-cols-3',
    4: '2xl:su-grid-cols-4',
    6: '2xl:su-grid-cols-6',
    12: '2xl:su-grid-cols-12',
  },
};

export const gridGaps = {
  default: 'su-grid-gap',
  card: 'su-grid-gap su-gap-y-[5rem] xl:su-gap-y-[7rem]',
  split: 'md:su-gap-x-[6rem] lg:su-gap-x-[10rem] xl:su-gap-x-[20rem] 2xl:su-gap-x-[28rem]',
};

export const gridJustifyContent = {
  start: 'su-justify-start',
  end: 'su-justify-end',
  center: 'su-justify-center',
  between: 'su-justify-between',
  around: 'su-justify-around',
  evenly: 'su-justify-evenly',
};

export const gridJustifyItems = {
  start: 'su-justify-items-start',
  end: 'su-justify-items-end',
  center: 'su-justify-items-center',
  stretch: 'su-justify-items-stretch',
};

export const gridAlignContent = {
  start: 'su-content-start',
  end: 'su-content-end',
  center: 'su-content-center',
  between: 'su-content-between',
  around: 'su-content-around',
  evenly: 'su-content-evenly',
};

export const gridAlignItems = {
  start: 'su-items-start',
  end: 'su-items-end',
  center: 'su-items-center',
  baseline: 'su-items-baseline',
  stretch: 'su-items-stretch',
};

// Styles for the alternating grid
export const alternatingGridWrapper = 'su-relative su-mx-auto';

export const centerline = 'su-hidden md:su-block su-w-2 su-absolute su-top-0 su-left-[50%] su--ml-1 su-h-full su-origin-top su-bg-current';

export const gridWidths = {
  full: 'su-w-full',
  // This is for the overview text and theme cards in the alternating grid
  inset: 'su-w-full 3xl:su-w-[85%]',
};

// Some sections have negative spacing between cards, i.e., the items are shifted upwards
export const negativeSpacing = {
  theme: 'md:su--mb-140 lg:su--mb-171',
};

export const cellWithContent = 'last:!su-mb-0';
