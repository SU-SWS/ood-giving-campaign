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
  bgColor?: 'black' | 'white';
  imageOnLeft?: boolean;
  superhead?: string;
  headingLevel?: HeadingType;
  heading?: string;
  headingFont?: 'serif' | 'druk';
  customHeading?: SbTypographyProps[];
  isSmallHeading?: boolean;
  addBgBlur?: boolean;
  addDarkOverlay?: boolean;
  body?: string;
  byline?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageFocus?: string;
  tabColor?: AccentColorType;
  cta?: React.ReactNode;
};

export const BlurryPoster = ({
  type = 'poster',
  isTwoCol,
  bgImageSrc,
  bgImageFocus,
  bgColor = 'black',
  imageOnLeft,
  superhead,
  heading,
  headingFont = 'druk',
  customHeading,
  headingLevel = 'h2',
  isSmallHeading,
  addBgBlur,
  addDarkOverlay,
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
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Container {...props} bgColor={bgColor} width="full" className={styles.root} style={bgImageStyle}>
      <div className={styles.blurWrapper(addBgBlur, addDarkOverlay, type, bgColor)}>
        <Grid lg={isTwoCol ? 2 : 1} pt={type === 'hero' ? 9 : 8} pb={8} className={styles.grid}>
          <div className={styles.contentWrapper(type, !!imageSrc, imageOnLeft, isTwoCol)}>
            {superhead && (
              <Text size={1} aria-hidden={!!heading} className={styles.superhead(imageOnLeft)}>{superhead}</Text>
            )}
            <FlexBox className={styles.headingWrapper(imageOnLeft, headingFont, isTwoCol)}>
              <AnimateInView
                animation={imageOnLeft ? 'slideInFromRight' : 'slideInFromLeft'}
                className={cnb(styles.headingInnerWrapper(imageOnLeft, headingFont, isTwoCol), accentBorderColors[tabColor])}
              >
                {/* Render all Druk font heading if custom heading is not entered */}
                {heading && !customHeading?.length && (
                  <Heading
                    as={headingLevel}
                    font={headingFont}
                    leading={headingFont === 'druk' ? 'none' : 'display'}
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
          <Container width={isTwoCol ? 'full' : 'site'} className={styles.imageWrapper(imageOnLeft, isTwoCol, !!imageSrc)}>
            {imageSrc && (
              <AnimateInView animation="zoomSharpen" duration={1} className={styles.imageInnerWrapper}>
                <img
                  src={getProcessedImage(imageSrc, type === 'hero' && !isTwoCol ? '1800x900' : '900x1200', imageFocus)}
                  alt=""
                  className={styles.image}
                />
                <img
                  src={getProcessedImage(imageSrc, type === 'hero' ? '1000x1000' : '1000x500', imageFocus)}
                  alt=""
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
