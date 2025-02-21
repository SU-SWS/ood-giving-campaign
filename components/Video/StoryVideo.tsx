import { useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { type AnimationType } from '@/components/Animate';
import { MediaWrapper, type MediaWrapperProps } from '@/components/Media';
import { Parallax } from '@/components/Parallax';
import { MutedVideoLoop, VideoButton } from '@/components/Video';
import { type PaddingType } from '@/utilities/datasource';
import * as styles from './StoryVideo.styles';

export type StoryVideoProps = React.HTMLAttributes<HTMLDivElement> & MediaWrapperProps & {
  videoWebm?: string;
  videoMp4?: string;
  videoPosterSrc?: string;
  spacingTop?: PaddingType;
  spacingBottom?: PaddingType;
  animation?: AnimationType;
  delay?: number;
};

export const StoryVideo = ({
  videoWebm,
  videoMp4,
  videoPosterSrc,
  isParallax,
  caption,
  aspectRatio,
  isFullHeight,
  boundingWidth = 'full',
  width,
  spacingTop,
  spacingBottom,
  isCaptionInset,
  captionBgColor = 'transparent',
  animation = 'none',
  delay,
  children,
  className,
  ...props
}: StoryVideoProps) => {
  const hasVideo = !!videoWebm || !!videoMp4;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(null);

  // Toggle foreground video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!hasVideo) {
    return null;
  }

  return (
    <MediaWrapper
      caption={caption}
      isCaptionInset={isCaptionInset}
      captionBgColor={captionBgColor}
      aspectRatio={aspectRatio}
      isFullHeight={isFullHeight}
      isParallax={isParallax}
      boundingWidth={boundingWidth}
      width={width}
      pt={spacingTop}
      pb={spacingBottom}
      animation={animation}
      delay={delay}
      className={cnb(className, styles.root(isFullHeight))}
      {...props}
    >
      {hasVideo && (
        <Parallax offset={isParallax ? 60 : 0}>
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
            className={styles.videoButton}
          />
        </Parallax>
      )}
      {children}
    </MediaWrapper>
  );
};
