import React, { HTMLAttributes } from 'react';
import { dcnb } from 'cnbuilder';
import { Container } from '../Container';
import { FlexBox } from '../FlexBox';
import { Grid } from '../Grid';
import { HeadingType } from '../Typography';
import { PosterContent } from './PosterContent';
import { getProcessedImage } from '../../utilities/getProcessedImage';
import * as styles from './SplitPoster.styles';

type SplitPosterProps = HTMLAttributes<HTMLDivElement> & {
  bgImageSrc?: string;
  bgImageFocus?: string;
  headingLevel?: HeadingType;
  headingLeft?: string;
  headingRight?: string;
  bodyLeft?: string;
  bodyRight?: string;
  bgImageLeftSrc?: string;
  bgImageLeftFocus?: string;
  bgImageRightSrc?: string;
  bgImageRightFocus?: string;
  bgColorLeft?: styles.BgColorType;
  bgColorRight?: styles.BgColorType;
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
  const bgStyle = bgImageSrc ? { backgroundImage: `url('${getProcessedImage(bgImageSrc, '2000x0', bgImageFocus)}')` } : undefined;
  const bgImageLeftStyle = bgImageLeftSrc ? { backgroundImage: `url('${getProcessedImage(bgImageLeftSrc, '1000x1000', bgImageLeftFocus)}')` } : undefined;
  const bgImageRightStyle = bgImageRightSrc ? { backgroundImage: `url('${getProcessedImage(bgImageRightSrc, '1000x1000', bgImageRightFocus)}')` } : undefined;

  return (
    <Container {...props} width="full" className="su-bg-white su-bg-no-repeat su-bg-cover su-bg-top" style={bgStyle}>
      <Grid xl={2}>
        <div className={styles.panelLeft} style={bgImageLeftStyle}>
          <PosterContent
            headingLevel={headingLevel}
            heading={headingLeft}
            body={bodyLeft}
            imageSrc={imageLeftSrc}
            imageFocus={imageLeftFocus}
            addImageOverlay={addImageOverlayLeft}
            contentAlign="right"
            bgColor={bgColorLeft}
            className={dcnb(imageLeftSrc ? 'su-text-white' : 'su-text-black', 'su-rounded-tl-[12rem] sm:su-rounded-tl-[20rem] lg:su-rounded-tl-[30rem] su-overflow-hidden su-border-t-2 su-border-l-2 su-border-white su-ml-20 sm:su-ml-auto xl:su-ml-100 3xl:su-ml-auto')}
          >
            <FlexBox direction="col" className="children:su-rs-mb-1 last:children:su-mb-0 su-mr-0">
              {ctaLeft}
            </FlexBox>
          </PosterContent>
        </div>
        <div className={styles.panelRight} style={bgImageRightStyle}>
          <PosterContent
            headingLevel={headingLevel}
            heading={headingRight}
            body={bodyRight}
            imageSrc={imageRightSrc}
            imageFocus={imageRightFocus}
            addImageOverlay={addImageOverlayRight}
            contentAlign="left"
            bgColor={bgColorRight}
            className={dcnb(imageRightSrc ? 'su-text-white' : 'su-text-black', 'su-rounded-br-[12rem] sm:su-rounded-br-[20rem] lg:su-rounded-br-[30rem] su-overflow-hidden su-border-r-2 su-border-b-2 su-border-white su-mr-20 sm:su-mr-auto xl:su-mr-100 3xl:su-mr-auto')}
          >
            {ctaRight}
          </PosterContent>
        </div>
      </Grid>
    </Container>
  );
};
