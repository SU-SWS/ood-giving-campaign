import React, { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';
import { Caption } from '@/components/Media/Caption';
import { FlexBox } from '@/components/FlexBox';
import { PreviewImage } from './PreviewImage';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { type PaddingType } from '@/utilities/datasource';
import { type MediaAspectRatioType, mediaAspectRatios } from '@/utilities/datasource';
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

  const PreviewImg = previewImageSrc ? <PreviewImage previewImageSrc={previewImageSrc} /> : null;

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
              light={previewImageSrc && isPreview ? PreviewImg : isPreview}
              playing={isPreview}
              playIcon={isPreview ? PlayPreviewIcon : undefined}
              // This previewAriaLabel prop is not documented but it is in the React Player source code
              previewAriaLabel={isPreview ? previewAriaLabel : undefined}
              className="group"
            />
          )}
        </div>
        {caption && (
          <Caption caption={caption} isCaptionInset={isCaptionInset} />
        )}
      </figure>
    </WidthBox>
  );
};
