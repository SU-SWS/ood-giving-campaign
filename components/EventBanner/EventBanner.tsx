import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '../Animate';
import { Container } from '../Container';
import { Heading, SrOnlyText, Text } from '../Typography';
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
  startDate?: string;
  endDate?: string;
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
  isMultiDay?: boolean;
  location?: string;
  dateLocation?: React.ReactNode;
  isHidden?: boolean;
};

export const EventBanner = ({
  heading,
  body,
  startDate,
  endDate,
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
  isMultiDay,
  location,
  dateLocation,
  isHidden,
  ...props
}: EventBannerProps) => {
  // To render a dark overlay, both a top and bottom gradient color must be selected
  const hasBgGradient = !!gradientTop && !!gradientBottom;

  const startDateObj = startDate && new Date(startDate);
  const endDateObj = endDate && new Date(endDate);

  const startDateTime = startDate?.slice(0, 10);
  const endDateTime = endDate?.slice(0, 10);

  const formattedStartMonth = startDateObj && startDateObj.toLocaleDateString('en-US', {
    month: 'short',
  });
  const formattedStartDay = startDateObj && startDateObj.toLocaleDateString('en-US', {
    day: 'numeric',
  });

  const formattedEndMonth = endDateObj && endDateObj.toLocaleDateString('en-US', {
    month: 'short',
  });
  const formattedEndDay = endDateObj && endDateObj.toLocaleDateString('en-US', {
    day: 'numeric',
  });

  return (
    <Container {...props} as="article" bgColor={isDarkTheme ? 'black' : 'white'} width="full" pt={8} pb={9} className={styles.root}>
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
      <Container className={styles.content}>
        <Heading as="h2" font="serif" weight="semibold" size={2} aria-hidden>{`Event${isMultiDay ? 's' : ''}`}<SrOnlyText>{`:${heading}`}</SrOnlyText></Heading>
        <FlexBox className="flex-col sm:flex-row gap-95 rs-mt-8">
          <FlexBox alignItems="center" className="flex-row sm:flex-col shrink-0 gap-36">
            {startDate && (
              <Text as="time" dateTime={startDateTime} className="flex flex-col items-center">
                <Text as="span" font="serif" weight="semibold" leading="tight" size={endDate ? 3 : 'f4'}>{formattedStartMonth}</Text>
                <Text as="span" font="serif" weight="bold" leading="tight" size={endDate ? 'f7' : 'f8'}>{formattedStartDay}</Text>
              </Text>
            )}
            {endDate && (
              <>
                <Text as="span" font="serif" weight="semibold" italic size={2} align="center">to</Text>
                <Text as="time" dateTime={endDateTime} className="flex flex-col items-center">
                  <Text as="span" font="serif" weight="semibold" leading="tight" size={3}>{formattedEndMonth}</Text>
                  <Text as="span" font="serif" weight="bold" leading="tight" size="f7">{formattedEndDay}</Text>
                </Text>
              </>
            )}
          </FlexBox>
          <div>
            <Text aria-hidden size="splash" font="druk" leading="druk" className={styles.heading}>{heading}</Text>
            {body && (
              <AnimateInView animation="slideUp" delay={0.3}>
                <Text font="serif" variant="intro" weight="normal" className={styles.body(isDarkTheme)}>
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
          </div>
        </FlexBox>
      </Container>
    </Container>
  );
};
