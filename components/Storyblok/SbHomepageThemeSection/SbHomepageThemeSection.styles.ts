import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';
export const bgImage = 'absolute top-0 left-0 size-full object-cover';
export const overlay = (hasBgGradient: boolean) => cnb('absolute top-0 left-0 size-full z-10', hasBgGradient ? 'bg-gradient-to-b' : '');
export const header = 'relative overflow-hidden cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] z-20';
export const superhead = (isDarkTheme: boolean) => isDarkTheme && 'text-shadow-sm';
export const heading = 'fluid-type-7 md:gc-splash mb-0 whitespace-pre-line';
export const introWrapper = 'cc relative z-20';
export const intro = (isDarkTheme: boolean) => cnb('intro-text *:leading-display *:md:leading-cozy rs-mt-7 max-w-1000', isDarkTheme && 'text-shadow-sm');
export const contentWrapper = 'relative z-20';
export const cta = 'relative cc md:flex-row *:mx-auto rs-mt-6 gap-20 lg:gap-27 w-fit';
