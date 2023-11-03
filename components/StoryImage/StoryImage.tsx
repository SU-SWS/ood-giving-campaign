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
          <img src={getProcessedImage(imageSrc, '2000x0', imageFocus)} alt={alt || ''} className={styles.image} />
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
