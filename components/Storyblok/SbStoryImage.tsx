import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { hasRichText } from '@/utilities/hasRichText';
import { StoryImage } from '../StoryImage';
import { RichText } from '../RichText';
import { type AnimationType } from '../Animate';
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
  },
  blok,
}: SbStoryImageProps) => {
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
