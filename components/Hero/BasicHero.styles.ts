import { cnb } from 'cnbuilder';

export const heading = (isDrukHeading: boolean, isSmallHeading: boolean) => cnb('relative z-10 max-w-1200 mx-auto mb-0 text-balance', {
  'fluid-type-7 md:fluid-type-8': isDrukHeading && isSmallHeading,
  'fluid-type-7 md:gc-splash': isDrukHeading && !isSmallHeading,
  'fluid-type-6 md:fluid-type-7': !isDrukHeading && isSmallHeading,
  'fluid-type-6 md:fluid-type-8': !isDrukHeading && !isSmallHeading,
});
