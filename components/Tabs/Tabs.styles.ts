import { cnb } from 'cnbuilder';

export const headingSizes = {
  small: 'fluid-type-4',
  medium: 'fluid-type-4 md:fluid-type-5',
  large: 'fluid-type-4 md:fluid-type-6',
};
export type TabItemHeadingSizeType = keyof typeof headingSizes;

export const root = 'relative cc break-words scroll-mt-80';
export const tabGroup = 'hidden sm:grid grid-cols-12';
export const tabList = (isKeyboardUser: boolean) => cnb('flex flex-col col-span-4', isKeyboardUser && 'focus-within:outline focus-within:outline-digital-blue');
export const tabItem = (isLightText: boolean) => cnb('relative data-[hover]:underline data-[hover]:underline-offset-4 data-[selected]:outline-none text-left md:pl-20 pr-20 lg:px-26 py-20 lg:py-26 type-1 lg:text-[2.7rem] xl:text-[3.4rem] font-normal data-[selected]:underline data-[selected]:underline-offset-4 leading-display transition-colors',
  isLightText ?
    'text-black-30 data-[selected]:text-white hover:text-white'
    : 'text-black/60 data-[selected]:text-gc-black hover:text-gc-black',
);
export const tabItemBar = (isLightText: boolean) => cnb('h-full w-20 absolute right-0 top-0 ',
  isLightText ? 'bg-digital-red-light' : 'bg-digital-red',
);
export const tabPanel = (isLightText: boolean) => cnb('border-l pl-20 lg:pl-30 xl:pl-36 col-span-8',
  isLightText ? 'border-black-50' : 'border-black-60',
);
export const contentWrapper = 'gap-16 md:gap-26 xl:gap-36';
export const superhead = 'mb-03em';
export const heading = (headingSize: TabItemHeadingSizeType) => headingSizes[headingSize || 'medium'];
export const mobileGrid = 'sm:hidden list-unstyled';
export const li = 'scroll-mt-30';
