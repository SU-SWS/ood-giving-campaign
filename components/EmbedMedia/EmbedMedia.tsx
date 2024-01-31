import { useEffect, useState } from 'react';
import { cnb } from 'cnbuilder';
import ReactPlayer from 'react-player/lazy';
import { Container } from '../Container';
import { WidthBox, type WidthType } from '../WidthBox';
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
};

export const EmbedMedia = ({
  mediaUrl,
  caption,
  aspectRatio,
  boundingWidth = 'full',
  width,
  spacingTop,
  spacingBottom,
  isCaptionInset,
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
              light={mediaUrl?.includes('soundcloud') ? false : true}
              playing={mediaUrl?.includes('soundcloud') ? false : true}
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
