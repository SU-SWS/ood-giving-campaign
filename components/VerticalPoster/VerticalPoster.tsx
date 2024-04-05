'use client';
import React, { HTMLAttributes } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from 'usehooks-ts';
import { AnimateInView } from '@/components/Animate';
import { Container, type BgColorType } from '@/components/Container';
import { Grid } from '@/components/Grid';
import { FlexBox } from '@/components/FlexBox';
import { Parallax } from '@/components/Parallax';
import {
  Heading, Text, type HeadingType,
} from '@/components/Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { config } from '@/utilities/config';
import { type SbTypographyProps } from '@/components/Storyblok/Storyblok.types';
import * as styles from './VerticalPoster.styles';

type VerticalPosterProps = HTMLAttributes<HTMLDivElement> & {
  imageOnLeft?: boolean;
  headingLevel?: HeadingType;
  heading?: string;
  subheading?: string;
  customHeading?: SbTypographyProps[];
  isSmallHeading?: boolean;
  isMaskedHeading?: boolean;
  body?: React.ReactNode;
  byline?: string;
  publishedDate?: string;
  isParallax?: boolean;
  bgColor?: BgColorType;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  bgImageSrc?: string;
  bgImageFocus?: string;
  bgAlt?: string;
  cta?: React.ReactNode;
  caption?: React.ReactNode;
};

