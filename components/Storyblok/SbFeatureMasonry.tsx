import { storyblokEditable } from '@storyblok/react/rsc';
import { FeatureMasonry } from '@/components/FeaturedStories';
import { RichText } from '@/components/RichText';
import { type SbImageType } from './Storyblok.types';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { hasRichText } from '@/utilities/hasRichText';

export type SbFeatureMasonryProps = {
  blok: {
    _uid: string;
    audioUrl?: string;
    audioBgImage?: SbImageType;
    image1?: SbImageType;
    quoteBody?: string;
    quoteBgImage?: SbImageType;
    videoUrl?: string;
    caption?: string;
  };
};

export const SbFeatureMasonry = ({
  blok: {
    audioUrl,
    audioBgImage: { filename: audioBgImageSrc, focus: audioBgImagFocus } = {},
    quoteBody,
    quoteBgImage: { filename: quoteBgImageSrc, focus: quoteBgImageFocus } = {},
    image1: { filename: imageSrc1, focus: imageFocus1 } = {},
    videoUrl,
    caption,
  },
  blok,
}: SbFeatureMasonryProps) => {
  return (
    <FeatureMasonry
      {...storyblokEditable(blok)}
      audioUrl={audioUrl}
      audioBgImageSrc={audioBgImageSrc}
      audioBgImageFocus={audioBgImagFocus}
      quoteBody={quoteBody}
      quoteBgImageSrc={quoteBgImageSrc}
      quoteBgImageFocus={quoteBgImageFocus}
      imageSrc1={imageSrc1}
      imageFocus1={imageFocus1}
      videoUrl={videoUrl}
      caption={caption}
    />
  );
};
