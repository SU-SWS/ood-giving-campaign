import React, { ReactElement, useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';
import { Container } from '@/components/Container';
import { FlexBox } from '@/components/FlexBox';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { type PaddingType } from '@/utilities/datasource';
import { type MediaAspectRatioType, mediaAspectRatios } from '@/utilities/datasource';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { getSbImageSize } from '@/utilities/getSbImageSize';
import * as styles from './EmbedMedia.styles';

type EmbedMediaProps = React.HTMLAttributes<HTMLDivElement> & {
  mediaUrl: string;
  caption?: React.ReactNode;
  aspectRatio?: MediaAspectRatioType;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  isCaptionInset?: boolean;
  isPreview?: boolean;
  previewImageSrc?: string;
  previewAriaLabel?: string;
};

const PlayPreviewIcon = (
  <FlexBox alignItems="center" justifyContent="center" className={styles.iconWrapper}>
    <HeroIcon icon="play" noBaseStyle className={styles.previewIcon} />
  </FlexBox>
);

export const EmbedMedia = ({
  mediaUrl,
  caption,
  aspectRatio,
  boundingWidth = 'full',
  width,
  spacingTop,
  spacingBottom,
  isCaptionInset,
  isPreview,
  previewImageSrc,
  previewAriaLabel,
  className,
  ...props
}: EmbedMediaProps) => {
  /**
   * This is needed to prevent hydration error for the React Player.
   * https://github.com/cookpete/react-player/issues/1428
   */
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  let PreviewImage: ReactElement;
  if (previewImageSrc) {
    const { width: originalWidth, height: originalHeight } = getSbImageSize(previewImageSrc);
    const cropHeight = Math.round(originalHeight * 1500 / originalWidth);

    PreviewImage = (
      <picture>
        <source
          srcSet={getProcessedImage(previewImageSrc, '1500x0')}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={getProcessedImage(previewImageSrc, '1200x0')}
          media="(min-width: 992px)"
        />
        <source
          srcSet={getProcessedImage(previewImageSrc, '1000x0')}
          media="(min-width: 768px)"
        />
        <source
          srcSet={getProcessedImage(previewImageSrc, '800x0')}
          media="(min-width: 576px)"
        />
        <source
          srcSet={getProcessedImage(previewImageSrc, '600x0')}
          media="(max-width: 575px)"
        />
        <img
          src={getProcessedImage(previewImageSrc, '1500x0')}
          loading="lazy"
          width={1500}
          height={cropHeight}
          alt=""
          className={styles.previewImage}
        />
      </picture>
    );
  }

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
        {/* Extra classnames passed into wrapper for Vimeo responsive bug */}
        <div className={cnb(mediaAspectRatios[aspectRatio], styles.mediaWrapper)}>
          {hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              url={mediaUrl}
              controls
              playsinline
              light={previewImageSrc && isPreview ? PreviewImage : isPreview}
              playing={isPreview ? true : false}
              playIcon={isPreview ? PlayPreviewIcon : undefined}
              // This previewAriaLabel prop is not documented but it is in the React Player source code
              previewAriaLabel={isPreview ? previewAriaLabel : undefined}
              className="group"
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
    </WidthBox>
  );
};
