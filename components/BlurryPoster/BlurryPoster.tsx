import { HTMLAttributes } from 'react';
import { cnb } from 'cnbuilder';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { FlexBox } from '../FlexBox';
import {
  Heading, Paragraph, Text, type HeadingType,
} from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BlurryPoster.styles';
import { accentBorderColors, type AccentColorType } from '@/utilities/datasource';

type BlurryPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  imageOnLeft?: boolean;
  headingLevel?: HeadingType;
  heading?: string;
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
        <Grid lg={2} className="w-full rs-py-8">
          <div className={styles.contentWrapper(imageOnLeft)}>
            <FlexBox className={styles.headingWrapper(imageOnLeft)}>
              {heading &&  (
                <div className={styles.headingInnerWrapper(imageOnLeft)}>
                  <Heading
                    // size={isSmallHeading ? 'f8' : 'f9'}
                    font="druk"
                    color="white"
                    leading="none"
                    className={cnb(styles.heading(imageOnLeft, isSmallHeading), accentBorderColors[tabColor])}
                  >
                    {heading}
                  </Heading>
                </div>
              )}
            </FlexBox>
            <div className={styles.bodyWrapper(imageOnLeft)}>
              {body && (
                <Paragraph size={2} color="white" leading="display">{body}</Paragraph>
              )}
              {byline && (
                <Text>{byline}</Text>
              )}
              {date && (
                <time dateTime={publishedDate}>{formattedDate}</time>
              )}
              {cta && (
                <div className="rs-mt-4">
                  {cta}
                </div>
              )}
            </div>
          </div>
          {imageSrc && (
            <div className={styles.imageWrapper(imageOnLeft)}>
              <img
                src={getProcessedImage(imageSrc, '900x1200', imageFocus)}
                alt=""
                className="h-full w-full object-cover object-center hidden lg:block"
              />
              <img
                src={getProcessedImage(imageSrc, '800x400', imageFocus)}
                alt=""
                className="h-full w-full object-cover object-center lg:hidden"
              />
            </div>
          )}
        </Grid>
      </div>
    </Container>
  );
};
