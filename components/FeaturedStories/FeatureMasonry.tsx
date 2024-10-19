import React from 'react';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import { EmbedMedia } from '@/components/EmbedMedia';
import { ImageOverlay } from '@/components/ImageOverlay';
import { Quote } from '@/components/Quote';
import { Text } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';


type FeatureMasonryProps = React.HTMLAttributes<HTMLDivElement> & {
  audioUrl?: string;
  audioBgImageSrc?: string;
  audioBgImageFocus?: string;
  quoteBody?: string;
  quoteSource?: string;
  quoteBgImageSrc?: string;
  quoteBgImageFocus?: string;
  imageSrc1?: string;
  imageFocus1?: string;
  imageAlt1?: string;
  videoUrl?: string;
  previewAriaLabel?: string;
  caption?: string;
}

export const FeatureMasonry = ({
  audioUrl,
  audioBgImageSrc,
  audioBgImageFocus,
  quoteBody,
  quoteSource,
  quoteBgImageSrc,
  quoteBgImageFocus,
  imageSrc1,
  imageFocus1,
  imageAlt1,
  videoUrl,
  previewAriaLabel,
  caption,
  className,
  ...props
}: FeatureMasonryProps) => {
  return (
    <Container {...props} width="full">
      <Grid lg={12} gap="default">
        <FlexBox
          alignItems="center"
          className="relative lg:col-span-7 bg-black-70 overflow-hidden"
        >
          <ImageOverlay
            imageSrc={getProcessedImage(
              audioBgImageSrc,
              '1200x600',
              audioBgImageFocus,
            )}
            overlay="black-10"
          />
          <div className="absolute top-0 left-0 size-full backdrop-blur-sm" />
          <EmbedMedia
            mediaUrl={audioUrl}
            className="relative z-10 rs-py-6 *:w-4/5 *:mx-auto lg:*:*:aspect-w-2 lg:*:*:aspect-h-1 xl:*:*:aspect-w-4 xl:*:*:aspect-h-1"
          />
        </FlexBox>
        <FlexBox
          justifyContent="center"
          className="relative lg:col-span-5 rs-py-4 px-36 xl:px-58 2xl:px-76 bg-black-70 text-white"
        >
          <ImageOverlay
            imageSrc={getProcessedImage(
              quoteBgImageSrc,
              '1200x800',
              quoteBgImageFocus,
            )}
            overlay="black-60"
          />
          <div className="place-self-center h-fit">
            <Quote
              teaser=" "
              animation="slideUp"
              quoteColor="flamingo"
              body={quoteBody}
              isLargeBody
              source={quoteSource}
              className="relative z-10 !pl-0"
            />
          </div>
        </FlexBox>
        <div className="lg:col-span-6 size-full">
          <img
            src={getProcessedImage(imageSrc1, '800x450', imageFocus1)}
            alt={imageAlt1 || ''}
            className="size-full object-cover"
          />
        </div>
        <EmbedMedia
          mediaUrl={videoUrl}
          isPreview
          className="lg:col-span-6 bg-black-70"
          aspectRatio="16x9"
          previewAriaLabel={previewAriaLabel}
        />
      </Grid>
      <Text variant="caption" leading="display" className="text-black-70 max-w-prose-wide mt-06em whitespace-pre-line">
        {caption}
      </Text>
    </Container>
  );
};
