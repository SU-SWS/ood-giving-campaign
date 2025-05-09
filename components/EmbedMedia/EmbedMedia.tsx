import { useEffect, useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';
import { useEventListener } from 'usehooks-ts';
import { Caption, type CaptionProps } from '@/components/Media/Caption';
import { FlexBox } from '@/components/FlexBox';
import { PreviewImage } from './PreviewImage';
import { WidthBox, type WidthType } from '@/components/WidthBox';
import { HeroIcon } from '@/components/HeroIcon';
import { type PaddingType } from '@/utilities/datasource';
import { type MediaAspectRatioType, mediaAspectRatios } from '@/utilities/datasource';
import * as styles from './EmbedMedia.styles';

type EmbedMediaProps = React.HTMLAttributes<HTMLDivElement> & Omit<CaptionProps, 'as'> & {
  mediaUrl: string;
  aspectRatio?: MediaAspectRatioType;
  boundingWidth?: 'site' | 'full';
  width?: WidthType;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
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
  captionBgColor = 'transparent',
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
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const PreviewImg = previewImageSrc ? <PreviewImage previewImageSrc={previewImageSrc} /> : null;

  useEffect(() => {
    setHasWindow(typeof window !== 'undefined');
  }, []);

  // If the space key is pressed, do not scroll the page and click the element
  const handleSpaceKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Space' || event.key === ' ') {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }
  };

  useEffect(() => {
    if (!isPreview || !playerWrapperRef.current) return;

    const wrapper = playerWrapperRef.current;

    /**
     * Observe for an element with class .react-player__preview inside the wrapper
     * and set its role to button when it is added to the DOM
     */
    const observer = new MutationObserver(() => {
      const preview = wrapper.querySelector('.react-player__preview');
      if (preview) {
        preview.setAttribute('role', 'button');
        observer.disconnect();
      }
    });

    observer.observe(wrapper, {
      childList: true, // Look for added/removed child elements
      subtree: true, // Look for added/removed elements in all descendants inside wrapper
    });

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [isPreview]);

  useEventListener('keydown', handleSpaceKeyDown, playerWrapperRef);

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
        <div className={cnb(mediaAspectRatios[aspectRatio], styles.mediaWrapper)} ref={playerWrapperRef}>
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
          <Caption caption={caption} isCaptionInset={isCaptionInset} captionBgColor={captionBgColor} />
        )}
      </figure>
    </WidthBox>
  );
};