export const VerticalPoster = ({
  imageOnLeft,
  heading,
  customHeading,
  headingLevel = 'h2',
  isSmallHeading,
  isMaskedHeading,
  subheading,
  body,
  byline,
  publishedDate,
  isParallax,
  bgColor = 'white',
  imageSrc,
  imageFocus,
  alt,
  bgImageSrc,
  bgImageFocus,
  bgAlt,
  cta,
  caption,
  className,
  ...props
}: VerticalPosterProps) => {
  const prefersReducedMotion = useReducedMotion();
  const bgImageStyle = bgImageSrc ? { backgroundImage: `url('${getProcessedImage(bgImageSrc, '1200x1600', bgImageFocus)}')` } : undefined;
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  let i = 1;
  const isDesktop = useMediaQuery(`(min-width: ${config.breakpoints.lg}px)`);

  return (
    <>
      <Container {...props} bgColor={bgColor} width="full" className={styles.root}>
        <div className="relative">
          <Grid lg={2} className={styles.grid}>
            <FlexBox
              direction="col"
              alignItems="center"
              justifyContent="center"
              className={styles.contentWrapper(imageOnLeft, isParallax)}
            >
              <FlexBox className={styles.headingWrapper}>
                <AnimateInView animation='slideUp'>
                  {/* Render all Druk font heading if custom heading is not entered */}
                  {heading && !customHeading?.length && (
                    <Heading
                      font="druk"
                      align="center"
                      leading="none"
                      className={styles.heading(isSmallHeading, !!bgImageSrc, isMaskedHeading, bgColor)}
                      style={isMaskedHeading && !!bgImageSrc ? bgImageStyle : undefined}
                    >
                      {heading}
                    </Heading>
                  )}
                  {/* Render custom mixed typography heading if entered */}
                  {!!customHeading?.length && (
                    <Heading
                      size="base"
                      align="center"
                      leading="none"
                      className={styles.customHeading(!!bgImageSrc, isMaskedHeading, bgColor)}
                      style={isMaskedHeading && !!bgImageSrc ? bgImageStyle : undefined}
                    >
                      {customHeading.map(({
                        text, font, italic, size,
                      }) => (
                        <Text
                          as="span"
                          key={`${text}-vert-poster-${++i}`}
                          font={font}
                          size={size}
                          leading="none"
                          weight={font === 'druk' ? 'black' : undefined}
                          italic={italic}
                          className={styles.customHeadingText(font)}
                        >
                          {text}
                        </Text>
                      ))}
                    </Heading>
                  )}
                </AnimateInView>
              </FlexBox>
              {subheading && (
                <Text align="center" weight="semibold" variant="intro">
                  {subheading}
                </Text>
              )}
              {!!body && (
                <div className={styles.body}>
                  {body}
                </div>
              )}
              {(byline || publishedDate) && (
                <div className={styles.metadata}>
                  {byline && (
                    <Text align="center">{byline}</Text>
                  )}
                  {date && (
                    <time dateTime={publishedDate} className={styles.date}>{formattedDate}</time>
                  )}
                </div>
              )}
              {cta && (
                <div className={styles.cta}>
                  {cta}
                </div>
              )}
            </FlexBox>
            {isParallax ? (
              <div className={styles.parallaxWrapper}>
                {bgImageSrc && (
                  <Parallax offset={isDesktop ? 60 : 0}>
                    <picture>
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '900x1200', bgImageFocus)}
                        media="(min-width: 1500px)"
                      />
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '800x1200', bgImageFocus)}
                        media="(min-width: 1200px)"
                      />
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '600x900', bgImageFocus)}
                        media="(min-width: 992px)"
                      />
                      {/*
                        > LG breakpoint, we want aspect ratio 2x3 so the image is taller than the container
                        to give room for the parallax vertical movement.
                        < LG breakpoint, we want aspect ratio 3x4 since the background layer is fixed.
                      */}
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '993x1324', bgImageFocus)}
                        media="(min-width: 768px)"
                      />
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '780x1040', bgImageFocus)}
                        media="(min-width: 576px)"
                      />
                      <source
                        srcSet={getProcessedImage(bgImageSrc, '600x800', bgImageFocus)}
                        media="(max-width: 576px)"
                      />
                      <img
                        src={getProcessedImage(bgImageSrc, '1000x1500', bgImageFocus)}
                        alt={bgAlt || ''}
                        width={1000}
                        height={1500}
                        className={styles.parallaxBgImage(prefersReducedMotion)}
                      />
                    </picture>
                  </Parallax>
                )}
                {imageSrc && (
                  <div className={styles.parallaxForegroundWrapper}>
                    <Parallax offset={isDesktop ? 120 : 60}>
                      <picture>
                        <source
                          srcSet={getProcessedImage(imageSrc, '1000x0', imageFocus)}
                          media="(min-width: 1500px)"
                        />
                        <source
                          srcSet={getProcessedImage(imageSrc, '750x0', imageFocus)}
                          media="(min-width: 1200px)"
                        />
                        <source
                          srcSet={getProcessedImage(imageSrc, '600x0', imageFocus)}
                          media="(min-width: 992px)"
                        />
                        {/*
                          Image actually gets larger at MD compared to LG because it goes to 1-column layout at MD
                        */}
                        <source
                          srcSet={getProcessedImage(imageSrc, '1000x0', imageFocus)}
                          media="(min-width: 768px)"
                        />
                        <source
                          srcSet={getProcessedImage(imageSrc, '800x0', imageFocus)}
                          media="(min-width: 576px)"
                        />
                        <source
                          srcSet={getProcessedImage(imageSrc, '600x0', imageFocus)}
                          media="(max-width: 575px)"
                        />
                        <img
                          src={getProcessedImage(imageSrc, '1000x0', imageFocus)}
                          alt={alt || ''}
                          className={styles.parallaxImage(prefersReducedMotion)}
                        />
                      </picture>
                    </Parallax>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.imageWrapper(imageOnLeft)} style={bgImageStyle}>
                {imageSrc && (
                  <AnimateInView animation="zoomSharpen" duration={1} className={styles.imageInnerWrapper}>
                    <img
                      src={getProcessedImage(imageSrc, '900x1200', imageFocus)}
                      alt={alt || ''}
                      className={styles.image}
                    />
                    <img
                      src={getProcessedImage(imageSrc, '800x400', imageFocus)}
                      alt={alt || ''}
                      className={styles.imageMobile}
                    />
                  </AnimateInView>
                )}
              </div>
            )}
          </Grid>
        </div>
      </Container>
      {!!caption && (
        <Container
          bgColor="white"
          className="relative mt-06em caption *:*:leading-display max-w-prose-wide ml-0"
        >
          {caption}
        </Container>
      )}
    </>
  );
};
