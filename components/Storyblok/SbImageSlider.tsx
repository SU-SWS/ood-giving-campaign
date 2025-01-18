import { storyblokEditable } from '@storyblok/react/rsc';
import { ImageSlider } from '@/components/ImageSlider';
import { type MarginType } from '@/utilities/datasource';
import { type SbSliderImageType } from '@/components/Storyblok/Storyblok.types';

type SbImageSliderProps = {
  blok: {
    _uid: string;
    images: SbSliderImageType[];
    isLightText?: boolean;
    ariaLabel?: string;
    showExpandLink?: boolean;
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isHidden?: boolean;
  };
}

export const SbImageSlider = ({
  blok: {
    images,
    ariaLabel,
    isLightText,
    showExpandLink,
    marginTop,
    marginBottom,
    isHidden,
  },
  blok,
}: SbImageSliderProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <ImageSlider
      {...storyblokEditable(blok)}
      slides={images}
      isLightText={isLightText}
      ariaLabel={ariaLabel}
      showExpandLink={showExpandLink}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};
