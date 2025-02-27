import { useEffect, useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { useInView } from 'framer-motion';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { MutedVideoLoop, VideoButton } from '@/components/Video';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import {
  gradientFroms,
  type GradientFromType,
  gradientTos,
  type GradientToType,
  gradientVias,
  type GradientViaType,
  bgBlurs,
  type BgBlurType,
} from '@/utilities/datasource';
import * as styles from './BasicHero.styles';

/**
 * Basic Page hero that allows for different hero styles (e.g., initiative landing and detailed pages)
 */
type BasicHeroProps = {
  title: string;
  isDrukHeading?: boolean;
  isSmallHeading?: boolean;
  superhead?: string;
  subheading?: string;
  imageSrc?: string;
  imageFocus?: string;
  videoWebm?: string;
  videoMp4?: string;
  videoPosterSrc?: string;
  gradientTop?: GradientToType;
  gradientBottom?: GradientFromType;
  gradientVia?: GradientViaType;
  bgBlur?: BgBlurType;
  heroContent?: React.ReactNode;
  paddingType?: styles.HeroPaddingType;
};

export const BasicHero = ({
  title,
  isDrukHeading,
  isSmallHeading,
  superhead,
  subheading,
  imageSrc,
  imageFocus,
  videoWebm,
  videoMp4,
  videoPosterSrc,
  gradientTop,
  gradientBottom,
  gradientVia,
  bgBlur,
  heroContent,
  paddingType,
}: BasicHeroProps) => {
  // To render a dark overlay, both a top and bottom gradient color must be selected
  const hasBgGradient = !!gradientTop && !!gradientBottom;
  const hasBgBlur = !!bgBlur && bgBlur !== 'none';

  const hasVideo = !!videoWebm || !!videoMp4;
  const hasMedia = !!imageSrc || hasVideo;

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { once: false, amount: 0.1 });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);

  // Toggle video playback when the user interacts with the VideoButton.
  const toggleBgVideo = () => {
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

  return (
    <Container
      width="full"
      bgColor={imageSrc ? undefined : 'black'}
      className={cnb(styles.root(paddingType, hasVideo))}
    >
      {!!imageSrc && (
        <picture>
          <source
            srcSet={getProcessedImage(imageSrc, hasBgBlur ? '1000x500' : '2000x1000', imageFocus)}
            media="(min-width: 1200px)"
            // Exact height and width don't matter as long as aspect ratio is the same as the image
            width={2000}
            height={1000}
          />
          <source
            srcSet={getProcessedImage(imageSrc, hasBgBlur ? '600x400' : '1200x800', imageFocus)}
            media="(min-width: 768px)"
            width={1200}
            height={800}
          />
          <source
            srcSet={getProcessedImage(imageSrc, hasBgBlur ? '400x300' : '800x600', imageFocus)}
            media="(min-width: 461px)"
            width={800}
            height={600}
          />
          <source
            srcSet={getProcessedImage(imageSrc, hasBgBlur ? '240x240' : '480x480', imageFocus)}
            media="(max-width: 460px)"
            width={480}
            height={480}
          />
          <img
            src={getProcessedImage(imageSrc, hasBgBlur ? '1000x500' : '2000x1000', imageFocus)}
            alt=""
            width={2000}
            height={1000}
            className={styles.bgMedia}
          />
        </picture>
      )}
      {hasVideo && (
        <MutedVideoLoop
          ref={videoRef}
          webmSrc={videoWebm}
          mp4Src={videoMp4}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          posterSrc={videoPosterSrc}
          className={styles.bgMedia}
        />
      )}
      {hasMedia && (hasBgBlur || hasBgGradient) && (
        <div
          aria-hidden="true"
          className={cnb(
            styles.overlay(hasBgGradient),
            bgBlurs[bgBlur],
            gradientFroms[gradientTop],
            gradientVias[gradientVia],
            gradientTos[gradientBottom],
          )}
        />
      )}
      <Container className={styles.contentWrapper}>
        {superhead && (
          <AnimateInView animation="slideUp">
            <Text
              size={3}
              font="serif"
              weight="bold"
              align="center"
              leading="tight"
              color="white"
              aria-hidden
              className={styles.superhead}
            >
              {superhead}
            </Text>
          </AnimateInView>
        )}
        <AnimateInView animation="slideUp" delay={0.1}>
          <Heading
            as="h1"
            font={isDrukHeading ? 'druk' : 'serif'}
            weight={isDrukHeading ? 'black' : 'bold'}
            align="center"
            leading={isDrukHeading ? 'none' : 'tight'}
            color="white"
            className={styles.heading(isDrukHeading, isSmallHeading)}
          >
            {superhead && <SrOnlyText>{`${superhead}: `}</SrOnlyText>}{title}
          </Heading>
        </AnimateInView>
        {subheading && (
          <AnimateInView animation="slideUp" delay={0.2}>
            <Text
              size={2}
              align="center"
              leading="display"
              color="white"
              className={styles.subhead}
            >
              {subheading}
            </Text>
          </AnimateInView>
        )}
        {!!heroContent && (
          <div className={styles.content}>
            {heroContent}
          </div>
        )}
      </Container>
      {(!!videoWebm || !!videoMp4) && (
        <Container width="wide" className="relative">
          <VideoButton
            isPause={isPlaying}
            onClick={toggleBgVideo}
            className={styles.videoButton(paddingType)}
          />
        </Container>
      )}
    </Container>
  );
};
