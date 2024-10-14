import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { AnnotatedImage } from '@/components/AnnotatedImage';
import { type WidthType } from '@/components/WidthBox';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type MarginType } from '@/utilities/datasource';
import { type SbImageType, type SbImageHotspotType } from './Storyblok.types';

type SbAnnotatedImageProps = {
  blok: {
    _uid: string;
    image: SbImageType;
    alt?: string;
    caption?: StoryblokRichtext;
    isLoadingEager?: boolean;
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
    isLoadingEager,
    boundingWidth = 'full',
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

  const Caption = hasRichText(caption) ? (
    <RichText textColor={isCaptionLight ? 'white' : 'black-70'} wysiwyg={caption} />
  ) : undefined;

  return (
    <AnnotatedImage
      {...storyblokEditable(blok)}
      imageSrc={filename}
      imageFocus={focus}
      alt={alt}
      caption={Caption}
      isLoadingEager={isLoadingEager}
      aspectRatio={aspectRatio}
      boundingWidth={boundingWidth}
      marginTop={marginTop}
      marginBottom={marginBottom}
      isCaptionInset={isCaptionInset}
      captionBgColor={captionBgColor}
      hotspots={hotspots}
    />
  );
};
