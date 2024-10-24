import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { type MediaAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { hasRichText } from '@/utilities/hasRichText';
import { EmbedMedia } from '../EmbedMedia';
import { RichText } from '../RichText';

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
    isPreview?: boolean;
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
    isCaptionLight,
    isPreview,
    previewAriaLabel = 'Play video',
    isHidden,
  },
  blok,
}: SbEmbedMediaProps) => {
  if (isHidden) {
    return null;
  }

  const Caption = hasRichText(caption) ? <RichText textColor={isCaptionLight ? 'white' : 'black-70'} wysiwyg={caption} /> : undefined;

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
      isPreview={isPreview}
      previewAriaLabel={previewAriaLabel}
    />
  );
};
