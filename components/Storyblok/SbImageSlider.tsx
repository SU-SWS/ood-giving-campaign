import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { ImageSlider } from '@/components/ImageSlider';
import { type WidthType } from '@/components/WidthBox';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type MarginType } from '@/utilities/datasource';
import { type SbImageType } from './Storyblok.types';

type SbImageSliderProps = {
  blok: {
    _uid: string;
    slides: {
      _uid: string;
      image: SbImageType;
      caption?: StoryblokRichtext;
    }[];
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
    slides,
    ariaLabel,
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
      className="gallery-slideshow"
      slides={slides}
      ariaLabel={ariaLabel}
      showExpandLink={showExpandLink}
      boundingWidth={boundingWidth}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
    />
  );
};
