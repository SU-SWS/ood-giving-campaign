import { ImageHotspot } from './ImageHotspot';
import { Container } from '@/components/Container';
import { StoryImage, type StoryImageProps } from '@/components/StoryImage';
import { type MarginType } from '@/utilities/datasource';
import { type SbImageHotspotType } from '@/components/Storyblok/Storyblok.types';
import * as styles from './AnnotatedImage.styles';

type AnnotatedImageProps = Omit<StoryImageProps, 'width' | 'isParallax' | 'animation' | 'delay' | 'isFullHeight' | 'spacingTop' | 'spacingBottom'> & {
  hotspots: SbImageHotspotType[];
  marginTop?: MarginType;
  marginBottom?: MarginType;
};

export const AnnotatedImage = ({
  hotspots,
  imageSrc,
  imageFocus,
  alt,
  aspectRatio,
  caption,
  isCaptionInset,
  captionBgColor,
  boundingWidth,
  marginTop,
  marginBottom,
  ...props
}: AnnotatedImageProps) => {
  return (
    <Container width={boundingWidth} mt={marginTop} mb={marginBottom} className={styles.root} {...props}>
      {/* Extra div is essential to ensure hotspot doesn't move relative to image when browser is resized */}
      <div className="relative @container">
        <StoryImage
          imageSrc={imageSrc}
          imageFocus={imageFocus}
          alt={alt}
          aspectRatio={aspectRatio}
          width="12"
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
      </div>
    </Container>
  );
};