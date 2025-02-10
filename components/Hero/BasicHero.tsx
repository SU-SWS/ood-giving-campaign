import { useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '@/components/Container';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { Video, VideoButton } from '@/components/Video';
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
 * Basic page hero that allows for different hero styles (e.g., initiative landing and detailed pages)
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
  videoPosterFocus?: string;
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
  videoPosterFocus,
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

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(null);

  // Toggle video play/pause
  const toggleBgVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Container
      width="full"
      bgColor={imageSrc ? undefined : 'black'}
      className={cnb(styles.root, styles.heroPaddings[paddingType])}
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
            className={styles.bgImage}
          />
        </picture>
      )}
      {(!!videoWebm || !!videoMp4) && (
        <Video
          ref={videoRef}
          webmSrc={videoWebm}
          mp4Src={videoMp4}
          autoPlay
          playsInline
          loop
          muted
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          poster={getProcessedImage(videoPosterSrc, '1600x900', videoPosterFocus)}
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      )}
      {(!!imageSrc || !!videoWebm || !!videoMp4) && (hasBgBlur || hasBgGradient) && (
        <div
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
        )}
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
        {subheading && (
          <Text
            size={2}
            align="center"
            leading="display"
            color="white"
            className={styles.subhead}
          >
            {subheading}
          </Text>
        )}
        {!!heroContent && (
          <div className={styles.content}>
            {heroContent}
          </div>
        )}
      </Container>
      {(!!videoWebm || !!videoMp4) && (
        <Container className="relative">
          <VideoButton
            isPause={isPlaying}
            onClick={toggleBgVideo}
            className="relative block z-10 ml-auto mr-0"
          />
        </Container>
      )}
    </Container>
  );
};
