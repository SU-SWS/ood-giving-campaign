import { useEffect, useRef, useState } from 'react';
import { cnb } from 'cnbuilder';
import { useInView } from 'framer-motion';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { CtaLink } from '@/components/Cta';
import { FlexBox } from '@/components/FlexBox';
import { Grid } from '@/components/Grid';
import {
  Heading, Paragraph, Text, type HeadingType, SrOnlyText,
} from '@/components/Typography';
import { MutedVideoLoop, StoryVideo, VideoButton } from '@/components/Video';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import {
  accentBorderColors,
  type AccentColorType,
  heroOverlays,
  type HeroOverlayType,
} from '@/utilities/datasource';
import { type SbTypographyProps } from '@/components/Storyblok/Storyblok.types';
import { taxonomyMap, type TaxonomyType } from '@/utilities/taxonomyMaps';
import { formatDate } from '@/utilities/formatDate';
import * as styles from './BlurryPoster.styles';

/**
 * This is used for the BlurryPoster (featured story poster) and the StoryHeroMvp components.
 */

type BlurryPosterProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: 'hero' | 'poster';
  /**
   * Use two col layout except for story heroes with horizontal foreground image or no foreground image
   */
  isTwoCol?: boolean;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgImageAlt?: string;
  bgVideoWebm?: string;
  bgVideoMp4?: string;
  bgVideoPosterSrc?: string;
  videoWebm?: string;
  videoMp4?: string;
  videoPosterSrc?: string;
  bgColor?: 'black' | 'white';
  imageOnLeft?: boolean;
  superhead?: string;
  headingLevel?: HeadingType;
  heading?: string;
  headingFont?: 'serif' | 'druk';
  customHeading?: SbTypographyProps[];
  isSmallHeading?: boolean;
  addBgBlur?: boolean;
  darkOverlay?: HeroOverlayType;
  body?: string;
  byline?: string;
  publishedDate?: string;
  taxonomy?: TaxonomyType[];
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  tabColor?: AccentColorType;
  cta?: React.ReactNode;
};

