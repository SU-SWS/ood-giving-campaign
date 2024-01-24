import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import {
  Heading, Paragraph, Text, type HeadingType, SrOnlyText,
} from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { config } from '@/utilities/config';
import {
  accentBorderColors,
  type AccentColorType,
  heroOverlays,
  type HeroOverlayType,
} from '@/utilities/datasource';
import { type SbTypographyProps } from '../Storyblok/Storyblok.types';
import * as styles from './BlurryPoster.styles';

/**
 * This is used for the BlurryPoster (featured story poster) and the StoryHeroMvp components.
 */

type BlurryPosterProps = HTMLAttributes<HTMLDivElement> & {
  type?: 'hero' | 'poster';
  /**
   * Use two col layout except for story heroes with horizontal foreground image or no foreground image
   */
  isTwoCol?: boolean;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgImageAlt?: string;
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
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  tabColor?: AccentColorType;
  cta?: React.ReactNode;
  /**
   * aria-describedby will be added to the images if a caption exists
   */
  hasCaption?: boolean;
};

export const BlurryPoster = ({
  type = 'poster',
  isTwoCol,
  bgImageSrc,
  bgImageFocus,
  bgImageAlt,
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
  imageSrc,
  imageFocus,
  alt,
  tabColor,
  cta,
  hasCaption,
  className,
  ...props
}: BlurryPosterProps) => {
  const isDesktop = useMediaQuery(`(min-width: ${config.breakpoints.lg}px)`);
  const [showDesktop, setShowDesktop] = useState(false);
  // Use useEffect to update your local state from client side only after first render
  useEffect(() => {
    setShowDesktop(isDesktop);
  }, [isDesktop]);

  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let i = 1;

  return (
    <Container {...props} bgColor={bgColor} width="full" className={styles.root}>
      <picture>
        <source
          srcSet={getProcessedImage(bgImageSrc, addBgBlur ? '1000x600' : '2000x1200', bgImageFocus)}
          media="(min-width: 1200px)"
          width={2000}
          height={1200}
        />
        <source
          srcSet={getProcessedImage(bgImageSrc, '1200x1200', bgImageFocus)}
          media="(min-width: 768px)"
          width={1200}
          height={1200}
        />
        <source
          srcSet={getProcessedImage(bgImageSrc, '900x600', bgImageFocus)}
          media="(min-width: 461px)"
          width={900}
          height={600}
        />
        <source
          srcSet={getProcessedImage(bgImageSrc, '600x900', bgImageFocus)}
          media="(max-width: 460px)"
          width={600}
          height={900}
        />
        <img
          src={getProcessedImage(bgImageSrc, '2000x1200', bgImageFocus)}
          alt={bgImageAlt || ''}
          width={2000}
          height={1200}
          aria-describedby={hasCaption ? 'story-hero-caption' : undefined}
          className={styles.bgImage}
          fetchPriority="high"
        />
      </picture>
      <div className={cnb(styles.blurWrapper(
        addBgBlur,
        !!darkOverlay && darkOverlay !== 'none', type, bgColor,
        ),
        heroOverlays[darkOverlay])}
      >
        <Grid lg={isTwoCol ? 2 : 1} pt={type === 'hero' ? 9 : 8} pb={8} className={styles.grid}>
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
                >
                  {body}
                </Paragraph>
              )}
              {/* No authors and published dates for MVP */}
              {/* {byline && (
                <Text>{byline}</Text>
              )}
              {date && (
                <time dateTime={publishedDate}>{formattedDate}</time>
              )} */}
              {cta && (
                <div className={styles.cta}>
                  {cta}
                </div>
              )}
            </div>
          </div>
          <Container width={isTwoCol ? 'full' : 'site'} className={styles.imageWrapper(imageOnLeft, isTwoCol, !!imageSrc)}>
            {imageSrc && (
              <AnimateInView animation="zoomSharpen" duration={1} className={styles.imageInnerWrapper}>
                <picture>
                  <source
                    srcSet={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '900x1200', imageFocus)}
                    media="(min-width: 992px)"
                    width={type === 'hero' && !isTwoCol ? 1800 : 900}
                    height={type === 'hero' && !isTwoCol ? 900 : 1200}
                  />
                  <source
                    srcSet={getProcessedImage(imageSrc, '1000x1000', imageFocus)}
                    media="(min-width: 576px)"
                    width={1000}
                    height={1000}
                  />
                  <source
                    srcSet={getProcessedImage(imageSrc, '600x600', imageFocus)}
                    media="(max-width: 575px)"
                    width={600}
                    height={600}
                  />
                  <img
                    src={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '900x1200', imageFocus)}
                    alt={alt || ''}
                    width={type === 'hero' && !isTwoCol ? 1800 : 900}
                    height={type === 'hero' && !isTwoCol ? 900 : 1200}
                    aria-describedby={hasCaption ? 'story-hero-caption' : undefined}
                    fetchPriority={type === 'hero' ? 'high' : 'auto'}
                    className={styles.image}
                  />
                </picture>
              </AnimateInView>
            )}
          </Container>
        </Grid>
      </div>
    </Container>
  );
};
