import { useEffect, useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { useInView } from 'framer-motion';
import { type AnimationType } from '@/components/Animate';
import { MediaWrapper, type MediaWrapperProps } from '@/components/Media';
import { MutedVideoLoop, VideoButton } from '@/components/Video';
import { type PaddingType } from '@/utilities/datasource';
import * as styles from './StoryVideo.styles';

/**
 * Inline story Video component that comes with a play/pause button and layout/caption options
 * similar to the StoryImage component.
 * To be used for the SbVideo component in Storyblok.
 */

export type StoryVideoProps = React.HTMLAttributes<HTMLDivElement> & MediaWrapperProps & {
  videoWebm?: string;
  videoMp4?: string;
  videoPosterSrc?: string;
  isFullScreen?: boolean; // Whether the video takes the full width of the device
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  animation?: AnimationType;
  delay?: number;
  buttonClass?: string;
};

export const StoryVideo = ({
  videoWebm,
  videoMp4,
  videoPosterSrc,
  caption,
  aspectRatio,
  isFullHeight,
  boundingWidth = 'full',
  width,
  isFullScreen,
  spacingTop,
  spacingBottom,
  captionBgColor = 'transparent',
  animation = 'none',
  delay,
  children,
  className,
  buttonClass,
  ...props
}: StoryVideoProps) => {
  const hasVideo = !!videoWebm || !!videoMp4;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { once: false, amount: 0.1 });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);

  // Toggle foreground video play/pause
  const toggleVideo = () => {
    if (!videoRef.current) return;

    setIsPlaying((prev) => {
      if (prev) {
        videoRef.current?.pause();
        setIsUserPaused(true);
      } else {
        videoRef.current
          ?.play()
          .catch(() => {});
        setIsUserPaused(false);
      }
      return !prev;
    });
  };

  /**
   * Pause video when it goes out of view,
   * resume when it comes back into view if it was not manually paused by the user.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoInView && !isUserPaused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVideoInView, isUserPaused]);

  if (!hasVideo) {
    return null;
  }

  return (
    <MediaWrapper
      caption={caption}
      isCaptionInset={isFullScreen}
      captionBgColor={captionBgColor}
      aspectRatio={aspectRatio}
      boundingWidth={boundingWidth}
      width={width}
      pt={spacingTop}
      pb={spacingBottom}
      animation={animation}
      delay={delay}
      className={cnb(className, styles.root(isFullHeight))}
      {...props}
    >
      <div>
        <MutedVideoLoop
          ref={videoRef}
          webmSrc={videoWebm}
          mp4Src={videoMp4}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          posterSrc={videoPosterSrc}
          className={styles.video}
        />
        <VideoButton
          isPause={isPlaying}
          onClick={toggleVideo}
          className={cnb(styles.videoButton(isFullScreen), buttonClass)}
        />
      </div>
      {children}
    </MediaWrapper>
  );
};
