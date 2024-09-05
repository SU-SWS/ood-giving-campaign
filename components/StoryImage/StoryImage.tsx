import { cnb } from 'cnbuilder';
import { AnimateInView, type AnimationType } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Parallax } from '@/components/Parallax';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { imageAspectRatios, type ImageAspectRatioType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import * as styles from './StoryImage.styles';

export type StoryImageProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  imageFocus?: string;
  isLoadingEager?: boolean;
  isParallax?: boolean;
  alt?: string;
  caption?: React.ReactNode;
  isCaptionInset?: boolean;
  captionBgColor?: styles.CaptionBgColorType;
  aspectRatio?: ImageAspectRatioType;
  isFullHeight?: boolean;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
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
  captionBgColor = 'transparent',
  animation = 'none',
  delay,
  className,
  ...props
}: StoryImageProps) => {
  const { width: originalWidth, height: originalHeight } = getSbImageSize(imageSrc);
  const cropSize = styles.imageCropsDesktop[aspectRatio];
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
          <div className={cnb(imageAspectRatios[aspectRatio], styles.imageWrapper(isFullHeight, isParallax))}>
            {!!imageSrc && (
              <Parallax offset={isParallax ? 60 : 0}>
                <picture>
                  <source
                    srcSet={getProcessedImage(imageSrc, cropSize, imageFocus)}
                    media="(min-width: 1500px)"
                  />
                  <source
                    srcSet={getProcessedImage(imageSrc, styles.imageCropsSmallDesktop[aspectRatio], imageFocus)}
                    media="(min-width: 992px)"
                  />
                  <source
                    srcSet={getProcessedImage(imageSrc, styles.imageCropsTablet[aspectRatio], imageFocus)}
                    media="(min-width: 576px)"
                  />
                  <source
                    srcSet={getProcessedImage(imageSrc, styles.imageCropsMobile[aspectRatio], imageFocus)}
                    media="(max-width: 575px)"
                  />
                  <img
                    src={getProcessedImage(imageSrc, cropSize, imageFocus)}
                    loading={isLoadingEager ? 'eager' : 'lazy'}
                    width={cropWidth}
                    height={cropHeight}
                    alt={alt || ''}
                    className={styles.image(isParallax)}
                  />
                </picture>
              </Parallax>
            )}
          </div>
          {caption && (
            <Container
              as="figcaption"
              width={isCaptionInset ? 'site' : 'full'}
              className={cnb(styles.captionWrapper, styles.captionBgColors[captionBgColor])}
            >
              <div className={styles.caption(captionBgColor)}>
                {caption}
              </div>
            </Container>
          )}
        </figure>
      </AnimateInView>
    </WidthBox>
  );
};
