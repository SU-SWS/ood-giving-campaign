import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { AnimateInView } from '@/components/Animate';
import { Container } from '@/components/Container';
import { Heading, SrOnlyText, Text } from '@/components/Typography';
import { FlexBox } from '@/components/FlexBox';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { formatDate } from '@/utilities/formatDate';
import {
  gradientFroms,
  type GradientFromType,
  gradientTos,
  type GradientToType,
  gradientVias,
  type GradientViaType,
} from '@/utilities/datasource';
import { type SbDateLocationProps } from '@/components/Storyblok/Storyblok.types';
import * as styles from './EventBanner.styles';
import { HeroIcon } from '../HeroIcon';

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
  location?: string; // For single-day events
  dateLocation?: SbDateLocationProps[]; // For multi-day events
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

  const { dateTime: startDateTime, monthShort: startMonth, day: startDay } = formatDate(startDate);
  const { dateTime: endDateTime, monthShort: formattedEndMonth, day: formattedEndDay} = formatDate(endDate);

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
        {/* Display SR only heading in the format "Event(s): heading" at the beginning of the content for a11y */}
        <Heading as="h2" font="serif" weight="semibold" size={2} aria-hidden>
          {`Event${isMultiDay ? 's' : ''}`}<SrOnlyText>{`:${heading}`}</SrOnlyText>
        </Heading>
        <FlexBox className="flex-col sm:flex-row gap-26 md:gap-24 lg:gap-36 xl:60 2xl:gap-95 rs-mt-8">
          <FlexBox alignItems="center" className="flex-row sm:flex-col shrink-0 gap-26 md:gap-36">
            {startDate && (
              <Text as="time" dateTime={startDateTime} className="flex flex-col items-center">
                <Text as="span" font="serif" weight="semibold" leading="tight" size={endDate ? 3 : 'f4'}>{startMonth}</Text>
                <Text as="span" font="serif" weight="bold" leading="tight" size={endDate ? 'f7' : 'f8'}>{startDay}</Text>
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
            {featuredName && (
              <FlexBox alignItems="center" className="grid-gap rs-mt-3">
                {featuredImageSrc && (
                  <img
                    src={getProcessedImage(featuredImageSrc, '215x215', featuredImageFocus)}
                    alt=""
                    className={styles.thumbnail}
                  />
                )}
                <div>
                  <Text as="span" font="serif" size="f4" leading="tight" italic className="block mb-03em">featuring</Text>
                  <Text as="span" size="f5" font="druk" leading="druk">{featuredName}</Text>
                </div>
              </FlexBox>
            )}
            {body && (
              <AnimateInView animation="slideUp" delay={0.3}>
                <Text font="serif" variant="intro" weight="normal" className={styles.body(isDarkTheme)}>
                  {body}
                </Text>
              </AnimateInView>
            )}
            {!!dateLocation?.length && (
              <>
                <Heading as="h3" srOnly>Dates & Locations</Heading>
                <FlexBox as="ul" direction="col" className="flex flex-col gap-12 rs-mt-3 list-unstyled">
                {dateLocation.map(({ date, location }) => {
                  const { dateTime, monthShort, day } = formatDate(date);
                  return (
                    <Text as="li" size={1} color={isDarkTheme ? 'black-20' : 'black-80'} key={dateTime} className="flex gap-18 lg:gap-38 mb-0">
                      <Text as="time" dateTime={dateTime} className="block w-[3em]">
                        {monthShort} {day}
                      </Text>
                      <div className="flex gap-03em">
                        <HeroIcon title="location" icon="location" className="-mt-01em" />
                        <Text className="grow" iconProps={{ className: 'grow-0'}}>{location}</Text>
                      </div>
                    </Text>
                  );
                })}
                </FlexBox>
              </>
            )}
            {location && (
              <Text size={1} color={isDarkTheme ? 'black-20' : 'black-80'} className="flex gap-03em rs-mt-3">
                <HeroIcon title="location" icon="location" className="-mt-01em" />
                <Text className="grow" iconProps={{ className: 'grow-0'}}>{location}</Text>
              </Text>
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
