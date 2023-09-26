import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { type HeadingType } from '../Typography';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import * as styles from './BlurryPoster.styles';

type BlurryPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  headingLevel?: HeadingType;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageFocus?: string;
  cta?: React.ReactNode;
};

export const BlurryPoster = ({
  bgImageSrc,
  bgImageFocus,
  heading,
  headingLevel = 'h2',
  body,
  imageSrc,
  imageFocus,
  cta,
  className,
  ...props
}: BlurryPosterProps) => {
  const bgImageStyle = bgImageSrc ? { backgroundImage: `url('${getProcessedImage(bgImageSrc, '1000x1000', bgImageFocus)}')` } : undefined;

  return (
    <Container {...props} width="full" className={styles.root} style={bgImageStyle}>
      <Grid xl={2} className="cc">

      </Grid>
    </Container>
  );
};
