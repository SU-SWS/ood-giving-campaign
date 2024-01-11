import { cnb } from 'cnbuilder';

export const root = 'relative bg-white bg-no-repeat bg-cover bg-top';

export const panel = 'border-white bg-no-repeat bg-cover bg-top';
export const panelLeft = (isLargeOffset: boolean) => cnb(
  panel,
  'border-b xl:border-b-0 xl:border-r',
  isLargeOffset ? 'pt-200' : 'pt-60',
);
export const panelRight = (isLargeOffset: boolean) => cnb(
  panel,
  'border-t xl:border-t-0 xl:border-l pb-60',
  isLargeOffset ? 'pb-200' : 'pb-60',
);

export const posterContentRoot = (hasImage: boolean) => cnb(
  'relative overflow-hidden border-white sm:max-w-[53rem] md:max-w-[60rem] lg:max-w-[75rem] px-20 sm:px-60 2xl:px-126 min-h-[45rem] md:min-h-[60rem] xl:min-h-[75rem] pb-60 md:pb-100 rs-pt-6',
  hasImage ? 'text-white' : '',
);
export const posterContentLeft = 'rounded-tl-[12rem] sm:rounded-tl-[20rem] lg:rounded-tl-[30rem] border-t-2 border-l-2 ml-20 sm:ml-auto xl:ml-100 3xl:ml-auto xl:pb-180';
export const posterContentRight = 'rounded-br-[12rem] sm:rounded-br-[20rem] lg:rounded-br-[30rem] border-r-2 border-b-2 mr-20 sm:mr-auto xl:mr-100 3xl:mr-auto xl:pb-[11.8rem]';

export const content = 'relative w-full break-words z-10';

export const heading = (hasImage: boolean) => cnb('rs-mb-3 2xl:whitespace-pre-line', hasImage ? 'text-shadow-sm' : '');

export const body = 'rs-mb-2 last:mb-0';

export const ctaWrapper = '*:rs-mb-1 last:*:mb-0 mr-0';
