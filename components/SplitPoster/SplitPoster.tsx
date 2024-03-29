import { HTMLAttributes } from 'react';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { type HeadingType } from '../Typography';
import { PosterContent } from './PosterContent';
import { getProcessedImage } from '@/utilities/getProcessedImage';
import { type BgTextColorPairType } from '@/utilities/datasource';
import * as styles from './SplitPoster.styles';

type SplitPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  headingLevel?: HeadingType;
  // Set to true for the variant with larger vertical offset between the left and right panels
  isLargeOffset?: boolean;
  headingLeft?: string;
  headingRight?: string;
  bodyLeft?: string;
  bodyRight?: string;
  bgImageLeftSrc?: string;
  bgImageLeftFocus?: string;
  bgImageRightSrc?: string;
  bgImageRightFocus?: string;
  bgColorLeft?: BgTextColorPairType;
  bgColorRight?: BgTextColorPairType;
  imageLeftSrc?: string;
  imageLeftFocus?: string;
  addImageOverlayLeft?: boolean;
  imageRightSrc?: string;
  imageRightFocus?: string;
  addImageOverlayRight?: boolean;
  ctaLeft?: React.ReactNode;
  ctaRight?: React.ReactNode;
};

export const SplitPoster = ({
  bgImageSrc,
  bgImageFocus,
  headingLevel = 'h3',
  isLargeOffset = false,
  headingLeft,
  headingRight,
  bodyLeft,
  bodyRight,
  bgImageLeftSrc,
  bgImageLeftFocus,
  bgImageRightSrc,
  bgImageRightFocus,
  bgColorLeft,
  bgColorRight,
  imageLeftSrc,
  imageLeftFocus,
  addImageOverlayLeft,
  imageRightSrc,
  imageRightFocus,
  addImageOverlayRight,
  ctaLeft,
  ctaRight,
  className,
  ...props
}: SplitPosterProps) => {
  const bgStyle = bgImageSrc ? { backgroundImage: `url('${getProcessedImage(bgImageSrc, '2000x0')}')` } : undefined;
  const bgImageLeftStyle = bgImageLeftSrc ? { backgroundImage: `url('${getProcessedImage(bgImageLeftSrc, '1000x1000', bgImageLeftFocus)}')` } : undefined;
  const bgImageRightStyle = bgImageRightSrc ? { backgroundImage: `url('${getProcessedImage(bgImageRightSrc, '1000x1000', bgImageRightFocus)}')` } : undefined;

  return (
    <Container {...props} width="full" className={styles.root} style={bgStyle}>
      <Grid xl={2}>
        <div className={styles.panelLeft(isLargeOffset)} style={bgImageLeftStyle}>
          <PosterContent
            headingLevel={headingLevel}
            heading={headingLeft}
            body={bodyLeft}
            imageSrc={imageLeftSrc}
            imageFocus={imageLeftFocus}
            addImageOverlay={addImageOverlayLeft}
            contentAlign="right"
            bgColor={bgColorLeft}
            className={styles.posterContentLeft}
          >
            <FlexBox direction="col" alignItems="end" className={styles.ctaWrapper}>
              {ctaLeft}
            </FlexBox>
          </PosterContent>
        </div>
        <div className={styles.panelRight(isLargeOffset)} style={bgImageRightStyle}>
          <PosterContent
            headingLevel={headingLevel}
            heading={headingRight}
            body={bodyRight}
            imageSrc={imageRightSrc}
            imageFocus={imageRightFocus}
            addImageOverlay={addImageOverlayRight}
            contentAlign="left"
            bgColor={bgColorRight}
            className={styles.posterContentRight}
          >
            <FlexBox direction="col" alignItems="start" className={styles.ctaWrapper}>
              {ctaRight}
            </FlexBox>
          </PosterContent>
        </div>
      </Grid>
    </Container>
  );
};
