import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { Heading, Paragraph, type HeadingType } from '../Typography';
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

  return (
    <Container {...props} width="full" className={styles.root} style={bgImageStyle}>
      <div className={styles.blurWrapper}>
        <Grid xl={2} className="cc">
          <div>
            {heading &&  (
              <Heading
                size={isSmallHeading ? 'f7' : 'f8'}
                font="druk"
                color="white"
                leading="none"
                className="rs-mt-9 rs-mb-6"
              >
                {heading}
              </Heading>
            )}
            {customHeading && (
              <div className="rs-mt-9 rs-mb-6">
                {customHeading}
              </div>
            )}
            {body && (
              <Paragraph size={2} color="white" leading="display">{body}</Paragraph>
            )}
          </div>
          <div>

          </div>
        </Grid>
      </div>
    </Container>
  );
};
