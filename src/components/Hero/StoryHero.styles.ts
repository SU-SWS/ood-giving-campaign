import { cnb } from 'cnbuilder';

export const imageWrapper = (isVerticalHero: boolean) => cnb('su-transition-all su-rounded-br-[20vw] su-overflow-hidden', {
  'su-aspect-w-2 su-aspect-h-1': !isVerticalHero,
  'su-aspect-w-5 su-aspect-h-8': isVerticalHero,
});

export const image = 'su-object-cover su-w-full su-h-full';
