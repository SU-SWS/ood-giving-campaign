import { storyblokEditable } from '@storyblok/react/rsc';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { hasRichText } from '@/utilities/hasRichText';
import { EmbedMedia } from '../EmbedMedia';
import { RichText } from '../RichText';

type SbEmbedMediaProps = {
  blok: {
    _uid: string;
    mediaUrl: string;
    caption?: StoryblokRichtext;
  };
};

export const SbEmbedMedia = ({
  blok: {
    mediaUrl,
    caption,
  },
  blok,
}: SbEmbedMediaProps) => {
  const Caption = hasRichText(caption) ? <RichText wysiwyg={caption} /> : undefined;

  return (
    <EmbedMedia
      {...storyblokEditable(blok)}
      mediaUrl={mediaUrl}
      caption={Caption}
    />
  );
};
