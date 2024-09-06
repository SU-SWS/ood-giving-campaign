import { Container } from '@/components/Container';
import { ImageHotspot } from './ImageHotspot';
import { StoryImage, type StoryImageProps } from '@/components/StoryImage';
import { type ImageAspectRatioType } from '@/utilities/datasource';
import { type WidthType } from '@/components/WidthBox';
import { type MarginType } from '@/utilities/datasource';
import { type SbImageHotspotType } from '@/components/Storyblok/Storyblok.types';
import { type CaptionBgColorType } from '@/components/StoryImage';
import * as styles from './AnnotatedImage.styles';

type AnnotatedImageProps = StoryImageProps & {
  hotspots: SbImageHotspotType[];
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  aspectRatio?: ImageAspectRatioType;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  marginTop?: MarginType;
  marginBottom?: MarginType;
  caption?: React.ReactNode;
  isCaptionInset?: boolean;
  captionBgColor?: CaptionBgColorType;
};

export const AnnotatedImage = ({
  hotspots,
  imageSrc,
  imageFocus,
  alt,
  aspectRatio,
  boundingWidth = 'full',
  width,
  caption,
  isCaptionInset,
  captionBgColor,
  marginTop,
  marginBottom,
  ...props
}: AnnotatedImageProps) => {
  return (
    <Container width="full" mt={marginTop} mb={marginBottom} className={styles.root} {...props}>
      <StoryImage
        imageSrc={imageSrc}
        imageFocus={imageFocus}
        alt={alt}
        aspectRatio={aspectRatio}
        boundingWidth={boundingWidth}
        width={width}
        caption={caption}
        isCaptionInset={isCaptionInset}
        captionBgColor={captionBgColor}
      />
      {/* Hotspots */}
      {!!hotspots?.length &&
        (hotspots.length > 1 ? (
          <ul className={styles.ul}>
            {hotspots.map((hotspot) => (
              <li key={hotspot.ariaLabel} className={styles.li}>
                <ImageHotspot {...hotspot} />
              </li>
            ))}
          </ul>
        ) : (
          <ImageHotspot {...hotspots[0]} />
        ))
      }
    </Container>
  );
};
