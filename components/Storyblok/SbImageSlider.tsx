import { storyblokEditable } from '@storyblok/react/rsc';
import { ImageSlider } from '@/components/ImageSlider';
import { type WidthType } from '@/components/WidthBox';
import { type MarginType } from '@/utilities/datasource';
import { type SbSliderImageType } from '@/components/Storyblok/Storyblok.types';

type SbImageSliderProps = {
  blok: {
    _uid: string;
    images: SbSliderImageType[];
    isLightText?: boolean;
    ariaLabel?: string;
    showExpandLink?: boolean;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
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
    boundingWidth = 'full',
    width,
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
      boundingWidth={boundingWidth}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};