export const BlurryPoster = ({
  type = 'poster',
  isTwoCol,
  bgImageSrc,
  bgImageFocus,
  bgImageAlt,
  bgVideoWebm,
  bgVideoMp4,
  bgVideoPosterSrc,
  videoWebm,
  videoMp4,
  videoPosterSrc,
  bgColor = 'black',
  imageOnLeft,
  superhead,
  heading,
  headingFont = 'druk',
  customHeading,
  headingLevel = 'h2',
  isSmallHeading,
  addBgBlur,
  darkOverlay,
  body,
  byline,
  publishedDate,
  taxonomy,
  imageSrc,
  imageFocus,
  alt,
  tabColor,
  cta,
  className,
  ...props
}: BlurryPosterProps) => {
  const {
    dateTime,
    monthLong,
    day,
    year,
  } = formatDate(publishedDate);

  let i = 1;
  /**
   * Foreground image/video
   */
  const hasVideo = !!videoWebm || !!videoMp4;
  const hasMedia = !!imageSrc || hasVideo;

  /**
   * Background image/video
   */
  const hasBgVideo = !!bgVideoWebm || !!bgVideoMp4;
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const isBgVideoInView = useInView(bgVideoRef, { once: false, amount: 0.1 });
  const [isBgPlaying, setIsBgPlaying] = useState<boolean>(false);
  const [isBgUserPaused, setIsBgUserPaused] = useState<boolean>(false);

  // Toggle foreground video play/pause
  const toggleBgVideo = () => {
    if (!bgVideoRef.current) return;

    setIsBgPlaying((prev) => {
      if (prev) {
        bgVideoRef.current?.pause();
        setIsBgUserPaused(true);
      } else {
        bgVideoRef.current
          ?.play()
          .catch(() => {});
        setIsBgUserPaused(false);
      }
      return !prev;
    });
  };

  /**
   * Pause video when it goes out of view,
   * resume when it comes back into view if it was not manually paused by the user.
   */
  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    if (isBgVideoInView && !isBgUserPaused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isBgVideoInView, isBgUserPaused]);

  return (
    <Container {...props} bgColor={bgColor} width="full" className={styles.root}>
      {bgImageSrc && (
        <picture>
          <source
            srcSet={getProcessedImage(bgImageSrc, addBgBlur ? '1000x600' : '2000x1200', bgImageFocus)}
            media="(min-width: 1200px)"
            // Exact height and width don't matter as long as aspect ratio is the same as the image
            width={2000}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, addBgBlur ? '600x600' : '1200x1200', bgImageFocus)}
            media="(min-width: 768px)"
            width={1200}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, addBgBlur ? '450x300' : '900x600', bgImageFocus)}
            media="(min-width: 461px)"
            width={900}
            height={600}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, addBgBlur ? '200x300' : '600x900', bgImageFocus)}
            media="(max-width: 460px)"
            width={600}
            height={900}
          />
          <img
            src={getProcessedImage(bgImageSrc, addBgBlur ? '1000x600' : '2000x1200', bgImageFocus)}
            alt={bgImageAlt || ''}
            width={2000}
            height={1200}
            className={styles.bgImage}
            fetchPriority={type === 'hero' ? 'high' : 'auto'}
          />
        </picture>
      )}
      {hasBgVideo && (
        <MutedVideoLoop
          ref={bgVideoRef}
          webmSrc={bgVideoWebm}
          mp4Src={bgVideoMp4}
          onPlay={() => setIsBgPlaying(true)}
          onPause={() => setIsBgPlaying(false)}
          posterSrc={bgVideoPosterSrc}
          className={styles.bgVideo}
        />
      )}
      <div className={cnb(
        styles.blurWrapper(addBgBlur, !!darkOverlay && darkOverlay !== 'none', type, bgColor),
        heroOverlays[darkOverlay])}
      >
        <Grid lg={isTwoCol ? 2 : 1} pt={type === 'hero' ? 9 : 8} pb={hasBgVideo ? 4 : 8} className={styles.grid}>
          <div className={styles.contentWrapper(type, !!imageSrc, imageOnLeft, isTwoCol)}>
            {superhead && (
              <Text
                size={1}
                // If there is a heading, superhead will be rendered as screen reader text as part of the heading
                aria-hidden={!!heading}
                className={styles.superhead(imageOnLeft, isTwoCol)}
              >
                {superhead}
              </Text>
            )}
            <FlexBox className={styles.headingWrapper(imageOnLeft, headingFont, isTwoCol)}>
              <AnimateInView
                animation={imageOnLeft ? 'slideInFromRight' : 'slideInFromLeft'}
                className={cnb(
                  styles.headingInnerWrapper(imageOnLeft, headingFont, isTwoCol),
                  accentBorderColors[tabColor],
                )}
              >
                {/* Render all Druk font heading if custom heading is not entered */}
                {heading && !customHeading?.length && (
                  <Heading
                    as={headingLevel}
                    font={headingFont}
                    leading={headingFont === 'druk' ? 'none' : 'tight'}
                    className={styles.heading(imageOnLeft, isSmallHeading, headingFont, isTwoCol)}
                  >
                    {superhead && <SrOnlyText>{`${superhead}:`}</SrOnlyText>}{heading}
                  </Heading>
                )}
                {/* Render custom mixed typography heading if entered */}
                {!!customHeading?.length && (
                  <Heading
                    as={headingLevel}
                    size="base"
                    leading="none"
                    className={styles.customHeading(imageOnLeft, headingFont, isTwoCol)}
                  >
                    {customHeading.map(({text, font, italic}) => (
                      <Text
                        as="span"
                        key={`${text}-${++i}`}
                        font={font}
                        leading="none"
                        weight={font === 'druk' ? 'black' : 'normal'}
                        italic={italic}
                        className={styles.customHeadingText(font, isSmallHeading)}
                      >
                        {text}
                      </Text>
                    ))}
                  </Heading>
                )}
              </AnimateInView>
            </FlexBox>
            <div className={styles.bodyWrapper(imageOnLeft, isTwoCol)}>
              {body && (
                <Paragraph
                  variant="overview"
                  weight="normal"
                  leading="display"
                  className={styles.dek}
                >
                  {body}
                </Paragraph>
              )}
              {(byline || publishedDate) && (
                <div className={styles.metadata}>
                  {byline && (
                    <Text>{byline}</Text>
                  )}
                  {publishedDate && (
                    <time dateTime={dateTime}>{`${monthLong} ${day}, ${year}`}</time>
                  )}
                </div>
              )}
              {!!taxonomy?.length && (
                <>
                  <Heading as="h2" className="sr-only">Story tags:</Heading>
                  <FlexBox as="ul" wrap="wrap" className={styles.taxonomy}>
                    {taxonomy.map((item) => (
                      taxonomyMap[item] ? (
                        <li key={item} className={styles.taxonomyItem}>
                          <CtaLink href={`/stories/list/${item}`} variant={bgColor === 'black' ? 'storyCardChipDark' : 'storyCardChip'}>
                            {taxonomyMap[item]}
                          </CtaLink>
                        </li>
                      ) : null
                    ))}
                  </FlexBox>
                </>
              )}
              {/* CTA is only for use as poster not as Story Hero */}
              {cta && (
                <div className={styles.cta}>
                  {cta}
                </div>
              )}
            </div>
          </div>
          {/* Foreground media */}
          <Container width={isTwoCol ? 'full' : 'site'} className={styles.mediaWrapper(imageOnLeft, isTwoCol, hasMedia)}>
            {hasMedia && (
              <AnimateInView animation="zoomSharpen" duration={1} className={styles.mediaInnerWrapper}>
                {hasVideo && (
                  <StoryVideo
                    videoWebm={videoWebm}
                    videoMp4={videoMp4}
                    videoPosterSrc={videoPosterSrc}
                    aspectRatio={isTwoCol ? '1x1' : '16x9'}
                    aspectRatioClass={styles.video}
                  />
                )}
                {imageSrc && (
                  <picture>
                    <source
                      srcSet={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '750x1000', imageFocus)}
                      media="(min-width: 992px)"
                      width={type === 'hero' && !isTwoCol ? 1800 : 750}
                      height={type === 'hero' && !isTwoCol ? 900 : 1000}
                    />
                    <source
                      srcSet={getProcessedImage(imageSrc, '900x900', imageFocus)}
                      media="(min-width: 576px)"
                      width={900}
                      height={900}
                    />
                    <source
                      srcSet={getProcessedImage(imageSrc, '600x600', imageFocus)}
                      media="(max-width: 575px)"
                      width={600}
                      height={600}
                    />
                    <img
                      src={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '750x1000', imageFocus)}
                      alt={alt || ''}
                      width={type === 'hero' && !isTwoCol ? 1800 : 750}
                      height={type === 'hero' && !isTwoCol ? 900 : 1000}
                      fetchPriority={type === 'hero' ? 'high' : 'auto'}
                      className={styles.image}
                    />
                  </picture>
                )}
              </AnimateInView>
            )}
          </Container>
        </Grid>
        {hasBgVideo && (
          <Container width="wide" className={styles.bgVideoBtnWrapper}>
            <VideoButton
              isPause={isBgPlaying}
              onClick={toggleBgVideo}
              className={styles.bgVideoButton(!!imageSrc)}
            />
          </Container>
        )}
      </div>
    </Container>
  );
};
