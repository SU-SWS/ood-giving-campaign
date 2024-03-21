import React, { HTMLAttributes } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
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
  bgImageSrc?: string;
  bgImageFocus?: string;
  imageOnLeft?: boolean;
  headingLevel?: HeadingType;
  heading?: string;
  subheading?: string;
  customHeading?: SbTypographyProps[];
  isSmallHeading?: boolean;
  body?: React.ReactNode;
  byline?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageFocus?: string;
  alt?: string;
  cta?: React.ReactNode;
};

export const VerticalPoster = ({
  bgImageSrc,
  bgImageFocus,
  imageOnLeft,
  heading,
  customHeading,
  headingLevel = 'h2',
  isSmallHeading,
  subheading,
  body,
  byline,
  publishedDate,
  imageSrc,
  imageFocus,
  alt,
  cta,
  className,
  ...props
}: VerticalPosterProps) => {
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
    <Container {...props} bgColor="white" width="full" className={styles.root}>
      <div>
        <Grid lg={2} className={styles.grid}>
          <FlexBox
            direction="col"
            alignItems="center"
            justifyContent="center"
            className={styles.contentWrapper(imageOnLeft)}
          >
            <FlexBox className={styles.headingWrapper}>
              <AnimateInView animation='slideUp'>
                {/* Render all Druk font heading if custom heading is not entered */}
                {heading && !customHeading?.length && (
                  <Heading
                    font="druk"
                    align="center"
                    leading="none"
                    className={styles.heading(isSmallHeading, !!bgImageSrc)}
                    style={bgImageStyle}
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
                    className={styles.customHeading(!!bgImageSrc)}
                    style={bgImageStyle}
                  >
                    {customHeading.map(({text, font, italic}) => (
                      <Text
                        as="span"
                        key={`${text}-vert-poster-${++i}`}
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
            {subheading && (
              <Text size={2} align="center">
                {subheading}
              </Text>
            )}
            {!!body && (
              <div className="*:*:leading-snug *:*:max-w-prose rs-mt-3 2xl:type-1">
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
          <div className="relative aspect-w-3 aspect-h-4">
            <Parallax offset={isDesktop ? 60 : 0}>
              <img
                src={getProcessedImage(bgImageSrc, '1000x1500', bgImageFocus)}
                alt={alt || ''}
                className="-mt-50 w-full"
              />
            </Parallax>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10">
              <Parallax offset={isDesktop ? 120 : 60}>
                {imageSrc && (
                  <img
                    src={getProcessedImage(imageSrc, '1200x0', imageFocus)}
                    alt={alt || ''}
                    className="lg:mt-100 w-full"
                  />
                )}
              </Parallax>
            </div>
          </div>
          {/* <div className={styles.imageWrapper(imageOnLeft)} style={bgImageStyle}>
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
          </div> */}
        </Grid>
      </div>
    </Container>
  );
};
