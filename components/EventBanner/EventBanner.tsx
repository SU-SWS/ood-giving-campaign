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

export type EventBannerHeadingSizeType = 'small' | 'medium' | 'large';

type EventBannerProps = HTMLAttributes<HTMLDivElement> & {
  superhead?: string;
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
  isSerifHeading?: boolean;
  headingSize?: 'small' | 'medium' | 'large';
  gradientTop?: GradientToType;
  gradientBottom?: GradientFromType;
  gradientVia?: GradientViaType;
  isMultiDay?: boolean;
  location?: string; // For single-day events
  dateLocation?: SbDateLocationProps[]; // For multi-day events
  isHidden?: boolean;
};

export const EventBanner = ({
  superhead,
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
  isSerifHeading,
  headingSize = 'medium',
  gradientTop,
  gradientBottom,
  gradientVia,
  isMultiDay,
  location,
  dateLocation,
  isHidden,
  ...props
}: EventBannerProps) => {
  // To render an overlay, both a top and bottom gradient color must be selected
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
      {/* Render the overlay if there's a background image and if an overlay gradient is selected */}
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
        {/* Attach SR only heading after superhead: at the beginning of the content for a11y */}
        <Heading font="serif" weight="semibold" size={2} aria-hidden>
          {superhead}<SrOnlyText>{`:${heading}`}</SrOnlyText>
        </Heading>
        <FlexBox direction="col" className={styles.contentWrapper}>
          <AnimateInView animation="slideInFromLeft" delay={0.1}>
            <FlexBox alignItems="center" className={styles.dateWrapper}>
              {startDate && (
                <Text as="time" dateTime={startDateTime} className={styles.time}>
                  <Text as="span" font="serif" weight="semibold" leading="tight" size={3}>{startMonth}</Text>
                  <Text as="span" font="serif" weight="bold" leading="tight" size="f7">{startDay}</Text>
                </Text>
              )}
              {endDate && (
                <>
                  <Text as="span" font="serif" weight="semibold" italic size={2} align="center">to</Text>
                  <Text as="time" dateTime={endDateTime} className={styles.time}>
                    <Text as="span" font="serif" weight="semibold" leading="tight" size={3}>{formattedEndMonth}</Text>
                    <Text as="span" font="serif" weight="bold" leading="tight" size="f7">{formattedEndDay}</Text>
                  </Text>
                </>
              )}
            </FlexBox>
          </AnimateInView>
          <div>
            <AnimateInView animation="slideUp">
              <Text aria-hidden font={isSerifHeading ? 'serif' : 'druk'} leading="druk" className={styles.heading(headingSize, isSerifHeading)}>
                {heading}
              </Text>
            </AnimateInView>
            <AnimateInView animation="slideUp" delay={0.2}>
              {featuredName && (
                <FlexBox alignItems="center" gap className={styles.featuredPerson}>
                  {featuredImageSrc && (
                    <img
                      src={getProcessedImage(featuredImageSrc, '200x200', featuredImageFocus)}
                      alt=""
                      className={styles.thumbnail}
                    />
                  )}
                  <div>
                    <Text as="span" font="serif" size={3} leading="tight" italic className={styles.featuring}>featuring</Text>
                    <Text as="span" size="f4" font="druk" leading="druk" className={styles.featuredName}>{featuredName}</Text>
                  </div>
                </FlexBox>
              )}
              {body && (
                <Text font="serif" variant="intro" weight="normal" className={styles.body(isDarkTheme)}>
                  {body}
                </Text>
              )}
              {!!dateLocation?.length && (
                <>
                  <Heading as="h3" srOnly>List of dates & locations</Heading>
                  <FlexBox as="ul" direction="col" className={styles.dateLocationList}>
                  {dateLocation.map(({ date, location }) => {
                    const { dateTime, monthShort, day } = formatDate(date);
                    return (
                      <Text as="li" size={1} color={isDarkTheme ? 'white' : 'black-80'} key={dateTime} className={styles.dateLocationListItem}>
                        <Text as="time" leading="display" dateTime={dateTime} className={styles.date}>
                          {monthShort} {day}
                        </Text>
                        <FlexBox alignItems="start" className={styles.locationWrapper}>
                          <HeroIcon title="Location" icon="location" className={styles.locationIcon} />
                          <Text leading="display" className="grow">{location}</Text>
                        </FlexBox>
                      </Text>
                    );
                  })}
                  </FlexBox>
                </>
              )}
              {location && (
                <Text size={1} color={isDarkTheme ? 'white' : 'black'} className={styles.singleLocationWrapper}>
                  <HeroIcon title="Location" icon="location" className={styles.locationIcon} />
                  <Text leading="display" className="grow">{location}</Text>
                </Text>
              )}
              {cta && (
                <FlexBox direction="col" className={styles.cta}>
                  {cta}
                </FlexBox>
              )}
            </AnimateInView>
          </div>
        </FlexBox>
      </Container>
    </Container>
  );
};
