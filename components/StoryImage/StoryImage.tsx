import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { WidthBox, type WidthType } from '../WidthBox';
import { type PaddingType } from '@/utilities/datasource';
import { imageAspectRatios, type ImageAspectRatioType } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './StoryImage.styles';

type StoryImageProps = React.HTMLAttributes<HTMLDivElement> & {
  imageSrc: string;
  imageFocus?: string;
  isLoadingEager?: boolean;
  alt?: string;
  caption?: React.ReactNode;
  aspectRatio?: ImageAspectRatioType;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  isCaptionInset?: boolean;
};

export const StoryImage = ({
  imageSrc,
  imageFocus,
  isLoadingEager,
  alt,
  caption,
  aspectRatio,
  boundingWidth = 'full',
  width,
  spacingTop,
  spacingBottom,
  isCaptionInset,
  className,
  ...props
}: StoryImageProps) => {
  const cropSize = styles.imageCrops[aspectRatio];
  const cropWidth = parseInt(cropSize?.split('x')[0], 10);
  const cropHeight = parseInt(cropSize?.split('x')[1], 10);

  return (
    <WidthBox
      {...props}
      boundingWidth={boundingWidth}
      width={width}
      pt={spacingTop}
      pb={spacingBottom}
      className={className}
    >
      <figure>
        <div className={imageAspectRatios[aspectRatio]}>
          <img
            src={getProcessedImage(imageSrc, cropSize, imageFocus)}
            loading={isLoadingEager ? 'eager' : 'lazy'}
            width={cropWidth}
            height={cropHeight}
            alt={alt || ''}
            className={styles.image}
          />
        </div>
        {caption && (
          <Container as="figcaption" width={isCaptionInset ? 'site' : 'full'}>
            <div className={styles.caption}>
              {caption}
            </div>
          </Container>
        )}
      </figure>
    </WidthBox>
  );
};
