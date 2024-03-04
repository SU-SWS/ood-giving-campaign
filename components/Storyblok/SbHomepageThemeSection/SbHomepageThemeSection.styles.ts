import { cnb } from 'cnbuilder';

export const root = 'relative overflow-hidden';
export const bgImage = 'absolute top-0 left-0 w-full h-full object-cover';
export const overlay = (hasBgGradient?: boolean) => cnb('absolute top-0 left-0 w-full h-full z-10', hasBgGradient ? 'bg-gradient-to-t' : '');
export const header = 'relative overflow-hidden cc 3xl:px-100 4xl:px-[calc((100%-1800px)/2)] z-20';
export const superhead = 'text-shadow-sm';
export const heading = 'fluid-type-7 md:gc-splash mb-0 whitespace-pre-line';
export const introWrapper = 'cc relative z-20';
export const intro = 'intro-text *:leading-display *:md:leading-cozy *:text-shadow-sm rs-mt-7 max-w-1000';
export const contentWrapper = 'relative z-20';
export const cta = 'relative cc md:flex-row *:mx-auto rs-mt-6 gap-20 lg:gap-27 w-fit';
