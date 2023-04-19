import { dcnb } from 'cnbuilder';

export const bgColors = {
  black: 'su-bg-black su-text-white',
  'black-70': 'su-bg-black-true/70 su-text-white',
  white: 'su-bg-white su-text-black',
};
export type BgColorType = keyof typeof bgColors;

export const panel = 'su-border-white su-bg-no-repeat su-bg-cover su-bg-top';
export const panelLeft = dcnb(panel, 'su-border-b xl:su-border-b-0 xl:su-border-r su-pt-60');
export const panelRight = dcnb(panel, 'su-border-t xl:su-border-t-0 xl:su-border-l su-pb-60');

export const heading = (hasImage: boolean) => dcnb('su-rs-mb-3 su-max-w-400', hasImage ? 'su-text-shadow-sm' : '');
