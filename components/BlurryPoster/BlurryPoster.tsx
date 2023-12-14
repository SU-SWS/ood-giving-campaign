import React, { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { FlexBox } from '../FlexBox';
import {
  Heading, Paragraph, Text, type HeadingType,
} from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
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
  //addDarkOverlay?: boolean;
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
   * This isn't displayed in the component, aria-describedby will be added to the images if a caption exists
   */
  caption?: string;
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
  // addDarkOverlay,
  darkOverlay,
  body,
  byline,
  publishedDate,
  imageSrc,
  imageFocus,
  alt,
  tabColor,
  cta,
  caption,
  className,
  ...props
}: BlurryPosterProps) => {
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let i = 1;

  return (
    <Container {...props} bgColor={bgColor} width="full" className={styles.root}>
      <img
        src={getProcessedImage(bgImageSrc, '1000x1500', bgImageFocus)}
        alt={bgImageAlt || ''}
        aria-describedby={caption ? 'story-hero-caption' : undefined}
        className={styles.bgImageMobile}
        width={1000}
        height={1500}
      />
      <img
        src={getProcessedImage(bgImageSrc, '2000x1200', bgImageFocus)}
        alt={bgImageAlt || ''}
        aria-describedby={caption ? 'story-hero-caption' : undefined}
        className={styles.bgImage}
        width={2000}
        height={1200}
      />
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
                    {heading}
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
                <img
                  src={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '900x1200', imageFocus)}
                  alt={alt || ''}
                  width={type === 'hero' && !isTwoCol ? 1800 : 900}
                  height={type === 'hero' && !isTwoCol ? 900 : 1200}
                  aria-describedby={caption ? 'story-hero-caption' : undefined}
                  className={styles.image}
                />
                <img
                  src={getProcessedImage(imageSrc, '1000x1000', imageFocus)}
                  alt={alt || ''}
                  width={1000}
                  height={1000}
                  aria-describedby={caption ? 'story-hero-caption' : undefined}
                  className={styles.imageMobile}
                />
              </AnimateInView>
            )}
          </Container>
        </Grid>
      </div>
    </Container>
  );
};
