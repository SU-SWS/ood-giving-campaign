import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, Text } from '../Typography';
import { FlexBox } from '../FlexBox';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './EventBanner.styles';
import {
  gradientFroms,
  type GradientFromType,
  gradientTos,
  type GradientToType,
  gradientVias,
  type GradientViaType,
} from '@/utilities/datasource';

type EventBannerProps = HTMLAttributes<HTMLDivElement> & {
  heading?: string;
  body?: React.ReactNode;
  cta?: React.ReactNode;
  bgImageSrc?: string;
  bgImageFocus?: string;
  featuredName?: string;
  featuredImageSrc?: string;
  featuredImageFocus?: string;
  isDarkTheme?: boolean;
  gradientTop?: GradientToType;
  gradientBottom?: GradientFromType;
  gradientVia?: GradientViaType;
  isHidden?: boolean;
};

export const EventBanner = ({
  heading,
  body,
  cta,
  bgImageSrc,
  bgImageFocus,
  featuredName,
  featuredImageSrc,
  featuredImageFocus,
  isDarkTheme,
  gradientTop,
  gradientBottom,
  gradientVia,
  ...props
}: EventBannerProps) => {
  // To render a dark overlay, both a top and bottom gradient color must be selected
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  return (
    <Container {...props} as="section" bgColor={isDarkTheme ? 'black' : 'white'} width="full" py={8} className={styles.root}>
      {!!bgImageSrc && (
        <picture>
          <source
            srcSet={getProcessedImage(bgImageSrc, '1800x1200', bgImageFocus)}
            media="(min-width: 1200px)"
            // Exact height and width don't matter as long as aspect ratio is the same as the image
            width={1800}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, '1200x1200', bgImageFocus)}
            media="(min-width: 768px)"
            width={1200}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, '800x1200', bgImageFocus)}
            media="(min-width: 461px)"
            width={800}
            height={1200}
          />
          <source
            srcSet={getProcessedImage(bgImageSrc, '460x920', bgImageFocus)}
            media="(max-width: 460px)"
            width={460}
            height={920}
          />
          <img
            src={getProcessedImage(bgImageSrc, '1800x1200', bgImageFocus)}
            alt=""
            loading="lazy"
            width={1800}
            height={1200}
            className={styles.bgImage}
          />
        </picture>
      )}
      {/* Render the overlay if there's a background image, and if background blur or/and gradient is selected */}
      {!!bgImageSrc && hasBgGradient && (
        <div
          className={cnb(
            styles.overlay(hasBgGradient),
            gradientFroms[gradientTop],
            gradientVias[gradientVia],
            gradientTos[gradientBottom],
          )}
        />
      )}
      <Container className={styles.wrapper}>
        <Heading as="h2" size="splash" font="druk" leading="druk" align="center" className={styles.heading}>
          {heading}
        </Heading>
        {body && (
          <AnimateInView animation="slideUp" delay={0.3}>
            <Text font="serif" variant="big" weight="normal" className={styles.body(isDarkTheme)}>
              {body}
            </Text>
          </AnimateInView>
        )}
        {cta && (
          <AnimateInView animation="slideUp" delay={0.4}>
            <FlexBox direction="col" className={styles.cta}>
              {cta}
            </FlexBox>
          </AnimateInView>
        )}
      </Container>
    </Container>
  );
};
