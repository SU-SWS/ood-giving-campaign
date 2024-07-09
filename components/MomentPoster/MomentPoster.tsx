import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Heading, Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './MomentPoster.styles';
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

type MomentPosterProps = HTMLAttributes<HTMLDivElement> & {
  textBefore?: string;
  textAfter?: string;
  textNewRow?: string;
  subhead?: string;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  bgImageSrc?: string;
  bgImageFocus?: string;
  thumbnailSrc?: string;
  thumbnailFocus?: string;
  isDarkTheme?: boolean;
  gradientTop?: GradientToType;
  gradientBottom?: GradientFromType;
  gradientVia?: GradientViaType;
  bgBlur?: BgBlurType;
  isStackedCtas?: boolean;
};

export const MomentPoster = ({
  textBefore,
  textAfter,
  textNewRow,
  subhead,
  body,
  cta,
  bgImageSrc,
  bgImageFocus,
  thumbnailSrc,
  thumbnailFocus,
  isDarkTheme,
  gradientTop,
  gradientBottom,
  gradientVia,
  bgBlur,
  isStackedCtas,
  ...props
}: MomentPosterProps) => {
  // To render a dark overlay, both a top and bottom gradient color must be selected
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  return (
    <Container {...props} as="section" bgColor={isDarkTheme ? 'black' : 'white'} width="full" py={8} className={styles.root}>
      {!!bgImageSrc && (
        <picture>
          <source
            srcSet={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '1200x800' : '1800x1200', bgImageFocus)}
            media="(min-width: 1200px)"
            // Exact height and width don't matter as long as aspect ratio is the same as the image
            width={1800}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '600x600' : '1200x1200', bgImageFocus)}
            media="(min-width: 768px)"
            width={1200}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '400x600' : '800x1200', bgImageFocus)}
            media="(min-width: 461px)"
            width={800}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '230x460' : '460x920', bgImageFocus)}
            media="(max-width: 460px)"
            width={460}
            height={920}
          />
          <img
            src={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '1200x800' : '1800x1200', bgImageFocus)}
            alt=""
            loading="lazy"
            width={1800}
            height={1200}
            className={styles.bgImage}
          />
        </picture>
      )}
      {/* Render the overlay if there's a background image, and if background blur or/and gradient is selected */}
      {!!bgImageSrc && (bgBlur !== 'none' || hasBgGradient) && (
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
      <Container className={styles.wrapper}>
        <Heading as="h2" size="splash" font="druk" leading="druk" align="center" className={styles.heading}>
          <FlexBox as="span" alignItems="baseline" className={styles.headingWrapper}>
            {textBefore && (
              <AnimateInView animation="slideInFromLeft">
                <span>{textBefore}</span>
              </AnimateInView>
            )}
            {thumbnailSrc &&
              <AnimateInView animation="zoomSharpen" delay={0.1} className={styles.thumbnailWrapper}>
                <img
                  src={getProcessedImage(thumbnailSrc, '160x160', thumbnailFocus)}
                  alt=""
                  className={styles.thumbnail}
                />
              </AnimateInView>
            }
            {textAfter && (
              <AnimateInView animation="slideInFromRight">
                <span>{textAfter}</span>
              </AnimateInView>
            )}
          </FlexBox>
          {textNewRow && (
            <AnimateInView animation="slideUp" delay={0.2}>
              <span>{textNewRow}</span>
            </AnimateInView>
          )}
        </Heading>
        {subhead && (
          <AnimateInView animation="slideUp" delay={0.2}>
            <Text
              variant="overview"
              font="serif"
              align="center"
              leading="display"
            >
              {subhead}
            </Text>
          </AnimateInView>
        )}
        {body && (
          <AnimateInView animation="slideUp" delay={0.3}>
            <Text font="serif" variant="big" weight="normal" className={styles.body(isDarkTheme)}>
              {body}
            </Text>
          </AnimateInView>
        )}
        {cta && (
          <AnimateInView animation="slideUp" delay={0.4}>
            <FlexBox direction="col" className={styles.cta(isStackedCtas)}>
              {cta}
            </FlexBox>
          </AnimateInView>
        )}
      </Container>
    </Container>
  );
};
