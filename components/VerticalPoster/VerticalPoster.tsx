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
import { type SbTypographyProps } from '../Storyblok/Storyblok.types';
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
  body?: string;
  byline?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageFocus?: string;
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

  return (
    <Container {...props} bgColor="white" width="full" className={styles.root}>
      <div className={styles.blurWrapper}>
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
                    className={styles.heading(isSmallHeading)}
                    style={bgImageStyle}
                  >
                    {heading}
                  </Heading>
                )}
                {/* Render custom mixed typography heading if entered */}
                {!!customHeading?.length && (
                  <Heading size="base" align="center" leading="none" className={styles.customHeading} style={bgImageStyle}>
                    {customHeading.map(({text, font, italic}) => (
                      <Text
                        as="span"
                        key={text}
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
              <Text font="serif" italic size={2} align="center">
                {subheading}
              </Text>
            )}
            {body && (
              <Paragraph
                variant="overview"
                align="center"
                weight="normal"
                leading="display"
                className="rs-mt-3"
              >
                {body}
              </Paragraph>
            )}
            {byline && (
              <Text align="center">{byline}</Text>
            )}
            {date && (
              <time dateTime={publishedDate} className="text-center">{formattedDate}</time>
            )}
            {cta && (
              <div className={styles.cta}>
                {cta}
              </div>
            )}
          </FlexBox>
          <div className={styles.imageWrapper(imageOnLeft)} style={bgImageStyle}>
            {imageSrc && (
              <AnimateInView animation="zoomSharpen" duration={1} className={styles.imageInnerWrapper}>
                <img
                  src={getProcessedImage(imageSrc, '900x1200', imageFocus)}
                  alt=""
                  className={styles.image}
                />
                <img
                  src={getProcessedImage(imageSrc, '800x400', imageFocus)}
                  alt=""
                  className={styles.imageMobile}
                />
              </AnimateInView>
            )}
          </div>
        </Grid>
      </div>
    </Container>
  );
};
