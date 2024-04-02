import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { WidthBox, type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { imageAspectRatios, type ImageAspectRatioType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import { type AnimationType } from '../Animate';
import * as styles from './StoryImage.styles';

type StoryImageProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  imageFocus?: string;
  isLoadingEager?: boolean;
  isParallax?: boolean;
  alt?: string;
  caption?: React.ReactNode;
  aspectRatio?: ImageAspectRatioType;
  isFullHeight?: boolean;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  isCaptionInset?: boolean;
  animation?: AnimationType;
  delay?: number;
};

export const StoryImage = ({
  imageSrc,
  imageFocus,
  isLoadingEager,
  isParallax,
  alt,
  caption,
  aspectRatio,
  isFullHeight,
  boundingWidth = 'full',
  width,
  spacingTop,
  spacingBottom,
  isCaptionInset,
  animation = 'none',
  delay,
  className,
  ...props
}: StoryImageProps) => {
  const { width: originalWidth, height: originalHeight } = getSbImageSize(imageSrc);
  const cropSize = styles.imageCrops[aspectRatio];
  /**
   * Crop width and height are used for width and height attributes on the img element.
   * They don't need to be exact as long as the aspect ratio is correct.
   */
  const cropWidth = parseInt(cropSize?.split('x')[0], 10);
  const cropHeight = aspectRatio === 'free'
    ? Math.round(originalHeight * 2000 / originalWidth)
    : parseInt(cropSize?.split('x')[1], 10);

  return (
    <WidthBox
      {...props}
      boundingWidth={boundingWidth}
      width={width}
      pt={spacingTop}
      pb={spacingBottom}
      className={cnb(className, styles.root(isFullHeight))}
    >
      <AnimateInView animation={animation} delay={delay} className={styles.animateWrapper(isFullHeight)}>
        <figure className={styles.figure(isFullHeight)}>
          <div className={cnb(imageAspectRatios[aspectRatio], styles.imageWrapper(isFullHeight))}>
            {!!imageSrc && (
              <img
                src={getProcessedImage(imageSrc, cropSize, imageFocus)}
                loading={isLoadingEager ? 'eager' : 'lazy'}
                width={cropWidth}
                height={cropHeight}
                alt={alt || ''}
                className={styles.image}
              />
            )}
          </div>
          {caption && (
            <Container as="figcaption" width={isCaptionInset ? 'site' : 'full'}>
              <div className={styles.caption}>
                {caption}
              </div>
            </Container>
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};
