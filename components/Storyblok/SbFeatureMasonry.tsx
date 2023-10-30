import { storyblokEditable } from '@storyblok/react/rsc';
import { FeatureMasonry } from '@/components/FeaturedStories';
import { RichText } from '@/components/RichText';
import { type SbImageType } from './Storyblok.types';
import { type StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';
import { hasRichText } from '@/utilities/hasRichText';

export type SbFeatureMasonryProps = {
  blok: {
    _uid: string;
    videoUrl?: string;
    audioUrl?: string;
    image1?: SbImageType;
    image2?: SbImageType;
    quoteBody?: StoryblokRichtext;
  };
};

export const SbFeatureMasonry = ({
  blok: {
    videoUrl,
    audioUrl,
    image1: { filename: imageSrc1, focus: imageFocus1 } = {},
    image2: { filename: imageSrc2, focus: imageFocus2 } = {},
    quoteBody,
  },
  blok,
}: SbFeatureMasonryProps) => {
  const QuoteBody = hasRichText(quoteBody) ? <RichText wysiwyg={quoteBody} isLightText /> : undefined;

  return (
    <FeatureMasonry
      {...storyblokEditable(blok)}
      videoUrl={videoUrl}
      audioUrl={audioUrl}
      imageSrc1={imageSrc1}
      imageFocus1={imageFocus1}
      imageSrc2={imageSrc2}
      imageFocus2={imageFocus2}
      quoteBody={QuoteBody}
    />
  );
};
