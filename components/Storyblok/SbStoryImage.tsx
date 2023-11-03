import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { hasRichText } from '@/utilities/hasRichText';
import { StoryImage } from '../StoryImage';
import { RichText } from '../RichText';
import { type SbImageType } from './Storyblok.types';

type SbStoryImageProps = {
  blok: {
    _uid: string;
    image: SbImageType;
    isLoadingEager?: boolean;
    caption?: StoryblokRichtext;
    aspectRatio?: ImageAspectRatioType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
    isCaptionInset?: boolean;
  };
};

export const SbStoryImage = ({
  blok: {
    image: { filename, focus } = {},
    isLoadingEager,
    caption,
    aspectRatio,
    boundingWidth = 'full',
    width,
    spacingTop,
    spacingBottom,
    isCaptionInset,
  },
  blok,
}: SbStoryImageProps) => {
  const Caption = hasRichText(caption) ? <RichText wysiwyg={caption} /> : undefined;

  return (
    <StoryImage
      {...storyblokEditable(blok)}
      imageSrc={filename}
      imageFocus={focus}
      isLoadingEager={isLoadingEager}
      caption={Caption}
      aspectRatio={aspectRatio}
      boundingWidth={boundingWidth}
      width={width}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
      isCaptionInset={isCaptionInset}
    />
  );
};
