import { useEffect, useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { useInView } from 'framer-motion';
import { MediaWrapper, type MediaWrapperProps } from '@/components/Media';
import { MutedVideoLoop, VideoButton } from '@/components/Video';
import * as styles from './StoryVideo.styles';

/**
 * Inline story Video component that comes with a play/pause button and layout/caption options
 * similar to the StoryImage component.
 * To be used for the SbVideo component in Storyblok.
 */

export type StoryVideoProps = React.HTMLAttributes<HTMLDivElement> & Omit<MediaWrapperProps, 'isFullHeight' | 'isParallax'> & {
  videoWebm?: string;
  videoMp4?: string;
  videoPosterSrc?: string;
  isFullScreen?: boolean; // Whether the video takes the full width of the device
};

export const StoryVideo = ({
  videoWebm,
  videoMp4,
  videoPosterSrc,
  caption,
  aspectRatio,
  boundingWidth = 'full',
  width,
  pt,
  pb,
  isFullScreen,
  captionBgColor = 'transparent',
  animation = 'none',
  delay,
  children,
  className,
  aspectRatioClass,
  ...props
}: StoryVideoProps) => {
  const hasVideo = !!videoWebm || !!videoMp4;
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { once: false, amount: 0.1 });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);

  // Toggle video play/pause
  const toggleVideo = () => {
    if (!videoRef.current) return;

    setIsPlaying((prev) => {
      if (prev) {
        videoRef.current.pause();
        setIsUserPaused(true);
      } else {
        videoRef.current
          .play()
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
      video.play().catch((error) => console.warn('Video playback prevented:', error));
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
      pt={pt}
      pb={pb}
      animation={animation}
      delay={delay}
      aspectRatioClass={cnb(aspectRatioClass, styles.videoWrapper)}
      className={className}
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
          className={cnb(styles.videoButton(isFullScreen))}
        />
      </div>
      {children}
    </MediaWrapper>
  );
};
