import { getIsSbImagePortrait } from '@/utilities/getIsSbImagePortrait';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type SbSliderImageType } from '@/components/Storyblok/Storyblok.types';
import * as styles from './ImageSlider.styles';
import React from 'react';

type ThumbnailButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  slide: SbSliderImageType;
  isActive: boolean;
  ariaLabel: string;
};

export const ThumbnailButton = ({
  slide,
  isActive,
  ariaLabel,
  ...props
}: ThumbnailButtonProps) => {
  const isPortrait = getIsSbImagePortrait(slide?.image.filename);

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? 'true' : undefined}
      className={styles.thumbButton(isActive, isPortrait)}
      {...props}
    >
      <img
        src={getProcessedImage(
          slide?.image.filename,
          isPortrait ? '65x0' : '100x0',
        )}
        alt=""
      />
    </button>
  );
};
