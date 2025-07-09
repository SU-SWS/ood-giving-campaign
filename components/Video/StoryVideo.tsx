import { cnb } from 'cnbuilder';
import { MediaWrapper, type MediaWrapperProps } from '@/components/Media';
import { MutedVideoLoop, VideoButton } from '@/components/Video';
import { useVideoControl } from '@/hooks/useVideoControl';
import * as styles from './StoryVideo.styles';

/**
 * Inline story Video component that comes with a play/pause button and layout/caption options
 * similar to the StoryImage component.
 * To be used for the SbVideo component and the foreground looping video in Story page heroes.
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

  // Video control using custom hook
  const {
    videoRef,
    isPlaying,
    toggleVideo,
    isVideoInView,
    onPlay,
    onPause,
  } = useVideoControl();

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
          onPlay={onPlay}
          onPause={onPause}
          posterSrc={videoPosterSrc}
          className={styles.video}
        />
        <VideoButton
          isPause={isPlaying}
          onClick={toggleVideo}
          // Use aria-disabled instead of disabled so tab order is preserved
          aria-disabled={!isVideoInView}
          className={cnb(styles.videoButton(isFullScreen))}
        />
      </div>
      {children}
    </MediaWrapper>
  );
};
