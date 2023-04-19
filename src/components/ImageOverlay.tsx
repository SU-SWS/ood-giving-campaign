import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';

type ImageOverlayProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: string;
};

export const bgColors = {
  'black-30': 'su-bg-black-true-30',
  'black-40': 'su-bg-black-true-40',
  'black-60': 'su-bg-black-true-60',
  'black-gradient': 'su-bg-gradient-to-b su-from-transparent su-to-black-true/60',
};

export type BgColorType = keyof typeof bgColors;

export const ImageOverlay = ({ bgColor = 'black-40', ...props }: ImageOverlayProps) => (
  <div
    {...props}
    className={dcnb(
      'su-absolute su-w-full su-h-full su-top-0 su-left-0',
      bgColor ? bgColors[bgColor] : '',
    )}
  />
);
