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
import { accentBorderColors, type AccentColorType } from '@/utilities/datasource';
import { type SbTypographyProps } from '../Storyblok/Storyblok.types';
import * as styles from './BlurryPoster.styles';

type BlurryPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  imageOnLeft?: boolean;
  headingLevel?: HeadingType;
  heading?: string;
  customHeading?: SbTypographyProps[];
  isSmallHeading?: boolean;
  body?: string;
  byline?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageFocus?: string;
  tabColor?: AccentColorType;
  cta?: React.ReactNode;
};

export const BlurryPoster = ({
  bgImageSrc,
  bgImageFocus,
  imageOnLeft,
  heading,
  customHeading,
  headingLevel = 'h2',
  isSmallHeading,
  body,
  byline,
  publishedDate,
  imageSrc,
  imageFocus,
  tabColor,
  cta,
  className,
  ...props
}: BlurryPosterProps) => {
  const bgImageStyle = bgImageSrc ? { backgroundImage: `url('${getProcessedImage(bgImageSrc, '1800x1200', bgImageFocus)}')` } : undefined;
  const date = publishedDate && new Date(publishedDate);
  const formattedDate = date && date.toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <Container {...props} bgColor="black" width="full" className={styles.root} style={bgImageStyle}>
      <div className={styles.blurWrapper}>
        <Grid lg={2} className={styles.grid}>
          <div className={styles.contentWrapper(imageOnLeft)}>
            <FlexBox className={styles.headingWrapper(imageOnLeft)}>
              <AnimateInView
                animation={imageOnLeft ? 'slideInFromRight' : 'slideInFromLeft'}
                className={cnb(styles.headingInnerWrapper(imageOnLeft), accentBorderColors[tabColor])}
              >
                {/* Render all Druk font heading if custom heading is not entered */}
                {heading && !customHeading && (
                  <Heading
                    font="druk"
                    color="white"
                    leading="none"
                    className={styles.heading(imageOnLeft, isSmallHeading)}
                  >
                    {heading}
                  </Heading>
                )}
                {/* Render custom mixed typography heading if entered */}
                {customHeading && (
                  <Heading size="base" leading="none" className={styles.customHeading(imageOnLeft)}>
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
            <div className={styles.bodyWrapper(imageOnLeft)}>
              {body && (
                <Paragraph variant="overview" weight="normal" color="white" leading="display">{body}</Paragraph>
              )}
              {byline && (
                <Text>{byline}</Text>
              )}
              {date && (
                <time dateTime={publishedDate}>{formattedDate}</time>
              )}
              {cta && (
                <div className={styles.cta}>
                  {cta}
                </div>
              )}
            </div>
          </div>
          <div className={styles.imageWrapper(imageOnLeft)}>
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
