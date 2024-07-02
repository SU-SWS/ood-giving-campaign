import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '@/components/WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { hasRichText } from '@/utilities/hasRichText';
import { StoryImage } from '@/components/StoryImage';
import { RichText } from '@/components/RichText';
import { type AnimationType } from '@/components/Animate';
import { type SbImageType } from './Storyblok.types';

type SbStoryImageProps = {
  blok: {
    _uid: string;
    image: SbImageType;
    alt?: string;
    isLoadingEager?: boolean;
    isParallax?: boolean;
    caption?: StoryblokRichtext;
    aspectRatio?: ImageAspectRatioType;
    isFullHeight?: boolean;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
    isCaptionInset?: boolean;
    isCaptionLight?: boolean;
    animation?: AnimationType;
    delay?: number;
    isHidden?: boolean;
  };
};

export const SbStoryImage = ({
  blok: {
    image: { filename, focus } = {},
    alt,
    isLoadingEager,
    isParallax,
    caption,
    aspectRatio,
    isFullHeight,
    boundingWidth = 'full',
    width,
    spacingTop,
    spacingBottom,
    isCaptionInset,
    isCaptionLight,
    animation = 'none',
    delay,
    isHidden,
  },
  blok,
}: SbStoryImageProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = hasRichText(caption) ? <RichText textColor={isCaptionLight ? 'white' : 'black-70'} wysiwyg={caption} /> : undefined;

  return (
    <StoryImage
      {...storyblokEditable(blok)}
      imageSrc={filename}
      imageFocus={focus}
      alt={alt}
      isLoadingEager={isLoadingEager}
      isParallax={isParallax}
      caption={Caption}
      aspectRatio={aspectRatio}
      isFullHeight={isFullHeight}
      boundingWidth={boundingWidth}
      width={width}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
      isCaptionInset={isCaptionInset}
      animation={animation}
      delay={delay}
    />
  );
};
