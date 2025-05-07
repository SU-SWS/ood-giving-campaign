import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import { EmbedMedia } from '@/components/EmbedMedia';
import { ImageOverlay } from '@/components/ImageOverlay';
import { Quote } from '@/components/Quote';
import { Text } from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './FeatureMasonry.styles';

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
  isLightCaption?: boolean;
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
  isLightCaption,
  ...props
}: FeatureMasonryProps) => {
  return (
    <Container as="figure" width="full" {...props}>
      <Grid lg={12} gap="default">
        {/* Audio player block */}
        <FlexBox
          alignItems="center"
          className={styles.audioWrapper}
        >
          <ImageOverlay
            imageSrc={getProcessedImage(
              audioBgImageSrc,
              '1200x600',
              audioBgImageFocus,
            )}
            overlay="black-10"
          />
          <div className={styles.blurOverlay} />
          <EmbedMedia
            mediaUrl={audioUrl}
            spacingTop={6}
            spacingBottom={6}
            className={styles.audio}
          />
        </FlexBox>
        {/* Quote block */}
        <FlexBox
          justifyContent="center"
          className={styles.quoteWrapper}
        >
          <ImageOverlay
            imageSrc={getProcessedImage(
              quoteBgImageSrc,
              '1200x800',
              quoteBgImageFocus,
            )}
            overlay="black-60"
          />
          <div className={styles.quoteInnerWrapper}>
            <Quote
              teaser=" "
              animation="slideUp"
              quoteColor="flamingo"
              body={quoteBody}
              isLargeBody
              source={quoteSource}
              className={styles.quote}
            />
          </div>
        </FlexBox>
        {/* Image block */}
        <div className={styles.imageWrapper}>
          <img
            src={getProcessedImage(imageSrc1, '800x450', imageFocus1)}
            alt={imageAlt1 || ''}
            className={styles.image}
          />
        </div>
        {/* Video block */}
        <EmbedMedia
          mediaUrl={videoUrl}
          isPreview
          className={styles.video}
          aspectRatio="16x9"
          previewAriaLabel={previewAriaLabel}
        />
      </Grid>
      <Text
        as="figcaption"
        variant="caption"
        color={isLightCaption ? 'white' : 'black-70'}
        leading="display"
        className={styles.caption}
      >
        {caption}
      </Text>
    </Container>
  );
};
