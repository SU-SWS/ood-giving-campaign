import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { EmbedMedia } from '@/components/EmbedMedia';
import { RichText } from '@/components/RichText';
import { hasRichText } from '@/utilities/hasRichText';
import { type CaptionBgColorType } from '@/components/Media';
import { type MediaAspectRatioType } from '@/utilities/datasource';
import { type PaddingType } from '@/utilities/datasource';
import { type SbImageType } from '@/components/Storyblok/Storyblok.types';
import { type WidthType } from '@/components/WidthBox';

type SbEmbedMediaProps = {
  blok: {
    _uid: string;
    id: string;
    mediaUrl: string;
    caption?: StoryblokRichtext;
    aspectRatio?: MediaAspectRatioType;
    boundingWidth?: 'site' | 'full';
    width?: WidthType;
    spacingTop?: PaddingType;
    spacingBottom?: PaddingType;
    isCaptionInset?: boolean;
    isCaptionLight?: boolean;
    captionBgColor?: CaptionBgColorType;
    isPreview?: boolean;
    previewImage?: SbImageType;
    previewAriaLabel?: string;
    isHidden?: boolean;
  };
};

export const SbEmbedMedia = ({
  blok: {
    id,
    mediaUrl,
    caption,
    aspectRatio,
    boundingWidth = 'full',
    width,
    spacingTop,
    spacingBottom,
    isCaptionInset,
    captionBgColor,
    isCaptionLight,
    isPreview,
    previewImage: { filename } = {},
    previewAriaLabel = 'Play video',
    isHidden,
  },
  blok,
}: SbEmbedMediaProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = hasRichText(caption) ?
    <RichText
      textColor={isCaptionLight ? 'white' : 'black-70'}
      linkColor={isCaptionLight ? 'digital-red-xlight' : 'unset'}
      wysiwyg={caption}
    /> : undefined;

  return (
    <EmbedMedia
      {...storyblokEditable(blok)}
      id={id}
      mediaUrl={mediaUrl}
      caption={Caption}
      aspectRatio={aspectRatio}
      boundingWidth={boundingWidth}
      width={width}
      spacingTop={spacingTop}
      spacingBottom={spacingBottom}
      isCaptionInset={isCaptionInset}
      captionBgColor={captionBgColor}
      isPreview={isPreview}
      previewImageSrc={filename}
      previewAriaLabel={previewAriaLabel}
    />
  );
};
