import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { Grid } from '../Grid';
import {
  Heading, Paragraph, Text, type HeadingType,
} from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BlurryPoster.styles';

type BlurryPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  headingLevel?: HeadingType;
  heading?: string;
  isSmallHeading?: boolean;
  customHeading?: React.ReactNode;
  body?: string;
  byline?: string;
  publishedDate?: string;
  imageSrc?: string;
  imageFocus?: string;
  cta?: React.ReactNode;
};

export const BlurryPoster = ({
  bgImageSrc,
  bgImageFocus,
  heading,
  headingLevel = 'h2',
  isSmallHeading,
  customHeading,
  body,
  byline,
  publishedDate,
  imageSrc,
  imageFocus,
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
        <Grid lg={2} className="cc rs-py-8">
          <div className="z-10 rs-pr-2">
            {heading &&  (
              <Heading
                size={isSmallHeading ? 'f8' : 'f9'}
                font="druk"
                color="white"
                leading="none"
                className="rs-mt-7 rs-mb-5 lg:w-[140%]"
              >
                {heading}
              </Heading>
            )}
            {customHeading && (
              <div className="rs-mt-7 rs-mb-5">
                {customHeading}
              </div>
            )}
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
          <div>
            <img
              src={getProcessedImage(imageSrc, '1200x1600', imageFocus)}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </Grid>
      </div>
    </Container>
  );
};
