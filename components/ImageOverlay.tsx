import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';

export const overlays = {
  'black-10': 'bg-black-true/10',
  'black-30': 'bg-black-true/30',
  'black-40': 'bg-black-true/40',
  'black-50': 'bg-black-true/50',
  'black-60': 'bg-black-true/60',
  'black-70': 'bg-black-true/70',
  'black-80': 'bg-black-true/80',
  'black-gradient': 'bg-gradient-to-b from-transparent via-black-true/20 to-black-true/50',
  'gradient-changemaker': 'bg-gradient-to-t via-black-true/20 from-black-true/90', // Changemaker cards
  'black-top-bottom': 'bg-gradient-to-b from-gc-black via-transparent via-40% to-gc-black',
  'white-90': 'bg-white/90',
  'homepage-hero': 'bg-gradient-to-b from-[#223494]',
};
export type OverlayType = keyof typeof overlays | '';

type ImageOverlayProps = Omit<HTMLAttributes<HTMLImageElement>, 'src'> & {
  imageSrc?: string;
  overlay?: OverlayType;
  overlayClasses?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
};

export const ImageOverlay = ({
  imageSrc,
  overlay = 'black-40',
  overlayClasses,
  loading = 'lazy',
  width,
  height,
  className,
  ...props
}: ImageOverlayProps) => (
  <>
    <img
      src={imageSrc}
      alt=""
      loading={loading}
      width={width}
      height={height}
      className={cnb('absolute w-full h-full object-cover top-0 left-0', className)}
      {...props}
    />
    {overlay && (
      <div
        className={cnb(
          'absolute w-full h-full top-0 left-0',
          overlays[overlay],
          overlayClasses,
        )}
      />
    )}
  </>
);
