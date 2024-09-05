import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '@/components/WidthBox';
import { type MarginType } from '@/utilities/datasource';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { RichText } from '@/components/RichText';
import { type SbImageType, type SbImageHotspotType } from './Storyblok.types';

type SbAnnotatedImageProps = {
  blok: {
    _uid: string;
    image: SbImageType;
    alt?: string;
    caption?: StoryblokRichtext;
    aspectRatio?: ImageAspectRatioType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    marginTop?: MarginType;
    marginBottom?: MarginType;
    isCaptionInset?: boolean;
    isCaptionLight?: boolean;
    captionBgColor?: 'transparent' | 'black';
    hotspots?: SbImageHotspotType[];
    isHidden?: boolean;
  };
};

export const SbAnnotatedImage = ({
  blok: {
    image: { filename, focus } = {},
    alt,
    caption,
    aspectRatio,
    boundingWidth = 'full',
    width,
    marginTop,
    marginBottom,
    isCaptionInset,
    isCaptionLight,
    captionBgColor,
    hotspots,
    isHidden,
  },
  blok,
}: SbAnnotatedImageProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = caption ? (
    <RichText textColor={isCaptionLight ? 'white' : 'black-70'} wysiwyg={caption} />
  ) : undefined;

  return (
    <AnnotatedImage
      {...storyblokEditable(blok)}
      imageSrc={filename}
      imageFocus={focus}
      alt={alt}
      caption={Caption}
      aspectRatio={aspectRatio}
      boundingWidth={boundingWidth}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      isCaptionInset={isCaptionInset}
      captionBgColor={captionBgColor}
      hotspots={hotspots}
    />
  );
};
