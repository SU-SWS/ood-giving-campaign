import { storyblokEditable } from '@storyblok/react/rsc';
import { FeatureMasonry } from '@/components/FeaturedStories';
import { type SbImageType } from './Storyblok.types';

export type SbFeatureMasonryProps = {
  blok: {
    _uid: string;
    audioUrl?: string;
    audioBgImage?: SbImageType;
    quoteBody?: string;
    quoteSource?: string;
    quoteBgImage?: SbImageType;
    image1?: SbImageType;
    imageAlt1?: string;
    videoUrl?: string;
    previewAriaLabel?: string;
    caption?: string;
    isHidden?: boolean;
  };
};

export const SbFeatureMasonry = ({
  blok: {
    audioUrl,
    audioBgImage: { filename: audioBgImageSrc, focus: audioBgImagFocus } = {},
    quoteBody,
    quoteSource,
    quoteBgImage: { filename: quoteBgImageSrc, focus: quoteBgImageFocus } = {},
    image1: { filename: imageSrc1, focus: imageFocus1 } = {},
    imageAlt1,
    videoUrl,
    previewAriaLabel = 'Play video',
    caption,
    isHidden,
  },
  blok,
}: SbFeatureMasonryProps) => {
  if (isHidden) {
    return null;
  }

  return (
    <FeatureMasonry
      {...storyblokEditable(blok)}
      audioUrl={audioUrl}
      audioBgImageSrc={audioBgImageSrc}
      audioBgImageFocus={audioBgImagFocus}
      quoteBody={quoteBody}
      quoteSource={quoteSource}
      quoteBgImageSrc={quoteBgImageSrc}
      quoteBgImageFocus={quoteBgImageFocus}
      imageSrc1={imageSrc1}
      imageFocus1={imageFocus1}
      imageAlt1={imageAlt1}
      videoUrl={videoUrl}
      previewAriaLabel={previewAriaLabel}
      caption={caption}
    />
  );
};
