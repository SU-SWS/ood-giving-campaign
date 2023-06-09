import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';

export const overlays = {
  'black-30': 'su-bg-black-true/30',
  'black-40': 'su-bg-black-true/40',
  'black-60': 'su-bg-black-true/60',
  'black-gradient': 'su-bg-gradient-to-b su-from-transparent su-via-black-true/20 su-to-black-true/70',
};
export type OverlayType = keyof typeof overlays | '';

type ImageOverlayProps = Omit<HTMLAttributes<HTMLImageElement>, 'src'> & {
  imageSrc?: string;
  overlay?: OverlayType;
};

export const ImageOverlay = ({
  imageSrc,
  overlay = 'black-40',
  className,
  ...props
}: ImageOverlayProps) => (
  <>
    <img
      src={imageSrc}
      alt=""
      loading="lazy"
      className="su-absolute su-w-full su-h-full su-object-cover su-top-0 su-left-0"
      {...props}
    />
    {overlay && (
      <div
        className={cnb(
          'su-absolute su-w-full su-h-full su-top-0 su-left-0',
          overlays[overlay],
        )}
      />
    )}
  </>
);
