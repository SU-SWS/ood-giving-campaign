import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
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
  gradientTop,
  gradientBottom,
  gradientVia,
  bgBlur,
  isStackedCtas,
  ...props
}: MomentPosterProps) => {
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  return (
    <Container {...props} as="section" bgColor="black" width="full" py={8} className={styles.root}>
      {bgImageSrc && (
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
            srcSet={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '200x400' : '600x1200', bgImageFocus)}
            media="(max-width: 460px)"
            width={600}
            height={1200}
          />
          <img
            src={getProcessedImage(bgImageSrc, bgBlur !== 'none' ? '1200x800' : '1800x1200', bgImageFocus)}
            alt=""
            width={1800}
            height={1200}
            className={styles.bgImage}
          />
        </picture>
      )}
      {(bgBlur !== 'none' || hasBgGradient) && (
        <div
          className={cnb(
            styles.overlay(hasBgGradient),
            bgBlurs[bgBlur],
            gradientFroms[gradientBottom],
            gradientVias[gradientVia],
            gradientTos[gradientTop],
          )}
        />
      )}
      <Container className={styles.wrapper}>
        <Heading as="h2" size="splash" font="druk" align="center" className="leading-[0.9] max-w-1000 mx-auto rs-mb-1">
          <span className="flex items-baseline mx-auto w-fit gap-02em">
            {textBefore && (
              <AnimateInView animation="slideInFromLeft">
                <span>{textBefore}</span>
              </AnimateInView>
            )}
            {thumbnailSrc &&
              <AnimateInView animation="zoomSharpen" delay={0.1} className="inline-block">
                <img
                  src={getProcessedImage(thumbnailSrc, '160x160', thumbnailFocus)}
                  alt=""
                  className="size-[0.75em]"
                />
              </AnimateInView>
            }
            {textAfter && (
              <AnimateInView animation="slideInFromRight">
                <span>{textAfter}</span>
              </AnimateInView>
            )}
          </span>
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
              color="white"
            >
              {subhead}
            </Text>
          </AnimateInView>
        )}
        {body && (
          <AnimateInView animation="slideUp" delay={0.3}>
            <Text font="serif" variant="big" weight="normal" className={styles.body}>
              {body}
            </Text>
          </AnimateInView>
        )}
        {cta && (
          <AnimateInView animation="slideUp" delay={0.4}>
            <FlexBox direction="col" className={cnb('gap-27 mx-auto w-fit *:mx-auto rs-mt-4', !isStackedCtas && 'md:flex-row' )}>
              {cta}
            </FlexBox>
          </AnimateInView>
        )}
      </Container>
    </Container>
  );
};
