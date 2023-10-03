import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';

export const overlays = {
  'black-30': 'bg-black-true/30',
  'black-40': 'bg-black-true/40',
  'black-60': 'bg-black-true/60',
  'black-70': 'bg-black-true/70',
  'black-80': 'bg-black-true/80',
  'black-gradient': 'bg-gradient-to-b from-transparent via-black-true/20 to-black-true/50',
  'black-gradient-dark': 'bg-gradient-to-b from-transparent via-black-true/30 to-black-true/80',
  'black-top-bottom': 'bg-gradient-to-b from-gc-black via-transparent via-40% to-gc-black',
  'black-top-sm': 'bg-gradient-to-b from-gc-black via-periwinkle via-20% to-transparent',
  'white-90': 'bg-white/90',
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
      className="absolute w-full h-full object-cover top-0 left-0"
      {...props}
    />
    {overlay && (
      <div
        className={cnb(
          'absolute w-full h-full top-0 left-0',
          overlays[overlay],
        )}
      />
    )}
  </>
);
